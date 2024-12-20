import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Modal,
  Button,
  Input,
  Select,
  Slider,
  Upload as AntUpload,
  message,
  Row,
  Col,
  Card,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { MDBBtn } from "mdb-react-ui-kit";

const { TextArea } = Input;
const { Option } = Select;

const Upload = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [priceRange, setPriceRange] = useState(1500);
  const [insurance, setInsurance] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [messageText, setMessageText] = useState("");
  const [bikes, setBikes] = useState([]);
  const [fileName, setFileName] = useState("");
  const [editBike, setEditBike] = useState(null); // Added state to store the bike being edited

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/bikes");
        setBikes(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBikes();
  }, []);

  const handleEdit = (bike) => {
    setEditBike(bike);
    setShowModal(true);
  };

  const handleShowModal = (bike = null) => {
    if (bike) {
      setEditBike(bike); // Set the bike to edit when passed
      setName(bike.name);
      setCategory(bike.category);
      setType(bike.type);
      setPriceRange(bike.priceRange);
      setInsurance(bike.insurance);
      setImage(null); // If the bike has an image, you can manage it here
      setDescription(bike.description);
    } else {
      setEditBike(null); // Reset if it's for adding a new bike
      setName("");
      setCategory("");
      setType("");
      setPriceRange(1500);
      setInsurance("");
      setImage(null);
      setDescription("");
    }

    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("type", type);
    formData.append("priceRange", priceRange);
    formData.append("insurance", insurance);
    formData.append("image", image);
    formData.append("description", description);

    try {
      let res;
      if (editBike) {
        // If editing, update the existing bike
        res = await axios.put(`http://localhost:5000/bikes/${editBike.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        // If adding, submit a new bike
        res = await axios.post("http://localhost:5000/submit", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      if (res.data.bike) {
        setBikes((prevBikes) =>
          editBike
            ? prevBikes.map((bike) =>
                bike.id === editBike.id ? res.data.bike : bike
              )
            : [...prevBikes, res.data.bike]
        );
      } else {
        console.error("Bike data is missing in the response");
      }

      setMessageText(res.data.message);
      handleCloseModal();
      window.location.reload();
    } catch (err) {
      console.error(err);
      message.error(
        err.response?.data?.message ||
          "An error occurred while submitting the form."
      );
    }
  };

  const handleImageChange = (file) => {
    setImage(file);
    setFileName(file.name);
    return false; // Prevent automatic upload
  };

  const handleDeleteBike = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/bikes/${id}`);
      setBikes(bikes.filter((bike) => bike.id !== id));
    } catch (err) {
      console.error("Error deleting bike:", err);
    }
  };
  useEffect(() => {
    // Set state for editing when a bike is selected for edit
    if (editBike) {
      setName(editBike.name);
      setCategory(editBike.category);
      setType(editBike.type);
      setPriceRange(editBike.priceRange);
      setInsurance(editBike.insurance);
      setImage(null); // Reset image to avoid carrying old images
      setDescription(editBike.description);
    }
  }, [editBike]);

  return (
    <div className="upload-container">
      <section className="py-5">
        <div className="container text-left px-5 my-5">
          <div className="d-inline-block">
            <h1 className="fw-bolder">Frequently Asked Questions</h1>
            <p className="lead fw-normal text-muted mb-0">How can we help you?</p>
          </div>
          <div className="text-end mt-3">
            <MDBBtn
              type="primary"
              onClick={() => handleShowModal()}
              className="add-button"
              style={{ visibility: `${bikes.length > 0 ? "" : "hidden"}` }}
            >
              Add +
            </MDBBtn>
          </div>
        </div>
      </section>

      {bikes.length === 0 ? (
        <div className="no-bikes-message">
          No bikes available. Add your bikes here.
        </div>
      ) : (
        <Row gutter={16} className="bikes-list">
          {bikes.map((bike, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              className="bike-card-col"
            >
              <Card
                hoverable
                cover={
                  <img
                    alt={bike.name}
                    src={`http://localhost:5000/uploads/${bike.image}`}
                  />
                }
                className="bike-card"
              >
                <Card.Meta
                  title={bike.name}
                  description={
                    <>
                      <p>Category: {bike.category}</p>
                      <p>Type: {bike.type === 1 ? "Default" : "Modified"}</p>
                      <p>Price Range: {bike.priceRange}</p>
                    </>
                  }
                />
                <div className="bike-actions gap-5">
                  <MDBBtn
                    type="primary"
                    className="btn btn-danger"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleDeleteBike(bike.id)}
                  >
                    Delete
                  </MDBBtn>
                  <MDBBtn
                    type="primary"
                    className="mx-2 btn btn-success"
                    icon={<EditOutlined />}
                    onClick={() => handleEdit(bike)} // Pass bike to edit
                  >
                    Edit
                  </MDBBtn>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <MDBBtn
        type="primary"
        style={{ marginTop: "2rem", visibility: `${bikes.length > 0 ? "hidden" : ""}` }}
        onClick={() => handleShowModal()} // Open empty form for new bike
        className="add-button"
      >
        Add +
      </MDBBtn>

      <Modal
        title={editBike ? "Edit Your Bike" : "Add Your Bike"}
        visible={showModal}
        onCancel={handleCloseModal}
        footer={null}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="bikeName" className="form-label">
              Bike Name
            </label>
            <Input
              id="bikeName"
              placeholder="Bike Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <Input
              id="category"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bikeType" className="form-label">
              Select type of Bike
            </label>
            <Select
              id="bikeType"
              placeholder="Select type of Bike"
              value={type}
              onChange={(value) => setType(value)}
              required
              style={{ width: "100%" }}
            >
              <Option value="1">Default</Option>
              <Option value="2">Modified</Option>
            </Select>
          </div>
          <div className="mb-3">
            <label htmlFor="priceRange" className="form-label">
              Price Range
            </label>
            <Slider
              id="priceRange"
              min={1500}
              max={5000}
              step={200}
              onChange={(value) => setPriceRange(value)}
              value={priceRange}
              required
            />
            <span>Select Price Range ({priceRange}rs)</span>
          </div>
          <div className="mb-3">
            <label htmlFor="insurance" className="form-label">
              Do you have Bike insurance
            </label>
            <Select
              id="insurance"
              placeholder="Do you have Bike insurance"
              value={insurance}
              onChange={(value) => setInsurance(value)}
              required
              style={{ width: "100%" }}
            >
              <Option value="1">Yes</Option>
              <Option value="2">No</Option>
            </Select>
          </div>
          <div className="mb-3">
            <label htmlFor="imageUpload" className="form-label">
              Upload Image
            </label>
            <AntUpload
              id="imageUpload"
              beforeUpload={handleImageChange}
              showUploadList={false}
              required
            >
              <Button icon={<UploadOutlined />}></Button>
            </AntUpload>
            {fileName && <p className="mt-2">Selected file: {fileName}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <TextArea
              id="description"
              rows={4}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="modal-footer gap-4">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button onClick={handleCloseModal} className="ml-2">
              Cancel
            </Button>
          </div>
          {messageText && <p className="text-success">{messageText}</p>}
        </form>
      </Modal>
    </div>
  );
};

export default Upload;

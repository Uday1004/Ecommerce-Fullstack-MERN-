import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Layout, Menu, Select, Checkbox } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { Slider } from "antd";
import { useNavigate } from "react-router-dom";

const { Sider, Content } = Layout;
const { Option } = Select;

const ProductPage = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [priceRange, setPriceRange] = useState([1500, 5000]);
  const [recentUpload, setRecentUpload] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const notifySuccess = () =>
    toast.success("Item added to cart", {
      className: "custom-toast",
      bodyClassName: "custom-toast-body",
      autoClose: 3000,
    });

  const notifyError = () =>
    toast.error("Failed to add item to cart", {
      className: "custom-toast",
      bodyClassName: "custom-toast-body",
      autoClose: 3000,
    });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/bikes");
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }; 

    fetchProducts();
  }, []);

  useEffect(() => {
    let updatedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (selectedCategory.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedCategory.includes(product.category)
      );
    }

    if (priceRange) {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.priceRange >= priceRange[0] &&
          product.priceRange <= priceRange[1]
      );
    }

    if (recentUpload) {
      updatedProducts = updatedProducts.sort(
        (a, b) => new Date(b.uploadDate) - new Date(a.uploadDate)
      );
    }

    setFilteredProducts(updatedProducts);
  }, [searchText, selectedCategory, priceRange, recentUpload, products]);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  const handleRecentUploadChange = (e) => {
    setRecentUpload(e.target.checked);
  };

  const addToCart = async (product) => {
    try {
      const response = await axios.post("http://localhost:5000/cart", {
        bikeId: product._id,
      });
      if (response.status === 200) {
        notifySuccess();
      } else {
        notifyError();
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      notifyError();
    }
  };


  const handleViewDetails = (id) => {
    navigate(`/Product-Details/${id}`);
  };

 

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={250}
        className="site-layout-background"
        style={{ background: "rgb(175 190 214 / 58%)" }}
      >
        <div className="p-3">
          <MDBInput
            type="text"
            label="Search products"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            className="mt-5 mb-4 gap-3"
            style={{ background: "transparent" }}
          >
            <div
              className="header text-dark text-muted my-2 mb-3"
              style={{ fontSize: "20px" }}
            >
              Filter
            </div>
            <div className="mt-4 mb-4">
              <label htmlFor="categoryFilter" className="form-label">
                Categories
              </label>
              <Select
                id="categoryFilter"
                mode="multiple"
                placeholder="Select categories"
                onChange={handleCategoryChange}
                style={{ width: "100%" }}
              >
                <Option value="Category1">Category 1</Option>
                <Option value="Category2">Category 2</Option>
                <Option value="Category3">Category 3</Option>
              </Select>
            </div>
            <div className="mt-4 mb-4">
              <label htmlFor="priceRange" className="form-label">
                Price Range
              </label>
              <Slider
                id="priceRange"
                range
                min={1500}
                max={5000}
                step={200}
                onChange={handlePriceRangeChange}
                value={priceRange}
              />
              <span>
                Select Price Range ({priceRange[0]} - {priceRange[1]} rs)
              </span>
            </div>
            <div className="mt-4 mb-4">
              <Checkbox onChange={handleRecentUploadChange}>
                Recent Upload
              </Checkbox>
            </div>
          </Menu>
        </div>
      </Sider>
      <Layout>
        <div
          className="header"
          style={{ padding: 0, backgroundColor: "ButtonFace" }}
        >
          <div className="container text-left px-5 my-4">
            <div className="d-inline-block">
              <h1 className="fw-bolder">Products</h1>
              <p className="lead fw-normal mb-0">
                Your Overall dream bikes here
              </p>
            </div>
          </div>
        </div>
        <Content style={{ padding: "0 24px", minHeight: 280 }} className="mt-4">
          {loading ? (
            <p>Loading products...</p>
          ) : (
            <MDBContainer className="mt-5">
              <div
                style={{
                  maxHeight: "500px",
                  overflowY: "auto",
                }}
              >
                <MDBRow>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <MDBCol md="4" key={product._id} className="mb-4">
                        <MDBCard className="h-100">
                          <MDBRipple
                            rippleColor="light"
                            rippleTag="div"
                            className="bg-image hover-overlay"
                          >
                            <MDBCardImage
                              src={`http://localhost:5000/uploads/${product.image}`}
                              alt={product.name}
                              className="img-fluid"
                              onError={(e) =>
                                (e.target.src = "path/to/default/image.jpg")
                              }
                              style={{
                                objectFit: "contain",
                                aspectRatio: "3/2",
                                mixBlendMode: "darken",
                              }}
                            />
                            <a href="#!">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.15)",
                                }}
                              ></div>
                            </a>
                          </MDBRipple>
                          <MDBCardBody>
                            <MDBCardTitle>{product.name}</MDBCardTitle>
                            <MDBCardText>
                              Price: {product.priceRange} rs
                            </MDBCardText>
                            <MDBRow>
                              <div className="d-flex justify-content-between mb-2">
                                <button
                                  className="btn btn-outline-success"
                                  onClick={() => addToCart(product)}
                                >
                                  Add to cart
                                </button>
                                <button
                                  className="btn btn-outline-primary"
                                  onClick={() => handleViewDetails(product._id)}
                                >
                                  View Details
                                </button>
                              </div>
                            </MDBRow>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    ))
                  ) : (
                    <p>No products found</p>
                  )}
                </MDBRow>
              </div>
            </MDBContainer>
          )}
        </Content>
      </Layout>
      <ToastContainer />
    </Layout>
  );
};

export default ProductPage;

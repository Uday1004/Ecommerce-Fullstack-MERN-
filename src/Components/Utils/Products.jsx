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
import { Slider } from "antd";

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
      updatedProducts = updatedProducts.sort((a, b) =>
        new Date(b.uploadDate) - new Date(a.uploadDate)
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
                {/* Replace these options with dynamic category list */}
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
              <span>Select Price Range ({priceRange[0]} - {priceRange[1]} rs)</span>
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
                          <MDBCardText>Price: {product.priceRange} rs</MDBCardText>
                          <MDBRow>
                            <MDBCol>
                              <MDBBtn className="me-1" color="danger">
                                <MDBIcon fas icon="trash" />
                              </MDBBtn>
                            </MDBCol>
                            <MDBCol>
                              <MDBBtn className="me-2 mx-2" color="info">
                                <MDBIcon fas icon="edit" />
                              </MDBBtn>
                            </MDBCol>
                          </MDBRow>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  ))
                ) : (
                  <p>No products found</p>
                )}
              </MDBRow>
            </MDBContainer>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProductPage;

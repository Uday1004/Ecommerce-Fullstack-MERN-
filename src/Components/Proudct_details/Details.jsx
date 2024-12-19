import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBContainer,
} from "mdb-react-ui-kit";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      console.log(`Fetching product with ID: ${id}`); // Debugging log
      try {
        const response = await axios.get(`http://localhost:5000/bikes/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <MDBContainer
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="text-center">
          <h4>Loading product details...</h4>
        </div>
      </MDBContainer>
    );
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <MDBContainer className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="8">
          <MDBCard className="shadow-0 border rounded">
            <MDBRow>
              <MDBCol md="6">
                <MDBCardImage
                  src={`http://localhost:5000/uploads/${product.image}`}
                  alt={product.name}
                  className="img-fluid rounded-start"
                  position="top"
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBCardBody>
                  <MDBCardTitle className="h2">{product.name}</MDBCardTitle>
                  <MDBCardText className="text-muted">
                    Price: <strong>{product.priceRange} rs</strong>
                  </MDBCardText>
                  <MDBCardText>{product.description}</MDBCardText>
                  <MDBBtn color="primary" size="lg">
                    Add to Cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Details;

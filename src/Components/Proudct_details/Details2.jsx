import React from "react";
import { useParams } from "react-router-dom";
import { Exclusive } from "../Data/Data"; // Import your data
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBBtn,
  MDBCardImage,
} from "mdb-react-ui-kit";

function Details2() {
  const { id } = useParams(); // Get the product ID from the URL
  const product = Exclusive.find((item) => item.id === parseInt(id)); // Find the product by ID

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <MDBCard style={{ maxWidth: "800px", margin: "auto" }} className="mt-5 mb-5">
      <MDBRow className="g-0">
        {/* Image Section */}
        <MDBCol md="6">
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#e9ecef",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MDBCardImage
              src={product.bike_image} // Display the bike image here
              alt={product.bike_name} // Add an alt description for accessibility
              fluid
              className="p-2"
            />
          </div>
        </MDBCol>

        {/* Text Section */}
        <MDBCol md="6">
          <MDBCardBody>
            <MDBTypography tag="h5" className="text-danger fw-bold">
              {product.bike_name}
            </MDBTypography>
            <MDBTypography className="text-muted mt-3">
              {product.desc}
            </MDBTypography>
            <MDBTypography className="text-muted mt-3">
              Price: ${product.bike_price}
            </MDBTypography>
            <div className="d-flex align-items-center mt-4">
              <MDBBtn>Add to cart</MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}

export default Details2;

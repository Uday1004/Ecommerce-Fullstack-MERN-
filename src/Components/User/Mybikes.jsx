import React, { useState, useEffect } from "react";
import axios from "axios";
import "../User/User.css";
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
  MDBIcon
} from "mdb-react-ui-kit";

function Mybikes() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/bikes");
        setBikes(response.data);
      } catch (error) {
        console.error("Error fetching bikes:", error);
      }
    };

    fetchBikes();
  }, []);

  return (
    <div className="container mt-5 pt-4">
      <div className="row">
        {bikes.length > 0 ? (
          bikes.map((bike) => (
            <div key={bike._id} className="col-md-4 mb-4">
              <MDBCard className="h-100" style={{width:'80%'}}>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    src={`http://localhost:5000/uploads/${bike.image}`}
                    alt={bike.name}
                    className="img-fluid bike-image"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>{bike.name}</MDBCardTitle>
                  <MDBCardText>
                    Category: {bike.category}
                    <br />
                    Type: {bike.type}
                    <br />
                    Price Range: {bike.priceRange}
                    <br />
                    Insurance: {bike.insurance}
                    <br />
                    Description: {bike.description}
                  </MDBCardText>
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
            </div>
          ))
        ) : (
          <p>No bikes found</p>
        )}
      </div>
    </div>
  );
}

export default Mybikes;

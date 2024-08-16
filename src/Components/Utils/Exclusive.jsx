import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
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
import "../Home/Home.css";

function Topproducts() {
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

  // Filter bikes for carousel
  const filteredCarouselBikes = bikes.filter(bike => bike.priceRange > 2100);

  // Filter bikes for listing
  const filteredListingBikes = bikes.filter(bike => bike.insurance === "2");

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container-fluid donate bg-light">
        <div className="container py-5">
          <h1 className="mb-4 mt-0">Search Our top products here &#8594;</h1>
          <hr />
          <Slider {...settings}>
            {filteredCarouselBikes.map((value, index) => (
              <div key={index} className="d-flex align-items-center">
                <Row className="w-100 mt-2">
                  <Col lg={6} className="text-left mt-5">
                    {/* <div className="d-inline-block bg-secondary text-primary py-1 px-3 mb-3">Exclusive</div> */}
                    <h1 className="display-6 fw-bold text-dark mb-2">{value.name}</h1>
                    <div class="bg-primary rounded-pill text-center text-light" style={{width:'8rem' , height:'25px'}}> Rs. {value.priceRange} /Day</div>
                    <p className="text-dark-50 mt-4">
                       {value.description}
                    </p>
                    <Link to={`/product/${value.id}`} className="btn btn-outline-primary mt-3">
                      View Details
                    </Link>
                  </Col>
                  <Col lg={6} className="text-center">
                    <img
                      className="img-fluid"
                      src={`http://localhost:5000/uploads/${value.image}`}
                    //   alt={value.bike_name}
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <h4 className="text-white mt-3">{value.bike_name}</h4>
                    
                  </Col>
                </Row>
              </div>
            ))}
          </Slider>
        </div>
      </div>
            <hr />
      <div className="container mt-5 pt-4">
          <div className="text-left text-dark h3 mb-5">Check Similar Products &#8594;</div>
        <div className="row">
          {filteredListingBikes.length > 0 ? (
            filteredListingBikes.map((bike) => (
              <div key={bike._id} className="col-md-4 mb-4">
                <MDBCard className="h-100" style={{ width: '100%' }}>
                  <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                    <MDBCardImage
                      src={`http://localhost:5000/uploads/${bike.image}`}
                      alt={bike.name}
                      className="img-fluid"
                    />
                    <a href="#!">
                      <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
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
                    </MDBCardText>
                    <MDBRow>
                       
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </div>
            ))
          ) : (
            <p>No bikes available with insurance</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Topproducts;

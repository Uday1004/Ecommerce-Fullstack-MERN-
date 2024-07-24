import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col } from "react-bootstrap";
import { Exclusive } from "../Data/Data";
import { Link } from "react-router-dom";
import '../Home/Home.css'

function Exclusivecarousel() {
  const settings = {
    arrows:false,
    nav: false,
    dots: false,
    infinite: true,
    autoplay:  true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-dark">
      <h2 className="text-center mb-4 text-white">{}</h2>
      <Slider {...settings}>
        {Exclusive.map((value, index) => (
          <div key={index}>
            <Row className="justify-content-center align-items-center p-3">
              <h4 className="text-white text-center">{value.bike_name}</h4>
              <Col md={6} className="text-center product-image-container mt-4">
                <img
                  className="product-image"
                  src={value.bike_image}
                  alt={value.bike_name}
                />
                 
              </Col>
            </Row>
            <div className="d-flex" style={{alignItems:'center',justifyContent:'center'}}>
              <button className="btn btn-outline-primary exclusive-btn">view details</button>

            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Exclusivecarousel;
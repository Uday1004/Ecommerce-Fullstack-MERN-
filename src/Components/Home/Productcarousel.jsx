import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home/Home.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function ProductCarousel({ addToCart }) {
  const [bikes, setBikes] = useState([]);

  const notify = () => toast.success('Item added to cart', {
    className: 'custom-toast',
    bodyClassName: 'custom-toast-body',
    autoClose: 3000,
  });

  const settings = {
    arrows: false,
    nav: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

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
    <section>
      <div className="container py-5">
        <div className="text-white">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "28rem" }}>
            <div className="d-inline-block rounded-pill bg-secondary text-white py-1 px-3 mb-3">
              Our Products
            </div>
            <p style={{ fontSize: '18px' }}>
              Seamless Care, Wherever You Are: RHC Delivers Tele-Services & In-Person Excellence.
            </p>
          </div>
        </div>
        <Slider {...settings}>
          {bikes.map((value) => (
            <div key={value._id} className="p-3">
              <div className="card col-lg-9">
                <div className="d-flex justify-content-center p-3">
                  <img
                    src={`http://localhost:5000/uploads/${value.image}`}
                    className="Prod-img"
                    alt={value.name}
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        {value._type}
                      </a>
                    </p>
                    <p className="small ms-auto text-warning">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa fa-star"></i>
                      ))}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{value.name}</h5>
                    <h5 className="text-dark mb-0">{value.priceRange}</h5>
                    <h5 className="text-dark mb-0">{value.category}</h5>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">
                      <button className="btn btn-outline-success" onClick={() => { addToCart(value); notify(); }}>Add to cart</button>
                    </p>
                    <div className="ms-auto text-warning">
                      <button className="btn btn-outline-primary">View Details</button>
                    </div>
                  </div>
                  Check details via <a href={value.url} target="_blank" rel="noopener noreferrer">link</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <ToastContainer />
      </div>
    </section>
  );
}

export default ProductCarousel;

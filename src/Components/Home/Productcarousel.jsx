import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home/Home.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Home/Alert.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function ProductCarousel() {
  const navigate = useNavigate();
  const [bikes, setBikes] = useState([]);
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  // Notification functions
  const notifySuccess = () => toast.success('Item added to cart', {
    className: 'custom-toast',
    bodyClassName: 'custom-toast-body',
    autoClose: 3000,
  });

  const notifyError = () => toast.error('Failed to add item to cart', {
    className: 'custom-toast',
    bodyClassName: 'custom-toast-body',
    autoClose: 3000,
  });

  // Slick Slider settings
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

  // Fetch bikes from server 
  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/bikes");
        setBikes(response.data);
      } catch (error) {
        console.error("Error fetching bikes:", error);
        toast.error("Error fetching bikes.");
      }
    };

    fetchBikes();
  }, []);

  // Add bike to cart
  const addToCart = async (bike) => {
    try {
        const response = await axios.post("http://localhost:5000/cart", { bikeId: bike._id });
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
  if (isAuthenticated) {
    navigate(`/Product-Details/${id}`);
  } else {
    navigate('/Auth-Signin') // Redirect to Auth0 signup/login page
  }
};

  return (
    <section>
      <div className="container py-5">
        <div className="text-white">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "28rem" }}>
            <div className="d-inline-block rounded-pill bg-secondary text-white py-1 px-3 mb-3">
              Our Products
            </div>
            <p className="" style={{ fontSize: '18px' }}>
              Seamless Care, Wherever You Are: RHC Delivers Tele-Services & In-Person Excellence.
            </p>
          </div>
        </div>
        <Slider {...settings}>
          {bikes.map((bike) => (
            <div key={bike._id} className="p-3">
              <div className="card col-lg-9">
                <div className="d-flex justify-content-center p-3">
                  <img
                    src={`http://localhost:5000/uploads/${bike.image}`}
                    className="Prod-img"
                    alt={bike.name}
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        {bike.type}
                      </a>
                    </p>
                    <p className="small ms-auto text-warning">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{bike.name}</h5>
                    <h5 className="text-dark mb-0">${bike.priceRange}</h5>
                    <h5 className="text-dark mb-0">{bike.category}</h5>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">
                      <button className="btn btn-outline-success" onClick={() => addToCart(bike)}>Add to cart</button>
                    </p>
                    <div className="ms-auto text-warning">
                      <button className="btn btn-outline-primary"  onClick={() => handleViewDetails(bike._id)}>View Details</button>
                    </div>
                  </div>
                  Check details via <a href={bike.url} target="_blank" rel="noopener noreferrer">link</a>
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

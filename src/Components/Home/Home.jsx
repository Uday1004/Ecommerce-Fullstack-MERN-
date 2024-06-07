import React from "react";
import pic1 from "../Images/scooter.gif";
import { Carousel } from "primereact/carousel";
import "../Home/Home.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Bikes } from "../Data/Data";
import {Link} from "react-router-dom"

 
   
 



function Home() {
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "600px",
      numVisible: 1,
      numScroll: 1,
    },]
   
  return (
    <div>
      <header className="bg-white py-5 position-relative">
        <div className="black-blur-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        <div className="container px-5 position-relative">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-dark mb-2">
                  A Bootstrap 5 template for modern businesses
                </h1>
                <p className="lead fw-normal text-dark-50 mb-4">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world’s most popular front-end open source
                  toolkit!
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a
                    className="btn btn-dark btn-lg px-4 me-sm-3"
                    href="#features"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img
                className="img-fluid rounded-3 my-5 pic1"
                src={pic1}
                style={{ transform: "scaleX(-1)" }}
                alt="..."
              />
            </div>
          </div>
        </div>
      </header>


{/* ---------------------------------------------------------------Exclusive Product------------------------------------------------- */}

      <section className="py-5 bg-dark" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h2 className="fw-bolder mb-0 text-white">Our Top Products</h2>
              <p className="mb-0 text-white">
                Paragraph of text beneath the heading to explain the heading.
                Here is just a bit more text.
              </p>
            </div>

            <div className="col-lg-8">
              <div className="row gx-5 row-cols-1 row-cols-md-2">
                <div className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <img className="img-fluid" src={pic1} alt="" />
                  </div>
                </div>
                <div className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <img className="img-fluid" src={pic1} alt="" />
                  </div>
                </div>
                 
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ------------------------------------carousel-------------------------------------------------------------- */}

      <div className="container py-5">
        <h2 className="text-center mb-4">Product Carousel</h2>
        <Carousel
          value={Bikes}
          circular
          numVisible={3}
          responsiveOptions={responsiveOptions}
          itemTemplate={bikeTemplate}
          autoplayInterval={5000}
          indicators={false} 
        > 
        </Carousel>
      </div>


{/* ------------------------------------------------map & contact -------------------------------------------------------------- */}

<section className="py-5 bg-light" id="scroll-target">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
                 {/* <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src={contactImg}
                  alt="..."
                /> */}
                <iframe
                  className="img-fluid rounded"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14653.805620593368!2d76.0430372!3d23.3356551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963670062b66555%3A0xfa5c9876e7c27b41!2sCloudstry%20Technology%20Private%20Limited!5e0!3m2!1sen!2sin!4v1712743996577!5m2!1sen!2sin"
                  style={{ border: 0, height: "25rem", width: "40rem" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="map"
                ></iframe>
             </div>
            <div className="col-lg-6">
                 <div className="d-inline-block rounded-pill bg-secondary text-white py-1 px-3 mb-3">
                  Connect With Us
                </div>
                  <h1 className="display-6 text-dark mb-3">
                  We're grateful for your connection and extend our sincere
                  thanks
                </h1>
                  <p className="text-dark-50 mb-4">
                  We have received your message and anticipate further
                  communication with you
                </p>
                <button
                  to="/Support"
                  className="cont-btn mt-4 btn-lg px-4 text-decoration-none"
                >
                  contact Us
                </button>
              
            </div>
          </div>
        </div>
      </section>
       
    </div>
  );
}

function bikeTemplate(bike) {
  return (
    <div className="product-item">
      <img src={bike.bike_image} alt={bike.bike_name} />
      <div className="product-details">
        <h4>{bike.bike_name}</h4>
        <p>Price: ₹{bike.bike_price}</p>
        <a href={bike.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          View Details
        </a>
        <button className="btn btn-success">Add to Cart</button>
      </div>
    </div>
  );
}

export default Home;

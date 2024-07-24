import React from "react";
import pic1 from "../Images/scooter.gif";
import { Link } from "react-router-dom";

import "../Home/Home.css";
import Exclusivecarousel from "./Exclusivecarousel";
import Productcarousel from "./Productcarousel";

function Home() {
  return (
    <div>
      <header className="bg-white py-5 position-relative">
        <div className="black-blur-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        <div className="container px-5 position-relative">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-dark mb-2">
                  GoRide - <span className="fw-normal display-10">Make your ride </span>
                </h1>
                <p className="lead fw-normal text-dark-50 mb-4">
                  GoRide is an E-commerce platform that lets you ride with your favorite, without any purchase or extra expense. <div className="fw-bold">_Take a ride Now!</div>
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
                alt="Scooter"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Services and solutions section */}
      <section className="py-5" id="services">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6"></div>
            <div className="text-center">
                  <div className="d-inline-block rounded-pill bg-secondary text-white py-1 mb-4 px-3 my-auto">
                    SERVICES
                  </div>
                   
                </div>
            <div className="row gx-5">
              <div className="col-lg-4 mb-5  ">
                <div className="card h-100 shadow border-0 serve-card ">
                  <img src="" alt="" />


                  <div className="card-body p-4">
                    <a className="text-decoration-none  " href="#!">
                      <h5 className="card-title mb-3 fw-bold h4  text-center serve-text">
                        It Strategy Consultancy
                      </h5>
                    </a>
                    <p className="card-text mb-0 text-dark">
                      At our consultancy firm, We specialize in providing IT
                      strategy consulting services to organizations of all
                      sizes. Our team of experienced consultants collaborates
                      closely with your organization to develop a
                      comprehensive IT strategy aligned with your business
                      goals and objectives. Through our tailored approach, we
                      ensure that your technology initiatives drive measurable
                      results and sustainable growth.
                    </p>
                  </div>

                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0"></div>
                </div>
              </div>
              <div className="col-lg-4 mb-5  ">
                <div className="card h-100 shadow border-0 serve-card">
                  <img src="" alt="" />


                  <div className="card-body p-4">
                    <a className="text-decoration-none  " href="#!">
                      <h5 className="card-title mb-3 fw-bold h4  text-center serve-text">
                        Product Mangement & QA
                      </h5>
                    </a>
                    <p className="card-text mb-0 text-dark">
                      Unlock seamless collaboration and elevate product
                      excellence with our cutting-edge QA and Product
                      Management Solutions. Our comprehensive services
                      encompass rigorous testing protocols and strategic
                      product roadmapping, empowering your team to deliver
                      exceptional products on time, within budget, and with
                      unmatched quality assurance.
                    </p>
                  </div>

                </div>
              </div>
              <div className="col-lg-4 mb-5  ">
                <div className="card h-100 shadow border-0 serve-card">
                  <img src="" alt="" />

                  <div className="card-body p-4">
                    <a className="text-decoration-none  " href="#!">
                      <h5 className="card-title mb-3 fw-bold h4  text-center serve-text">
                        Software Service
                      </h5>
                    </a>
                    <p className="card-text mb-0 text-dark">
                      Our software services encompass a comprehensive suite of
                      solutions tailored to meet the diverse needs of
                      businesses in today's dynamic digital landscape. From
                      custom software development to system integration and
                      maintenance, we provide end-to-end services aimed at
                      ensuring efficient operations and empowering businesses
                      to thrive in an ever-evolving technological environment.
                    </p>
                  </div>

                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>


        {/* Exclusive Product section */}
        <div
          className="container-fluid donate bg-dark my-5 py-5"
          data-parallax="scroll"
        >
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-inline-block rounded-pill bg-secondary text-light py-1 px-3 mb-3">
                  Exclusive Products
                </div>
                <h1 className="display-6 text-white mb-5">
                  Choose any exclusive product of your choice
                </h1>
                <p className="text-white-50 mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error, ratione cumque esse doloribus eum?
                </p>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <Exclusivecarousel />
              </div>
            </div>
          </div>
          <Productcarousel />
        </div>

        {/* Product Carousel section */}
        <div className="bg-dark">
          {/* <Productcarousel /> */}
        </div>

        {/* Map & Contact section */}
        <section className="py-5 bg-light" id="scroll-target">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <iframe
                  className="img-fluid rounded"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.4647491169058!2d75.84938557507971!3d22.636454479446307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e70944c157f1%3A0x6bfcff54a729dbb5!2sSAGE%20University%2C%20Indore!5e0!3m2!1sen!2sin!4v1720419061645!5m2!1sen!2sin"
                  style={{ border: 0, height: "25rem", width: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="map"
                />
              </div>
              <div className="col-lg-6">
                <div className="d-inline-block rounded-pill bg-secondary text-white py-1 px-3 mb-3">
                  Connect With Us
                </div>
                <h1 className="display-6 text-dark mb-3">
                  We appreciate your connection and sincerely thank you.
                </h1>
                <p className="text-dark-50 mb-4">
                  We have received your message and anticipate further
                  communication with you.
                </p>
                <button
                  to="/Support"
                  className="cont-btn mt-4 btn-lg px-3 text-decoration-none btn-outline-dark"
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Home;

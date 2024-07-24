import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="d-flex align-items-center">
              <a target="_blank" href="https://github.com/uday1004" className="text-Primary text-decoration-none">
                <h4 className="mb-0">Github/Uday1004</h4>
              </a>
            </div>
            <div className="mt-3 col-lg-9">
              <p>
              Hello visitors, thank you for reaching out Here. I am Uday Solanki, a dedicated MERN stack developer 
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3 d-flex justify-content-center align-items-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  About Us
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  Contact Us
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  Customer Support
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  Jobs
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  Legal
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <div className="d-flex justify-content-end">
              <div>
                <h5 className="mb-2">Follow me on &#8594;</h5>
                <div className="d-flex mt-3">
                   
                  <a
                    href="#"
                    className="btn btn-outline-light btn-sm me-2 rounded-circle"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light btn-sm me-2 rounded-circle"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light btn-sm me-2 rounded-circle"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>
            As a beginner MERN stack developer, this project aims to establish
            an online business and enhance my skills. Reach out if you need help
            developing or scaling your online presence
          </p>
          <p className="mb-0">
            Copyright &copy; all right reserved |{" "}
            <a
              href="https://www.linkedin.com/messaging/compose/?to=uday-solanki-a62967277"
              target="_blank"
              className="btn btn-outline-light"
            >
              Text Me
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

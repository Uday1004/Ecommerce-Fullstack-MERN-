import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DrawerComponent from './DrawerComponent';
import 'rsuite/dist/rsuite-no-reset.min.css';
// import { Button } from '@mantine/core';

function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark p-4" style={{background:'#30383c'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Logo</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{ backgroundImage: "brown" }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/Products">Bikes</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/Top-products">Exclusives</Link>
              </li>
              <li className="nav-item dropdown mx-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/Upload">Upload Bikes</Link></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={toggleDrawer}>
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item dropdown mx-3">
                <Link
                  className="nav-link "
                  to='/Auth-Signin'
                  // id="navbarDropdownUser"
                  role="button"
                  // data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <button className="btn btn-primary" aria-hidden="true">Login</button>
                </Link>
                
              </li>
              {/* <li className="nav-item dropdown mx-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownUser"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-user" aria-hidden="true"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownUser">
                  <li><a className="dropdown-item" href="#">Account</a></li>
                  <li><a className="dropdown-item" href="#">Wishlist</a></li>
                  <li><Link className="dropdown-item" to="/MyBikes">My Bikes</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <DrawerComponent isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
}

export default Navbar;

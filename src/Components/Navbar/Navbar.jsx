import React from "react";
import { Bikes } from "../Data/Data";

function Navbar() {
  
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-4">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item ms-4">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item ms-4">
          <a class="nav-link" href="#">Bikes</a>
        </li>
        <li class="nav-item ms-4">
          <a class="nav-link" href="#">Exclusives</a>
        </li>
        <li class="nav-item dropdown ms-4">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="#">Action</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Another action</a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </li>
       
      </ul>
      <div class="nav-item dropdown ms-2">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          style={{textDecoration: "none"}}
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa fa-user" aria-hidden="true" style={{textDecoration: "none", marginLeft:'5rem'}} ></i>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a class="dropdown-item" href="#">Account</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Wishlist</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">My Orders</a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
          
        </ul>
      </div>
    </div>
  </div>
</nav>


  );
}

export default Navbar;

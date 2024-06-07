import React from 'react'

function Navbar() {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light p-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Logo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Bikes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Exclusives</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button> */}
          <div class="nav-item dropdown" style={{marginLeft:'10rem'}}>
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" style={{textDecoration:'none'}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa fa-user" aria-hidden="true" style={{textDecoration:'nones'}}></i>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Account</a></li>
              <li><a class="dropdown-item" href="#">Wishlist</a></li>
              <li><a class="dropdown-item" href="#">My Orders</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar
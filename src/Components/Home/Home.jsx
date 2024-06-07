import React from 'react'
import pic1 from "../Images/scooter.gif"
import '../Home/Home.css'

function Home() {
  return (
    <div> 
        <header class="bg-white py-5 position-relative">
                 
                <div class="black-blur-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                <div class="container px-5 position-relative">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-dark mb-2">A Bootstrap 5 template for modern businesses</h1>
                                <p class="lead fw-normal text-dark-50 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a class="btn btn-dark btn-lg px-4 me-sm-3" href="#features">Get Started</a>
                                     
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5 pic1" src={pic1} style={{transform:"scaleX(-1)"}} alt="..." /></div>
                    </div>
                </div>
            </header>
    </div>
  )
}

export default Home
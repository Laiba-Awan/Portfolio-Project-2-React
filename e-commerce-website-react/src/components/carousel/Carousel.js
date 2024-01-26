import "../carousel/Carousel.css";
import { Link } from "react-router-dom";

import React from "react";

function Carousel() {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active ">
            <div className="slider-img pt-5 pb-lg-5">
              <div className="container d-flex align-items-center justify-content-center mb-5 pt-lg-5 pb-lg-5 container-carousel">
                <div className="row d-flex align-items-center justify-content-center">
                  <div class="col-sm-8 col-lg-7 px-5 px-sm-3 d-flex align-items-center flex-column">
                    <h1 class="text-white heading-hp">Reveal your Radience</h1>
                    <p class="pt-3 mb-lg-5 mb-4 text-white">
                      "Witness the power of transformation with our skincare
                      wonders – because every face tells a story."
                    </p>
                    <div>
                      <Link class="btn btn-carousel pt-2 me-3" to="/login">
                        LOG IN
                      </Link>
                      <Link class="btn btn-slider pt-2" to="/">
                        EXPLORE NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="slider-img pt-5 pb-lg-5">
              <div className="container d-flex align-items-center justify-content-center mb-5 pt-lg-5 pb-lg-5 container-carousel">
                <div className="row d-flex align-items-center justify-content-center">
                  <div class="col-sm-8 col-lg-7 px-5 px-sm-3 d-flex align-items-center flex-column">
                    <h1 class="text-white heading-hp">Reveal your Radience</h1>
                    <p class="pt-lg-4 mb-lg-5 pt-3 mb-4 text-white">
                      "Witness the power of transformation with our skincare
                      wonders – because every face tells a story."
                    </p>
                    <div>
                      <Link class="btn btn-carousel pt-2 me-3" to="/login">
                        LOG IN
                      </Link>
                      <Link class="btn btn-slider pt-2" to="/">
                        EXPLORE NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="slider-img pt-5 pb-lg-5">
              <div className="container d-flex align-items-center justify-content-center mb-5 pt-lg-5 pb-lg-5 container-carousel">
                <div className="row d-flex align-items-center justify-content-center">
                  <div class="col-sm-8 col-lg-7 px-5 px-sm-3 d-flex align-items-center flex-column">
                    <h1 class="text-white heading-hp">Reveal your Radience</h1>
                    <p class="pt-lg-4 mb-lg-5 pt-3 mb-4 text-white">
                      "Witness the power of transformation with our skincare
                      wonders – because every face tells a story."
                    </p>
                    <div>
                      <Link class="btn btn-carousel pt-2 me-3" to="/login">
                        LOG IN
                      </Link>
                      <Link className="btn btn-slider pt-2" to="/">
                        EXPLORE NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;

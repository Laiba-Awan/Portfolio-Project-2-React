import React from "react";
import "../logos/Logos.css";

function Logos() {
  return (
    <div className="container-fluid bg-logos">
      <div className="container pt-lg-5 pb-lg-5 py-md-5 py-4">
        <div className="row mb-3">
          <div className="col-4 col-lg-2 me-auto ps-3">
            <img
              src="https://demos.webicode.com/html/Bo-shop-html/images/c-mg-1.png"
              alt="Sponsor 1"
              className="icons"
            />
          </div>
          <div className="col-3 col-lg-2">
            <img
              src="https://demos.webicode.com/html/Bo-shop-html/images/c-mg-1.png"
              alt="Sponsor 1"
              className="icons"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-evenly mb-1">
          <div className="col-3 col-lg-2">
            <img
              src="https://demos.webicode.com/html/Bo-shop-html/images/c-mg-3.png"
              alt="Sponsor 2"
              className="icons"
            />
          </div>
          <div className="col-3 col-lg-2">
            <img
              src="https://demos.webicode.com/html/Bo-shop-html/images/c-mg-3.png"
              alt="Sponsor 2"
              className="icons"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12 text-center">
            <img
              src="https://demos.webicode.com/html/Bo-shop-html/images/c-mg-2.png"
              alt="sponsor 3"
              className="icons"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logos;

import React from "react";
import { RiTruckLine } from "react-icons/ri";
import { BiPackage } from "react-icons/bi";
import { MdSupportAgent } from "react-icons/md";
import { MdOutlineCreditScore } from "react-icons/md";
import "../services/Services.css";

function Services() {
  return (
    <div className="container-fluid bg-services d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 text-center col-md-6 p-lg-5 p-4">
            <RiTruckLine className="sercices-icons" />
            <p>Free Shipment over 5000Rs/-</p>
          </div>
          <div className="col-lg-3 col-12 col-md-6 text-center p-lg-5 p-4">
            <MdSupportAgent className="sercices-icons" />
            <p>24/7 Online Support</p>
          </div>
          <div className="col-lg-3 p-4 col-12 col-md-6 text-center overflow-hidden p-lg-5">
            <MdOutlineCreditScore className="sercices-icons" />
            <p>100% Secure Payment</p>
          </div>
          <div className="col-lg-3 p-4 col-12 col-md-6 text-center overflow-hidden p-lg-5">
            <BiPackage className="sercices-icons" />
            <p>World Wide Shipment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

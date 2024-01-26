import React from "react";
import "../footer/Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-footer text-white p-3 pt-5 p-md-5">  
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-3 mb-lg-0">
            <h4>Join Our Newsletter</h4>
            <p className="form-colors d-inline">
              Be the first to know about our latest updates, exclusive offers,
              and more.
            </p>
          </div>
          <div className="col-12 col-md-6 pt-2">
            <form>
              <div class="mb-3 flex-lg-row d-flex flex-column pt-lg-2">
                <input
                  type="email"
                  class="form-control form-color me-2 mb-lg-0 mb-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email address"
                />
                <button type="button" class="btn btn-footer form-colors">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr className="hr" />
        <div className="row ">
          <div className="col-6 mb-4 col-lg-3">
            <ul className="mb-0 p-0">Product & Services</ul>
            <li className="footer-childs">Products</li>
            <li className="footer-childs">Services</li>
            <li className="footer-childs">Appliances</li>
          </div>
          <div className="col-6 col-lg-3">
            <ul className="mb-0 ps-0">Shop Now</ul>
            <li className="footer-childs">Offers</li>
            <li className="footer-childs">Promos</li>
            <li className="footer-childs">Online Shop FAQs</li>
          </div>
          <div className="col-6 col-lg-3">
            <ul className="mb-0 ps-0">Support</ul>
            <li className="footer-childs">Contact Us</li>
            <li className="footer-childs">Email Support</li>
            <li className="footer-childs">Live Chat</li>
            <li className="footer-childs">Phone Support</li>
            <li className="footer-childs">Community</li>
          </div>
          <div className="col-6 col-lg-3 mb-3">
            <ul className="mb-0 ps-0">About</ul>
            <li className="footer-childs">About Us</li>
            <li className="footer-childs">Careers</li>
          </div>
        </div>
        <hr className="hr" />
        <div className="row">
          <div className="col-12 col-lg-4 footer-childs justify-content-center justify-content-lg-start d-flex">
            <p>2023 Cadet UI. All Rights Reserved.</p>
          </div>
          <div className="col-12 col-lg-4 d-flex justify-content-evenly justify-content-lg-center">
            <p className="footer-childs px-lg-2">English</p>
            <p className="footer-childs px-lg-2">Privacy</p>
            <p className="footer-childs px-lg-2">Legal</p>
          </div>
          <div className="col-12 col-lg-4 d-flex justify-content-lg-end justify-content-evenly">
            <Link to="https://www.facebook.com/">
              <FaFacebook className="footer-icons" />
            </Link>
            <Link to="https://www.instagram.com/">
              <FaInstagram className="footer-icons" />
            </Link>
            <Link to ="https://twitter.com/">
              <FaTwitter className="footer-icons" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

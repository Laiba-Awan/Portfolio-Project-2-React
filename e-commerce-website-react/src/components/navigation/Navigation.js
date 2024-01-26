import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../../redux/user";
import "../navigation/Navigation.css"

function Navigation() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    LogOutDispatch();
  };
  const LogOutDispatch = () => {
    dispatch(logout());
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div Class="container-fluid">
          <div className="nav-brand d-flex">
            <Link
              className="navbar-brand ms-4 ms-lg-0 ms-md-0 text-center pb-lg-2"
              to="/"
            >
              Elegence
            </Link>
          </div>
          <button
            class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>
          </button>

          <div
            Class="collapse navbar-collapse center-div"
            id="navbarSupportedContent"
          >
            <ul Class="navbar-nav mb-2 mb-lg-0">
              <li Class="nav-item">
                <Link
                  Class="nav-link mx-lg-2 nav-line pt-1"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li Class="nav-item">
                <Link Class="nav-link mx-lg-2 nav-line pt-1">About Us</Link>
              </li>
              <li Class="nav-item">
                <Link
                  Class="nav-link mx-lg-2 nav-line pt-1"
                  to="/popularproducts"
                >
                  Popular Products
                </Link>
              </li>
              <li Class="nav-item">
                <Link Class="nav-link mx-lg-2 nav-line pt-1" to="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <ul Class="navbar-nav d-flex flex-row">
              <li class="nav-item dropdown nav-icons">
                <Link
                  class="nav-link mx-lg-2 me-1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <RxAvatar />
                </Link>
                <ul class="dropdown-menu">
                  {user.password ? (
                    <Link
                      class="dropdown-item"
                      onClick={handleClick}
                      to="/logout"
                    >
                      log Out
                    </Link>
                  ) : (
                    <Link class="dropdown-item" to="/login">
                      Log In
                    </Link>
                  )}
                </ul>
              </li>
              <li Class="nav-item nav-icons">
                <Link Class="nav-link mx-lg-2 mx-1" to="/cart">
                  <AiOutlineShoppingCart />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;

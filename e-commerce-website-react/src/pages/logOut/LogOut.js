import React from "react";
import { useNavigate } from "react-router";
import "../logOut/LogOut.css";
import { useSelector } from "react-redux";

function LogOut() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="container d-flex flex-column mt-5 pt-5 align-items-center">
        <h1 className="heading-main mb-3">Logged Out</h1>
        <h2 className="text-white mb-2 text-center">
          We are sad to see you go{" "}
          <span className="text-center">{user.user}</span>
        </h2>
        <h3 className="text-white mb-4">See You Again!</h3>
        <button
          type="button"
          className="btn-log0ut mb-2"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
        <button
          className="btn-home"
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home
        </button>
      </div>
    </>
  );
}

export default LogOut;

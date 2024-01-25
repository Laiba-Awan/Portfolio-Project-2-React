import React from "react";
import { useNavigate } from "react-router";
import { selectUser } from "../../redux/user";
import { useSelector } from "react-redux";

function LogOut() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  return (
    <div>
      <h3 className="text-white">
        We are sad to see you go <span>{user.name}</span>
      </h3>
      <button
        type="button"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
      <button
        type="button"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default LogOut;

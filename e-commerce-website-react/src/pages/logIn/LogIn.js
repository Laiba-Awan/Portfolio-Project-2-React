import React, { useState } from "react";
import "../logIn/Login.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/user";
import Validation from "../../components/validation/Validation";
import { useNavigate } from "react-router";

function LogIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLogIn = () => {
    if (setValues) {
      dispatch(
        login({
          values,
          // name: values.name,
          // email: values.email,
          // password: values.password,
          // LoggedIn: true,
        })
      );
    }
  };
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(Validation(values));
    if (values.password.length > 8 && values.name.length > 3 && values.email) {
      navigate("/");
    }
  }
  return (
    <>
      <div className="pt-5 bg-login pb-5 text-white">
        <div className="container-fluid d-flex flex-column pb-5  login-container mt-lg-3 pt-5 pt-4">
          <h2 className="heading-login pb-3 m-0 text-center">Elegence</h2>
          <h4 className="text-center">Welcome Back 👋</h4>
          <p className="text-center text-clr">We are happy to have you back</p>

          <form className="form d-lg-flex justify-content-lg-center flex-lg-column align-items-lg-center" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="exampleInputName" className="form-label">
                Username<sup>*</sup>
              </label>
              <input
                type="text"
                className="form-control input-fields mb-2"
                id="exampleInputName"
                value={values.name}
                name="name"
                onChange={handleChange}
              />
              {errors.name && <div className="Errors">{errors.name}</div>}
              <label for="exampleInputEmail1" className="form-label">
                Email address<sup>*</sup>
              </label>
              <input
                type="email"
                className="form-control input-fields"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={values.email}
                name="email"
                onChange={handleChange}
              />
              {errors.email && <div className="Errors">{errors.email}</div>}
              <div id="emailHelp" className="form-text text-white">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-labe mb-2">
                Password <sup>*</sup>
              </label>
              <input
                type="password"
                className="form-control input-fields"
                id="exampleInputPassword1"
                value={values.password}
                name="password"
                onChange={handleChange}
              />
              {errors.password && (
                <div className="Errors">{errors.password}</div>
              )}
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input checkbox-color"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                I agree to terms & conditions
              </label>
            </div>
            <button
              onClick={handleLogIn}
              type="submit"
              className="btn btn-primary login-btn"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;

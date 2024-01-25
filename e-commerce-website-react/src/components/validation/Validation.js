import { toast } from 'react-toastify';

function Validation(values) {
  let error = {};

  if (!values.name) {
    error.name = "Username is Required";
  } else if (values.name.length < 3) {
    error.name = "Username is too Short";
  } else {
    error.name = "";
  }

  if (!values.email) {
    error.email = "Email is Required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    error.email = "Write a Valid Email";
  } else {
    error.email = "";
  }

  if (!values.password) {
    error.password = "Password is Required";
  } else if (values.password.length < 8) {
    error.password = "Password must contain atleast 8 characters";
  } else {
    error.password = "";
  }
  if (values.password.length > 8 && values.name.length > 3 && values.email) {
    toast.success("You have Successfully Logged in");
  }

  return error;
}

export default Validation;

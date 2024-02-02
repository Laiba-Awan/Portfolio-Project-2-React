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

  return error;
}

export default Validation;

function CartValidation(values) {
  let error = {};
  if (!values.address) {
    error.address = "You must add 1 valid address!";
  } else if (values.address.length < 8) {
    error.address = "Address is not Valid!";
  } else {
    error.address = "";
  }

  if (!values.city) {
    error.city = "Add your city name!";
  } else if (values.city.length < 3) {
    error.city = "Enter Valid City name!";
  } else {
    error.city = "";
  }

  if (!values.state) {
    error.state = "Add your State name!";
  } else if (values.state.length < 3) {
    error.state = "Enter Valid State name!";
  } else {
    error.state = "";
  }

  if (!values.zip) {
    error.zip = "Add your zip Code!";
  } else if (values.zip.length < 5) {
    error.zip = "Enter Valid zip Code!";
  } else {
    error.zip = "";
  }
  return error;
}
export { CartValidation };

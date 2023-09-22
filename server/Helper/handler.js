const { isValidObjectId } = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const errorHandler = (res, error, status = 400) => {
  let message = "";

  if (error.keyPattern) {
    message =
    Object.keys(error.keyPattern) == "mobile_number"
        ? "Mobile number is already exist"
        : "Email is already exist";
  } else if (error.details) {
    const path = error.details[0].context.label;
    switch (path) {
      case "email":
        message = "Please Enter valid email id";
        break;
      case "mobile_number":
        message = "Please Enter valid mobile number";
        break;
      case "password":
        message =
          "Password should contain at least one special character and alphanumeric characters";
        break;
      default:
        message = "Please enter a valid name";
    }
  }else if(typeof(error) === "string") {
    message = error;
  } 
  else {
    message = error.message;
  }

  return res.status(status).json({
    success: false,
    msg: message,
  });
};

const responseHandler = (
  res,
  data = null,
  message = "success",
  status = 200
) => {
  return res.status(status).json({
    success: true,
    Message: message,
    Data: data,
  });
};

const isMongooseIdValidation = (id) => {
  if (!isValidObjectId(id)) {
    return false;
  }
  return true;
};

const generateToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

const isAdminValidation = (user) => {
  if (user && user.role != "Admin") {
    return false;
  } else {
    return true;
  }
};

module.exports = {
  responseHandler,
  isAdminValidation,
  isMongooseIdValidation,
  errorHandler,
  generateToken,
};

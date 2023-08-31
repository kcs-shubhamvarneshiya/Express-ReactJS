const { isValidObjectId } = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const errorHandler = (res, error, status = 400) => {
  var message = "";

  switch (error.code || error ) {
    case 11000:
      message = `${error.keyValue.email} is already in use`;
      break;

    case error:
      if (typeof(error) === "string") {
        message = error;
      } else {
        if (error.details[0].type === "string.pattern.base") {
          message = `Please enter valid ${error.details[0].context.label}`;
        } else {
          message = error.message;
        }
      }
      break;

    default:
      message = "Something went wrong !";
      break;
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

const { isValidObjectId } = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const errorHandler = (res, message, status = 400) => {
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

const isAdminValidation = (user) =>{
  if(user && user.role != 'Admin'){
   return false;
  }
  else{
    return true;
  }  
}

module.exports = {
  responseHandler,
  isAdminValidation,
  isMongooseIdValidation,
  errorHandler,
  generateToken,
};

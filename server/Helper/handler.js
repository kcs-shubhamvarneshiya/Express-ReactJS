const { isValidObjectId } = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const errorHandler = (res, message, status) => {
  return res.status(status).json({
    success: false,
    msg: message,
  });
};

const responseHandler = (res,data = null,message = "success")=>{
  res.status(200).json({
    success : true,
    Message : message,
    Data : data
  })
}

const isMongooseIdValidation = (id, res) => {
  if (!isValidObjectId(id)) {
    errorHandler(res, "Please Provide a valid id !", 400);
    return false;
  }
};

const generateToken = (user) => {
  return  jwt.sign(user, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRY});
};

module.exports = {
  responseHandler,
  isMongooseIdValidation,
  errorHandler,
  generateToken,
};

const User = require("../Database/model/User");
const {
  isMongooseIdValidation,
  errorHandler,
  generateToken,
  responseHandler,
} = require("../Helper/handler");
const { encryption, decryption } = require("../Helper/encryption-decryption");
const bodyvalidator = require("../Helper/api-validation");
require("dotenv").config();
require("../Database/dbConnnection");

const createUser = async (req, res) => {
  try {
    const { name, password, mobile_number, email, role } = req.body;

    const response = bodyvalidator.createUserBodyValidation(req.body);
    if (response.error) {
      return errorHandler(res, response.error.details[0].message, 400);
    }

    const encryptPassword = encryption(password);

    const token = generateToken({
      name: name,
      password: encryptPassword,
      mobile_number: mobile_number,
      email: email,
      role: role,
    });

    const user = await User.create({
      name: name,
      password: encryptPassword,
      mobile_number: mobile_number,
      email: email,
      role: role,
      token: token,
    });

    if (!user) {
      return errorHandler(res, "User creation failed !!");
    }

    return responseHandler(res, user, "User created successfully");
  } catch (error) {
    return errorHandler(res, error.message, 500);
  }
};

const login = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return errorHandler(res, "Please provide a body", 400);
    }
    const { email, password } = req.body;

    const user = await User.findOne({ email: email }).exec();
   

    if (!user) {
      return errorHandler(res, "User not found", 404);
    }
    user.token = "";
    const plainPass = decryption(user.password);

    if (user.email === email && password === plainPass) {
      
      const token = generateToken({
        _id : user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        mobile_number: user.mobile_number,
        role: user.role,
        token : user.token
      });

      const response = await User.findOneAndUpdate(
        { _id: user._id },
        { token: token },
        { new: true }
      );
      return responseHandler(res, response, "login success");
    } else {
      return errorHandler(res, "Invalid Password !", 400);
    }
  } catch (error) {
    return errorHandler(res, error.message, 400);
  }
};

module.exports = { createUser, login };

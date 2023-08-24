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
      errorHandler(res, response.error.details[0].message, 400);
    }

    const encryptPassword = encryption(password);
    const token = generateToken(res, {
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
      res.status(400).json({
        success: false,
        message: "User creation failed !!",
      });
    }

    res.json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      errorHandler(res,'Please provide a body',400);
    }
    const { email, password } = req.body;

    const user = await User.findOne({ email: email }).exec();
    
    if (!user) {
      errorHandler(res,'User not found',404);
    }

    const plainPass = decryption(user.password);
    
    if (user.email === email && password === plainPass) { 
      
      const token = generateToken({
        name : user.name,
        email:user.email,
        password : user.password,
        mobile_number : user.mobile_number,
        role : user.role
      });
      
      const response = await User.findOneAndUpdate({_id:user._id},{token:token},{new : true})
      responseHandler(res,response,'login success');      
    }
    else{
      errorHandler(res,'Invalid Password !',400)
    }

  } catch (error) {
    errorHandler(res,error.message,400)
  }
};

module.exports = { createUser, login };

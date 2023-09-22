const User = require("../Database/model/User");
const {
  isMongooseIdValidation,
  errorHandler,
  generateToken,
  responseHandler,
} = require("../Helper/handler");
const { encryption, decryption } = require("../Helper/encryption-decryption");
const {createUserBodyValidation} = require("../Helper/api-validation");
require("dotenv").config();
require("../Database/dbConnnection");

const createUser = async (req, res) => {
  try {
    const { name, password, mobile_number, email, role } = req.body;

    //validate request body
    const response = await createUserBodyValidation.validateAsync(req.body);
    
    //encrypt password
    const encryptPassword = encryption(password);

    // generate token 
    const token = generateToken({ name, password: encryptPassword, mobile_number, email, role });

    // save user to database
    const user = await User.create({ name, password: encryptPassword, mobile_number, email, role, token });

    if (!user) {
      return errorHandler(res, "User creation failed !!");
    }

    return responseHandler(res, response, "User created successfully");
  } catch (error) {
    return errorHandler(res, error, 500);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate request body
    if (!email || !password) {
      return errorHandler(res, "Please provide email and password", 400);
    }

    // find user by email 
    const user = await User.findOne({ email }).exec();

    if (!user) {
      return errorHandler(res, "User not found", 404);
    }

    // decrypt password
    const plainPass = decryption(user.password);


    if (email === user.email && password === plainPass) {
      const token = generateToken({
        _id: user._id,
        name: user.name,
        email: user.email,
        mobile_number: user.mobile_number,
        role: user.role,
      });

      //update user's token
      const response = await User.findByIdAndUpdate(
        user._id,
        { token },
        { new: true }
      );

      return responseHandler(res, response, "Login success");
    } else {
      return errorHandler(res, "Invalid Password!", 400);
    }
  } catch (error) {
    return errorHandler(res, error, 500);
  }
};



module.exports = { createUser, login };

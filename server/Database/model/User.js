const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
  mobile_number: {
    type: "string",
    required: true,
    unique: true
  },
  role: {
    type: "string",
    required: true,
  },
  token: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);

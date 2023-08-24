const Joi = require("Joi");
const regex = require("../config/regex");

const createUserBodyValidation = (body) => {
  let bodySchema = Joi.object({
    name: Joi.string()
      .pattern(new RegExp("^[a-zA-Z .]+$"))
      .message({ "string.pattern.base": "Please enter a valid name" })
      .required(),

    password: Joi.string()
      .pattern(
        new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$")
      )
      .message({ "string.pattern.base": "please enter a valid password" })
      .required(),

    mobile_number: Joi.string()
      .pattern(new RegExp("^[0-9]{10}$"))
      .message("Please enter a valid phone number")
      .required(),

    email: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"))
      .message({ "string.pattern.base": "Please enter a valid email address" })
      .required(),

    role: Joi.string()
      .pattern(new RegExp("^[a-zA-Z .]+$"))
      .message({ "string.pattern.base": "Please enter a valid email address" })
      .required(),
  });
  return bodySchema.validate(body);
};

const userLoginBodyValidation = (body) => {
  let loginSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  const { error: validError } = loginSchema.validate(body);

  if (validError) {
    return validError;
  } 
  return;
};

module.exports = { createUserBodyValidation, userLoginBodyValidation };

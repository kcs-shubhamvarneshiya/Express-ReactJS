const Joi = require("@hapi/joi");
const regex = require("../config/regex");

const createUserBodyValidation = Joi.object({
  name: Joi.string()
    .regex(/^[a-zA-Z .]+$/)
    .required(),

  password: Joi.string()
    .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
    .required(),

  mobile_number: Joi.string()
    .regex(/^[0-9]{10}$/)
    .required(),

  email: Joi.string()
    .regex(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)
    .required(),

  role: Joi.string()
    .regex(/^[a-zA-Z .]+$/)
    .required(),
});

const createCustBodyValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .regex(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)
    .required(),
  mobile_number: Joi.string()
    .regex(/[0-9]{10,10}/)
    .required(),
  address: Joi.string().required(),
});

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

module.exports = {
  createUserBodyValidation,
  userLoginBodyValidation,
  createCustBodyValidation,
};

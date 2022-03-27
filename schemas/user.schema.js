const Joi = require("joi");

const name = Joi.string();
const lastName = Joi.string();
const cellphone = Joi.string();
const birthday = Joi.string();
const email = Joi.string().email();
const password = Joi.string();
const photo = Joi.string().uri();

const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  cellphone,
  birthday,
  email: email.required(),
  password: password.required(),
  photo,
});

module.exports = { createUserSchema };

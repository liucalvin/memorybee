const Joi = require('joi');

const registrationValidation = (user) => {
  return Joi.object({
    email: Joi
      .string()
      .min(6)
      .max(255)
      .required()
      .email(),
    username: Joi
      .string()
      .min(6)
      .max(255)
      .required(),
    password: Joi
      .string()
      .min(6)
      .required()
  }).validate(user);
}

function loginValidation(user) {
  return Joi.object({
    email: Joi
      .string()
      .min(6)
      .max(255)
      .required()
      .email(),
    password: Joi
      .string()
      .min(6)
      .required()
  }).validate(user);
}

function wordValidation(query) {
  return Joi.object({
    word: Joi
      .string()
      .alphanum()
  }).validate(query)
}

module.exports.registrationValidation = registrationValidation;
module.exports.loginValidation = loginValidation;
module.exports.wordValidation = wordValidation;

const Joi = require("joi");

const publicationId = Joi.number().integer();
const userId = Joi.number().integer();

const createLikeSchema = Joi.object({
  publicationId: publicationId.required(),
  userId: userId.required(),
});

module.exports = { createLikeSchema };

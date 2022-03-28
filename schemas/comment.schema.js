const Joi = require("joi");

const id = Joi.number().integer();
const comment = Joi.string();
const publicationId = Joi.number().integer();
const userId = Joi.number().integer();

const getCommentSchema = Joi.object({
  id: id.required(),
});

const createCommentSchema = Joi.object({
  comment: comment.required(),
  publicationId: publicationId.required(),
  userId: userId.required(),
});

module.exports = { getCommentSchema, createCommentSchema };

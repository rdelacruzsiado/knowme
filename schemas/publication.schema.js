const Joi = require("joi");

const id = Joi.number().integer();
const description = Joi.string();
const userId = Joi.number().integer();
const route = Joi.string();
const photos = Joi.array().items(
  Joi.object({
    route: route.required(),
    userId: userId.required(),
  })
);

const getPublicationSchema = Joi.object({
  id: id.required(),
});

const createPublicationSchema = Joi.object({
  description: description.required(),
  userId: userId.required(),
  photos: photos.required().min(1),
});

module.exports = { getPublicationSchema, createPublicationSchema };

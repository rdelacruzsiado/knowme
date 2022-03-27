const express = require("express");

const UserService = require("../services/user.service");
const { checkApiKey } = require("../middlewares/auth.handler");
const validatorHandler = require("../middlewares/validator.handler");
const { createUserSchema } = require("../schemas/user.schema");

const router = express.Router();
const service = new UserService();

router.get("/", async (req, res, next) => {
  try {
    const users = await service.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  checkApiKey,
  validatorHandler(createUserSchema, "body"),
  async (req, res, next) => {
    try {
      const users = await service.create(req.body);
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

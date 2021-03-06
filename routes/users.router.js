const express = require("express");
const passport = require("passport");
const UserService = require("../services/user.service");
const { checkApiKey } = require("../middlewares/auth.handler");
const validatorHandler = require("../middlewares/validator.handler");
const { createUserSchema } = require("../schemas/user.schema");

const router = express.Router();
const userService = new UserService();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const users = await userService.findAll();
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  checkApiKey,
  validatorHandler(createUserSchema, "body"),
  async (req, res, next) => {
    try {
      const users = await userService.create(req.body);
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

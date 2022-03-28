const express = require("express");
const passport = require("passport");
const CommentService = require("../services/comment.service");
const { checkApiKey } = require("../middlewares/auth.handler");
const validatorHandler = require("../middlewares/validator.handler");
const {
  getCommentSchema,
  createCommentSchema,
} = require("../schemas/comment.schema");

const router = express.Router();
const commentService = new CommentService();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const comments = await commentService.findAll();
      res.json(comments);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  validatorHandler(getCommentSchema, "params"),
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const comment = await commentService.findOne(req.params.id);
      res.json(comment);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  checkApiKey,
  validatorHandler(createCommentSchema, "body"),
  async (req, res, next) => {
    try {
      const comment = await commentService.create(req.body);
      res.json(comment);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

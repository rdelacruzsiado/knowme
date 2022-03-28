const express = require("express");
const passport = require("passport");
const LikeService = require("../services/comment.service");
const { checkApiKey } = require("../middlewares/auth.handler");
const validatorHandler = require("../middlewares/validator.handler");
const {
  createLikeSchema,
} = require("../schemas/like.schema");

const router = express.Router();
const likeService = new LikeService();

router.post(
  "/",
  checkApiKey,
  validatorHandler(createLikeSchema, "body"),
  async (req, res, next) => {
    try {
      const like = await likeService.create(req.body);
      res.json(like);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

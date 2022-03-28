const express = require("express");
const passport = require("passport");
const PublicationService = require("../services/publication.service");
const { checkApiKey } = require("../middlewares/auth.handler");
const validatorHandler = require("../middlewares/validator.handler");
const {
  getPublicationSchema,
  createPublicationSchema,
} = require("../schemas/publication.schema");

const router = express.Router();
const publicationService = new PublicationService();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const publications = await publicationService.findAll();
      res.json(publications);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  validatorHandler(getPublicationSchema, "params"),
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const publication = await publicationService.findOne(req.params.id);
      res.json(publication);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  checkApiKey,
  validatorHandler(createPublicationSchema, "body"),
  async (req, res, next) => {
    try {
      const publication = await publicationService.create(req.body);
      res.json(publication);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

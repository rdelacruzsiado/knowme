const express = require("express");
const authRouter = require("./auth.router");
const usersRouter = require("./users.router");
const publicationsRouter = require("./publications.router");

function routerApi(app) {
  const router = express.Router();

  app.use("/api/v1", router);
  router.use("/auth", authRouter);
  router.use("/users", usersRouter);
  router.use("/publications", publicationsRouter);
}

module.exports = routerApi;

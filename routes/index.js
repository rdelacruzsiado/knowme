const usersRouter = require("./users.route");

function routerApi(app) {
  app.use("/api/users", usersRouter);
}

module.exports = routerApi;

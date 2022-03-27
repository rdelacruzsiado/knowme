const usersRouter = require("./users.route");

function routerApi(app) {
  app.use("/users", usersRouter);
}

module.exports = routerApi;

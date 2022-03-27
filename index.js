const express = require("express");
const routerApi = require("./routes");
const config = require("./config");
const {
  logErrors,
  boomErrorHandler,
  errorHandler,
} = require("./middlewares/error.handler");

const app = express();

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});

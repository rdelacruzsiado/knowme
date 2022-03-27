const express = require("express");
const routerApi = require("./routes");
const config = require("./config");

const app = express();

routerApi(app);

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});

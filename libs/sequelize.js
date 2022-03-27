const { Sequelize } = require("sequelize");
const config = require("../config");
const setupModels = require("../db/models");

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: config.dbDialect,
    port: config.dbPort,
    logging: config.showSequelizeLogs ? console.log : false,
  }
);

setupModels(sequelize);
sequelize.sync({ force: true });

module.exports = sequelize;

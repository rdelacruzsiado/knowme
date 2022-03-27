require("dotenv").config();

const config = {
  dev: process.env.NODE_ENV !== "production",
  port: process.env.PORT || 3000,
  timeZone: process.env.TIME_ZONE,
  showSequelizeLogs: process.env.SHOW_SEQUELIZE_LOGS === 'true',
  dbDialect: process.env.DB_DIALECT || "mysql",
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT || 3306,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  mysqlRootPassword: process.env.MYSQL_ROOT_PASSWORD,
};

module.exports = config;

require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "prettycloud",
  "root",

  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    port: 3306,
    logging: true,
    dialect: "mysql",
  }
);

module.exports = sequelize;
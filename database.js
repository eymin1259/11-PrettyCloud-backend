const { Sequelize } = require('sequelize');
const { DB_HOST, DB_NAME, DB_USER, DB_MYSQL_PASSWORD, DB_PORT } = process.env;

const sequelize = new Sequelize({
  dialect: 'mysql',
  dialectOption: {
    timezone: 'Asia/Seoul',
  },
  logging: false,
  host: DB_HOST,
  database: DB_NAME,
  username: DB_USER,
  password: DB_MYSQL_PASSWORD,
  port: DB_PORT
});

module.exports = sequelize;
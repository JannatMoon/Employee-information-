const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize("mydatabase", "root", "12345", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  operatorsAliases: 0,
  timezone: "+06:00",
});

module.exports = sequelize;

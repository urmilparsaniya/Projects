const path = require("path");
require("dotenv").config();
const Sequelize = require("sequelize");
const DB_CREDENTIAL = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  logging: process.env.DB_LOGGING === "true" ? console.log : false,
  dialect: process.env.DB_CONNECTION,
  pool: {
    max: 5,
    min: 0,
    acquire: 60000,
    idle: 30000,
  },
  dialectOptions: {
    decimalNumbers: true,
  },
  seederStorage: "sequelize",
  seederStorageTableName: "SequelizeMetaSeeders",
};
const sequelize = new Sequelize(DB_CREDENTIAL);
sequelize
  .authenticate()
  .then(() => {
    console.log(`Database connection established successfully :)`);
  })
  .catch((err) => {
    console.log("Failed to connect to Database  :( \n", err);
  });

module.exports = {
  development: DB_CREDENTIAL,
  staging: DB_CREDENTIAL,
  production: DB_CREDENTIAL,
  sequelize: sequelize,
};

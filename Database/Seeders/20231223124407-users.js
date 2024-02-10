'use strict';

const UUID = require("uuid");
const moment = require('moment-timezone');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date();
    const currentTimestampIST = date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    await queryInterface.bulkInsert('users', [
      {
        id: UUID.v4(), // Provide a static UUID for the user
        userName: 'admin',
        email: 'urmil@mailinator.com',
        password: "$2b$10$oeGRss5vhi2Ejw0C9U6T1eTRDreOF.ZSU1Lp25QkXHhT30.Fm9HrW", // Admin@123
        role: 1, // 1: Super Admin
        loginToken: '',
        lastLoggedIn: currentTimestampIST,
        status: 1, // 1 => Active
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};

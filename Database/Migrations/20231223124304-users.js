'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      userName: {
        type: Sequelize.STRING(55),
      },
      email: {
        type: Sequelize.STRING(50),
      },
      password: {
        type: Sequelize.STRING(255),
      },
      role: {
        type: Sequelize.TINYINT(1),
        comment: "1: Super Admin, 2: Sub Admin, 3: Sales Manager, 4: Employee",
      },
      loginToken: {
        type: Sequelize.STRING(255),
      },
      lastLoggedIn: {
        type: Sequelize.STRING(20),
      },
      status: {
        type: Sequelize.TINYINT(1),
        defaultValue: 1,
        comment: "1 => Active, 2 => InActive, 3 => Delete",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};

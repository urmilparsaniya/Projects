"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "users", // table name
      "created_by", // new field name
      {
        type: Sequelize.UUID,
        after: "status"
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("users", "created_by");
  }
};

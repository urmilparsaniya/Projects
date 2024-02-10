'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      product_name: {
        type: Sequelize.STRING(100),
      },
      purchase_from: {
        type: Sequelize.TINYINT,
        defaultValue: 1,
        comment: '1: Store, 2: Online',
      },
      order_number: {
        type: Sequelize.STRING(50),
      },
      status: {
        type: Sequelize.TINYINT,
        defaultValue: 1,
        comment:
          '1 => Active, 2 => InActive, 3 => Approved By Sales Manager, 4 => Final Approval from Sub Admin',
      },
      order_executed: {
        type: Sequelize.TINYINT,
        defaultValue: 2,
        comment: '1: Yes when sub admin approves, 2: No when not approved by sub admin',
      },
      ready_for_review: {
        type: Sequelize.TINYINT,
        defaultValue: 2,
        comment: '1: Yes, 2: No',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_by: {
        type: Sequelize.UUID,
      },
      updated_by: {
        type: Sequelize.UUID,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};

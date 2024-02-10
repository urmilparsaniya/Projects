const { DataTypes } = require("sequelize");
const { sequelize } = require("../../Configs/database");

const ApproveSales = sequelize.define(
  "ApproveSales",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    sales_id: {
      type: DataTypes.UUID,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ApproveSales",
    tableName: "approve_sales",
  }
);

ApproveSales.sync();

module.exports = ApproveSales;

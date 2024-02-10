// models/history.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../../Configs/database");

const History = sequelize.define(
  "History",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    process_name: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.UUID,
    },
    created: {
      type: DataTypes.STRING(20),
    },
    updated: {
      type: DataTypes.STRING(20),
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
    modelName: "History",
    tableName: "history",
  }
);

module.exports = History;

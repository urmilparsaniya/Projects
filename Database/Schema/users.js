const { DataTypes } = require("sequelize");
const { sequelize } = require("../../Configs/database");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    userName: {
      type: DataTypes.STRING(55),
    },
    email: {
      type: DataTypes.STRING(50),
    },
    password: {
      type: DataTypes.STRING(255),
    },
    role: {
      type: DataTypes.TINYINT(1),
      comment: "1: Super Admin, 2: Sub Admin, 3: Sales Manager, 4: Employee",
    },
    loginToken: {
      type: DataTypes.STRING(255),
    },
    lastLoggedIn: {
      type: DataTypes.STRING(20),
    },
    status: {
      type: DataTypes.TINYINT(1),
      defaultValue: 1,
      comment: "1 => Active, 2 => InActive, 3 => Delete",
    },
    created_by: {
      type: DataTypes.UUID
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
    modelName: "User",
    tableName: "users",
  }
);

User.sync();

module.exports = User;

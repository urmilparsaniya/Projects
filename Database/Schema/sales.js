const { DataTypes } = require("sequelize");
const { sequelize } = require("../../Configs/database");
const ApproveSales = require("./approveSales");
const History = require("./history")
const date = new Date();
const currentTimestampIST = date.toLocaleString("en-US", {
  timeZone: "Asia/Kolkata",
});

const Sales = sequelize.define(
  "Sales",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    product_name: {
      type: DataTypes.STRING(100),
    },
    purchase_from: {
      type: DataTypes.TINYINT(1),
      comment: "1: Store, 2: Online",
      defaultValue: 1,
    },
    order_number: {
      type: DataTypes.STRING(50),
    },
    status: {
      type: DataTypes.TINYINT(1),
      defaultValue: 1,
      comment:
        "1 => Active, 2 => InActive, 3 => Approved By Sales Manager, 4 => Final Approval from Sub Admin",
    },
    order_executed: {
      type: DataTypes.TINYINT(1),
      comment:
        "1: Yes when sub admin approve, 2: No when its not approved by sub admin",
      defaultValue: 2,
    },
    ready_for_review: {
      type: DataTypes.TINYINT(1),
      comment: "1: Yes, 2: No",
      defaultValue: 2,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.UUID,
    },
    updated_by: {
      type: DataTypes.UUID,
    },
  },
  {
    sequelize,
    modelName: "Sales",
    tableName: "sales",
  }
);


Sales.addHook("afterBulkUpdate", async (options) => {
  if (options?.attributes?.status === 4) {
    try {
      await ApproveSales.create({
        sales_id: options?.where?.id,
      });
      console.log("Entry added to approveSales table");
    } catch (error) {
      console.error("Error adding entry to approveSales table:", error);
    }
  }
});

Sales.addHook("afterCreate", async (salesInstance, options) => {
  try {
    await History.create({
      process_name: "sales_create",
      user_id: salesInstance?.created_by,
      created: currentTimestampIST,
    })
    console.log("Entry added to history table");
  } catch (error) {
    console.error("Error create record:", error);
  }
})

Sales.addHook("afterBulkUpdate", async (options) => {
  try {
    await History.create({
      process_name: "sales_update",
      user_id: options?.where?.id,
      updated: currentTimestampIST,
    })
    console.log("Entry added to history table");
  } catch (error) {
    console.error("Error update record:", error);
  }
})

Sales.sync();

module.exports = Sales;

require("dotenv").config();
const { Sequelize } = require("sequelize").Sequelize;
const utils = require("../../Helper/utils");
const { Op } = require("sequelize");
const {
  STATUS_CODES,
  STATUS_MESSAGE,
  STATUS,
  ROLE,
  SALES_STATUS,
} = require("../../Configs/constants");
const Sales = require("../../Database/Schema/sales");

class SalesService {
  // Create Sales records
  static async salesCreate(data, userData) {
    try {
      let requireFields = ["product_name", "purchase_from"];
      let verifyFields = await utils.validateFields(data, requireFields);
      if (verifyFields.status === 2) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message: verifyFields.message,
        };
        return failedRequestResponse;
      }
      if (userData?.role !== ROLE.EMPLOYEE) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message:
            "Permission Denied: Only employees are allowed to create sales records.",
        };
        return failedRequestResponse;
      }
      // Order number
      let orderNumber = await utils.orderNumber();
      // Create Sales record
      let createObject = {
        product_name: data?.product_name,
        purchase_from: data?.purchase_from,
        order_number: orderNumber,
        created_by: userData?.id,
      };
      let createSales = await Sales.create(createObject);
      let responseObject = {
        id: createSales.id,
        product_name: data?.product_name,
        purchase_from: data?.purchase_from,
        order_number: orderNumber,
        created_by: userData?.id,
      };
      let successResponse = {
        data: responseObject,
        status: STATUS_CODES.SUCCESS,
        message: STATUS_MESSAGE.SALES.SALES_RECORD_CREATE,
      };
      return successResponse;
    } catch (error) {
      console.error(error);
      error = error ? error.toString() : "server error";
      return {
        status: STATUS_CODES.SERVER_ERROR,
        message: error,
      };
    }
  }
  // Update sales Records
  static async updateSalesRecords(data, userData) {
    try {
      let requireFields = ["sales_id", "product_name", "purchase_from"];
      let verifyFields = await utils.validateFields(data, requireFields);
      if (verifyFields.status === 2) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message: verifyFields.message,
        };
        return failedRequestResponse;
      }
      if (userData?.role !== ROLE.EMPLOYEE) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message:
            "Permission Denied: Only employees are allowed to update sales records.",
        };
        return failedRequestResponse;
      }
      // check is valid sales request
      let isSalesRecord = await Sales.findOne({
        where: {
          id: data?.sales_id,
        },
        attributes: ["id", "ready_for_review"],
      });
      if (!isSalesRecord) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message: "Invalid sales record",
        };
        return failedRequestResponse;
      }
      if (isSalesRecord.ready_for_review == 1) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message:
            "You cannot update the sales record after it has been marked as ready for review.",
        };
        return failedRequestResponse;
      }
      // Update sales record
      let updateObject = {
        product_name: data?.product_name,
        purchase_from: data?.purchase_from,
        updated_by: userData?.id,
      };
      await Sales.update(updateObject, {
        where: {
          id: data?.sales_id,
        },
      });
      let responseObject = {
        id: data?.sales_id,
        product_name: data?.product_name,
        purchase_from: data?.purchase_from,
        updated_by: userData?.id,
      };
      let successResponse = {
        data: responseObject,
        status: STATUS_CODES.SUCCESS,
        message: STATUS_MESSAGE.SALES.SALES_RECORD_UPDATE,
      };
      return successResponse;
    } catch (error) {
      console.error(error);
      error = error ? error.toString() : "server error";
      return {
        status: STATUS_CODES.SERVER_ERROR,
        message: error,
      };
    }
  }
  // Update review status
  static async updateReviewStatus(data, userData) {
    try {
      let requireFields = ["sales_id", "ready_for_review"];
      let verifyFields = await utils.validateFields(data, requireFields);
      if (verifyFields.status === 2) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message: verifyFields.message,
        };
        return failedRequestResponse;
      }
      if (userData?.role !== ROLE.EMPLOYEE) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message:
            "Permission Denied: Only employees are allowed to update sales record status.",
        };
        return failedRequestResponse;
      }
      // Check is valid sales record
      let isSalesRecord = await Sales.findOne({
        where: {
          id: data?.sales_id,
        },
        attributes: ["id", "ready_for_review"],
      });
      if (!isSalesRecord) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message: "Invalid sales record",
        };
        return failedRequestResponse;
      }

      if (isSalesRecord.ready_for_review == 1) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message:
            "You cannot update the sales record again after it has been marked as ready for review.",
        };
        return failedRequestResponse;
      }

      // Update object
      let updateObject = {
        ready_for_review: data?.ready_for_review,
        updated_by: userData?.id,
      };
      await Sales.update(updateObject, {
        where: {
          id: data?.sales_id,
        },
      });
      let successResponse = {
        data: null,
        status: STATUS_CODES.SUCCESS,
        message: STATUS_MESSAGE.SALES.SALES_RECORD_STATUS_UPDATE,
      };
      return successResponse;
    } catch (error) {
      console.error(error);
      error = error ? error.toString() : "server error";
      return {
        status: STATUS_CODES.SERVER_ERROR,
        message: error,
      };
    }
  }
  // Update sales manager status
  static async updateSalesManagerStatus(data, userData) {
    try {
      let requireFields = ["sales_id"];
      let verifyFields = await utils.validateFields(data, requireFields);
      if (verifyFields.status === 2) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message: verifyFields.message,
        };
        return failedRequestResponse;
      }
      if (userData?.role !== ROLE.SALES_MANAGER) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message:
            "Permission Denied: Only salesManager are allowed to update sales record status.",
        };
        return failedRequestResponse;
      }
      // Check is valid sales record
      let isSalesRecord = await Sales.findOne({
        where: {
          id: data?.sales_id,
          status: { [Op.ne]: SALES_STATUS.SUB_ADMIN_APPROVE },
        },
        attributes: ["id"],
      });
      if (!isSalesRecord) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message: "Invalid sales record",
        };
        return failedRequestResponse;
      }
      // update Sales manager approve status
      let updateObject = {
        status: SALES_STATUS.SALES_MANAGER_APPROVE,
        updated_by: userData?.id,
      };
      await Sales.update(updateObject, {
        where: {
          id: data?.sales_id,
        },
      });
      let successResponse = {
        data: null,
        status: STATUS_CODES.SUCCESS,
        message:
          STATUS_MESSAGE.SALES.SALES_STATUS_UPDATE_APPROVED_SALES_MANAGER,
      };
      return successResponse;
    } catch (error) {
      console.error(error);
      error = error ? error.toString() : "server error";
      return {
        status: STATUS_CODES.SERVER_ERROR,
        message: error,
      };
    }
  }
  // Approve by sub Admin
  static async approveSalesRecordsSubAdmin(data, userData) {
    try {
      let requireFields = ["sales_id"];
      let verifyFields = await utils.validateFields(data, requireFields);
      if (verifyFields.status === 2) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message: verifyFields.message,
        };
        return failedRequestResponse;
      }
      if (userData?.role !== ROLE.SUB_ADMIN) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message:
            "Permission Denied: Only subAdmin are allowed to update sales record status.",
        };
        return failedRequestResponse;
      }
      // Check is valid sales record
      let isSalesRecord = await Sales.findOne({
        where: {
          id: data?.sales_id,
          // status: { [Op.ne]: SALES_STATUS.SUB_ADMIN_APPROVE },
        },
        attributes: ["id", "status"],
      });
      if (!isSalesRecord) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message: "Invalid sales record",
        };
        return failedRequestResponse;
      }
      if (isSalesRecord.status < SALES_STATUS.SUB_ADMIN_APPROVE) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message: "Sales manager approval is pending",
        };
        return failedRequestResponse;
      }
      // update Sales manager approve status
      let updateObject = {
        status: SALES_STATUS.SUB_ADMIN_APPROVE,
        order_executed: 1,
        updated_by: userData?.id,
      };
      await Sales.update(updateObject, {
        where: {
          id: data?.sales_id,
        },
      });
      let successResponse = {
        data: null,
        status: STATUS_CODES.SUCCESS,
        message: STATUS_MESSAGE.SALES.APPROVED_SUB_ADMIN,
      };
      return successResponse;
    } catch (error) {
      console.error(error);
      error = error ? error.toString() : "server error";
      return {
        status: STATUS_CODES.SERVER_ERROR,
        message: error,
      };
    }
  }
  // Sales Records
  static async salesRecords(data, userData) {
    try {
      let records;
      if (userData?.role == ROLE.EMPLOYEE) {
        records = await Sales.findAll({
          where: {
            created_by: userData?.id,
          },
          attributes: [
            "id",
            "product_name",
            "purchase_from",
            "order_number",
            "status",
            "order_executed",
            "ready_for_review",
          ],
        });
      }
      if (userData?.role == ROLE.SALES_MANAGER) {
        records = await Sales.findAll({
          where: {
            ready_for_review: 1,
          },
          attributes: [
            "id",
            "product_name",
            "purchase_from",
            "order_number",
            "status",
            "order_executed",
            "ready_for_review",
          ],
        });
      }
      if (userData?.role == ROLE.SUB_ADMIN) {
        records = await Sales.findAll({
          where: {},
          attributes: [
            "id",
            "product_name",
            "purchase_from",
            "order_number",
            "status",
            "order_executed",
            "ready_for_review",
          ],
        });
      }
      if (userData?.role == ROLE.SUPER_ADMIN) {
        records = await Sales.findAll({
          where: {},
          attributes: [
            "id",
            "product_name",
            "purchase_from",
            "order_number",
            "status",
            "order_executed",
            "ready_for_review",
          ],
        });
      }
      let successResponse = {
        data: records,
        status: STATUS_CODES.SUCCESS,
        message: STATUS_MESSAGE.SALES.SALES_RECORDS,
      };
      return successResponse;
    } catch (error) {
      console.error(error);
      error = error ? error.toString() : "server error";
      return {
        status: STATUS_CODES.SERVER_ERROR,
        message: error,
      };
    }
  }
}

module.exports = SalesService;

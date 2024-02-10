const { STATUS_CODES, STATUS_MESSAGE } = require("../../Configs/constants");
const SalesService = require("../../Models/v1/sales");
require("dotenv").config();

class SalesController {
  // Create Sales record
  static async salesCreate(req, res) {
    try {
      let data = req.body;
      let userData = req.userInfo;
      let request = await SalesService.salesCreate(data, userData);
      if (request.status !== STATUS_CODES.SUCCESS) {
        res.handler.errorResponse(request.status, request.message);
        return;
      }
      res.handler.successResponse(
        request.status,
        request.data,
        request.message
      );
    } catch (error) {
      error = error ? error.toString() : "server error";
      res.handler.serverError(error);
    }
  }
  // Update sales records
  static async updateSalesRecords(req, res) {
    try {
      let data = req.body;
      let userData = req.userInfo;
      let request = await SalesService.updateSalesRecords(data, userData);
      if (request.status !== STATUS_CODES.SUCCESS) {
        res.handler.errorResponse(request.status, request.message);
        return;
      }
      res.handler.successResponse(
        request.status,
        request.data,
        request.message
      );
    } catch (error) {
      error = error ? error.toString() : "server error";
      res.handler.serverError(error);
    }
  }
  // Update review status
  static async updateReviewStatus(req, res) {
    try {
      let data = req.body;
      let userData = req.userInfo;
      let request = await SalesService.updateReviewStatus(data, userData);
      if (request.status !== STATUS_CODES.SUCCESS) {
        res.handler.errorResponse(request.status, request.message);
        return;
      }
      res.handler.successResponse(
        request.status,
        request.data,
        request.message
      );
    } catch (error) {
      error = error ? error.toString() : "server error";
      res.handler.serverError(error);
    }
  }
  // Update sales manager status
  static async updateSalesManagerStatus(req, res) {
    try {
      let data = req.body;
      let userData = req.userInfo;
      let request = await SalesService.updateSalesManagerStatus(data, userData);
      if (request.status !== STATUS_CODES.SUCCESS) {
        res.handler.errorResponse(request.status, request.message);
        return;
      }
      res.handler.successResponse(
        request.status,
        request.data,
        request.message
      );
    } catch (error) {
      error = error ? error.toString() : "server error";
      res.handler.serverError(error);
    }
  }
  // Update status for approve status for sub admin
  static async approveSalesRecordsSubAdmin(req, res) {
    try {
      let data = req.body;
      let userData = req.userInfo;
      let request = await SalesService.approveSalesRecordsSubAdmin(
        data,
        userData
      );
      if (request.status !== STATUS_CODES.SUCCESS) {
        res.handler.errorResponse(request.status, request.message);
        return;
      }
      res.handler.successResponse(
        request.status,
        request.data,
        request.message
      );
    } catch (error) {
      error = error ? error.toString() : "server error";
      res.handler.serverError(error);
    }
  }
  // Sales records
  static async salesRecords(req, res) {
    try {
      let data = req.body;
      let userData = req.userInfo;
      let request = await SalesService.salesRecords(data, userData);
      if (request.status !== STATUS_CODES.SUCCESS) {
        res.handler.errorResponse(request.status, request.message);
        return;
      }
      res.handler.successResponse(
        request.status,
        request.data,
        request.message
      );
    } catch (error) {
      error = error ? error.toString() : "server error";
      res.handler.serverError(error);
    }
  }
}

module.exports = SalesController;

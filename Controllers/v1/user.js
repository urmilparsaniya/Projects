const UserService = require("../../Models/v1/user");
const utils = require("../../Helper/utils");
const { STATUS_CODES, STATUS_MESSAGE } = require("../../Configs/constants");
require("dotenv").config();

class UserController {
  // User Login
  static async userAuth(req, res) {
    try {
      let data = req.body;
      let request = await UserService.userAuth(data);
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
  // User Information
  static async userInfo(req, res) {
    try {
      let data = req.userInfo;
      if (!data) {
        res.handler.errorResponse(
          STATUS_CODES.BAD_REQUEST,
          STATUS_MESSAGE.VALIDATION.TOKEN.TOKEN_VALIDATION
        );
        return;
      }
      res.handler.success(
        data,
        STATUS_MESSAGE.USER.USER_INFO
      );
    } catch (error) {
      error = error ? error.toString() : "server error";
      res.handler.serverError(error);
    }
  }
  // Update User
  static async updateUser(req, res) {
    try {
      let data = req.body;
      let userData = req.userInfo
      let request = await UserService.updateUser(data, userData);
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
module.exports = UserController;

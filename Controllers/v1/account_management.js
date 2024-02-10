const { STATUS_CODES, STATUS_MESSAGE } = require("../../Configs/constants");
const AccountService = require("../../Models/v1/account_management");
require("dotenv").config();

class AccountController {
  // Create Account
  static async accountCreate(req, res) {
    try {
      let data = req.body;
      let userData = req.userInfo;
      let request = await AccountService.accountCreate(data, userData)
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

module.exports = AccountController;

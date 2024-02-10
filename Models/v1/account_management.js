require("dotenv").config();
const { Sequelize } = require("sequelize").Sequelize;
const utils = require("../../Helper/utils");
const { Op } = require("sequelize");
const {
  STATUS_CODES,
  STATUS_MESSAGE,
  STATUS,
  ROLE,
} = require("../../Configs/constants");
const User = require("../../Database/Schema/users");
const date = new Date();
const currentTimestampIST = date.toLocaleString("en-US", {
  timeZone: "Asia/Kolkata",
});

class AccountService {
  // create Account
  static async accountCreate(data, userData) {
    try {
      let requireFields = ["email", "password", "userName", "role"];
      let verifyFields = await utils.validateFields(data, requireFields);
      if (verifyFields.status === 2) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message: verifyFields.message,
        };
        return failedRequestResponse;
      }
      // Check is valid request
      let isUser = await User.findOne({
        where: {
          id: userData?.id,
          status: { [Op.ne]: STATUS.DELETE },
        },
        attributes: ["id", "role", "email"],
      });
      if (!isUser) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message: "Invalid user",
        };
        return failedRequestResponse;
      }
      if (isUser?.email == data?.email) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message: "Email already exist",
        };
        return failedRequestResponse;
      }
      // Check is valid email
      const isValidEmail = await utils.validateEmail(data.email);
      if (!isValidEmail) {
        return {
          status: STATUS_CODES.VALIDATION_ERROR,
          message: "Invalid email format",
        };
      }
      // Check role
      if (userData?.role >= data?.role) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.FORBIDDEN,
          message: "Insufficient permissions: You do not have the authority to create users with higher roles.",
        };
        return failedRequestResponse;
      }
      let password;
      if (data.password) {
        password = await utils.bcryptPassword(data.password);
      }
      // Create User Object
      let createObject = {
        userName: data?.userName,
        role: data?.role,
        email: data?.email,
        password: password,
        created_by: userData?.id
      };
      const user = await User.create(createObject)
      const responseObject = {
        id: user?.id,
        userName: data?.userName,
        role: data?.role,
        email: data?.email,
        password: password,
        created_by: userData?.id
      }
      let successRequestResponse = {
        data: responseObject,
        status: STATUS_CODES.SUCCESS,
        message: STATUS_MESSAGE.ACCOUNT.CREATE_ACCOUNT
      }
      return successRequestResponse
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

module.exports = AccountService;

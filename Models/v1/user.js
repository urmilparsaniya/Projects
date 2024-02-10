require("dotenv").config();
const moment = require("moment-timezone");
const { Sequelize } = require("sequelize").Sequelize;
const utils = require("../../Helper/utils");
const User = require("../../Database/Schema/users");
const { Op } = require("sequelize");
const {
  STATUS_CODES,
  STATUS_MESSAGE,
  STATUS,
} = require("../../Configs/constants");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const date = new Date();
const currentTimestampIST = date.toLocaleString("en-US", {
  timeZone: "Asia/Kolkata",
});

class UserService {
  static ACCESS_TOKEN_EXPIRATION = "1h"; // Access token expiration time
  // User Login
  static async userAuth(data) {
    try {
      let requireFields = ["email", "password"];
      let verifyFields = await utils.validateFields(data, requireFields);
      if (verifyFields.status === 2) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message: verifyFields.message,
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
      // Check is user Valid
      let isValidRequest = await User.findOne({
        where: {
          email: data?.email,
          status: { [Op.ne]: STATUS.DELETE },
        },
        attributes: ["id", "userName", "email", "password", "role", "status"],
      });
      if (!isValidRequest) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message: STATUS_MESSAGE.VALIDATION.USER.INVALID_CREDENTIAL,
        };
        return failedRequestResponse;
      }
      // check if the provided password match the store password
      const passwordMatch = await bcrypt.compare(
        data.password,
        isValidRequest.password
      );
      if (!passwordMatch) {
        return {
          status: STATUS_CODES.UNAUTHORIZED,
          message: STATUS_MESSAGE.VALIDATION.USER.INVALID_CREDENTIAL,
        };
      }
      // generate login token
      const loginToken = jwt.sign(
        { id: isValidRequest.id, role: isValidRequest.role },
        jwtSecret,
        {
          expiresIn: this.ACCESS_TOKEN_EXPIRATION,
        }
      );
      await User.update(
        {
          loginToken: loginToken,
          lastLoggedIn: currentTimestampIST,
        },
        {
          where: { id: isValidRequest.id },
        }
      );
      const responseObject = {
        id: isValidRequest.id,
        name: isValidRequest.userName,
        email: isValidRequest.email,
        role: isValidRequest.role,
        loginToken: loginToken,
        lastLoggedIn: currentTimestampIST,
      };
      let successRequestResponse = {
        data: responseObject,
        status: STATUS_CODES.SUCCESS,
        message: STATUS_MESSAGE.USER.USER_LOGIN,
      };
      return successRequestResponse;
    } catch (error) {
      console.error(error);
      error = error ? error.toString() : "server error";
      return {
        status: STATUS_CODES.SERVER_ERROR,
        message: error,
      };
    }
  }
  // User Data
  static async getUserData(loginToken) {
    try {
      let userData = await User.findOne({
        where: {
          loginToken: loginToken,
          status: { [Op.ne]: STATUS.DELETE },
        },
        attributes: [
          "id",
          "userName",
          "email",
          "role",
          "lastLoggedIn",
          "status",
        ],
      });
      return userData;
    } catch (error) {
      error = error ? error.toString() : "server error";
      return {
        status: STATUS_CODES.SERVER_ERROR,
        message: error,
      };
    }
  }
  // Update User
  static async updateUser(data, userData) {
    try {
      let requireFields = ["userName"];
      let verifyFields = await utils.validateFields(data, requireFields);
      if (verifyFields.status === 2) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message: verifyFields.message,
        };
        return failedRequestResponse;
      }
      // Check is valid user
      let isValidRequest = await User.findOne({
        where: {
          id: userData?.id,
          status: { [Op.ne]: STATUS.DELETE },
        },
        attributes: ["id"],
      });
      if (!isValidRequest) {
        let failedRequestResponse = {
          data: null,
          status: STATUS_CODES.BAD_REQUEST,
          message: "Invalid User",
        };
        return failedRequestResponse;
      }
      // Update User info
      let updateObject = {
        userName: data?.userName,
      };
      await User.update(updateObject, {
        where: {
          id: userData?.id,
        },
      });
      let successRequestResponse = {
        data: null,
        status: STATUS_CODES.SUCCESS,
        message: "User details update successfully",
      };
      return successRequestResponse;
    } catch (error) {
      error = error ? error.toString() : "server error";
      return {
        status: STATUS_CODES.SERVER_ERROR,
        message: error,
      };
    }
  }
}

module.exports = UserService;

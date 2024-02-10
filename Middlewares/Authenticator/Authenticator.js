const { STATUS_CODES, STATUS_MESSAGE } = require("../../Configs/constants");
const UserService = require("../../Models/v1/user");

class Authenticator {
  async authenticateUser(req, res, next) {
    let loginToken = req?.headers["login-token"];
    if (!loginToken) {
      res.handler.errorResponse(
        STATUS_CODES.EXPECTATION_FAILED,
        STATUS_MESSAGE.VALIDATION.TOKEN.TOKEN_VALIDATION
      );
      return false;
    }
    const userData = await UserService.getUserData(loginToken);
    if (!userData) {
      res.handler.errorResponse(
        STATUS_CODES.EXPECTATION_FAILED,
        STATUS_MESSAGE.VALIDATION.TOKEN.TOKEN_VALIDATION
      );
      return;
    }
    req.userInfo = userData;
    next();
  }
}

module.exports = Authenticator;

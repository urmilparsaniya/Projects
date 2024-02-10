const utils = require("../Helper/utils");
const { STATUS_CODES } = require("../Configs/constants");
class ResponseHandler {
  req;
  res;
  url;
  is_swagger;
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.url = req?.originalUrl;
    this.is_swagger = req?.headers?.is_swagger
      ? req?.headers?.is_swagger.toString()
      : "2";
  }
  // Custom Response
  async customResponse(code, response) {
    code = code ? code : 200;
    this.is_swagger = this?.req?.headers?.is_swagger
      ? this?.req?.headers?.is_swagger.toString()
      : "2";

    response = await utils.cleanResponse(response);
    if (this.is_swagger == "1") {
      this.res.status(code).json(response);
    } else {
      this.res.status(code).send(response);
    }
  }
  // Error Response
  async errorResponse(code, message) {
    this.is_swagger = this?.req?.headers?.is_swagger
      ? this?.req?.headers?.is_swagger.toString()
      : "2";

    let response = {
      data: null,
      message: message,
      status_code: code,
    };
    response = await utils.cleanResponse(response);
    if (this.is_swagger == "1") {
      this.res.status(code).json(response);
    } else {
      this.res.status(code).send(response);
    }
  }
  // Success Response
  async successResponse(code, data, message) {
    this.is_swagger = this?.req?.headers?.is_swagger
      ? this?.req?.headers?.is_swagger.toString()
      : "2";

    let response = {
      data: data,
      message: message,
      status_code: code,
    };
    response = await utils.cleanResponse(response);
    if (this.is_swagger == "1") {
      this.res.status(code).json(response);
    } else {
      this.res.status(code).send(response);
    }
  }
  // Common Sender Response
  async sender(code, message, data, error) {
    code = code ? code : 200;
    data = data ? data : null;
    message = message ? message : "";
    error = error ? error : "";
    let response = {
      data: data,
      message: error ? error : message,
      status_code: code,
    };
    this.is_swagger = this?.req?.headers?.is_swagger
      ? this?.req?.headers?.is_swagger.toString()
      : "2";
    response = await utils.cleanResponse(response);
    if (this.is_swagger == "1") {
      this.res.status(code).json(response);
    } else {
      this.res.status(code).send(response);
    }
    if (error) {
      // HANDLE LOGS AND OTHER STUFF
      console.log("ResponseHandler -> sender -> error", error);
    }
  }
  // 2XX SUCCESS
  async success(data, message, info) {
    data = await utils.cleanResponse(data);
    this.sender(
      STATUS_CODES.SUCCESS,
      message || "Request has been completed successfully.",
      data,
      info
    );
  }
  async created(data, message, info) {
    data = await utils.cleanResponse(data);
    this.sender(
      STATUS_CODES.CREATED,
      message || "Request has been created successfully.",
      data,
      info
    );
  }
  // 4XX CLIENT ERROR
  async badRequest(data, message, info) {
    if (data) {
      data = await utils.cleanResponse(data);
    }
    console.log(data, "data");
    console.log(message, "message");
    console.log(info, "info");

    this.sender(
      STATUS_CODES.BAD_REQUEST,
      message || "Request line contained invalid characters.",
      data,
      info
    );
  }
  async unauthorized(data, message, info) {
    data = await utils.cleanResponse(data);
    this.sender(
      STATUS_CODES.UNAUTHORIZED,
      message || "You are not authorized to access.",
      data,
      info
    );
  }
  async forbidden(data, message, info) {
    data = await utils.cleanResponse(data);
    this.sender(
      STATUS_CODES.FORBIDDEN,
      message || "You are not authorized to access.",
      data,
      info
    );
  }
  async notFound(data, message, info) {
    data = await utils.cleanResponse(data);
    this.sender(
      STATUS_CODES.NOT_FOUND,
      message || "Resource associated with the request could not be found.",
      data,
      info
    );
  }
  async notAllowed(data, message, info) {
    data = await utils.cleanResponse(data);
    this.sender(
      STATUS_CODES.NOT_ALLOWED,
      message || "This operation is not allowed.",
      undefined,
      info
    );
  }
  async conflict(data, message, info) {
    data = await utils.cleanResponse(data);
    this.sender(
      STATUS_CODES.CONFLICT,
      message || "Provided information already exist!",
      data,
      info
    );
  }
  async tooManyRequest(data, message, info) {
    data = await utils.cleanResponse(data);
    this.sender(
      STATUS_CODES.TOO_MANY_REQUESTS,
      message || "Too Many Request.",
      data,
      info
    );
  }
  async preconditionFailed(data, message, info) {
    data = await utils.cleanResponse(data);
    this.sender(
      STATUS_CODES.PRECONDITION_FAILED,
      message || "Please complete other steps first",
      data,
      info
    );
  }
  async validationError(data, message, info) {
    data = await utils.cleanResponse(data);
    this.sender(
      STATUS_CODES.VALIDATION_ERROR,
      message || "Validation error !",
      data,
      info
    );
  } // 5XX SERVER ERROR
  async serverError(error, data, message) {
    data = await utils.cleanResponse(data);
    // if (error && error.name === 'ValidationError')
    //   return this.validationError(error)
    this.sender(
      STATUS_CODES.SERVER_ERROR,
      message || "Request failed due to an internal error.",
      data,
      error
    );
  }
}

module.exports = ResponseHandler;

const express = require("express");
const router = express.Router();
const Authenticator = require("../../Middlewares/Authenticator/Authenticator");
const AccountController = require("../../Controllers/v1/account_management");
const authenticator = new Authenticator();
const authenticateUser = authenticator.authenticateUser;

// Account create
router.route("/account-create").post(authenticateUser, AccountController.accountCreate)

module.exports = router
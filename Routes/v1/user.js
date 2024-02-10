const express = require("express");
const router = express.Router();
const { body, check } = require("express-validator");
const UserController = require("../../Controllers/v1/user")
const Authenticator = require("../../Middlewares/Authenticator/Authenticator")
const authenticator = new Authenticator();
const authenticateUser = authenticator.authenticateUser;

// Login User
router.route("/login").post(UserController.userAuth)
// User Details
router.route("/user-details").get(authenticateUser, UserController.userInfo)
// User Update
router.route("/update-user").put(authenticateUser, UserController.updateUser)

module.exports = router
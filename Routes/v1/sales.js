const express = require("express");
const router = express.Router();
const Authenticator = require("../../Middlewares/Authenticator/Authenticator");
const SalesController = require("../../Controllers/v1/sales");
const authenticator = new Authenticator();
const authenticateUser = authenticator.authenticateUser;

// Sales record create
router.route("/sales-record-create").post(authenticateUser, SalesController.salesCreate)
// Update Sales records
router.route("/update-sales-records").put(authenticateUser, SalesController.updateSalesRecords)
// Update review status
router.route("/update-review-status").put(authenticateUser, SalesController.updateReviewStatus)
// Update status for sales manager
router.route("/approve-salesRecord-salesManager").put(authenticateUser, SalesController.updateSalesManagerStatus)
// Update status for sub admin
router.route("/approve-salesRecord-subAdmin").put(authenticateUser, SalesController.approveSalesRecordsSubAdmin)
// Get records according role and status
router.route("/sales-records").get(authenticateUser, SalesController.salesRecords)

module.exports = router
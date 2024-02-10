require("dotenv").config();
const STATUS_CODES  = require("../Configs/constants")
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/tempfiles");
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.split(".").pop();
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "." + ext);
  },
});
const upload = multer({
  storage: storage,
  limits: { fieldSize: 2 * 1024 * 1024 },
});

module.exports = (app) => {
  // Application Welcome
  app.get("/", (req, res) => {
    res
      .status(STATUS_CODES.SUCCESS)
      .send("Welcome to " + process.env.PROJECT_NAME);
  });
  // User management 
  app.use(
    "/" + process.env.API_BASE + "/v1/user/",
    upload.single("file"),
    require("./v1/user")
  )
  // Account management
  app.use(
    "/" + process.env.API_BASE + "/v1/account/",
    upload.single("file"),
    require("./v1/account_management")
  )
  // Sales Management
  app.use(
    "/" + process.env.API_BASE + "/v1/sales/",
    upload.single("file"),
    require("./v1/sales")
  )
};

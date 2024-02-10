const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const bodyParser = require("body-parser");
const cors = require("cors");
const utils = require("./Helper/utils");
const ResponseHandler = require("./Configs/responseHandler");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
app.use(cors());

app.use(bodyParser.json({ limit: "2048mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "2048mb",
    extended: true,
    parameterLimit: 50000000000000
  })
);

// ------------------------    RESPONSE HANDLER    -------------------

app.use(async (req, res, next) => {
  req.body = await utils.cleanObject(req.body);
  res.handler = new ResponseHandler(req, res); // Use the 'new' keyword
  next();
});

// Swagger Document
app.use("/api-docs/v1", swaggerUi.serve, (req, res) => {
  let html = swaggerUi.generateHTML(swaggerDocument);
  res.send(html);
});

// --------------------------    ROUTES    ------------------
try {
  const appRoutes = require("./Routes");
  appRoutes(app);
} catch (error) {
  console.log(error);
  error = error ? error.toString() : "server error";
  console.log("Route Crash -> ", error);
}

// --------------------------    START SERVER    ---------------------
app.listen(port, async () => {
  console.log(`Server is listening on port ${port}`);
});

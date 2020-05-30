const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routers/routes");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/", routes);

module.exports = app;

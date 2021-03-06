const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var { mongoose } = require("./db/mongoose");
var routes = require("./routes/index");
var { Initialization } = require("./initialization");

var app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/api", routes);

app.listen(3000, () => {
  console.log("Started on port 3000");
  Initialization();
});

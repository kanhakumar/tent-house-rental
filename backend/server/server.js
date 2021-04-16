const express = require("express");
const bodyParser = require("body-parser");

var { mongoose } = require("./db/mongoose");
// var { User } = require("./models/user");
var { Customer } = require("./models/customer");
var { Product } = require("./models/product");
var { Transaction, MakeTransaction } = require("./models/transaction");
var routes = require("./routes/index");
var {
  Initialization,
  InitializeProduct,
  InitializeCustomer,
} = require("./initialization");

var app = express();

app.use(bodyParser.json());

app.use("/api", routes);

app.listen(3000, () => {
  console.log("Started on port 3000");
  Initialization();
});

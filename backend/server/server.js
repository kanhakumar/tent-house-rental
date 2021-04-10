var express = require("express");

var { mongoose } = require("./db/mongoose");
// var { User } = require("./models/user");
var { Customer } = require("./models/customer");
var { Product } = require("./models/product");
// var { Transaction } = require("./models/transaction");
var { Initialization } = require("./initialization");

var app = express();

app.listen(3000, () => {
  console.log("Started on port 3000");
  Initialization();
});

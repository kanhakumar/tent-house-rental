const express = require("express");
const bodyParser = require("body-parser");


var { mongoose } = require("./db/mongoose");
// var { User } = require("./models/user");
var { Customer } = require("./models/customer");
var { Product } = require("./models/product");
var { Transaction, MakeTransaction } = require("./models/transaction");
var {
  Initialization,
  InitializeProduct,
  InitializeCustomer,
} = require("./initialization");

var app = express();

app.use(bodyParser.json());

app.post("/products", (req, res) => {
  var ProductList = [
    {
      title: req.body.product_title,
      quantity: req.body.quantity_total,
      price: req.body.price,
    },
  ];
  InitializeProduct(ProductList);
});

app.post("/customers", (req, res) => {
  var CustomerList = [{ name: req.body.customer_name }];
  InitializeCustomer(CustomerList);
});

app.post("/transactions", (req, resp) => {
  var TransactionList = [
    {
      customer_id: req.body.customer_id,
      product_id: req.body.product_id,
      transaction_type: req.body.transaction_type,
      quantity: req.body.quantity,
    },
  ];
  MakeTransaction(TransactionList);
  // console.log(req.body);
});

app.get("/products", (req, res) => {
  Product.find()
    .sort("product_title")
    .then(
      (products) => {
        res.send({ products });
      },
      (e) => {
        res.status(400).send(e);
      }
    );
});

app.get("/customers", (req, res) => {
  Customer.find()
    .sort("customer_name")
    .then(
      (customers) => {
        res.send({ customers });
      },
      (e) => {
        res.status(400).send(e);
      }
    );
});

app.listen(3000, () => {
  console.log("Started on port 3000");
  Initialization();
});

// var { mongoose } = require("./db/mongoose");
var { Customer } = require("./models/customer");
var { Product } = require("./models/product");
const { Transaction } = require("./models/transaction");

// Product.deleteMany({});

var CustomerList = [
  { name: "kanha" },
  { name: "kumar" },
  { name: "shashank" },
  { name: "raj" },
  { name: "aditya" },
];
var ProductList = [
  { title: "Plastic Chairs", quantity: 10000, price: 20 },
  { title: "Tiffany Chairs", quantity: 5000, price: 40 },
  { title: "Plastic Round Tables", quantity: 100, price: 100 },
  { title: "Gas Stoves", quantity: 25, price: 300 },
  { title: "Chair Covers", quantity: 6000, price: 60 },
];

var RemoveTransactionData = async () => {
  await Transaction.deleteMany({}).then(() => {
    console.log("Transaction Data deleted successfully");
  });
};

var RemoveProductData = async () => {
  await Product.deleteMany({}).then(() => {
    console.log("Product Data deleted successfully");
  });
};

var RemoveCustomerData = async () => {
  await Customer.deleteMany({}).then(() => {
    console.log("Customer Data deleted successfully");
  });
};

var InitializeCustomer = (CustomerList) => {
  CustomerList.forEach(async (cust) => {
    var customer = new Customer({
      customer_name: `${cust.name}`,
    });
    await customer
      .save()
      .then((res) => {
        console.log("Customer created Successfully", res);
      })
      .catch((e) => {
        console.log("Unable to create customer as", e._message);
      });
  });
};

var InitializeProduct = (ProductList) => {
  ProductList.forEach(async (prod) => {
    var product = new Product({
      product_title: prod.title,
      quantity_total: prod.quantity,
      price: prod.price,
    });
    await product
      .save()
      .then((res) => {
        console.log("Product created Successfully", res);
      })
      .catch((e) => {
        console.log("Unable to create product as", e);
      });
  });
};

var Initialization = async () => {
  // return ;
  await RemoveTransactionData();
  await RemoveProductData();
  await RemoveCustomerData();
  await InitializeCustomer(CustomerList);
  await InitializeProduct(ProductList);
};

module.exports = { Initialization, InitializeCustomer, InitializeProduct };

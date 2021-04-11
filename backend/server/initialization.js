// var { mongoose } = require("./db/mongoose");
const { Collection } = require("mongoose");
var { Customer } = require("./models/customer");
var { Product } = require("./models/product");

// Product.deleteMany({});

var CustomerList = [{ name: "kanha" }, { name: "kumar" }];
var ProductList = [
  { title: "Plastic Chairs", quantity: 10000, price: 20 },
  { title: "Tiffany Chairs", quantity: 5000, price: 40 },
];

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
        console.log("Unable to create product as", e._message);
      });
  });
};

var Initialization = () => {
  InitializeCustomer(CustomerList);
  InitializeProduct(ProductList);
};

module.exports = { Initialization, InitializeCustomer, InitializeProduct };

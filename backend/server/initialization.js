var { Customer } = require("./models/customer");
var { Product } = require("./models/product");

var Initialization = () => {
  var Product_1 = new Product({
    product_id: 1,
    product_title: "Plastic Chairs",
    quantity_total: 10000,
    price: 20,
  });

  var Product_2 = new Product({
    product_id: 2,
    product_title: "Tiffany Chairs",
    quantity_total: 5000,
    price: 40,
  });

  var Customer_1 = new Customer({
    customer_id: 1,
    customer_name: "kanha",
  });

  var Customer_2 = new Customer({
    customer_id: 2,
    customer_name: "kumar",
  });

  Product_1.save().then(
  (e)=>{
    console.log(e);
  });
  Product_2.save();
  Customer_1.save();
  Customer_2.save();
};

module.exports = { Initialization };

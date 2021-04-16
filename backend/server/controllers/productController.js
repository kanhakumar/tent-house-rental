const { Product } = require("../models/product");
const _ = require("lodash");

module.exports = {
  fetchAllProducts: async (req, res) => {
    try {
      const products = await Product.find().sort("product_title");
      return res.send({ success: true, products });
    } catch (e) {
      return res.send({ success: false, e });
    }
  },
  addNewProducts: async (req, res) => {
    try {
      var body = _.pick(req.body, ["product_title", "quantity_total", "price"]);
      var product = new Product(body);
      const products = await product.save();
      return res.send({ success: true, products });
    } catch (e) {
      return res.send({ success: false, e });
    }
  },
};

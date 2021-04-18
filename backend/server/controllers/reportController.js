const { Product } = require("../models/product");

module.exports = {
  fetchSummaryReport: async (req, res) => {
    try {
      var products = await Product.find({}).select(
        "product_title quantity_total"
      );
      res.send({ success: true, products });
    } catch (e) {
      res.send({ success: false, e });
    }
  },
};

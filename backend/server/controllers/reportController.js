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
  fetchDetailedReport: async (req, res) => {
    try {
      var report = await Product.aggregate([
        {
          $lookup: {
            from: "transactions",
            localField: "_id",
            foreignField: "product_id",
            as: "report",
          },
        },
      ]);
      res.send({ success: true, report });
    } catch (e) {
      res.send({ success: false, e });
    }
  },
};

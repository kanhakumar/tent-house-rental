const _ = require("lodash");

const { Product } = require("../models/product");
const { Transaction } = require("../models/transaction");

module.exports = {
  addNewTransaction: async (req, res) => {
    try {
      var body = _.pick(req.body, [
        "customer_id",
        "product_id",
        "transaction_type",
        "quantity",
      ]);
      var product = await Product.findById(body.product_id);
      var available_quantity = product.quantity_total - product.quantity_booked;
      if (available_quantity >= body.quantity) {
        var transaction = new Transaction(body);
        var productSelected = await Product.findByIdAndUpdate(
          body.product_id,
          {
            $inc: { quantity_booked: body.quantity },
          },
          { new: true }
        );
        var transactions = await transaction.save();
      }else{
          throw `Avalaible product quantity is ${available_quantity} which is less than asked.`
      }
      return res.send({ success: true, productSelected, transactions });
    } catch (e) {
      return res.send({ success: false, e });
    }
  },
};

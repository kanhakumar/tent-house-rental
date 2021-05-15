const _ = require("lodash");
const mongoose = require("mongoose");

const { Product } = require("../models/product");
const { Transaction } = require("../models/transaction");

module.exports = {
  fetchAllTransactions: async (req, res) => {
    try {
      const transactions = await Transaction.find().sort({
        transaction_date_time: -1,
      });
      return res.send({ success: true, transactions });
    } catch (e) {
      return res.send({ success: false, e });
    }
  },
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
      } else {
        throw `Avalaible product quantity is ${available_quantity} which is less than asked.`;
      }
      return res.send({ success: true, productSelected, transactions });
    } catch (e) {
      return res.send({ success: false, e });
    }
  },
  reverseTransaction: async (req, res) => {
    try {
      var body = _.pick(req.body, [
        "customer_id",
        "product_id",
        "transaction_type",
        "quantity",
        "transaction_id_parent",
      ]);
      var transaction = await Transaction.findById(body.transaction_id_parent);
      if (transaction) {
        var reverseTransaction = new Transaction(body);
        var transactions = await reverseTransaction.save();
        var productReturned = await Product.findByIdAndUpdate(
          transaction.product_id,
          {
            $inc: { quantity_booked: -transaction.quantity },
          },
          { new: true }
        );
        return res.send({ success: true, productReturned, transactions });
      } else {
        throw "No parent Id found.";
      }
    } catch (e) {
      return res.send({ success: false, e });
    }
  },
  editTransaction: async (req, res) => {
    try {
      var body = _.pick(req.body, [
        "_id",
        "customer_id",
        "product_id",
        "quantity",
      ]);
      var required_quantity = 0;
      var transaction = await Transaction.findById(body._id);
      var product = await Product.findById(body.product_id);
      var available_quantity = product.quantity_total - product.quantity_booked;
      if (transaction.product_id.equals(body.product_id)) {
        required_quantity = body.quantity - transaction.quantity;
      } else {
        required_quantity = body.quantity;
      }
      if (available_quantity >= required_quantity) {
        var editedTransaction = await Transaction.findByIdAndUpdate(
          body._id,
          {
            customer_id: body.customer_id,
            product_id: body.product_id,
            quantity: body.quantity,
          },
          { new: true }
        );
      } else {
        throw `Avalaible product quantity is ${available_quantity} which is less than asked.`;
      }
      if (editedTransaction) {
        var editedProduct = await Product.findByIdAndUpdate(
          body.product_id,
          {
            $inc: { quantity_booked: required_quantity },
          },
          { new: true }
        );
      } else {
        throw "Transaction have not modified.";
      }
      return res.send({
        success: true,
        editedProduct,
        editedTransaction,
        required_quantity,
      });
    } catch (e) {
      return res.send({ success: false, e });
    }
  },
};

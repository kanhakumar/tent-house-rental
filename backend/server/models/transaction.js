const mongoose = require("mongoose");

var TransactionSchema = new mongoose.Schema({
  // transaction_id: {
  //   type: Number,
  //   unique: true,
  // },
  transaction_date_time: {
    // required: true,
    type: Date,
    default: new Date().toISOString(),
  },
  customer_id: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  product_id: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  transaction_type: {
    required: true,
    type: String,
    enum: ["OUT", "IN"],
  },
  quantity: {
    required: true,
    type: Number,
  },
  transaction_id_parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Transaction",
    unique: true,
    sparse:true
  },
});

var Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = { Transaction };

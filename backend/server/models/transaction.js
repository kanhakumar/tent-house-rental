const mongoose = require("mongoose");

var TransactionSchema = new mongoose.Schema({
  transaction_id: {
    type: Number,
    unique: true,
  },
  transaction_data_time: {
    required: true,
    type: Date,
  },
  customer_id: {
    required: true,
    type: Number,
  },
  product_id: {
    required: true,
    type: Number,
  },
  transaction_type: {
    required: true,
    type: String,
  },
  quantity: {
    required: true,
    type: Number,
  },
  transaction_id_parent: {
    type: Number,
  },
});

var Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = { Transaction };

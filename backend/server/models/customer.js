const mongoose = require("mongoose");

var CustomerSchema = new mongoose.Schema({
  customer_id: {
    type: Number,
    unique: true,
  },
  customer_name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
});

var Customer = mongoose.model("Customer", CustomerSchema);

module.exports = { Customer };

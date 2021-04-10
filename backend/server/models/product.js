const mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
  product_id: {
    type: Number,
    unique: true,
  },
  product_title: {
    type: String,
    required: true,
  },
  quantity_total: {
    type: Number,
    required: true,
  },
  quantity_booked: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
});

var Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };

const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const { Product } = require("./product");

var MakeTransaction = (TransactionList) => {
  if (TransactionList[0].transaction_type === "OUT") {
    Product.findById(TransactionList[0].product_id, (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        var available_quantity = docs.quantity_total - docs.quantity_booked;
        if (available_quantity >= TransactionList[0].quantity) {
          var transaction = new Transaction({
            customer_id: ObjectId(TransactionList[0].customer_id),
            product_id: ObjectId(TransactionList[0].product_id),
            transaction_type: TransactionList[0].transaction_type,
            quantity: TransactionList[0].quantity,
          });

          Product.findByIdAndUpdate(TransactionList[0].product_id, {
            $inc: { quantity_booked: TransactionList[0].quantity },
          }).then(
            transaction
              .save()
              .then((res) => {
                console.log("Order Placed Successfully", res);
              })
              .catch((e) => {
                console.log("Unable to place order as", e._message, e);
              })
          );
        } else {
          console.log(
            `Unable to make transaction as product avaible is ${available_quantity}`
          );
        }
      }
    });
  }
};

var TransactionSchema = new mongoose.Schema({
  // transaction_id: {
  //   type: Number,
  //   unique: true,
  // },
  transaction_data_time: {
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
    type: Number,
  },
});

var Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = { Transaction, MakeTransaction };

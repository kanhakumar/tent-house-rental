var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TentHouseRental", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = { mongoose };

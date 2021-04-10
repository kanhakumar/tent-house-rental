const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    unique: true,
  },
  email: {
    type: String,
    // match: [/\S+@\S+\.\S+/, "is invalid"],
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

var User = mongoose.model("User", UserSchema);

module.exports = { User };

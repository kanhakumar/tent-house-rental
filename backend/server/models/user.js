const mongoose = require("mongoose");
const validator = require("validator");

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email",
    },
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
  tokens: [
    {
      access: {
        type: String,
      },
      token: {
        type: String,
      },
    },
  ],
});

var User = mongoose.model("User", UserSchema);

module.exports = { User };

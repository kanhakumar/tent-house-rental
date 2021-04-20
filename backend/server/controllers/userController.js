const _ = require("lodash");
const { User } = require("../models/user");

module.exports = {
  addUser: async (req, res) => {
    try {
      var body = _.pick(req.body, ["email", "name", "password"]);
      var user = new User(body);
      var users = await user.save();
      res.send({ success: true, users });
    } catch (e) {
      res.send({ success: false, e });
    }
  },
  signIn: async (req, res) => {
    try {
      var user = await User.findOne({ email: req.body.email });
      if (user === null) {
        throw "User not found";
      } else if (user.password === req.body.password) {
        res.send({ success: true });
      } else {
        throw "Wrong Password.";
      }
    } catch (e) {
      res.send({ success: false, e });
    }
  },
};

const { Customer } = require("../models/customer");
const _ = require("lodash");

module.exports = {
  fetchAllCustomers: async (req, res) => {
    try {
      const customers = await Customer.find().sort("customer_name");
      return res.send({ success: true, customers });
    } catch (e) {
      return res.send({ success: false, e });
    }
  },
  addNewCustomers: async (req, res) => {
    try {
      var body = _.pick(req.body, ["customer_name"]);
      var customer = new Customer(body);
      const customers = await customer.save();
      return res.send({ success: true, customers });
    } catch (e) {
      return res.send({ success: false, e });
    }
  },
  editCustomer: async (req, res) => {
    try {
      var body = _.pick(req.body, ["_id", "customer_name"]);
      var customer = await Customer.findByIdAndUpdate(
        body._id,
        {
          customer_name: body.customer_name,
        },
        { new: true }
      );
      return res.send({ success: true, customer });
    } catch (e) {
      return res.send({ success: false, e });
    }
  },
};

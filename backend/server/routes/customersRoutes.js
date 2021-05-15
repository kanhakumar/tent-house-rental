const express = require("express");
const {
  fetchAllCustomers,
  addNewCustomers,
  editCustomer,
} = require("../controllers/customerController");

const router = express.Router();

router.get("/", fetchAllCustomers);
router.post("/newCustomers", addNewCustomers);
router.put("/editCustomer", editCustomer);

module.exports = router;

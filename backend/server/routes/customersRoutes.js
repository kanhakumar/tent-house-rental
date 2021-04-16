const express = require("express");
const {
  fetchAllCustomers,
  addNewCustomers,
} = require("../controllers/customerController");

const router = express.Router();

router.get("/", fetchAllCustomers);
router.post("/newCustomers", addNewCustomers);

module.exports = router;
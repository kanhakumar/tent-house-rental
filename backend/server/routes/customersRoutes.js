const express = require("express");
const {
  fetchAllCustomers,
  addNewCustomers,
  editCustomer,
} = require("../controllers/customerController");
const Auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", Auth.verifyToken, fetchAllCustomers);
router.post("/newCustomers", Auth.verifyToken, addNewCustomers);
router.put("/editCustomer", Auth.verifyToken, editCustomer);

module.exports = router;

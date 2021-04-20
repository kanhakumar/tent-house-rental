const express = require("express");
const {
  addNewTransaction,
  fetchAllTransactions,
  reverseTransaction,
} = require("../controllers/transactionController");

const router = express.Router();

router.get("/", fetchAllTransactions);
router.post("/newTransactions", addNewTransaction);
router.post("/reverseTransactions", reverseTransaction);

module.exports = router;

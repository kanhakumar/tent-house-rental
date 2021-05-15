const express = require("express");
const {
  addNewTransaction,
  fetchAllTransactions,
  reverseTransaction,
  editTransaction,
} = require("../controllers/transactionController");

const router = express.Router();

router.get("/", fetchAllTransactions);
router.post("/newTransactions", addNewTransaction);
router.post("/reverseTransactions", reverseTransaction);
router.put("/editTransaction", editTransaction);

module.exports = router;

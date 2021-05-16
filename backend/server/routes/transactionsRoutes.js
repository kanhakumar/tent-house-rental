const express = require("express");
const {
  addNewTransaction,
  fetchAllTransactions,
  reverseTransaction,
  editTransaction,
} = require("../controllers/transactionController");
const Auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", Auth.verifyToken, fetchAllTransactions);
router.post("/newTransactions", Auth.verifyToken, addNewTransaction);
router.post("/reverseTransactions", Auth.verifyToken, reverseTransaction);
router.put("/editTransaction", Auth.verifyToken, editTransaction);

module.exports = router;

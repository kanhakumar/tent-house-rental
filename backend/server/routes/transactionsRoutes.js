const express = require('express');
const { addNewTransaction, fetchAllTransactions } = require('../controllers/transactionController');

const router = express.Router();

router.get('/',fetchAllTransactions);
router.post('/newTransactions',addNewTransaction);
// router.post('/reverseTransactions')

module.exports = router;
const express = require('express');
const { addNewTransaction } = require('../controllers/transactionController');

const router = express.Router();

// router.get('/',);
router.post('/newTransactions',addNewTransaction);
// router.post('/reverseTransactions')

module.exports = router;
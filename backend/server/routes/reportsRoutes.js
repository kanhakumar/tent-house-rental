const express = require('express');
const { fetchSummaryReport } = require('../controllers/reportController');

const router = express.Router();

router.get('/summaryReport',fetchSummaryReport);
// router.get('/detailedReport',);

module.exports = router;
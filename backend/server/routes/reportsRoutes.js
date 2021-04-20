const express = require('express');
const { fetchSummaryReport, fetchDetailedReport } = require('../controllers/reportController');

const router = express.Router();

router.get('/summaryReport',fetchSummaryReport);
router.get('/detailedReport',fetchDetailedReport);

module.exports = router;
const express = require("express");
const {
  fetchSummaryReport,
  fetchDetailedReport,
} = require("../controllers/reportController");
const Auth = require("../middlewares/auth");

const router = express.Router();

router.get("/summaryReport", Auth.verifyToken, fetchSummaryReport);
router.get("/detailedReport", Auth.verifyToken, fetchDetailedReport);

module.exports = router;

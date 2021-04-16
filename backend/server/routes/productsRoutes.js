const express = require("express");
const {
  fetchAllProducts,
  addNewProducts,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", fetchAllProducts);
router.post("/newProducts", addNewProducts);

module.exports = router;

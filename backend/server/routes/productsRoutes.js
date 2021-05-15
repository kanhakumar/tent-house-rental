const express = require("express");
const {
  fetchAllProducts,
  addNewProducts,
  editProduct,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", fetchAllProducts);
router.post("/newProducts", addNewProducts);
router.put("/editProduct", editProduct);

module.exports = router;

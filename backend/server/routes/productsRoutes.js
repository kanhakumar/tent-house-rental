const express = require("express");
const {
  fetchAllProducts,
  addNewProducts,
  editProduct,
} = require("../controllers/productController");
const Auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", Auth.verifyToken, fetchAllProducts);
router.post("/newProducts", Auth.verifyToken, addNewProducts);
router.put("/editProduct", Auth.verifyToken, editProduct);

module.exports = router;

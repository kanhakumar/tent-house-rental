const express = require("express");

const productRoutes = require("./productsRoutes");
const customerRoutes = require("./customersRoutes");
const transactionRoutes = require("./transactionsRoutes");

const router = express.Router();

router.use("/products", productRoutes);
router.use("/customers", customerRoutes);
router.use("/transactions", transactionRoutes);

module.exports = router;
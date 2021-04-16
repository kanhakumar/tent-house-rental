const express = require("express");

const productRoutes = require("./productsRoutes");
const customerRoutes = require("./customersRoutes");
const transactionRoutes = require("./transactionsRoutes");
const reportRoutes = require("./reportsRoutes");

const router = express.Router();

router.use("/products", productRoutes);
router.use("/customers", customerRoutes);
router.use("/transactions", transactionRoutes);
router.use("/reports", reportRoutes);

module.exports = router;

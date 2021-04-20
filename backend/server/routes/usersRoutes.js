const express = require("express");
const { signIn, addUser } = require("../controllers/userController");

const router = express.Router();

router.post("/signIn", signIn);
router.post("/addUser", addUser);

module.exports = router;

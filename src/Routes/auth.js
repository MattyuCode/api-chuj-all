const express = require("express");
const router = express.Router();
const { registerCtrll, loginCtrll } = require("../Controllers/authController");

router.post("/register", registerCtrll);

router.post("/login", loginCtrll);

module.exports = router;
 
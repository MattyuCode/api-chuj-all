const express = require("express");
const router = express.Router();
const { createUser, getAll } = require("../Controllers/usersController");

router.get("/", getAll);
router.post("/", createUser);

module.exports = router;

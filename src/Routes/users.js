const express = require("express");
const router = express.Router();
const { createUser, getAll, getUsersByUsers } = require("../Controllers/usersController");

router.get("/", getAll);
router.post("/", createUser);
router.get("/:user", getUsersByUsers);

module.exports = router;

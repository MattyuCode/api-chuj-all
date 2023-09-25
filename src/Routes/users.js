const express = require("express");
const router = express.Router();
const { createUser, getAll, getUsersByUsers, DeleteUserById } = require("../Controllers/usersController");

router.get("/", getAll);
router.post("/", createUser);
router.get("/:user", getUsersByUsers);
router.delete("/:id", DeleteUserById);

module.exports = router;

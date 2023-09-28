const express = require("express");
const { getAll, createDiccionary, UpdateById } = require("../Controllers/diccionarioController");
const router = express.Router();

router.get("/", getAll);
router.post("/", createDiccionary);
router.put("/:id", UpdateById);

module.exports = router;

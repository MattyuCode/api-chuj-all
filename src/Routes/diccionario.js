const express = require("express");
const { getAll, createDiccionary } = require("../Controllers/diccionarioController");
const router = express.Router();

router.get("/", getAll);
router.post("/", createDiccionary);

module.exports = router;

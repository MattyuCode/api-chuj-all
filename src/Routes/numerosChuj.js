const { getAll, getById, createData } = require("../Controllers/Numeros.Controller");
const express = require("express");
const router = express.Router();


router.get("/numerosChuj", getAll);
router.get("/numerosChuj/:id", getById);
router.post("/numerosChuj/", createData);

module.exports = router;

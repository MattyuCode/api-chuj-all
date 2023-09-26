const { obtenerDatos } = require("../Controllers/MyModeloController");
const express = require("express");
const router = express.Router();

router.get("/", obtenerDatos);

module.exports = router;

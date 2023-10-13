const {
  ObtenerTodasPalabras,
  createPalabras,
} = require("../Controllers/palabraController");
const express = require("express");
const router = express.Router();

router.get("/", ObtenerTodasPalabras);
router.post("/", createPalabras);

module.exports = router;

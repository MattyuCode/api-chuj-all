const {
  getAll,
  getById,
  createData,
  UpdateById,
  DeleteById,
} = require("../Controllers/Numeros.Controller");
const express = require("express");
const router = express.Router();

router.get("/numerosChuj", getAll);
router.get("/numerosChuj/:id", getById);
router.put("/numerosChuj/:id", UpdateById);
router.post("/numerosChuj/", createData);
router.delete("/numerosChuj/:id", DeleteById);

module.exports = router;

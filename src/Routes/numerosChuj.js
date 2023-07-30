const {
    //NOTE: ver completo el video de leifer para agregar tambien el de router y el otro video para ver las de mas metodos con los metodos que usa  leifer
  getAll,
  getById,
  createData,
  UpdateById,
  DeleteById,
} = require("../Controllers/numerosController");
const express = require("express");
const router = express.Router();

//TODO: TODO ESTO ES PARA RUTAS NORMAL 
// router.get("/numerosChuj", getAll);
// router.get("/numerosChuj/:id", getById);
// router.put("/numerosChuj/:id", UpdateById);
// router.post("/numerosChuj/", createData);
// router.delete("/numerosChuj/:id", DeleteById);

router.get("/", getAll);
router.get("/:id", getById);
router.put("/:id", UpdateById);
router.post("/", createData);
router.delete("/:id", DeleteById);

module.exports = router;

const express = require("express");
const router = express.Router();
const MyController = require("../Controllers/MyController");

const numerosController = require("../Controllers/numerosController");

router.get("/datos", () => {
  MyController.obtenerDatos();
});
// router.post("/datos", miControlador.crearDato);
// router.put("/datos/:id", miControlador.actualizarDato);
// router.delete("/datos/:id", miControlador.eliminarDato);

router.get("/numeosChuj", () => {
  numerosController.obtenerDatos()
});

module.exports = router;

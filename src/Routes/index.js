const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
  //TODO: numerosChuj.js [numerosChuj, js]
  return fileName.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file); //NOTE: numerosChuj, storage, ....

  if (name !== "index") {
    console.log(`Cargando ruta ${name}`)
    router.use(`/${name}`, require(`./${file}`)); //FIXME: http://localhost:8080/api/aqui va el nombre de rutas
  }
});

module.exports = router;

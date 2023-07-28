const numerosModel = require("./Models/Numeros.Models");

const mongoose = require("mongoose");
const express = require("express");
const http = require("http");
const env = require("dotenv").config();
const cors = require("cors");
const routes = require("./Routes/numerosChuj");
// const routes = require("./Routes/Storage");

const app = express();
const httpServer = http.createServer(app);
const port = process.env.PORT || 3434;

app.use(express.json());
app.use(cors());
app.use(express.static("Storage"));

app.use("/api/numerosChuj", async (req, res) => {
  try {
    const datos = await numerosModel.find();
    res.json({ datos });
    // console.log({ datos });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
});

app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos" });
});

mongoose
  .connect(process.env.ConnectionString, {
    useNewUrlParser: true,
    useUniFiedTopology: true,
  })
  .then(() => {
    console.log("Conexion exitosa");
  })
  .catch((err) => console.log("Error al conectar a MongoDB", err));

httpServer.listen(port, () => {
  console.log("Aplicación corriendo en el puerto:", `http://localhost:${port}`);
});

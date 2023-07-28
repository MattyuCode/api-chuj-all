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
app.use("/api", routes);

app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos" });
});

mongoose
  .connect(process.env.MONGODB_URI, {
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

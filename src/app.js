const mongoose = require("mongoose");
const express = require("express");
const http = require("http");
const env = require("dotenv").config();
const cors = require("cors");
const { connectToMongoDB } = require("../src/Config/database");

//TODO: TODO ESTO ES PARA RUTAS NORMAL
// const routes = require("./Routes/numerosChuj");
// const routes = require("./Routes/Storage");

//MAT: ESTO ES LO QUE HACE LEIFER CON EL INDEX EN ROUTES DINAMICO
const routes = require("./Routes");

const app = express();
const httpServer = http.createServer(app);
const port = process.env.PORT || 3434;

app.use(express.json());
app.use(
  cors({   
    origin: true,
    credentials: true,
  })
);
app.use("/api", routes);

app.use("/Storage", express.static("Storage"));

app.get("/", (req, res) => {
  res.json({
    message: "Bienvenidos",
  });
});

/*
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUniFiedTopology: true,
  })
  .then((data) => {
    const url = `conetado a MONGODB ${data.connection.host} - en puerto ${data.connection.port}`;
    console.log(url);
    // console.log("Conexion exitosa");
  })
  .catch((err) => console.log("Error al conectar a MongoDB", err));*/

connectToMongoDB().then(() => {});

httpServer.listen(port, () => {
  console.log("Aplicación corriendo en el puerto:", `http://localhost:${port}`);
  // console.log("Aplicación corriendo en el puerto:", `http://192.168.1.36:${port}`);
});

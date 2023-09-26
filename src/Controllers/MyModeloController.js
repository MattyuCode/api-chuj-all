const { MiModelo } = require("../Models");

const obtenerDatos = async (req, res) => {
  try {
    const datos = await MiModelo.find();
    res.send(datos);
    console.log(datos);
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
    console.error(error);
  }
};

module.exports = { obtenerDatos };

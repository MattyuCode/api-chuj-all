const MyModel = require("../Models/MiModelo");

const MyController = {
  obtenerDatos: async (req, res) => {
    try {
      const datos = await MyModel.find();
      res.send(datos);
      console.log(datos);
    } catch (error) {
      // res.status(500).json({ message: "Error interno del servidor" });
      console.error(error);
    }
  },
};

module.exports = MyController;

 
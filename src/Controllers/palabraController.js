const { palabraModel } = require("../Models");

const ObtenerTodasPalabras = async (req, res) => {
  try {
    const datos = await palabraModel.find().sort({ id_palabra: 1 });
    res.json({ datos });
  } catch (error) {
    process.exit(1);
  }
};

//MAT_ Crear palabras
const createPalabras = async (req, res) => {
  const { body } = req;

  if (!body.nombrePalabra || !body.traduccionPalabra) {
    return res.status(404).json({ message: "Campos obligatorio" });
  } else {
    try {
      const orderAndFy = await palabraModel
        .find({}, { id_palabra: 1 })
        .sort({ id_palabra: 1 });
      const existingId = orderAndFy.map((item) => item.id_palabra);

      let id_palabra = 1;
      while (existingId.includes(id_palabra)) {
        id_palabra++;
      }

      const nuevoPalabra = { ...body, id_palabra };

      const data = await palabraModel.create(nuevoPalabra);
      res.json({ message: "Palabra created successfully", data });
    } catch (error) {
      console.error(error.message);
      if (error.code === 11000) {
        return res.status(400).json({ message: "Ya existe la palabra" });
      }
      return res
        .status(500)
        .json({ message: error.message + "Ocurio un error" });
    }
  }
};

module.exports = { ObtenerTodasPalabras, createPalabras };

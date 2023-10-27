const nahualModel = require("../Models/noSQL/nahualModel");

const getAllNahual = async (req, res) => {
  try {
    const datas = await nahualModel.find().sort({ id_nahual: 1 });
    res.json(datas);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

const createNahual = async (req, res) => {
  const { body } = req;

  if (!body.fecha_nahual || !body.nombre_nahual) {
    return res.status(400).json({ message: "Faltan cambpos " });
  } else {
    try {
      const getIdNahual = await nahualModel
        .find({}, { id_nahual: 1 })
        .sort({ id_nahual: 1 });
      const existingIds = getIdNahual.map((item) => item.id_nahual);

      let id_nahual = 1;
      while (existingIds.includes(id_nahual)) {
        id_nahual++;
      }
      const newNahual = { ...body, id_nahual };
      const nahuales = await nahualModel.create(newNahual);
      res.json({ message: "Datos Insertados correctamente", nahuales });
    } catch (error) {
      console.log(error.message);
      if (error.code === 11000) {
        return res.status(400).json({ message: "El n ya existe" });
      }
      res.status(500).json({ message: error.message + "Ocurio un error" });
    }
  }
};

module.exports = { getAllNahual, createNahual };

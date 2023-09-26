const { diccionarioModel } = require("../Models");

const getAll = async (req, res) => {
  try {
    const data = await diccionarioModel.find();
    res.json({ data });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

const createDiccionary = async (req, res) => {
  try {
    const { body } = req;

    const existingDiccionary = await diccionarioModel
      .find({}, { id_diccionario: 1 })
      .sort({ id_diccionario: 1 });
    const existingIds = existingDiccionary.map((item) => item.id_diccionario);

    let id_diccionario = 1;
    while (existingIds.includes(id_diccionario)) {
      id_diccionario++;
    }

    const newDiccionary = { ...body, id_diccionario };
    const data = await diccionarioModel.create(newDiccionary);
    res.json({ message: "Datos Insertados correctamente", data });
    // console.log({ data });
  } catch (error) {
    // console.log(error.message);
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "El ID del diccionario ya existe" });
    }
    res.status(500).json({ message: error.message + "Ocurio un error" });
  }
};

module.exports = { getAll, createDiccionary };

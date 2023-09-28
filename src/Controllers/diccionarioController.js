const { diccionarioModel } = require("../Models");

//NOTE: GET
const getAll = async (req, res) => {
  try {
    const data = await diccionarioModel.find();
    res.json({ data });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

//NOTE: POST
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

//NOTE: PUT
const UpdateById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const datos = await diccionarioModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!datos) {
      return res.status(404).json({ error: "No se encontraron los datos" });
    }

    res.json({ message: "Datos Actualizado correctamente", datos });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getAll, createDiccionary, UpdateById };

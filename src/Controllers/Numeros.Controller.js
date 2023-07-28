const numerosModel = require("../Models/Numeros.Models");

const getAll = async (req, res) => {
  try {
    const datos = await numerosModel.find();
    res.json({ datos });
    // console.log({ datos });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

//Metodo para Editar con ID
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const datos = await numerosModel.findById(id);
    if (!datos) {
      return res.status(404).json({ error: "Datos no encontrado" });
    }
    res.json({ datos });
    console.log({ datos });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

const createData = async (req, res) => {
  const { body } = req;
  try {
    const data = await numerosModel.create(body);
    res.json({ message: "Datos insertados correctamente", data });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//NOTE: PARA ACTUALIZAR UN DATO CON ID

const UpdateById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const datos = await numerosModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!datos) {
      return res.status(404).json({ error: "Datos no encontrado" });
    }
    res.json({ message: "Datos actualizados correctamente", datos });
    console.log({ datos });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Interno del servidor" });
  }
};

//NOTE: ELIMINAR DATO CON ID
const DeleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const datos = await numerosModel.findByIdAndDelete(id);
    if (!datos) {
      return res.status(404).json({ error: "Dato no encontrado" });
    }
    res.json({ message: "Dato eliminado correctamente", datos });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAll, getById, createData, UpdateById, DeleteById };

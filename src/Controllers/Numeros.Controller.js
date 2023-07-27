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

const getById = async (req, res) => {
  try {
    const datos = await numerosModel.find();
    res.json({ datos });
    console.log({ datos });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

const createData = async (req, res) => {
  const { body } = req;
  console.log(body);
  const data = await numerosModel.create(body);
  console.log(data);
  res.json({ message: "Datos insertados correctamente", data });
};

module.exports = { getAll, getById, createData };

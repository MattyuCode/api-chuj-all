//COMMENT: EL NORMAL
// const numerosModel = require("../Models/noSQL/numerosModel");
//FIXME: EL MODO DINAMICO CON LEIFER  https://youtu.be/xRXHQlqA3Ak
const { numerosModel } = require("../Models");

//NOTE: PARA OBTENER TODOS LOS DATOS
const getAll = async (req, res) => {
  try {
    const datos = await numerosModel.find().sort({ id_numeros: 1 });
    res.json({ datos });
    // console.log({ datos });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

//NOTE: PARA OBTENER UN SOLO DATO CON ID
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

//NOTE: PARA INSERTAR UN NUEVO DATO
const createData = async (req, res) => {
  const { body } = req;

  if (!body.name) {
    return res.status(400).json({ message: "Faltan campos obligatorio" });
  } else {
    try {
      // const maxIdNumeros = await numerosModel
      //   .findOne()
      //   .sort({ id_numeros: -1 })
      //   .limit(1);
      // const nextIdNumeros = maxIdNumeros ? maxIdNumeros.id_numeros + 1 : 1;

      // const newNumeros = {
      //   id_numeros: nextIdNumeros,
      //   ...body,
      // };

      //COMMENT: OTRO PASO
      const existingNumbers = await numerosModel
        .find({}, { id_numeros: 1 })
        .sort({ id_numeros: 1 });
      const existingId = existingNumbers.map((number) => number.id_numeros);

      let idNumeros = 1;
      while (existingId.includes(idNumeros)) {
        idNumeros++;
      }

      const newNumeros = { ...body, id_numeros: idNumeros };

      const data = await numerosModel.create(newNumeros);
      res.json({ message: "Datos insertados correctamente", data });
    } catch (error) {
      console.error(error.message);
      if (error.code === 11000) {
        return res
          .status(400)
          .json({ message: "Ya existe el nombre del número" });
      }
      res.status(500).json({ message: error.message + "Ocurio un error" });
    }
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

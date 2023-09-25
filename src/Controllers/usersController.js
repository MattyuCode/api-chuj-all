const { usersModel } = require("../Models");

const getAll = async (req, res) => {
  try {
    const users = await usersModel.find().sort({ id_users: 1 });
    res.json({ users });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

//NOTE: CREATE USER
// let idUsers = 1;
const createUser = async (req, res) => {
  const { body } = req;

  if (!body.user || !body.email || !body.password) {
    return res.status(400).json({ message: "Faltan campos obligatorio" });
  } else {
    try {
      //NOTE: ESTE FUNCIONA BIEN PERO AL ELIMINAR UNO SIGUE EL NUMERO SIGUIENTE
      /*const maxIdUser = await usersModel
        .findOne()
        .sort({ id_users: -1 })
        .limit(1);
      const nextIdUser = maxIdUser ? maxIdUser.id_users + 1 : 1;

      const newUser = {
        id_users: nextIdUser,
        ...body,
      };*/

      //NOTE: ESTE OTRO FUNCIONA CUANDO SE ELIMINA UN NUMERO SE CREA EL NUMERO FALTA Y SI ESTA TODO COMPLETO CREA EL NUMERO SIGUIENTE
      const existingUsers = await usersModel
        .find({}, { id_users: 1 })
        .sort({ id_users: 1 });
      const existingIds = existingUsers.map((user) => user.id_users);

      let idUsers = 1;
      while (existingIds.includes(idUsers)) {
        idUsers++;
      }

      const newUser = { ...body, id_users: idUsers };
      const user = await usersModel.create(newUser);
      res.json({ message: "Datos Insertados correctamente", user });
      console.log({ user });
      //   idUsers++;
    } catch (error) {
      console.log(error.message);

      if (error.code === 11000) {
        return res.status(400).json({ message: "El usuario ya existe" });
      }

      res.status(500).json({ message: error.message + "Ocurio un error" });
    }
  }
};

//NOTE: Buscar usuario por users
const getUsersByUsers = async (req, res) => {
  const { user } = req.params;

  try {
    const datosUser = await usersModel.findOne({ user });
    if (!datosUser) {
      return res
        .status(404)
        .json({ error: "Usuario no encontrado o no esta registrado " });
    }
    //console.log({ datosUser });
    res.json({ datosUser });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error al buscar usuario" });
  }
};

const DeleteUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await usersModel.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).json({ error: "Dato no encontrado" });
    }
    res.json({ message: "Dato eliminado correctamente", data });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createUser, getAll, getUsersByUsers, DeleteUserById };

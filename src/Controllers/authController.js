const { encrypt, compare } = require("../Utilities/handlePassword");
const { tokenSign } = require("../Utilities/handleJWT");
const { usersModel } = require("../Models");

const registerCtrll = async (req, res) => {
  //   const { body } = req;
  //   res.json({ message: "Datos insertados correctamente", body });
  //   console.log({ body });

  const { body } = req;

  if (!body.user || !body.email || !body.password) {
    return res.status(400).json({ message: "Faltan campos obligatorio" });
  } else {
    try {
      //NOTE: ESTE OTRO FUNCIONA CUANDO SE ELIMINA UN NUMERO SE CREA EL NUMERO FALTA Y SI ESTA TODO COMPLETO CREA EL NUMERO SIGUIENTE
      const existingUsers = await usersModel
        .find({}, { id_users: 1 })
        .sort({ id_users: 1 });
      const existingIds = existingUsers.map((user) => user.id_users);

      let idUsers = 1;
      while (existingIds.includes(idUsers)) {
        idUsers++;
      }
      const password = await encrypt(body.password);
      const newUser = { ...body, id_users: idUsers, password };
      const dataUser = await usersModel.create(newUser);
      const data = {
        token: await tokenSign(dataUser),
        user: dataUser,
      };

      res.json({ message: "Datos insertados correctamente", data });
      console.log({ data });
    } catch (error) {
      console.log(error.message);

      if (error.code === 11000) {
        return res.status(400).json({ message: "El usuario ya existe" });
      }
      res.status(500).json({ message: error.message + "Ocurio un error" });
    }
  }
};

const loginCtrll = async (req, res) => {
  const { body } = req;

  //   if (!body.user || !body.password) {
  //     return res.status(400).json({ message: "Faltan campos obligatorio" });
  //   } else {
  try {
    const dataUser = await usersModel.findOne({ user: body.user });
    // console.log("---->", dataUser);
    if (!dataUser) {
      return res.status(404).json({ message: "El usuario no existe" });
    }

    const hasPassword = dataUser.password;
    const check = await compare(body.password, hasPassword);
    if (!check) {
      return res.status(401).json({ message: "La contraseña es invalido" });
    }
    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };

    res.json({ message: "Datos insertados correctamente", data });
    console.log({ data });
  } catch (error) {
    console.log("ENTRA AQUI ", error.message);
    res.status(500).json({ message: error.message + " Ocurio un error" });
  }
  //   }
};

module.exports = { registerCtrll, loginCtrll };

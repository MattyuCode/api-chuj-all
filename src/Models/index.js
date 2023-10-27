const calendarModel = require("./noSQL/calendarModel");
const diccionarioModel = require("./noSQL/diccionarioModel");
const MiModelo = require("./noSQL/MiModelo");
const numerosModel = require("./noSQL/numerosModel");

const modelos = {
  calendarModel: calendarModel,
  MiModelo: require("./noSQL/MiModelo"),
  numerosModel: numerosModel,
  usersModel: require("./noSQL/usersModel"),
  palabraModel: require("./noSQL/palabraModel"),
  diccionarioModel: diccionarioModel,
  nahualModel: require("./noSQL/nahualModel"),
};

const Models = modelos;

module.exports = Models;

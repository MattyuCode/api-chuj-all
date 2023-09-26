const calendarModel = require("./noSQL/calendarModel");
const diccionarioModel = require("./noSQL/diccionarioModel");
const MiModelo = require("./noSQL/MiModelo");
const numerosModel = require("./noSQL/numerosModel");

const modelos = {
  calendarModel: calendarModel,
  MiModelo: require("./noSQL/MiModelo"),
  numerosModel: numerosModel,
  usersModel: require("./noSQL/usersModel"),
  diccionarioModel: diccionarioModel
};

const Models = modelos;

module.exports = Models;

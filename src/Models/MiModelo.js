const mongoose = require("mongoose");

const modeloSchema =     mongoose.Schema({
  titulo: { type: String, require: true },
  descripcion: { type: String, require: true },
  completada: { type: Boolean, default: false },
});

module.exports = mongoose.model("Modelos", modeloSchema);


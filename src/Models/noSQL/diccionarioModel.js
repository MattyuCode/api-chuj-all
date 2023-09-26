const mongoose = require("mongoose");

const diccionario = mongoose.Schema(
  {
    id_diccionario: {
      type: Number,
      required: true,
    },
    palabra: {
      type: String,
      required: true,
      unique: true,
    },
    traduccion: {
      type: String,
      required: true,
    },
    significado: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("diccionario", diccionario);

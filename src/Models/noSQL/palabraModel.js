const mongoose = require("mongoose");

const palabraChuj = mongoose.Schema(
  {
    id_palabra: {
      type: Number,
      required: true,
    },
    nombrePalabra: {
      type: String,
      required: true,
    },
    traduccionPalabra: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


module.exports = mongoose.model("palabras", palabraChuj)
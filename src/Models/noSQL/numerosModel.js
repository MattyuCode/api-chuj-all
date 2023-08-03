const mongoose = require("mongoose");

const numerosChuj = mongoose.Schema(
  {
    id_numeros: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("datos", numerosChuj);
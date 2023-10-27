const mongoose = require("mongoose");

const nahualChuj = mongoose.Schema(
  {
    id_nahual: {
      type: Number,
      required: true,
    },
    fecha_nahual: {
      type: String,
      required: true,
    },
    nombre_nahual: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("nahual", nahualChuj);

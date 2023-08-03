const mongoose = require("mongoose");

const users = mongoose.Schema(
  {
    id_users: {
      type: Number,
      required: true,
    },
    user: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("users", users);

/*

type: Define el tipo de datos que se espera para el campo.

required: Indica si un campo es obligatorio.

default: Proporciona un valor predeterminado para el campo en caso de que no se especifique ningún valor al crear un documento.

unique: Indica si el valor del campo debe ser único en la colección.

enum: Permite definir una lista de valores válidos para el campo.

min y max: Establecen los valores mínimos y máximos permitidos para un campo numérico.

validate: Permite definir una función personalizada para validar el valor del campo.

ref: Establece una referencia a otra colección de MongoDB.

index: Indica si el campo debe tener un índice en la base de datos para mejorar la eficiencia en búsquedas.

select: Indica si el campo se selecciona o no por defecto en las consultas.

sparse: Indica si el índice del campo debe ser esparcido.

trim: Indica si el campo de tipo String debe recortar espacios en blanco alrededor del valor.

uppercase y lowercase: Convierten el valor del campo de tipo String a mayúsculas o minúsculas, respectivamente.

validateBeforeSave: Indica si las validaciones deben realizarse antes de guardar el documento.

timestamps: Establece si se deben agregar automáticamente campos createdAt y updatedAt a los documentos.

versionKey: Indica si se debe agregar automáticamente un campo para controlar la versión del documento.

*/


/*
Filtro y Orden con MONGODB

FILTRAR: 
{name: "Ju'un"}

ORDENAR EN SORT
{id_numeros: 1}

*/
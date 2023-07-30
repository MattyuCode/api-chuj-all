//COMMENT: EL NORMAL 
// const calendarStorage = require("../Models/noSQL/calendarModel");

//FIXME: EL MODO DINAMICO CON LEIFER  https://youtu.be/xRXHQlqA3Ak
const {calendarModel} = require("../Models");


const PUBLIC_URL = process.env.PUBLIC_URL;

let idCalendar = 1;
 

const getAll = async (req, res) => {
  try {
    const datos = await calendarModel.find();
    res.send({ datos });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

const uploadImages = async (req, res) => {
  const { body, file } = req;
  const fileData = {
    idCalendar: idCalendar,
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  try {
    const data = await calendarModel.create(fileData);
    idCalendar++;
    console.log(file);
    res.json({ message: "Datos insertados correctamente", data });
  } catch (error) {
    console.error("Error al insertar datos:", error);
    res.status(500).json({ message: "Error al insertar datos" });
  }
};

module.exports = { getAll, uploadImages };

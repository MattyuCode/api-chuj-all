//COMMENT: EL NORMAL
// const calendarStorage = require("../Models/noSQL/calendarModel");

//FIXME: EL MODO DINAMICO CON LEIFER  https://youtu.be/xRXHQlqA3Ak
const { calendarModel } = require("../Models");

const PUBLIC_URL = process.env.PUBLIC_URL;

const getAll = async (req, res) => {
  try {
    const datos = await calendarModel.find();
    res.send({
      datos,
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

const uploadImages = async (req, res) => {
  const { body, files, file } = req;
  const { name } = req.body;

  //FIXME: ESTO ES PARA VARIOS IMAGENES
  const url = files["url"]
    ? `${PUBLIC_URL}/Storage/${files["url"][0].filename}`
    : null;
  const images = files["images"]
    ? files["images"].map((file) => `${PUBLIC_URL}/Storage/${file.filename}`)
    : [];

  // const urls = files.map((file) => {
  //   return `${PUBLIC_URL}/Storage/${file.filename}`;
  // });

  const maxIdCalendar = await calendarModel
    .findOne()
    .sort({ idCalendar: -1 })
    .limit(1);
  const nextIdCalendar = maxIdCalendar ? maxIdCalendar.idCalendar + 1 : 1;

  const fileData = {
    idCalendar: nextIdCalendar,
    //NOTE: ESTO ES PARA UN IMAGEN
    //  filename: file.filename,
    // url: `/Storage/${file.filename}`,
    // url: `${PUBLIC_URL}/Storage/${file.filename}`,

    //FIXME: ESTO ES PARA VARIOS IMAGENES
    // name: name,
    // url: urls,
    // filename: files.map((file) => file.filename).join(","),
    //COMMENT: esto es para el url y array de images
    name: name,
    url: url,
    images: images,
    filename: files["images"]
      ? files["images"].map((file) => file.filename).join(",")
      : "",
  };
  try {
    const data = await calendarModel.create(fileData);
    // idCalendar++;
    // console.log(file);
    res.json({
      message: "Datos insertados correctamente",
      data,
    });
  } catch (error) {
    console.error("Error al insertar datos:", error);
    res.status(500).json({
      message: "Error al insertar datos",
    });
  }
};

module.exports = {
  getAll,
  uploadImages,
};

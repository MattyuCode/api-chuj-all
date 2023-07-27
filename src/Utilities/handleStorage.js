const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const path = `${__dirname}/../Storage`;
    callback(null, path);
  },

  filename: function (req, file, callback) {
    const extension = file.originalname.split(".").pop(); //NOTE: ["NAME","png"]
    const fileName = `image-${Date.now()}.${extension}`;
    callback(null, fileName);
  },
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // const path = `${__dirname}/../Storage`;
    // cb(null, path);
    cb(null, "Storage/");
  },

  filename: function (req, file, cb) {
    // const extension = file.originalname.split(".").pop(); //NOTE: ["NAME","png"]
    // const fileName = `file-${Date.now()}.${extension}`;
    // cb(null, fileName);
    let ext = path.extname(file.originalname).toLowerCase();
    cb(null, Date.now() + ext);
  },
});

// const uploadMiddleware = multer({ storage });
const uploadMiddleware = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      callback(null, true);
    } else {
      console.log("Solo se soporta jpg y png");
      callback(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});

module.exports = uploadMiddleware;

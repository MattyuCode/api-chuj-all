// const { getAll, getById, createData } = require("../Controllers/Numeros.Controller");
const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../Utilities/handleStorage");
const { getAll, uploadImages } = require("../Controllers/calendarController");

router.get("/storages", getAll);
router.post("/storages", uploadMiddleware.single("myfile"), uploadImages);

module.exports = router;

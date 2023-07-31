const { getAll, uploadImages } = require("../Controllers/calendarController");
const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../Utilities/handleStorage");

router.get("/", getAll);
router.post("/", uploadMiddleware.single("file"), uploadImages);

module.exports = router;
    
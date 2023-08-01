const {
    getAll,
    uploadImages
} = require("../Controllers/calendarController");
const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../Utilities/handleStorage");

router.get("/", getAll);
// router.post("/", uploadMiddleware.array("file[]"), uploadImages);
router.post("/", uploadMiddleware.fields([{
    name: "url",
    maxCount: 1
}, {
    name: "images",
    maxCount: 3
}]), uploadImages);

module.exports = router;
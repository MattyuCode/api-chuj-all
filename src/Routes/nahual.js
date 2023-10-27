const express = require("express");
const {
  getAllNahual,
  createNahual,
} = require("../Controllers/nahualController");
const router = express.Router();

router.get("/", getAllNahual);
router.post("/", createNahual);

module.exports = router;

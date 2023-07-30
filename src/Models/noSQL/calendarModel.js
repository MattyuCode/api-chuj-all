const mongoose = require("mongoose");

const calendarStorage = mongoose.Schema(
  {
    idCalendar: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
    },
    filename: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("calendar", calendarStorage);

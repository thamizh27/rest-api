const mongoose = require("mongoose");

const CoursesSchema = mongoose.Schema({
  title: {
    type: String,
  },
  name: {
    type: String,
  },
});

module.exports = mongoose.model("Courses", CoursesSchema);

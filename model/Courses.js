const mongoose = require("mongoose");

const CoursesSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Courses", CoursesSchema);

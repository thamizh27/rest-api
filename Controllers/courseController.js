const path = require("path");

const courseController = (Courses) => {
  function getHome(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  }

  async function getCourses(req, res) {
    try {
      const course = await Courses.find();
      res.json(course);
    } catch (err) {
      res.json(err);
    }
  }

  async function getCourseById(req, res) {
    try {
      const course = await Courses.findById(req.params.id);
      res.send(course);
    } catch {
      res.status(400).send("The course with given ID wasn't found");
    }
  }

  async function postCourse(req, res) {
    const course = new Courses({
      title: req.body.title,
      name: req.body.name,
    });

    try {
      const savedCourse = await course.save();
      res.send(savedCourse);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async function patchCourse(req, res) {
    try {
      const updatedCourse = await Courses.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        {
          $set: {
            title: req.body.title,
            name: req.body.name,
          },
        },
        {
          useFindAndModify: false,
          new: true,
        }
      );
      res.json(updatedCourse);
    } catch (err) {
      res.json(err);
    }
  }

  async function deleteCourse(req, res) {
    try {
      const removedCourse = await Courses.deleteOne({
        _id: req.params.id,
      });
      res.json(removedCourse);
    } catch (err) {
      res.status(400).send("The course with given ID wasn't found");
    }
  }

  return {
    getHome,
    getCourses,
    getCourseById,
    postCourse,
    patchCourse,
    deleteCourse,
  };
};

module.exports = courseController;

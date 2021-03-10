const { json } = require("body-parser");
const express = require("express");
const path = require("path");
const router = express.Router();
const Courses = require("../model/Courses");

//Render a static html file
// app.use(express.static(path.join(__dirname, "public")));

//Render a html file
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// router.get("/courses", (req, res) => {
//   res.send("hello world");
// });

//get an array of datas
router.get("/courses", async (req, res) => {
  try {
    const course = await Courses.find();
    res.send(course);
  } catch (err) {
    res.json(err);
  }
});

//get a specific course using id
router.get("/courses/:id", async (req, res) => {
  try {
    const course = await Courses.findById(req.params.id);
    res.send(course);
  } catch {
    res.status(400).send("The course with given ID wasn't found");
  }
});

//add a course data using Post request
router.post("/courses", async (req, res) => {
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
});

// Update a existing course using put request
router.patch("/courses/:id", async (req, res) => {
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
  //   res.send(course);
});

//Delete a specific course data using delete request
router.delete("/courses/:id", async (req, res) => {
  try {
    const removedCourse = await Courses.deleteOne({
      _id: req.params.id,
    });
    res.json(removedCourse);
  } catch (err) {
    res.status(400).send("The course with given ID wasn't found");
  }
});

module.exports = router;

//Vannila Node.js to create a server and routing
// const fs = require("fs");
// const server = require("http");
// // const os = require("os");

// server
//   .createServer(function (req, res) {
//     fs.readFile("./public/index.html", function (err, data) {
//       if (err) throw err;
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   })
//   .listen(1010, () => console.log("The app is running on port 1010"));

// // console.log(os.type());

const express = require("express");
const router = express.Router();
const Courses = require("../Model/coursesModel");
const courseController = require("../Controllers/courseController");

//controller setup
const controller = courseController(Courses);

//Routes
router.get("/", controller.getHome);

router.get("/courses", controller.getCourses);

router.get("/courses/:id", controller.getCourseById);

router.post("/courses", controller.postCourse);

router.patch("/courses/:id", controller.patchCourse);

router.delete("/courses/:id", controller.deleteCourse);

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

//Render a static html file
// app.use(express.static(path.join(__dirname, "public")));

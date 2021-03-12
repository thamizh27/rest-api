const express = require("express");
const router = express.Router();
const courseController = require("../Controllers/courseController");

//Routes
router.get("/", courseController.getHome);

router.get("/courses", courseController.getCourses);

router.get("/courses/:id", courseController.getCourseById);

router.post("/courses", courseController.postCourse);

router.patch("/courses/:id", courseController.patchCourse);

router.delete("/courses/:id", courseController.deleteCourse);

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

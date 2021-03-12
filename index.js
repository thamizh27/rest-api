const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

//Import Routes
const courseRoutes = require("./routes/courses");
const authRoutes = require("./routes/authRoutes");

//Middlewares
app.use(express.json());
app.use("/", courseRoutes);
app.use("/", authRoutes);

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to database")
);

//Listening to the server
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`The app is running on port ${port}`));

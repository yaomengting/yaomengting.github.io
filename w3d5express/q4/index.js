const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { link } = require("fs");
const app = express();
app.use(bodyParser.urlencoded());

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

// app.get("/output", (req, res) => {
//   // let name = req.query.name;
//   // let age = req.query.age;
//   // if (!name) {
//   //   name = "person";
//   // }
//   // if (!age) {
//   //   age = "12";
//   // }
//   res.send(`Welcome ${name}, Your age is ${age}`);
// });
app.post("/result", (req, res, next) => {
  res.send(`Welcome ${req.body.name}, Your age is ${req.body.age}`);
  res.redirect(303, "/output?name=${name}&age=${age}");
});
app.use("/css", express.static(path.join(__dirname, "css")));
// const date = new Date();
// let hour = date.getHours();

// if (hour >= 6 && hour <= 18) {
//   app.use(express.static(path.join(__dirname, "css", "day.css")));
// } else if (hour > 18 && hour < 6) {
//   app.use(express.static(path.join(__dirname, "css", "night.css")));
// }

app.listen(3000);

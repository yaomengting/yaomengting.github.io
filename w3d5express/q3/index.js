const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { link } = require("fs");
const app = express();
app.use(bodyParser.urlencoded());

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.post("/result", (req, res, next) => {
  res.send(`Welcome ${req.body.name}, Your age is ${req.body.age}`);
});
app.use("/css", express.static(path.join(__dirname, "css")));
const date = new Date();
let hour = date.getHours();
if (hour >= 6 && hour <= 18) {
  app.use(express.static(path.join(__dirname, "css", "day.css")));
} else if (hour > 18 && hour < 6) {
  app.use(express.static(path.join(__dirname, "css", "night.css")));
}

app.listen(3000);

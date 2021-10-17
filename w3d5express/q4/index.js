const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extends: false }));
let style = "";
app.get("/", (req, res, next) => {
  const date = new Date();
  const hour = date.getHours();
  app.use("/css", express.static(path.join(__dirname, "css")));
  if (hour >= 6 && hour <= 18) {
    style = "day.css";
  } else {
    style = "night.css";
  }
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      
      <title>Document</title>
      <link rel="stylesheet" href="/css/${style}" />
    </head>
    <body>
      <form action="/result" method="POST">
        <label>Name</label>
        <input type="text" name="name" />
        <label>Age</label>
        <input type="number" name="age" />
        <button>Submit Query</button>
      </form>
    </body>
  </html>`);
});

app.get("/output", (req, res, next) => {
  let name = req.query.name;
  let age = req.query.age;
  if (!name) {
    name = "unknown";
  }
  if (!age) {
    age = "unknown";
  }
  res.send(`Welcome ${name}, Your age is ${age}`);
});

app.post("/result", (req, res, next) => {
  let name = req.body.name;
  let age = req.body.age;
  if (!name) {
    name = "unknown";
  }
  if (!age) {
    age = "unknown";
  }
  res.redirect(303, `/output?name=${name}&age=${age}`);
});

app.listen(3000);

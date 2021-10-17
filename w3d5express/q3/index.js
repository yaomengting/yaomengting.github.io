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

app.post("/result", (req, res, next) => {
  res.send(`Welcome ${req.body.name}, Your age is ${req.body.age}`);
});

app.listen(3000);

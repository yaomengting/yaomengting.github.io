const express = require("express");
const session = require("express-session");

const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "salt for cookie signing",
  })
);
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
      <form action="/" method="POST">
        <label>Name</label><input type="text" name="name" />
        <label>Age</label><input type="number" name="age" />
        <button>Submit Query</button>
      </form>
    </body>
  </html>`);
});

app.post("/", (req, res) => {
  // req.session[req.body.name] = req.body.age;
  // req.session["name"] = req.body.name;
  // req.session["age"] = req.body.age;
  req.session["user"] = req.body;
  res.redirect(303, "/output");
});

app.get("/output", (req, res) => {
  // const name = req.session
  console.log(req.session);
  res.send(
    `Welcome ${req.session.user.name} , Your age is ${req.session.user.age}`
  );
});

app.listen(3000);

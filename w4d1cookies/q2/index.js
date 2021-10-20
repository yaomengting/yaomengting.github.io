const express = require("express");
const session = require("express-session");
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use('/css', express.static(path.join(__dirname, 'css')));
app.set('views', path.join(__dirname, 'view'));
app.use(
  session({
    resave: false,
    saveUninitialized: true,
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
  res.render('index', {style: style});
});


app.post("/result", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  if(!name){
    name = "unknown";
  }
  if(!age){
    age = "unknown";
  }
  req.session.name = name;
  req.session.age = age;
  res.redirect(303, "/output");
});

app.get("/output", (req, res) => {
  let name = req.session.name;
  let age = req.session.age;
  console.log('req.session',req.session);
  console.log('req.session.age',req.session.age);
  if(!name){
    name = "unknown";
  }
  if(!age){
    age = "unknown";
  }
  res.send(
    `Welcome ${name} , Your age is ${age}`
  );
});

app.listen(3000);

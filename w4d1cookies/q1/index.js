const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log("res.locals.cookies", res.locals.cookies);
  res.render("index", { cookies: req.cookies });
});

app.post("/", (req, res) => {
  console.log("req.cookies", req.cookies);
  res.cookie(req.body.key, req.body.value);
  res.redirect(303, "/");
});

app.listen(3000);

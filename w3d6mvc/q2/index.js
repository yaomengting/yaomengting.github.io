const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extends: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.get("/", (req, res, next) => {
  res.render("index.ejs", {
    label1: "Name",
    label2: "Age",
    submit: "Submit Query",
  });
});

app.post("/result", (req, res, next) => {
  res.render("res", {
    result1: req.body.res1,
    result2: req.body.res2,
  });
});

app.listen(3000);

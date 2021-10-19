const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log("get /");
  // {name: 'lucy'}
  console.log("req:", req.query);
  console.log("req.cookies:", req.cookies);
  if (req.query.username in req.cookies) {
    const cols = Object.keys(req.cookies).map(
      (c) => `<tr><td>${c}:${req.cookies[c]}</td></tr>`
    );
    res.send(
      `Remembered :) Click to <a href="/forget?username=${req.query.username}">forget</a>!.</br>
      All the cookies:</br>
      <table>${cols}</table>`
    );
  } else {
    res.send(`
    <form method='post'>
      username:<input type='text' name='username'></input>
      password:<input type='text' name='password'></input>
      <button type='submit'>Submit</button>
    </form>
  `);
  }
});

app.post("/", (req, res) => {
  console.log("post/");
  console.log("req:", req.body);
  res.cookie(req.body.username, req.body.password);
  res.redirect("/?username=" + req.body.username);
});

app.get("/forget", (req, res) => {
  res.clearCookie(req.query.username);
  res.redirect("back");
});

app.listen(3000);

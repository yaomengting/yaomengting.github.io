// install nodemon:npm install nodemon -g

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded());

app.get("/", (req, res, next) => {
  res.send(
    '<form action="/result" method="POST"><label>Name</label><input type="text" name="name"/><label>Age</label><input type="number" name="age"/><button>Submit Query</button></form>'
  );
});

app.post("/result", (req, res, next) => {
  res.send(`Welcome ${req.body.name}, Your age is ${req.body.age}`);
});

app.listen(3000);

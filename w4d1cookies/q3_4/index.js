const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
const session = require("express-session");
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "salt for cookie signing",
  })
);
let products = {
  Tomato: { price: 2, des: "Red" },
  Orange: { price: 3, des: "Yellow" },
};

app.get("/", (req, res) => {
  console.log(req);
  console.log("req.session:", req.session);
  res.render("shop", { products });
});

app.get("/product", (req, res) => {
  res.render("product", {
    productName: req.query.pname,
    productPrice: products[req.query.pname].price,
    productDesc: products[req.query.pname].des,
  });
});

/*
cart = {}
cart =  {
  Tomato: { price: 4, quantity: 2 },
}
*/
app.post("/addToCart", (req, res) => {
  let name = req.body.name;
  let price = parseFloat(req.body.price);
  const cart = req.session[req.sessionID] || {};
  if (cart[name]) {
    cart[name].quantity++;
    cart[name].price += price;
  } else {
    cart[name] = { price, quantity: 1 };
  }
  console.log("cart", cart);
  req.session[req.sessionID] = cart;
  res.redirect(303, "/cart");
});

app.get("/cart", (req, res) => {
  console.log("req.session:", req.session);
  console.log("req.session[req.sessionID]", req.session[req.sessionID]);
  res.locals.cart = req.session[req.sessionID];
  res.render("shoppingcart");
});

app.listen(3000);

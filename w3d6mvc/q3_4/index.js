const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

let products = {
  'Tomato': {'price': 2, 'desc': `Red`},
  'Avocado':{'price': 3, 'desc': `Green`},
}
let cart = {};
app.get("/", (req, res, next) => {
  res.render("shop", {products});
});

app.get("/product", (req, res, next) => {
  //console.log("req.query:",req.query);
  res.render("product", {
    name: req.query.prod,
    desc: products[req.query.prod].desc,
    price: products[req.query.prod].price,
  });
});

app.post("/addToCart", (req, res, next) => {
  console.log("req.body.prod:", req.body.prod);
  const prod = req.body.prod;
  let price = parseFloat(req.body.price);
  let qty = 1;
  if(cart[prod]){
    qty += cart[prod].qty;
    price += cart[prod].price;
  }
  cart[prod] = {name: prod, price: price, qty: qty};
  res.redirect(303, "/cart");
});

app.get("/cart", (req, res, next) => {
  res.locals.cart = cart;
  res.render("shoppingcart");
});

app.listen(3000);

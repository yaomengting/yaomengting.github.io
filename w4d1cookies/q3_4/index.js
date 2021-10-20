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
app.use((req, res,next)=>{
  if(!req.session.cart){
    req.session.cart = {};
  }
  next();
});
let products = {
  Tomato: { price: 2, des: "Red" },
  Orange: { price: 3, des: "Yellow" },
};

app.get("/", (req, res) => {
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
req.session.cart =  {
  Tomato: { price: 4, quantity: 2 },
}
*/
app.post("/addToCart", (req, res) => {
  let name = req.body.name;
  let price = parseFloat(req.body.price);
  console.log(req.session.cart);
  if(req.session.cart[name]){
    req.session.cart[name].price += price;
    req.session.cart[name].quantity++;
  }else{
    req.session.cart[name] = {
      price, quantity: 1
    };
  }
  res.redirect(303, "/cart");
});

app.get("/cart", (req, res) => {
  res.render("shoppingcart", {
    cart: req.session.cart
  });
});

app.listen(3000);

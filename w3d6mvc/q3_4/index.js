const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.get("/", (req, res, next) => {
  res.render("shop.ejs", {
    product1: "jacket1",
    product2: "jacket2",
    redirect1: "product1",
    redirect2: "product2",
  });
});

app.get("/product1", (req, res, next) => {
  res.render("product", {
    productName: "Columbia Jacket",
    productPrice: "124",
  });
});

app.get("/product2", (req, res, next) => {
  res.render("product", {
    productName: "Nike Jacket",
    productPrice: 234,
  });
});
// if(productName == ""){
//   product.quantity +=1;
// }
// const shoppingcart = {
//   productName1: {productName, productPrice, quantity},
//   productName2: {productName, productPrice, quantity},
// }
// put productname and price into form to get the value?
app.post("/addToCart", (req, res, next) => {
  console.log("req.body", req.body);
  console.log("productName",productName);

  res.redirect(303, "/cart");
});
// display shopping cart details using shoppingcart ejs;
//add new product details into it and update the quantity;
// does the shopppingcart.ejs need a for loop to display
app.get("/cart", (req, res, next) => {
  console.log("add cart req.body", req.body);
  console.log("this is cart get ");
  //res.render("shoppingcart");
});

app.listen(3000);

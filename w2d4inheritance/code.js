String.prototype.filter = function (banned) {
  const arr = this.toString().split(" ");
  return arr
    .filter((a) => !banned.includes(a)).join(" ");
    
};

//console.log("This house is not nice".filter(["not", "nice"]));

//Array.prototype.bubbleSort

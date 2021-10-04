// This is functional programming version for sum
function sum(arr) {
  return arr.reduce(function (accumulator, elem) {
    return accumulator + elem;
  }, 0);
}

function multiply(arr) {
  return arr.reduce(function (mulitplier, elem) {
    return mulitplier * elem;
  }, 1);
}

function filterLongWords(filterArr, len) {
  return filterArr.filter((arr) => arr.length > len);
}

function reverse(str) {
  return str.split("").reduce(function (a, b) {
    return b + a;
  }, "");
}

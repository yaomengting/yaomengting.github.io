const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let sum = 0;
function getNumber() {
  readline.question("Enter an number ", function (num) {
    if (!isNaN(num)) {
      sum += Number(num);
    }
    if (num == "stop") {
      console.log(Number(sum));
      readline.close();
    } else {
      getNumber();
    }
  });
}
getNumber();

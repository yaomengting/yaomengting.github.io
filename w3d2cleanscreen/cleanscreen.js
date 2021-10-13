//document.getElementsById(circle1);

// .setInterval(() => {
//   $("#circle1").width() += 10;
//   $("#circle1").height() += 10;
// }, 250);

$(document).ready(function () {
  $("#startBtn").click(function () {
    // get all configs
    const numberOfCircles = parseInt($("#numberOfCircles").val()) || 3;
    const width = parseInt($("#width").val()) || 200;
    const interval = parseInt($("#interval").val()) || 250;
    const growthAmount = parseInt($("#growthAmount").val()) || 10;
    console.log({ numberOfCircles, width, interval, growthAmount });
    const getRandomNumber = (min, max) => {
      const randomNumber = Math.random() * (max - min) + min;
      return parseInt(randomNumber);
    };
    const getRandomColor = () => {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
    const createCircle = (width, height, color) => {
      const $circle = $("<div>");
      console.log("circle:", $circle);
      $circle.css({
        background: color,
        width: width,
        height: height,
        position: "fixed",
        margin: "auto",
        "border-radius": "50%",
        left: getRandomNumber(0, 100) + "%",
        top: getRandomNumber(0, 100) + "%",
      });
      $circle.click(() => {
        $circle.hide();
      });
      return $circle;
    };
    const circles = [];
    // create circles
    for (let i = 0; i < numberOfCircles; i++) {
      const $circle = createCircle(width, width, getRandomColor());
      console.log("circle:", $circle);
      $circle.appendTo($("#container"));
      circles.push($circle);
    }
    // start animation
    circles.forEach(($circle) => {
      setInterval(() => {
        // const size =  getRandomNumber(-10, 10);
        // $circle.width($circle.width() + size);
        // $circle.height($circle.height() + size);
        $circle.width($circle.width() + growthAmount);
        $circle.height($circle.height() + growthAmount);
      }, interval);
    });
  });
});

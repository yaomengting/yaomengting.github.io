// When the mouse cursor touches a wall, all walls turn red and a "You lose" message shows.
// Touching the Start button with the mouse removes the red coloring from the walls.
let fail = false;
let clickStart = false;
$(function () {
  $(".boundary").on("mouseover", turnRed);
  $("#start").on("click", reset);
  $("#end").on("mouseenter", end);
  $("#maze").on("mouseleave", function () {
    fail = true;
  });
});

function turnRed() {
  $(".boundary").each(function (idx, e) {
    $(this).addClass("youlose");
  });
  fail = true;
}

function reset() {
  clickStart = true;
  $(".boundary").each(function (idx, e) {
    console.log($(this).css("background-color"));
    if ($(this).css("background-color") == "rgb(255, 136, 136)") {
      $(this).css("background-color", "#eeeeee");
    }
  });
  fail = false;
}

function end() {
  if (fail && !clickStart) {
    $("#status").text("You lose!");
  } else if (!fail) {
    $("#status").text("You win!");
  }
}

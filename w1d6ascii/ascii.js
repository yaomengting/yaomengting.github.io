window.onload = function() {
  "use strict";

  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const animationSelect = document.getElementById("animation");
  const fontSelect = document.getElementById("fontsize");
  const turbo = document.getElementById("turbo");
  let timer = null; // store the id of the timer, to use in clearInterval;
  let frame = []; // array, store each frame, split by ====/n
  let i = 0; // to store the index of frame array, which frame we need display now;
  let animationStr; //the whole animation before split;
  let custom;


  startButton.onclick = timerFunction;

  function startAnimation() {
    custom = document.getElementById("text-area").value;
    document.getElementById("text-area").value = frame[i];
    if (i < frame.length - 1) {
      i++;
    } else {
      i = 0;
    }
    startButton.disabled = true;
    stopButton.disabled = false;
    animationSelect.disabled = true;
  }

  function timerFunction() {

    if (timer == null) {
      timer = setInterval(startAnimation, 250);
    }
  }

  stopButton.onclick = stopAnimation;

  function stopAnimation() {
    // enable the start button;
    startButton.disabled = false;
    // disable the end button;
    stopButton.disabled = true;
    // enable the animation button;
    animationSelect.disabled = false;
    // stop the animation interval;
    clearInterval(timer);
    // reset the timer;
    timer = null;
    // reset the textarea content to the whole one;
    document.getElementById("text-area").value = custom;
    // reset the frame array index;
    i = 0;
  }

  animationSelect.onchange = animationChange;

  function animationChange() {
    // enable the start button;
    startButton.disabled = false;
    animationSelect.disabled = true;
    // store the whole animation str;
    animationStr = ANIMATIONS[animationSelect.value];
    // store whole content in text area including user input;

    // store each frame by split in an array;
    frame = animationStr.split("=====\n");
    let textAreaContent = document.getElementById("text-area");
    // display the whole animation in textarea;
    textAreaContent.value = ANIMATIONS[animationSelect.value];
    timer = null;
  }

  fontSelect.onchange = fontChange;

  // set value to make code simpler
  function fontChange() {
    let textAreaContent = document.getElementById("text-area");
    textAreaContent.style.fontSize = fontSelect.value + "pt";
  }

  turbo.onclick = speedChange;

  function speedChange() {

    let check = turbo.checked;
    clearInterval(timer);
    if (check) {

      timer = setInterval(timerFunction, 50);
    } else {
      timer = setInterval(timerFunction, 250);
    }
  }


};

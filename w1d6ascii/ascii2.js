window.onload = function () {
  "use strict";
  // get different elements by id;
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const animationSelect = document.getElementById("animation");
  const fontSelect = document.getElementById("fontsize");
  const turboCheckBox = document.getElementById("turbo");
  let textAreaContent = document.getElementById("text-area");

  let timer; // store the id of the timer, to use in clearInterval;
  let animationStr; //the whole animation before split;
  let isRunning = false; // boolean, set the animation status,
  let text = ""; // store the current text area including user input;
  let speed = 250;

  startButton.onclick = startButtonClickHandler;

  function startAnimation() {
    // when clicked start button, animation start move;
    
    isRunning = true;
    // assign whole animation str to textarea content variable ;
    textAreaContent = animationStr;
    // get each frame throught split;
    let frame = textAreaContent.split("=====\n");
   
    timer = setInterval(displayFrame, speed);
    let i = 0;
    // display each frame again and again;
    function displayFrame() {
      if (i < frame.length - 1) {
        i++;
      } else {
        i = 0;
      }
      textAreaContent.value = frame[i];
    }
  }

  function startButtonClickHandler() {
    startAnimation();
    // disalbe or enable;
    changeStatus(isRunning);
    // store the whole text area content including user content;
    text = textAreaContent.value;
  }

  function restartAnimation() {
    stopAnimation();
    startAnimation();
  }

  stopButton.onclick = stopButtonClickHandler;

  function stopAnimation() {
    // stop the animation interval;
    clearInterval(timer);
    //set running status to false;
    isRunning = false;
  }

  function stopButtonClickHandler() {
    stopAnimation();
    // change button status;
    changeStatus(isRunning);
    // reset the textarea content to the whole one including manual input;
    textAreaContent.value = text;
  }

  animationSelect.onchange = animationChange;

  function animationChange() {
    // store the whole animation str;
    animationStr = ANIMATIONS[animationSelect.value];
    // store whole content in text area including user input;
    text = "";
    // display the whole animation in textarea;
    textAreaContent.value = ANIMATIONS[animationSelect.value];
    if (isRunning) restartAnimation();
  }

  fontSelect.onchange = fontChange;

  
  function fontChange() {
    textAreaContent.style.fontSize = fontSelect.value + "pt";
  }

  turboCheckBox.onclick = speedChange;

  function speedChange() {
    let checked = turboCheckBox.checked;
    // clearInterval(timer);
    if (checked) {
      speed = 50;
    } else {
      speed = 250;
    }
    if (!isRunning) return;
    stopAnimation();
    startAnimation();
    changeStatus(isRunning);
  }

  function changeStatus(isRunning) {
    if (isRunning) {
      startButton.disabled = true;
      stopButton.disabled = false;
      animationSelect.disabled = true;
      textAreaContent.disabled = true;
    } else {
      startButton.disabled = false;
      stopButton.disabled = true;
      animationSelect.disabled = false;
      textAreaContent.disabled = false;
    }
  }
};

window.onload = function () {
  "use strict";
 console.log("version12.30.02");
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const turboCheckbox = document.getElementById("turbo");
  const animationSelect = document.getElementById("animation");
  let textAreaContent = document.getElementById("text-area");
  startButton.onclick = startButtonClickHandler;
  stopButton.onclick = stopButtonClickHandler;
  animationSelect.onchange = animationChangeEventHandler;
  turboCheckbox.onclick = turboSelectedChange;
  let intervalRef;
  let animationStr = "";
  let isRunning = false;
  let text = "";
  let speed = 250;
  function startAnimation() {
    console.log("startAnimation...");
    isRunning = true;
    let textAreaContent = animationStr;
    console.log("animationStr:", animationStr);
    let frame = textAreaContent.split("=====\n");
    console.log("frame[0]", frame);
    intervalRef = setInterval(displayFrame, speed);
    let i = 0;

    function displayFrame() {
      if (i < frame.length - 1) {
        i++;
      } else {
        i = 0;
      }
      document.getElementById("text-area").value = frame[i];
    }
  }

  function restartAnimation() {
    stopAnimation();
    startAnimation();
  }
  function stopAnimation() {
    clearInterval(intervalRef);
    isRunning = false;
  }
  function startButtonClickHandler() {
    console.log("startButtonClickHandler...");

    startAnimation();
    changeStatus(isRunning);
    text = textAreaContent.value;
  }

  function stopButtonClickHandler() {
    console.log("stopButtonClickHandler...");
    stopAnimation();
    changeStatus(isRunning);
    textAreaContent.value = text;
  }

  function animationChangeEventHandler() {
    animationStr = ANIMATIONS[animationSelect.value];
    text = "";
    console.log("animationStr:", animationStr);
    textAreaContent.value = ANIMATIONS[animationSelect.value];
    if (isRunning) restartAnimation();
  }

  // set value to make code simpler
  const fontSelect = document.getElementById("fontsize");
  fontSelect.onchange = fontChangeEventHandler;

  function fontChangeEventHandler() {
    textAreaContent.style.fontSize = fontSelect.value + "pt";
  }

  function turboSelectedChange() {
    const checked = turboCheckbox.checked;
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

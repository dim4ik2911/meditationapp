const circle = document.querySelector(".breathe__circle");
// const totalTime = 8000;
// const breatheTime = (totalTime / 6) * 2.5;
// const holdTime = totalTime / 6;
const time = document.getElementById("time");
const text = document.getElementById("text");

//to default ()
const breathAnimation = () => {
  my1 = setTimeout(function () {
    isPlaying
      ? (text.innerText = "Breathe In!")
      : (text.innerText = "Restart!");
    circle.className = "breathe__circle slowGrow";
    my2 = setTimeout(function () {
      isPlaying
        ? (text.innerText = "Breathe In!")
        : (text.innerText = "Restart!");
      circle.className = "breathe__circle grow";
      my3 = setTimeout(function () {
        isPlaying ? (text.innerText = "Hold!") : (text.innerText = "Restart!");
        circle.className = "breathe__circle hold";
        my4 = setTimeout(function () {
          isPlaying
            ? (text.innerText = "Breathe out!")
            : (text.innerText = "Restart!");
          circle.className = "breathe__circle shrink";
          my5 = setTimeout(function () {
            isPlaying
              ? (text.innerText = "Breathe out!")
              : (text.innerText = "Restart!");
            circle.className = "breathe__circle slowShrink";
          }, 2950);
        }, 2000);
      }, 2950);
    }, 0050);
  }, 0050);
};

// Animation()
const pauseButton = document.getElementById("pause-button");
const imagePause = document.getElementById("image-pause");
let isPlaying = false;
pauseButton.disabled = false;
const pauseAnimation = () => {
  if (!isPlaying) {
    imagePause.src = "./img/repeat.svg";
    isPlaying = true;
    pauseButton.disabled = false;
    breathAnimation();
    startBreathing = setInterval(breathAnimation, 8000);
    startTimer();
    timingInterval = setInterval(startTimer, 1000);
  } else {
    console.log(circle.classList);
    pauseButton.disabled = true;
    imagePause.src = "./img/play.svg";
    isPlaying = false;
    clearInterval(timingInterval);
    clearInterval(startBreathing);
  }
};

pauseButton.addEventListener("click", pauseAnimation);

//timer
const startTimer = () => {
  let presentTime = time.innerHTML;
  let timeArray = presentTime.split(":");
  let m = parseInt(timeArray[0]);
  let s = checkSeconds(parseInt(timeArray[1] - 1));
  if (presentTime == `00:00`) {
    return;
  }
  if (s == 59) {
    m = m - 1;
  }
  if (m < 10) {
    m = "0" + m;
  }
  time.innerHTML = `${m}:${s}`;
};

const checkSeconds = (sec) => {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  }
  if (sec < 0) {
    sec = "59";
  }
  return sec;
};

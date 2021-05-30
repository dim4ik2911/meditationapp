const circle = document.querySelector(".breathe__circle");
const totalTime = 6000;
const breatheTime = (totalTime / 6) * 2.5;
const holdTime = totalTime / 6;
const time = document.getElementById("time");
const text = document.getElementById("text");

//to default ()
const breathAnimation = () => {
  text.innerText = "Breathe In!";
  circle.className = "breathe__circle grow";
  stopHolding = setTimeout(() => {
    text.innerText = "Hold";
    stopBreatheOut = setTimeout(() => {
      text.innerText = "Breathe out!";
      circle.className = "breathe__circle shrink";
    }, holdTime);
  }, breatheTime);
};

// Animation()
const pauseButton = document.getElementById("pause-button");
let isPlaying = false;
const pauseAnimation = () => {
  if (!isPlaying) {
    pauseButton.src = "./img/pause.svg";
    isPlaying = true;
    breathAnimation();
    startTimer();
    timingInterval = setInterval(startTimer, 1000);
    startBreathing = setInterval(breathAnimation, totalTime);
  } else {
    pauseButton.src = "./img/play.svg";
    isPlaying = false;
    clearInterval(startBreathing);
    clearInterval(timingInterval);
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

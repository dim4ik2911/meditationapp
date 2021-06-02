const circle = document.querySelector(".breathe__circle");
// const totalTime = 8000;
// const breatheTime = (totalTime / 6) * 2.5;
// const holdTime = totalTime / 6;
const time = document.getElementById("time");
const text = document.getElementById("text");

//to default ()
const breathAnimation = () => {
  isPlaying ? (text.innerText = "Breathe In!") : (text.innerText = "Restart!");
  circle.className = "breathe__circle grow";

  my2 = setTimeout(function () {
    isPlaying ? (text.innerText = "Hold!") : (text.innerText = "Restart!");
    circle.className = "breathe__circle hold";

    my3 = setTimeout(function () {
      isPlaying
        ? (text.innerText = "Breathe out!")
        : (text.innerText = "Restart!");

      circle.className = "breathe__circle shrink";
    }, 2000);
  }, 3000);
};

// Animation()
const pauseButton = document.getElementById("pause-button");
const imagePause = document.getElementById("image-pause");
let isPlaying = false;
// pauseButton.disabled = false;
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
    imagePause.src = "./img/play.svg";
    isPlaying = false;
    pauseButton.disabled = true;
    clearInterval(timingInterval);
    clearInterval(startBreathing);
    text.innerHTML = "Restart!";
    time.innerHTML = "04:00";

    setTimeout(
      (restartButtonEnable = () => {
        pauseButton.disabled = false;
      }),
      8000
    );
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

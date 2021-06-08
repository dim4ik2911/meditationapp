const circle = document.querySelector(".breathe__circle");
const time = document.getElementById("time");
const text = document.getElementById("text");
const pauseButton = document.getElementById("pause-button");
const imagePause = document.getElementById("image-pause");
const restartButton = document.getElementById("restart-button");

let isPlaying = false;

//interval
let secondsCircle = 0;
const secondsCycle = () => {
  secondsCircle++;
  console.log(secondsCircle);
  if (secondsCircle == 9) {
    secondsCircle = 1;
  }

  if (secondsCircle == 1) {
    text.innerText = "Breathe In!";
    circle.className = "breathe__circle grow1";
  } else if (secondsCircle == 2) {
    text.innerText = "Breathe In!";
    circle.className = "breathe__circle grow2";
  } else if (secondsCircle == 3) {
    text.innerText = "Breathe In!";
    circle.className = "breathe__circle grow3";
  } else if (secondsCircle == 4) {
    text.innerText = "Hold!";
    circle.className = "breathe__circle hold1";
  } else if (secondsCircle == 5) {
    text.innerText = "Hold!";
    circle.className = "breathe__circle hold2";
  } else if (secondsCircle == 6) {
    text.innerText = "Breathe out!";
    circle.className = "breathe__circle shrink1";
  } else if (secondsCircle == 7) {
    text.innerText = "Breathe out!";
    circle.className = "breathe__circle shrink2";
  } else if (secondsCircle == 8) {
    text.innerText = "Breathe out!";
    circle.className = "breathe__circle shrink3";
  }
};
// function to restart
// const secondsBack = () => {
//   if (secondsCircle < 5) {
//     do {
//       secondsCircle--;
//     } while (secondsCircle <= -1);
//   } else {
//     do {
//       secondsCircle++;
//     } while (secondsCircle > 9);
//   }
//   if (secondsCircle == 9) {
//     secondsCircle = 0;
//   }

//   if (secondsCircle == 4) {
//     text.innerText = "Restart soon!";
//     circle.className = "breathe__circle hold1";
//   } else if (secondsCircle == 3) {
//     text.innerText = "Restart soon!";
//     circle.className = "breathe__circle shrink1";
//   } else if (secondsCircle == 2) {
//     text.innerText = "Restart soon!";
//     circle.className = "breathe__circle shrink2";
//   } else if (secondsCircle == 1) {
//     text.innerText = "Restart soon!";
//     circle.className = "breathe__circle shrink3";
//   } else if (secondsCircle == 0) {
//     text.innerText = "Ready!";
//     circle.className = "breathe__circle";
//   }
//   if (secondsCircle == 5) {
//     text.innerText = "Restart soon!";
//     circle.className = "breathe__circle hold1";
//   } else if (secondsCircle == 6) {
//     text.innerText = "Restart soon!";
//     circle.className = "breathe__circle shrink1";
//   } else if (secondsCircle == 7) {
//     text.innerText = "Restart soon!";
//     circle.className = "breathe__circle shrink2";
//   } else if (secondsCircle == 8) {
//     text.innerText = "Ready!";
//     circle.className = "breathe__circle shrink3";
//   }

//   console.log(secondsCircle);
// };

restartButton.addEventListener("click", () => {
  clearInterval(startBreathing);
  clearInterval(timingInterval);
  imagePause.src = "./img/play.svg";
  time.innerHTML = "04:00";
  isPlaying = false;
  secondsCircle = 0;
  // circle.className == "breathe__circle";
  text.innerHTML = "Ready!";
  circle.className = "breathe__circle";
  // secondsBack();
  // secondsBackInterval = setInterval(secondsBack, 1000);
  // if (circle.className == "breathe__circle") {
  //   clearInterval(secondsBackInterval);
  // }
});

//timer
const startTimer = () => {
  let presentTime = time.innerHTML;
  let timeArray = presentTime.split(":");
  let m = parseInt(timeArray[0]);
  let s = checkSeconds(parseInt(timeArray[1] - 1));

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

//function to pause and start again
pauseButton.addEventListener("click", () => {
  console.log("clicked");
  if (!isPlaying) {
    startTimer();
    timingInterval = setInterval(startTimer, 1000);
    secondsCycle();
    startBreathing = setInterval(secondsCycle, 1000);
    imagePause.src = "./img/pause.svg";
    isPlaying = true;
  } else {
    clearInterval(startBreathing);
    clearInterval(timingInterval);
    imagePause.src = "./img/play.svg";
    isPlaying = false;
    text.innerHTML = "Paused";
  }
});

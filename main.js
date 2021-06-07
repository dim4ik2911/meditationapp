const circle = document.querySelector(".breathe__circle");
// const totalTime = 8000;
// const breatheTime = (totalTime / 6) * 2.5;
// const holdTime = totalTime / 6;
const time = document.getElementById("time");
const text = document.getElementById("text");

//to default ()
// const breathAnimation = () => {
//   my1 = setTimeout(function () {
//     isPlaying
//       ? (text.innerText = "Breathe In!")
//       : (text.innerText = "Wait for restart!");
//     circle.className = "breathe__circle slowGrow";
//     my2 = setTimeout(function () {
//       isPlaying
//         ? (text.innerText = "Breathe In!")
//         : (text.innerText = "Wait for restart!");
//       circle.className = "breathe__circle grow";
//       my3 = setTimeout(function () {
//         isPlaying
//           ? (text.innerText = "Hold!")
//           : (text.innerText = "Wait for restart!");
//         circle.className = "breathe__circle hold";
//         my4 = setTimeout(function () {
//           isPlaying
//             ? (text.innerText = "Breathe out!")
//             : (text.innerText = "Wait for restart!");
//           circle.className = "breathe__circle shrink";
//           my5 = setTimeout(function () {
//             isPlaying
//               ? (text.innerText = "Breathe out!")
//               : (text.innerText = "Restart!");
//             circle.className = "breathe__circle slowShrink";
//           }, 2950);
//         }, 2000);
//       }, 2950);
//     }, 0050);
//   }, 0050);
// };

// Animation()
const pauseButton = document.getElementById("pause-button");
const imagePause = document.getElementById("image-pause");
let isPlaying = false;
// pauseButton.disabled = false;
// const pauseAnimation = () => {
//   console.log("working");
//   if (!isPlaying) {
//     imagePause.src = "./img/repeat.svg";
//     isPlaying = true;
//     // pauseButton.disabled = false;
//     breathAnimation();
//     startBreathing = setInterval(breathAnimation, 8000);
//     startTimer();
//     timingInterval = setInterval(startTimer, 1000);
//   } else {
//     console.log(circle.classList);
//     // pauseButton.disabled = true;
//     imagePause.src = "./img/play.svg";
//     isPlaying = false;
//     clearInterval(timingInterval);
//     clearInterval(startBreathing);
//     console.log("finsihed");
//   }
// };

// pauseButton.addEventListener("click", pauseAnimation);

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

//interval
let secondsCircle = 0;
const secondsCycle = () => {
  secondsCircle++;
  console.log(secondsCircle);
  if (secondsCircle == 9) {
    secondsCircle = 1;
  }

  if (secondsCircle >= 0 && secondsCircle <= 3) {
    text.innerText = "Breathe In!";
    circle.className = "breathe__circle grow";
  } else if (secondsCircle >= 3 && secondsCircle <= 5) {
    text.innerText = "Hold!";
    circle.className = "breathe__circle hold";
  } else if (secondsCircle >= 5 && secondsCircle <= 8) {
    text.innerText = "Breathe out!";
    circle.className = "breathe__circle shrink";
  }
};

pauseButton.addEventListener("click", () => {
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
// breathAnimation();
//     startBreathing = setInterval(breathAnimation, 8000);

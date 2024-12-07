let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;


const todayDateElement = document.getElementById("today-date");
const today = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
todayDateElement.textContent = today.toLocaleDateString(undefined, options);

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");

const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const resetButton = document.getElementById("reset-btn");


startButton.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(updateTime, 10); 
  }
});


stopButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

resetButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
});


function updateTime() {
  milliseconds += 1;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds += 1;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes += 1;
  }
  updateDisplay();
}

function updateDisplay() {
  minutesDisplay.textContent = minutes.toString().padStart(2, "0");
  secondsDisplay.textContent = seconds.toString().padStart(2, "0");
  millisecondsDisplay.textContent = milliseconds.toString().padStart(2, "0");
}

let seconds = 0;
let minutes = 0;
let intervalId = null;
let isRunning = false;

const timerDisplay = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
  let min = minutes < 10 ? '0' + minutes : minutes;
  let sec = seconds < 10 ? '0' + seconds : seconds;
  timerDisplay.textContent = min + ':' + sec;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  intervalId = setInterval(function() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  if (!isRunning) return;
  isRunning = false;
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  updateDisplay();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
let timer;
let remainingSeconds = 0;
let isRunning = false;

function updateDisplay() {
  const hrs = String(Math.floor(remainingSeconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0');
  const secs = String(remainingSeconds % 60).padStart(2, '0');
  document.getElementById('display').textContent = `${hrs}:${mins}:${secs}`;
}

function setCountdown() {
  const hours = parseInt(document.getElementById('hours').value) || 0;
  const minutes = parseInt(document.getElementById('minutes').value) || 0;
  const seconds = parseInt(document.getElementById('seconds').value) || 0;
  remainingSeconds = hours * 3600 + minutes * 60 + seconds;
  updateDisplay();
}

function startCountdown() {
  if (!isRunning && remainingSeconds > 0) {
    isRunning = true;
    timer = setInterval(() => {
      if (remainingSeconds <= 0) {
        clearInterval(timer);
        isRunning = false;
        alert("Time's up!");
      } else {
        remainingSeconds--;
        updateDisplay();
      }
    }, 1000);
  }
}

function pauseCountdown() {
  clearInterval(timer);
  isRunning = false;
}

function resetCountdown() {
  pauseCountdown();
  remainingSeconds = 0;
  updateDisplay();
}

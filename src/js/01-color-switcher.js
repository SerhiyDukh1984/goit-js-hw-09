const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', startChangeColor);
stoptBtn.addEventListener('click', stopChangeColor);

const changeColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

stoptBtn.disabled = true;

function startChangeColor() {
  timeId = setInterval(() => {
    startBtn.disabled = true;
    stoptBtn.disabled = false;

    document.body.style.backgroundColor = changeColor();
  }, 500);
  return timeId;
}

function stopChangeColor() {
  startBtn.disabled = false;
  stoptBtn.disabled = true;
  clearInterval(timeId);
}

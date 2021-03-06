const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');

const changeColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

startBtn.addEventListener('click', startChangeColor);
stoptBtn.addEventListener('click', stopChangeColor);

stoptBtn.disabled = true;

let timeId = 0;

function startChangeColor() {
  timeId = setInterval(() => {
    startBtn.disabled = true;
    stoptBtn.disabled = false;

    document.body.style.backgroundColor = changeColor();
  }, 1000);
}

function stopChangeColor() {
  startBtn.disabled = false;
  stoptBtn.disabled = true;
  clearInterval(timeId);
}

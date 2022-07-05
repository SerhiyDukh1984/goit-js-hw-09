import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startButton = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minsEl = document.querySelector('[data-minutes]');
const secsEl = document.querySelector('[data-seconds]');

// const daysText = document.querySelector('.label-d');
// const hoursText = document.querySelector('.label-h');
// const minsText = document.querySelector('.label-m');
// const secsText = document.querySelector('.label-s');

let selectedDate = null;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    const restOfTime = selectedDates[0] - Date.now();

    if (restOfTime < 0) {
      startButton.disabled = true;
      alert('Please choose a date in the future');
      startButton.disabled = true;
      return restOfTime;
    }

    startButton.disabled = false;
  },
});

startButton.addEventListener('click', onBtnStartClick);

function onBtnStartClick() {
  intervalId = setInterval(() => {
    const restOfTime = selectedDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(restOfTime);
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minsEl.textContent = minutes;
    secsEl.textContent = seconds;
  }, 1000);

  if (restOfTime < 0) {
    clearInterval(intervalId);
  }
}

function convertMs(ms) {
  const days = pad(Math.floor(ms / 1000 / 60 / 60 / 24));
  const hours = pad(Math.floor(ms / 1000 / 60 / 60) % 24);
  const minutes = pad(Math.floor(ms / 1000 / 60) % 60);
  const seconds = pad(Math.floor(ms / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart('2', '0');
}

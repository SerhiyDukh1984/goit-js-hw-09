import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    console.log('🚀 ~ selectedDates', selectedDates);
  },
};

console.log(options.onClose);

flatpickr('#datetime-picker', options);

const daysEl = document.querySelector('[data-days');
const hoursEl = document.querySelector('[data-hours');
const minutessEl = document.querySelector('[data-minutes');
const secondsEl = document.querySelector('[data-seconds');
const dateTimePicker = document.querySelector('#datetime-picker');
// console.log('🚀 ~ dateTimePicker', dateTimePicker.value);
const startButton = document.querySelector('[data-start]');

const timer = {
  start() {
    const startTime = options.defaultDate;

    startButton.disabled = true;

    setInterval(() => {
      const currentTime = options.onClose;
      const deltaTime = currentTime - startTime;
      const timeComponents = getTimeComponents(deltaTime);
    }, 1000);
  },
};

startButton.addEventListener('click', timer.start);

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(
    Math.floor((time % (1000 * 60 * 60 * 24 * 31)) / (1000 * 60 * 60 * 24))
  );
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');
const btnSubmitEl = document.querySelector('button');

let delay = null;
let step = null;
let amount = [];
let position = 0;

formEl.addEventListener('submit', onSubmitClick);

function onSubmitClick(e) {
  e.preventDefault();
  btnSubmitEl.disabled = true;

  const input = e.currentTarget.elements;

  delay = Number(input.delay.value);
  step = Number(input.step.value);
  let inputValue = Number(input.amount.value);

  for (let i = 1; i <= inputValue; i += 1) {
    amount.push(i);
  }

  amount.map(number => {
    position = number;
    if (position !== 1) {
      delay += step;
    }

    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })

      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  });
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

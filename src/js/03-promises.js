const formEl = document.querySelector('form');
const firstDelayEl = formEl.elements.delay;
const stepEl = formEl.elements.step;
const amountEl = formEl.elements.amount;
const buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', onButtonClick);

let delay = 0;
let position = 0;

function onButtonClick(e) {
  buttonEl.disabled = true;
  e.preventDefault();
  delay = Number(firstDelayEl.value);

  for (let i = 1; i <= amountEl.value; i += 1) {
    position = i;
    createPromise(position, delay).then(onSuccess).catch(onError);
    delay += Number(stepEl.value);
  }
}

buttonEl.disabled = false;

function onSuccess({ position, delay }) {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
function onError({ position, delay }) {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      counter = +1;

      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        return { position, delay };
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
        return { position, delay };
      }
    }, delay);
  });
}

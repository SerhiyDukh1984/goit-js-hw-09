const formEl = document.querySelector('form');
const firstDelayEl = formEl.elements.delay;
const stepEl = formEl.elements.step;
const amountEl = formEl.elements.amount;
const buttonEl = document.querySelector('button');

formEl.addEventListener('submit', onSubmitClick);

let counter = 0;

function onSubmitClick(e) {
  buttonEl.disabled = true;
  e.preventDefault();
  let delay = Number(firstDelayEl.value);

  for (let i = 1; i <= amountEl.value; i += 1) {
    position = i;
    createPromise(position, delay).then(resolve).catch(reject);
    delay += Number(stepEl.value);
  }
}

function onSuccess({ position, delay }) {}
function onError({ position, delay }) {
  console.log();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => {
      if (counter > amountEl) {
        clearTimeout(timeoutId);
        buttonEl.disabled = false;
        return;
      }
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

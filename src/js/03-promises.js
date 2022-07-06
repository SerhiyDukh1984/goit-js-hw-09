const formEl = document.querySelector('form');
const firstDelayEl = formEl.elements.delay;
const stepEl = formEl.elements.step;
const amountEl = formEl.elements.amount;
console.log('🚀 ~ amountEl', amountEl.value);
const ButtonEl = document.querySelector('button');

formEl.addEventListener('submit', onSubmitClick);

function onSubmitClick(e) {
  ButtonEl.disabled = true;
  e.preventDefault();
  let delay = Number(firstDelayEl.value);

  for (let i = 1; i <= amountEl.value; i += 1) {
    createPromise(i, delay).then(onSuccess).catch(onError);
    delay += Number(stepEl.value);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => {
      let counter = 0;
      if (counter > amountEl) {
        clearTimeout(timeoutId);
      }
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSuccess({ position, delay }) {
  console.log(`Fulfilled promise ${position} in ${delay}ms`);
}
function onError({ position, delay }) {
  console.log(`Rejected promise ${position} in ${delay}ms`);
}

const formEl = document.querySelector('form');
const firstDelayEl = formEl.elements.delay;
const stepEl = formEl.elements.step;
const amountEl = formEl.elements.amount;
const buttonEl = document.querySelector('button');

formEl.addEventListener('submit', onSubmitClick);

function onSubmitClick(e) {
  buttonEl.disabled = true;
  e.preventDefault();
  let delay = Number(firstDelayEl.value);

  for (let i = 1; i <= amountEl.value; i += 1) {
    createPromise(i, delay).then(onSuccess).catch(onError);
    delay += Number(stepEl.value);
  }
}

function onSuccess({ position, delay }) {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
function onError({ position, delay }) {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => {
      let position = 0;
      let counter = 0;
      if (counter > amountEl) {
        clearTimeout(timeoutId);
        buttonEl.disabled = false;
        return;
      }
      const shouldResolve = Math.random() > 0.3;
      position = +1;
      counter = +1;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

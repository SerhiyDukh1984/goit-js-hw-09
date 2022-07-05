const FirstDelay = document.querySelector('delay');
console.log('🚀 ~ FirstDelay', FirstDelay);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve('Все добре');
  } else {
    Reject('Все погано');
  }
}

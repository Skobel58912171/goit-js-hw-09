import { Notify } from 'notiflix';
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmit);
// console.dir(formEl)
function onSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.target.elements;
  const amountV = Number(amount.value);
  const delayV = Number(delay.value);
  const stepV = Number(step.value);
  console.log(amount.value);
  console.log(delay.value);
  console.log(step.value);
  let delayTime = delayV;
  const formBtn = formEl.lastElementChild;
  formBtn.disabled = false;
  for (let i = 1; i <= amountV; i += 1) {
    createPromise(i, delayTime)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayTime += stepV;
  }
  formBtn.disabled = true;
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Notify.success;
        resolve({ position, delay });
        // Fulfillres
      } else {
        // Notify.failure;
        reject({ position, delay }); // Reject
      }
    }, delay);
  });
}

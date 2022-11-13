const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};
let timerId = null;
// console.log(refs.start);
// console.log(refs.stop);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onClickStart(evt) {
  refs.start.disabled = true;
  refs.stop.disabled = false;
  timerId = setInterval(() => {
    const bodyEl = document.querySelector('body');
    bodyEl.style.background = getRandomHexColor();
    console.log(bodyEl.style.background);
  }, 1000);
}

function onClickStop(evt) {
  refs.start.disabled = false;
  refs.stop.disabled = true;
  clearInterval(timerId);
}
refs.start.addEventListener('click', onClickStart);
refs.stop.addEventListener('click', onClickStop);

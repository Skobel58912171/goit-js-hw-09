import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix';
const refs = {
  time: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  dateDays: document.querySelector('[data-days]'),
  dateHours: document.querySelector('[data-hours]'),
  dateMinutes: document.querySelector('[data-minutes]'),
  dateSeconds: document.querySelector('[data-seconds]'),
};
// console.log(dateDays);
let startTime = 0;

refs.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    startTime = Date.parse(selectedDates[0]);
    if (startTime > Date.parse(new Date())) {
      refs.btnStart.disabled = false;
    } else {
      Notify.failure('Please choose a date in the future');
    }
    // console.log(Date.parse(new Date()));
    // console.log(startTime);
  },
};

flatpickr(refs.time, options);

const timer = {
  intervalId: null,
  start() {
    this.intervalId = setInterval(() => {
      refs.btnStart.disabled = true;
      const currentTime = Date.parse(new Date());
      const deltaTime = startTime - currentTime;

      const timerComponents = convertMs(deltaTime);
      refs.dateDays.textContent = pad(timerComponents.days);
      refs.dateHours.textContent = pad(timerComponents.hours);
      refs.dateMinutes.textContent = pad(timerComponents.minutes);
      refs.dateSeconds.textContent = pad(timerComponents.seconds);
      if (deltaTime === 0) {
        clearInterval(this.intervalId);
      }
      // console.log(deltaTime);
      // console.log(startTime);
    }, 1000);
  },
};
function pad(value) {
  return value.toString().padStart(2, '0');
}
refs.btnStart.addEventListener('click', () => {
  timer.start();
});
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

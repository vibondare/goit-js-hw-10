import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../img/error-icon.svg';

let userSelectedDate = '';

const input = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
const outputSeconds = document.querySelector('span[data-seconds]');
const outputMinutes = document.querySelector('span[data-minutes]');
const outputHours = document.querySelector('span[data-hours]');
const outputDays = document.querySelector('span[data-days]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (userSelectedDate.getTime() <= Date.now()) {
      // window.alert('Please choose a date in the future');

      iziToast.show({
        title: 'Error',
        message: 'Please choose a date in the future',
        backgroundColor: '#B51B1B',
        messageColor: '#FFFFFF',
        position: 'topRight',
        theme: 'dark',
        iconUrl: errorIcon
      });

      startButton.classList.remove('active-button');
    } else {
      startButton.classList.add('active-button');

      console.log(userSelectedDate);
    }
  },
};

flatpickr('#datetime-picker', options);

startButton.addEventListener('click', startTimer);

function startTimer() {
  if (!startButton.classList.contains('active-button')) {
    return;
  }

  startButton.classList.remove('active-button');
  input.setAttribute('disabled', 'disabled');

  function start() {
    const currentTime = Date.now();
    let timeLeft = userSelectedDate - currentTime;

    function pad(value) {
      return String(value).padStart(2, '0');
    }

    let totalTime = convertMs(timeLeft);

    const seconds = pad(totalTime.seconds);
    const minutes = pad(totalTime.minutes);
    const hours = pad(totalTime.hours);
    const days = pad(totalTime.days);

    outputSeconds.innerHTML = seconds;
    outputMinutes.innerHTML = minutes;
    outputHours.innerHTML = hours;
    outputDays.innerHTML = days;

    // convert
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

    // convert

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      outputSeconds.innerHTML = '00';
      outputMinutes.innerHTML = '00';
      outputHours.innerHTML = '00';
      outputDays.innerHTML = '00';
      input.removeAttribute('disabled');
    }
  }

  const timerInterval = setInterval(start, 1000);
}

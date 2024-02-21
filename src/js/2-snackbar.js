import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../img/error-icon.svg';
import successIcon from '../img/success-icon.svg';

const form = document.querySelector('.form');

form.addEventListener('submit', submitCreateButton);

function submitCreateButton(event) {
  event.preventDefault();

  const delay = document.querySelector('input[name="delay"]').value;
  const state = document.querySelector('input[name="state"]:checked').value;

  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => resolve(delay), delay);
    } else {
      setTimeout(() => reject(delay), delay);
    }
  });

  promise
    .then(delay => {
      iziToast.show({
        title: 'Success',
        message: `Fulfilled promise in ${delay}ms`,
        backgroundColor: '#59A10D',
        messageColor: '#FFFFFF',
        position: 'topRight',
        theme: 'dark',
        iconUrl: successIcon,
      });
    })
    .catch(delay => {
      iziToast.show({
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
        backgroundColor: '#B51B1B',
        messageColor: '#FFFFFF',
        position: 'topRight',
        theme: 'dark',
        iconUrl: errorIcon,
      });
    });
}

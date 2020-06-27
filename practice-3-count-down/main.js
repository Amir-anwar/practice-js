/* eslint-disable require-jsdoc */
const counterContainer = document.querySelector('.counter-container');

let seconds = 120;

function secondPassed() {
  const minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;

  if (seconds < 10) {
    remainingSeconds = '0' + remainingSeconds;
  }

  counterContainer.textContent = `${minutes}:${remainingSeconds}`;

  if (seconds > 0) {
    seconds--;
  } else {
    clearInterval(count);
    counterContainer.textContent = 'done';
  }
};

const count = setInterval(() => {
  'use strict';
  secondPassed();
}, 1000);

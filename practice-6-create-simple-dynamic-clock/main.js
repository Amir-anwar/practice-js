/* eslint-disable require-jsdoc */
const clock = document.querySelector('.clock');

function updateClock(param) {
  const timeNow = new Date;

  let hours = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let seconds = timeNow.getSeconds();

  if (hours > 12) {
    hours = hours -12;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${ seconds }`;
  }

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

window.onload = function() {
  setInterval(updateClock, 500);
};

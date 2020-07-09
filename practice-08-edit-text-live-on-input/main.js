/* eslint-disable require-jsdoc */
const titleInput = document.querySelector('.title-input');
const contentInput = document.querySelector('#content-input');
const title = document.querySelector('.title');
const content = document.querySelector('.content');

function liveEdit(input, show) {
  input.addEventListener('input',
      () => show.textContent = input.value);
}
liveEdit(titleInput, title);
liveEdit(contentInput, content);

// titleInput.addEventListener('keyup',
//     () => title.textContent = titleInput.value);

// contentInput.addEventListener('keyup',
//     () => content.textContent = contentInput.value);

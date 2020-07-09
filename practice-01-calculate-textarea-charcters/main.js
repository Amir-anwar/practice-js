const mainTextarea = document.querySelector('#main-textarea');
const remainChars = document.querySelector('#remain-chars');

mainTextarea.addEventListener('keyup', () => {
  remainChars.textContent = 50 - mainTextarea.value.length;

  remainChars.textContent < 0 ?
    remainChars.style.color = 'tomato' :
    remainChars.style.color = 'black';
});

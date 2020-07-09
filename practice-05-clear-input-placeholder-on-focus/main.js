const textInput = document.querySelector('#textInput');

const placeholderValue = textInput.placeholder;

textInput.onfocus = () => (textInput.placeholder.length !== 0) ?
  textInput.placeholder = '' :
  textInput.placeholder = placeholderValue;


textInput.onblur = () => (textInput.placeholder === '') ?
  textInput.placeholder = placeholderValue :
  textInput.placeholder = '';


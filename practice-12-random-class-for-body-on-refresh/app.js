const bodyClasses = [
  'dark',
  'white',
  'solarized',
];

window.onload = () => {
  const randomKey = Math.floor(Math.random() * bodyClasses.length);

  document.body.setAttribute('class', bodyClasses[randomKey]);
};

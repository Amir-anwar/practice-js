const btn = document.querySelector('#btn');
const show = document.querySelector('#show');


function generateSerial() {
  const
    chars = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  const serialLength = 20;
  let serial = '';

  for (let i = 0; i < serialLength; i++) {
    const randomNumber = Math.floor(Math.random() * serialLength);

    const randomChar = chars.slice(randomNumber, randomNumber + 1);

    serial += randomChar;
  }

  show.textContent = serial;
};

btn.addEventListener('click', generateSerial);

const text = document.querySelector('.text');

function captilize(string) {
  const wordsArr = string.split(' ');
  const mainArr = [];

  // text.textContent = '';
  wordsArr.forEach((word) => {
    const firstChar = word.charAt(0).toUpperCase();
    const restOfTheWord = word.slice(1);

    mainArr.push(firstChar + restOfTheWord);
  });

  text.textContent = mainArr.join(' ');
}

captilize(text.textContent);

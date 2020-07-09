const btn = document.querySelector('button');

function redirectMe(url) {
  if (url !== '') {
    window.location = url;
  }
}

btn.addEventListener('click', function() {
  redirectMe('https://unsplash.com/');
});

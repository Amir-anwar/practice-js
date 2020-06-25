const btn = document.querySelector('.btn');

window.onscroll = function() {
  'use strict';

  if (window.pageYOffset > 600) {
    btn.style.visibility = 'visible';
    btn.style.opacity = 1;
  } else {
    btn.style.visibility = 'hidden';
    btn.style.opacity = 0;
  }
};

btn.onclick = function() {
  window.scrollTo(0, 0);
};

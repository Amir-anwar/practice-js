const btn = document.querySelector('.btn');

const hash = window.location.hash.slice(1);

if (hash === 'amir') {
  btn.style.opacity = 1;
}

console.log(hash);

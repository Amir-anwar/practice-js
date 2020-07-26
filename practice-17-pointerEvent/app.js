const image = document.querySelector('img');

window.addEventListener('mousemove', (e) => {
  const x = e.offsetX;
  const y = e.offsetY;

  image.style.clipPath = `circle(80px at ${x}px ${y}px)`;
});

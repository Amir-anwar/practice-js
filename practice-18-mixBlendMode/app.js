window.addEventListener('mousemove', (e) => {
  const x = e.offsetX;
  const y = e.offsetY;

  document.querySelector('.pointer').style.top = `${y}px`;
  document.querySelector('.pointer').style.left = `${x}px`;
});

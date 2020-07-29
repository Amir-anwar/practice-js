/* eslint-disable object-shorthand */
const mario = {
  id: 'mario',
  el: document.querySelector('.mario'),
  x: 0,
  y: 0,
  fSteps: 0,
  lSteps: 0,
  move() {
    this.el.style.top = `${this.y}px`;
    this.el.style.left = `${this.x}px`;
  },
  up() {
    this.fSteps -= 1;
    this.y += -20;

    this.move();

    return this;
  },
  down() {
    this.fSteps += 1;
    this.y += 20;

    this.move();

    return this;
  },
  left() {
    this.lSteps -= 1;
    this.x += -20;

    this.move();

    return this;
  },
  right() {
    this.lSteps += 1;
    this.x += 20;

    this.move();

    return this;
  },
};

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      mario.left();
      break;
    case 'ArrowRight':
      mario.right();
      break;
    case 'ArrowUp':
      mario.up();
      break;
    case 'ArrowDown':
      mario.down();
      break;
    default:
      mario.move();
  }
  console.log(e);
});

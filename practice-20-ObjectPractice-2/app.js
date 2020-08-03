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

const keysPressed = {};

document.addEventListener('keydown', (event) => {
  keysPressed[event.key] = true;
  if (keysPressed.ArrowUp && keysPressed.ArrowLeft) {
    mario.up();
    mario.left();
  } else if (keysPressed.ArrowUp && keysPressed.ArrowRight) {
    mario.up();
    mario.right();
  } else if (keysPressed.ArrowDown && keysPressed.ArrowLeft) {
    mario.down();
    mario.left();
  } else if (keysPressed.ArrowDown && keysPressed.ArrowRight) {
    mario.down();
    mario.right();
  } else if (keysPressed.ArrowUp) {
    mario.up();
  } else if (keysPressed.ArrowLeft) {
    mario.left();
  } else if (keysPressed.ArrowDown) {
    mario.down();
  } else if (keysPressed.ArrowRight) {
    mario.right();
  }
});

document.addEventListener('keyup', (event) => {
  delete keysPressed[event.key];
});

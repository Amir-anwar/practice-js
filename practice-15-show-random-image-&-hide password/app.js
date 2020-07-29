const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  if (btn.textContent === 'show password') {
    input.setAttribute('type', 'text');
    btn.textContent = 'hide password';
  }
  input.setAttribute('type', 'password');
  btn.textContent = 'show password';
});

const images = [
  'https://images.unsplash.com/photo-1594639622336-d396dba83dc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
  'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
];
const randomImageNum = Math.floor(Math.random() * images.length);

const image = document.createElement('img');

image.setAttribute('src', images[randomImageNum]);

document.body.appendChild(image);

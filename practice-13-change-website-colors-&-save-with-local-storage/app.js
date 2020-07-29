document.body.classList.add(localStorage.getItem('theme') || 'Default');

const lis = document.querySelectorAll('ul li');
const classList = [];

lis.forEach((li) => {
  classList.push(li.getAttribute('data-color'));

  li.addEventListener('click', () => {
    document.body.classList.remove(...classList);
    document.body.classList.add(li.getAttribute('data-color'));

    localStorage.setItem('theme', li.getAttribute('data-color'));
  });
});

'use strct';

const btn = document.querySelector('#item-btn');
const input = document.querySelector('#item-input');
const items = document.querySelector('#items');
const toDoItems = [];

function showItems() {
  items.innerHTML = '';

  const ul = document.createElement('ul');

  toDoItems.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.id} : ${item.name}`;

    ul.appendChild(li);
  });
  items.appendChild(ul);
}

function giveId() {
  return toDoItems.length + 1;
}
function Item(name) {
  return {
    name,
    isCompleted: false,
    id: giveId(),
  };
}

window.addEventListener('load', () => {
  showItems();
});

btn.addEventListener('click', () => {
  toDoItems.forEach((item) => {
    if (item.name === input.value) {
      return false;
    }
    return true;
  });

  if (input.value) {
    toDoItems.push(new Item(input.value));
  }

  showItems();
  input.value = '';
});

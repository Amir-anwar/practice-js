// eslint-disable-next-line
'use strict';

const localStorageControl = {
  // btns
  addBtn: document.querySelector('#addBtn'),
  removeBtn: document.querySelector('#removeBtn'),
  searchBtn: document.querySelector('#searchBtn'),
  clearBtn: document.querySelector('#clearBtn'),
  showBtn: document.querySelector('#showBtn'),

  // inputs
  addInput: document.getElementById('add-item'),
  removeInput: document.getElementById('remove-item'),
  searchInput: document.getElementById('search-item'),

  // output
  output: document.querySelector('.results > span'),

  // methods
  addItem() {
    localStorage.setItem(localStorageControl.addInput.value, '0');
    localStorageControl.addInput.value = '';
    localStorageControl.showItems();
  },
  removeItem() {
    localStorage.removeItem(localStorageControl.removeInput.value);
    localStorageControl.removeInput.value = '';
    localStorageControl.showItems();
  },
  searchItem() {
    for (let i = 0; i < localStorage.length; i += 1) {
      if (localStorage.key(i) === localStorageControl.searchInput.value.trim()) {
        localStorageControl.output.textContent = `found this Element: ${localStorage.key(i)}`;
        localStorageControl.searchInput.value = '';
      } else {
        localStorageControl.output.textContent = `didn't found this Element: ${localStorage.key(i)}`;
        localStorageControl.searchInput.value = '';
      }
    }
  },
  clear() {
    localStorage.clear();
    localStorageControl.output.textContent = '';
  },
  showItems() {
    localStorageControl.output.textContent = '';
    for (let i = 0; i < localStorage.length; i += 1) {
      const span = document.createElement('span');

      span.classList.add('item');
      span.textContent += localStorage.key(i);

      localStorageControl.output.appendChild(span);
    }
  },
  events() {
    localStorageControl.showItems();
    this.addBtn.addEventListener('click', this.addItem);
    this.removeBtn.addEventListener('click', this.removeItem);
    this.searchBtn.addEventListener('click', this.searchItem);
    this.clearBtn.addEventListener('click', this.clear);
    this.showBtn.addEventListener('click', this.showItems);
  },
};

localStorageControl.events();

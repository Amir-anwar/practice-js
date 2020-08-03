console.log(document.body.firstElementChild);

console.log(document.body.firstElementChild.nextElementSibling);

console.log(document.body.firstElementChild.nextElementSibling.lastElementChild);

for (let i = 0; i < 5; i += 1) {
  table.rows[i].cells[i].style.backgroundColor = 'red';
}

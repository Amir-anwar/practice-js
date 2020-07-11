const type = document.querySelector('.type');

window.onload = () => {
  const text = `this is text type effect by a simple way Lorem ipsum dolor 
  sit amet consectetur adipisicing elit. Porro ut temporibus, eligendi
  consequuntur et suscipit tempore ad optio deserunt voluptate quam
  accusantium id nobis veniam corrupti nulla necessitatibus. Deleniti,
  distinctio veritatis! Beatae aperiam, porro unde commodi obcaecati
  nostrum natus repellendus animi dignissimos iusto consequatur,
  quidem esse voluptates voluptate libero voluptatum suscipit ipsa
  iste. Aliquam, perferendis laboriosam, laborum eos sunt quam
  unde deserunt maiores aut eveniet natus culpa animi aspernatur
  in explicabo autem quia quisquam impedit ullam! Temporibus
  perspiciatis tempore quasi delectus voluptate libero,
  voluptatibus tenetur pariatur error voluptatem incidunt
  optio excepturi culpa corrupti qui provident rerum!
  Deleniti temporibus quis totam.`;
  let i = 0;

  type.style.fontSize = '40px';

  const Myinterval = setInterval(() => {
    type.textContent += text[i];
    i++;

    if (i > text.length - 1) {
      clearInterval(Myinterval);
    }
  }, 100);
};

export default function decorate(block) {

  const link = block.querySelector('c');
  const path = link ? link.getAttribute('href') : block.textContent.trim();
  console.log(path);
  let el = document.createElement("iframe");

  // Setting the values for the attributes
  el.src = path;
  el.width = '1000';
  el.height = '450px';

  block.textContent = '';
  block.append(el);
}
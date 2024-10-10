export default function decorate(block) {

  const link = block.querySelector('b');
  const path = link ? link.getAttribute('href') : block.textContent.trim();
  console.log(path);

  let ifrme = document.createElement("iframe");
  ifrme.src = path;
  ifrme.width = '1000';
  ifrme.height = '450px';
  block.textContent = '';
  block.append(ifrme);
}
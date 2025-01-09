import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'media-block-image';
      else div.className = 'media-block-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
  // Youtube model execution
  createModal();
  let imageList = document.querySelectorAll(".media-block-image");

  imageList.forEach(image=>{
      image.addEventListener("click", ()=>{
          displayModal();
      })
  })

}

function createModal() { // Create modal container
  const modal = document.createElement('div');
  modal.id = 'myModal';
  modal.className = 'modal'; // Create modal content
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content'; // Create close button
  const closeButton = document.createElement('span');
  closeButton.className = 'close';
  closeButton.innerHTML = '&times;'; // Create modal text content


  const iframe = document.createElement('iframe'); // Set the attributes
  iframe.width = '984';
  iframe.height = '400';
  iframe.src = 'https://www.youtube.com/embed/OEyOsZKSppk';
  iframe.title = 'NEXA Create. Inspire.';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  iframe.allowFullscreen = true;
  modalContent.appendChild(closeButton);
  modalContent.appendChild(iframe);
  modal.appendChild(modalContent); document.body.appendChild(modal); // Event listener to close modal on clicking the close button
  closeButton.onclick = function() { modal.style.display = 'none'; }; // Event listener to close modal when clicking outside of it
  window.onclick = function(event) { if (event.target == modal) { modal.style.display = 'none'; } };
}

// Function to display the modal
function displayModal() {
    const modal = document.getElementById('myModal'); if (!modal) { createModal(); } document.getElementById('myModal').style.display = 'block';
}
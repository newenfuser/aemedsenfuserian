function createModal() { // Create modal container
  const modal = document.createElement('div');
  modal.id = 'myModal';
  modal.className = 'modal'; // Create modal content
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content'; // Create close button
  const closeButton = document.createElement('span');
  closeButton.className = 'close';
  closeButton.innerHTML = '&times;'; // Create modal text content
  const modalText = document.createElement('p');
  modalText.textContent = 'Overlay block loaded'; // Append elements
  modalContent.appendChild(closeButton); modalContent.appendChild(modalText);
  modal.appendChild(modalContent); document.body.appendChild(modal); // Event listener to close modal on clicking the close button
  closeButton.onclick = function() { modal.style.display = 'none'; }; // Event listener to close modal when clicking outside of it
  window.onclick = function(event) { if (event.target == modal) { modal.style.display = 'none'; } };
}

// Function to display the modal
function displayModal() {
    const modal = document.getElementById('myModal'); if (!modal) { createModal(); } document.getElementById('myModal').style.display = 'block';
}
export default async function decorate(block) {
// Create the container div
const mainContainer = document.createElement('div');
const container = document.createElement('div');
container.style.display = 'flex';
// container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.width = '200px';
container.style.overflow = 'hidden';
container.style.margin = 'auto';
// container.style.height = '100vh'; // Create the image element
const image = document.querySelector('img');
image.style.margin = '10px'; // Create the button element
image.addEventListener('mouseover', () => { image.style.transform = 'scale(1.2)'; });
image.addEventListener('mouseout', () => { image.style.transform = 'scale(1)'});
 const button = document.createElement('button');
 button.textContent = 'Open Modal';
 button.addEventListener('click', displayModal);
 const iframe = document.createElement('iframe'); // Set the attributes
iframe.width = '984';
iframe.height = '400';
iframe.src = 'https://www.youtube.com/embed/OEyOsZKSppk';
iframe.title = 'NEXA Create. Inspire.';
iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
iframe.referrerPolicy = 'strict-origin-when-cross-origin';
iframe.allowFullscreen = true;
//  button.onclick = displayModal;
 button.style.padding = '10px 20px';
 button.style.cursor = 'pointer';
 button.style.padding = '10px';
 button.style.margin = '10px'; // Append the image and button to the container
 button.style.position = 'absolute';
 container.appendChild(image);
 container.appendChild(button); // Append the container to the body document.body.
 mainContainer.appendChild(container);
 document.body.appendChild(mainContainer);
}
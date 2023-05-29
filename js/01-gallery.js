import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = preview;
  image.setAttribute('data-source', original);
  image.alt = description;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const imageSrc = event.target.dataset.source;
  const imageAlt = event.target.alt;

  const instance = basicLightbox.create(`
    <img src="${imageSrc}" alt="${imageAlt}" width="800" height="600">
  `);

  instance.show();
}

gallery.addEventListener('click', openModal);

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
gallery.innerHTML = galleryMarkup;
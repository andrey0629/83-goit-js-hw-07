import { galleryItems } from './gallery-items.js';
// Change code below this line

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

  const imageSrc = event.target.src;
  const imageAlt = event.target.alt;

  const instance = basicLightbox.create(`
    <img src="${imageSrc}" alt="${imageAlt}" width="800" height="600">
  `);

  instance.show();

  instance.element().addEventListener('wheel', handleMouseScroll);
  document.addEventListener('keydown', handleKeyDown);
}

function handleMouseScroll(event) {
  const instance = basicLightbox.getInstance();
  if (event.deltaY > 0) {
    instance.next();
  } else {
    instance.prev();
  }
}

function handleKeyDown(event) {
  const ESC_KEY_CODE = 'Escape';
  const ENTER_KEY_CODE = 'Enter';
  const LEFT_ARROW_KEY_CODE = 'ArrowLeft';
  const UP_ARROW_KEY_CODE = 'ArrowUp';
  const RIGHT_ARROW_KEY_CODE = 'ArrowRight';
  const DOWN_ARROW_KEY_CODE = 'ArrowDown';

  const instance = basicLightbox.getInstance();

  if (event.key === ESC_KEY_CODE) {
    if (instance) {
      instance.close();
    }
  }

  if (event.key === ENTER_KEY_CODE) {
    window.location.href = window.location.href;
  }

  if (
    event.key === LEFT_ARROW_KEY_CODE ||
    event.key === UP_ARROW_KEY_CODE
  ) {
    if (instance) {
      instance.prev();
    }
  }

  if (
    event.key === RIGHT_ARROW_KEY_CODE ||
    event.key === DOWN_ARROW_KEY_CODE
  ) {
    if (instance) {
      instance.next();
    }
  }
}

gallery.addEventListener('click', openModal);

const galleryMarkup = galleryItems.map(createGalleryItem);
gallery.append(...galleryMarkup);



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
  image.alt = description;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

gallery.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const options = {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    captionClass: 'simple-lightbox__caption',
    history: true,
    focus: true,
  };

  const instance = SimpleLightbox.open({
    elements: galleryItems.map(({ original, description }) => ({
      src: original,
      title: description,
    })),
    ...options,
  });
});

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

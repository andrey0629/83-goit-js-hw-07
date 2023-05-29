import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = lightbox.querySelector('.lightbox__image');

  // Render gallery items
  galleryItems.forEach((item) => {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.dataset.source = item.original;
    image.alt = item.description;

    link.appendChild(image);
    galleryItem.appendChild(link);
    gallery.appendChild(galleryItem);
  });

  // Open lightbox on image click
  gallery.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;

    if (target.classList.contains('gallery__image')) {
      const largeImageURL = target.dataset.source;
      lightboxImage.src = largeImageURL;
      openLightbox();
    }
  });

  // Close lightbox on overlay click
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox || event.target === lightboxImage) {
      closeLightbox();
    }
  });

  // Close lightbox on Escape key press
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });

  function openLightbox() {
    lightbox.style.display = 'flex';
    document.body.classList.add('no-scroll');
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.classList.remove('no-scroll');
  }
});

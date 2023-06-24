import {galleryItems} from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

let galleryItemsElement = "";
galleryItems.forEach((item) => {
  galleryItemsElement = galleryItemsElement + `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img 
      class="gallery__image" 
      src="${item.preview}" 
      alt="${item.description}" 
      />
   </a>
</li>`
})

galleryList.insertAdjacentHTML('beforeend', galleryItemsElement);

const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});


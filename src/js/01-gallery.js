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
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`
})
galleryList.insertAdjacentHTML('beforeend', galleryItemsElement);


galleryList.addEventListener('click', (evt) => {
  const linkElement = evt.target.closest('.gallery__link')
  if (linkElement) {
    evt.preventDefault()

    const onEscKeydown = (evt) => {
      if (evt.key === 'Escape') {
        instance.close()
      }
    };

    const instance = basicLightbox.create(
      `<img 
        width="1400" 
        height="900" 
        src="${linkElement.href}"
        alt="${linkElement.children[0]}"
      />`,
      {
        onClose: () => {
          document.removeEventListener('keydown', onEscKeydown)
        },
      }
    );
    instance.show();
    document.addEventListener('keydown', onEscKeydown)
  }
})


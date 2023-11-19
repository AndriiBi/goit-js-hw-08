// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector(".gallery");

galleryList.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250
  });

  function createMarkup(items) {
    return items.map(item => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>
    `).join("");
  }


console.log(galleryItems);

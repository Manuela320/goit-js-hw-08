import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery');

galleryItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("gallery__item");
    listItem.innerHTML = `
        <a class='gallery__link' href='${item.original}'>
            <img class="gallery__image"
                src='${item.preview}'
                alt='${item.description}' />
        </a>`;
    listEl.append(listItem);
});

document.addEventListener('DOMContentLoaded', () => {
    new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: 250,
    });
});
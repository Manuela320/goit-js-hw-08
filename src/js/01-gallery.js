import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const listElement = document.querySelector('.gallery');
const photosMarkup = createGalleryItem(galleryItems);

function createGalleryItem(element) {
    return element
    .map(({preview, original, description}) => {
        return `<a class='gallery_link' href="${preview}">
        <img class="gallery_image" src=${original} alt=${description}/>
        </a>`;
    })
    .join('');
}

listElement.insertAdjacentHTML("beforeend", photosMarkup);
const galleryHandler = new SimpleLightbox('.gallery a', { 
    captionsData: "alt", 
    captionDelay: 250,
 });
 galleryHandler.on("show.simplelightbox")
import { galleryItems } from './gallery-items.js';

const listEl = document.querySelector('.gallery');

galleryItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("gallery_item");
    listItem.innerHTML = `
    <a class='gallery_link' href='${item.original}'>
    <img class="gallery_image"
    src='${item.preview}'
    data-source='${item.original}'
    alt='${item.description}' />
    </a>`;
    listEl.append(listItem);
});

let modalInstance = null; 

listEl.addEventListener("click", openImageInModal);

function openImageInModal(event) {
    const clickedOn = event.target;
    
    if (clickedOn.nodeName !== "IMG") {
        return;
    }
    
    event.preventDefault();
    
    if (modalInstance) {
        modalInstance.close();
        modalInstance = null;
    }

    modalInstance = basicLightbox.create(`
        <img width="1400" height="900" src="${clickedOn.dataset.source}">
    `);

    modalInstance.show();

    document.addEventListener('keydown', closeModalOnEscape);
}

function closeModalOnEscape(e) {
    if (e.key === 'Escape' && modalInstance) {
        modalInstance.close();
        modalInstance = null;
        document.removeEventListener('keydown', closeModalOnEscape);
    }
}

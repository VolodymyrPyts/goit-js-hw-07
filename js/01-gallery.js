import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 1 Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const galleryEl = document.querySelector(".gallery")
const cardsMarkup = addGallery(galleryItems)
function addGallery(galleryItems) {
   return galleryItems.map(({ preview, original, description }) =>
        `
<div class="gallery__item">
    <a class="gallery__link" href="${preview}">
        <img
            class="gallery__image"
            src="${preview}" 
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div>
    `).join("");
}
galleryEl.insertAdjacentHTML('beforeend', cardsMarkup)

// 2 Реализация делегирования на div.gallery и получение url большого изображения.


galleryEl.addEventListener("click", onClickPictures);

// 3 Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// 4 Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.

function onClickPictures(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(
// 5 Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
        
   ` <img src="${evt.target.dataset.source}" width="800" height="600">
`)

        instance.show()
    }




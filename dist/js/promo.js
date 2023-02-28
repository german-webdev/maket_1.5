
let promoGrid = document.querySelector('.promo__grid');
let promoList = document.querySelector('.promo__list');
let promoItem = document.querySelectorAll('.promo__item');
let promoLink = document.querySelectorAll('.promo__link');
let button = document.querySelector('.promo__button');
let buttonArrow = document.querySelector('.button__arrow');
let buttonText = document.querySelector('.button__content');

button.addEventListener('click', () => {
    if (buttonText.textContent === 'Показать все') {
        arrowOpenRotate();
        promoList.classList.remove('promo__list--hidden');
    } else {
        arrowCloseRotate();
        promoList.classList.add('promo__list--hidden'); 
        promoList.scrollTo(0, 0);
    } 
});

function arrowCloseRotate() {
    window.setTimeout(function () {
        buttonText.textContent = 'Показать все';
        buttonArrow.classList.remove('button__arrow--rotate');
    }, 100)
}

function arrowOpenRotate() {
    window.setTimeout(function () {
        buttonText.textContent = 'Скрыть';
        buttonArrow.classList.add('button__arrow--rotate');
    }, 200)
}


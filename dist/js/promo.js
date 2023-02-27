let button = document.querySelector('.promo__button');
let promoList = document.querySelector('.promo__list');
let buttonArrow = document.querySelector('.button__arrow');
let buttonText = document.querySelector('.button__content');

button.addEventListener('click', () => {
    if (buttonText.textContent === 'Показать все') {
        buttonText.textContent = 'Скрыть';
        buttonArrow.classList.add('button__arrow--rotate');
        promoList.classList.remove('promo__list--hidden');
        
    } else {
        buttonText.textContent = 'Показать все';
        promoList.classList.add('promo__list--hidden');
        buttonArrow.classList.remove('button__arrow--rotate');
        promoList.scrollTo(0, 0);
    } 
});
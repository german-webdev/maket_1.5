
let slider = document.querySelector('.swiper');

function mobileSlider() {
  if (window.innerWidth <= 320) {
    promoGrid.classList.remove('promo__grid');
    promoList.classList.remove('promo__list');
    promoList.classList.remove('promo__list--hidden');
    arrowOpenRotate();

    promoGrid.classList.add('swiper');
    promoList.classList.add('swiper-wrapper');
    promoItem.forEach(e => e.classList.add('swiper-slide'));

    mySwiper = new Swiper(slider, {
      direction: 'horizontal',
      slidesPerView: 1.31,
      spaceBetween: 16,
      watchOverflow: true,
      autoHeight: false,

      pagination: {
       	el: '.swiper-pagination',
        clickable: true,
      },

        mousewheel: {
        sensitivity: 1,
        eventsTarget: '.swiper'
      },
 
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 320) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();

    }
    
    promoGrid.classList.add('promo__grid');
    promoList.classList.add('promo__list');
    promoList.classList.add('promo__list--hidden');
    arrowCloseRotate();

    promoGrid.classList.remove('swiper');
    promoList.classList.remove('swiper-wrapper');
    promoItem.forEach(e => e.classList.remove('swiper-slide'));
  }
}

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});
 
  // init Swiper:
new Swiper('.swiper', {

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: false
    },

    simulateTouch: true,
    grabCursor: true,

    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.swiper'
    },

    slidesPerView: 1.31,
    spaceBetween: 16,
    watchOverflow: true,

  });
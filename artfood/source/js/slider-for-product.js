(function () {
  const mySwiper = new Swiper ('.product__container', {
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next-product',
      prevEl: '.swiper-button-prev-product',
    },

    slidesPerView: 4,
    spaceBetween: 140,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      481: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      851: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }

  })

})();

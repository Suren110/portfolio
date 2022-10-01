(function () {
  const mySwiper = new Swiper ('.product-gallery__swiper', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 32,
    breakpoints: {
      // 320: {
      //   slidesPerView: 1,
      //   spaceBetween: 20
      // },
      // 481: {
      //   slidesPerView: 2,
      //   spaceBetween: 20
      // },
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      667: {
        slidesPerView: 2,
        spaceBetween: 32
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 32
      }
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false
    },

    navigation: {
      nextEl: '.product-gallery__swiper-nav .swiper-button-next',
      prevEl: '.product-gallery__swiper-nav .swiper-button-prev',
    },

  });
})();

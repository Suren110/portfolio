(function () {
  const mySwiper = new Swiper ('.gallery__container', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false
    },

    autoplay: {
      delay: 5000,
    }

  })

})();

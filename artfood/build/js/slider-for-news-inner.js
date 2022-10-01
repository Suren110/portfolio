(function () {
  const mySwiper = new Swiper ('.news-inner__container', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false
    }

  })

})();

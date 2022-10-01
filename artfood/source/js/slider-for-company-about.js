(function () {
  const mySwiper = new Swiper ('.company-about__container', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    autoplay: {
      delay: 5000,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
  });

  //for company history slider array data
  const data = [1961, 1970, 1982, 1991, 1999, 2002, 2005, 2006, 2007, 2008, 2010, 2018];

  const mySwiper2 = new Swiper ('.company-history__container', {
    direction: 'horizontal',
    loop: true,

    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //   renderBullet: function (index, className) {
    //     return '<span class="' + className + '">' + (menu[index]) + '</span>';
    //   },
    // },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<li class="company-history__slider-header__item ${className}">${data[index]}</li>`;
      },
    },

    navigation: {
      nextEl: '.swiper-button-next-company-brand',
      prevEl: '.swiper-button-prev-company-brand',
    },


  });

})();

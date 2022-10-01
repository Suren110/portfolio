(function () {
  const mySwiper = new Swiper ('.brand__container', {
    direction: 'horizontal',
    // loop: true,

    navigation: {
      nextEl: '.swiper-button-next-brand',
      prevEl: '.swiper-button-prev-brand',
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
      601: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1201: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }

  });

  // const brandContainer = document.querySelector('.brand__container');
  // const brandContainerSlide = document.querySelectorAll('.brand__container .swiper-slide');
  // console.log(brandContainerSlide);
  //
  // if(brandContainerSlide.length == 1) {
  //   brandContainer.querySelector('swiper-wrapper').classList.add('disabled');
  //   brandContainer.querySelector('swiper-pagination').classList.add('disabled');
  // }



})();

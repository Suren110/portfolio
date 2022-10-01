(function () {
  const headerMobileBtn = document.querySelector('.header-mobile__btn');
  const headerNav = document.querySelector('.header-nav');
  const html = document.querySelector('html');

  if(headerMobileBtn && headerNav && html) {
    headerMobileBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      // html.className = html.classList.contains('active') ? 'active' : '';
      html.classList.toggle('active');
      this.classList.toggle('active');
      headerNav.classList.toggle('active');
    });
  }

})();

//slider
(function () {

  if(document.querySelector('.feedback .swiper-container')) {
    const mySwiper = new Swiper ('.feedback .swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 50
        },
        769: {
          slidesPerView: 3,
          spaceBetween: 10
        }
      }
    })
  }

})();

(function () {
  if(document.querySelector('.blog-guide__list-swiper')) {
    const mySwiper = new Swiper('.blog-guide__list-swiper', {
      direction: 'horizontal',
      loop: true,
      spaceBetween: 20,

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },

    });
  }
})();

//for checkbox admin for tab
// const adminCheckboxBtn = document.querySelector('.admin-login__panel-form__checkbox');
// console.log(adminCheckboxBtn);
// adminCheckboxBtn.addEventListener('keydown', function (evt) {
//   adminCheckboxBtn.querySelector('input').checked = (evt.code === 'Enter') ? true : false;
// });

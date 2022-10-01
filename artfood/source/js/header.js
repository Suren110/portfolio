(function () {
  const headerLanguageBtn = document.querySelector('.header__language-btn');
  const headerLanguageList = document.querySelector('.header__language-list');
  const headerLanguageItemBtn = document.querySelectorAll('.header__language-item__btn');
  // const blackWrapper = document.querySelector('.wrapper__background');

  headerLanguageBtn.addEventListener('click', function (evt) {
    headerLanguageList.classList.toggle('active');
  });

  headerLanguageItemBtn.forEach(function (evt) {
    evt.addEventListener('click', function () {
      const lg = this.textContent.trim();
      const currentLg = headerLanguageBtn.textContent.trim();
      headerLanguageBtn.innerHTML = lg;
      this.textContent = currentLg;
    });
  });



  const headerMobileMenu = document.querySelector('.header__mobile-menu');
  const headerNav = document.querySelector('.header__nav');
  const html = document.querySelector('html');

  headerMobileMenu.addEventListener('click', function (evt) {
    evt.preventDefault();
    this.classList.toggle('active');
    headerNav.classList.toggle('active');
    html.classList.toggle('active');
  });

  // if (x.matches) { // If media query matches
  //   var prevScrollpos = window.pageYOffset;
  //   window.onscroll = function() {
  //     var currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       document.querySelector(".header").style.top = "0";
  //     } else {
  //       document.getElementById(".header").style.top = "-150px";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   }
  // } else {
  //   }
  // }

  // let x = window.matchMedia("(max-width: 992)");
  // myFunction(x); // Call listener function at run time
  // x.addListener(myFunction);

  // if (!window.matchMedia("(min-width: 992px)").matches) {
  //   let prevScrollpos = window.pageYOffset;
  //   window.onscroll = function() {
  //     var currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       document.querySelector(".header").classList.remove('active');
  //     } else {
  //       document.querySelector(".header").classList.add('active');
  //     }
  //     prevScrollpos = currentScrollPos;
  //   }
  // }

})();

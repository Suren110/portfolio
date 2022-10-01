//mobile full height
(function () {
  const mw = window.matchMedia( "(max-width: 570px)" );

  if(mw) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

})();

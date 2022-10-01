(function () {
  const popupCloseBtn = document.querySelectorAll('.default-popup__nav__close');
  const popup = document.querySelectorAll('.default-popup__container');
  const html = document.querySelector('html');

  popupCloseBtn.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      htmlOverFlowVisible();
      closeAllPopup();
    });
  });

  popup.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      if(evt.target === this) {
        htmlOverFlowVisible();
        this.classList.remove('active');
      }
    });
  });

  function closeAllPopup() {
    popup.forEach(function (item) {
      item.classList.remove('active');
    });
  }

  class Open {
    constructor(el, popup) {
      this.el = document.querySelectorAll(el);
      this.popup = document.querySelector(popup);
    }


    openPopup() {
      this.el.forEach(function (item) {
        item.addEventListener('click', function (evt) {
          evt.preventDefault();
          htmlOverflowHidden();
          popup.classList.add('active');
        });
      });
      const popup = this.popup;
    }
  }

  function htmlOverflowHidden() {
    html.classList.add('active');
  }

  function htmlOverFlowVisible() {
    html.classList.remove('active');
  }

  const itemBtnReturn = new Open('.item-btn__return', '.popup-return__product');
  const itemRegisterBtn = new Open('.register-btn', '.popup-register__product');
  itemBtnReturn.openPopup();
  itemRegisterBtn.openPopup();

  //bonus buttons
  const bonusBenefitReviewBtn = new Open('.bonus-benefit__link-review', '.popup-review__earn');
  const bonusBenefitUseCase = new Open('.bonus-benefit__link-usecase', '.popup-use__case');
  bonusBenefitReviewBtn.openPopup();
  bonusBenefitUseCase.openPopup();

})();

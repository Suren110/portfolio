(function () {
  //show password
  const registerBtnShowPassword = document.querySelectorAll('.register-form__line-hint__btn');

  registerBtnShowPassword.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      this.parentElement.nextElementSibling.setAttribute("type", "text");
    });
  });


})();

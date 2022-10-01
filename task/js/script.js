((function () {
  const burgerMenu = document.querySelector('.burger')

  if (burgerMenu) {
    burgerMenu.addEventListener('click', function () {
      this.classList.toggle('active')
    })
  }

}))()
const submitForm = document.querySelector('.contact-form__column--send-button')

if (submitForm) {
  submitForm.addEventListener('click', () => {
    submitForm.classList.add('active')
  })
}

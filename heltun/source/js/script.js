const mobileBtn = document.querySelector('.mobile-btn');
const mobileMenu = document.querySelector('.nav-2');

if (mobileBtn) {
  mobileBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
}

//tabs
const bonusNavLink = document.querySelectorAll('.bonus-nav__link');
const bonusConfigItem = document.querySelectorAll('.bonus-config__item');

bonusNavLink.forEach(function (item, index) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    for (let i = 0; i < bonusNavLink.length; i++) {
      bonusNavLink[i].parentElement.classList.remove('active');
    }
    for (let i = 0; i < bonusConfigItem.length; i++) {
      bonusConfigItem[i].classList.remove('active');
    }
    bonusConfigItem[index].classList.toggle('active');
    this.parentElement.classList.toggle('active');
  });
});

//faq-questions
const faqQuestionsItemBtn = document.querySelectorAll('.faq-question__item-btn');

if(faqQuestionsItemBtn) {
  faqQuestionsItemBtn.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      this.classList.toggle('active');
    })
  });
}

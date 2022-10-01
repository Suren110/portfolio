(function () {
  //profile image take a first letter
  const name = document.querySelector('.user-info__about-name').textContent.trim().split('');
  const profileImage = document.querySelector('.user-info__profile-char');

  if(name.length > 1) {
    profileImage.innerHTML = name[0];
  }

})();

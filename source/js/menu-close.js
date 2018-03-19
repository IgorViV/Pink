var wrapHeader = document.querySelector('.page-header__wrapper');
var navToggle = document.querySelector('.page-header__toggle');

if (wrapHeader && wrapHeader.classList.contains('page-header__wrapper--noJS')) {
  wrapHeader.classList.remove('page-header__wrapper--noJS');
  wrapHeader.classList.add('page-header__wrapper--closed');
  navToggle.classList.add('nav-toggle--closed');
}

  navToggle.addEventListener('click', function() {
    if (wrapHeader.classList.contains('page-header__wrapper--closed')) {
      wrapHeader.classList.remove('page-header__wrapper--closed');
      wrapHeader.classList.add('page-header__wrapper--opened');
      navToggle.classList.remove('nav-toggle--closed');
    } else {
      wrapHeader.classList.add('page-header__wrapper--closed');
      wrapHeader.classList.remove('page-header__wrapper--opened');
      navToggle.classList.add('nav-toggle--closed');
    }
  });

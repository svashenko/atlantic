let lastScroll = 0;
const header = document.querySelector('.header');
const logo = document.querySelector('.top__logo');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const headerStep1 = () => header.classList.contains('step1');
const headerStep2 = () => header.classList.contains('step2');
const logoHide = () => logo.classList.contains('hide');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !headerStep1()) {
    header.classList.add('step1');
  } else if (scrollPosition() <= 35 && headerStep1()) {
    header.classList.remove('step1');
  } else if (scrollPosition() > 140 && !headerStep2()) {
    header.classList.add('step2');
    logo.classList.add('hide');
  } else if (scrollPosition() <= 140 && headerStep2()) {
    header.classList.remove('step2');
    logo.classList.remove('hide');
  }
  lastScroll = scrollPosition();
});

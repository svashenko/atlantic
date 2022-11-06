let lastScroll = 0;
const start = window.innerHeight * 0.8;
const header = document.querySelector('.header');
const logo = document.querySelector('.top__logo');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const headerStep1 = () => header.classList.contains('step1');
const headerStep2 = () => header.classList.contains('step2');
const logoHide = () => logo.classList.contains('hide');

window.addEventListener('scroll', () => {
  if (start - scrollPosition() <= 0) header.style.top = '0px'
  // else if(start - lastScroll >= start) header.style.marginTop = start + '0px'
  else header.style.top = start - scrollPosition() + 'px';
  console.log(start - scrollPosition())


  if (start - scrollPosition() < lastScroll && !headerStep1()) {
    header.classList.add('step1');
    logo.classList.add('step1');
    document.querySelector('video').pause()
  } else if (start - scrollPosition() >= lastScroll + 35 && headerStep1()) {
    header.classList.remove('step1');
    document.querySelector('video').play()
  } else if (scrollPosition() > start + 140 && !headerStep2()) {
    header.classList.add('step2');
    logo.classList.add('hide');
  } else if (scrollPosition() <= start + 140 && headerStep2()) {
    header.classList.remove('step2');
    logo.classList.remove('hide');
  }

  lastScroll = scrollPosition() - window.innerHeight * 0.8;
});

function scrollToTop() {
  document.querySelector('.top').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}
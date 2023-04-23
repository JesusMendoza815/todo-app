const btnSwitchTheme = document.querySelector('#btn-theme');

const switchTheme = () => btnSwitchTheme.addEventListener('click', () => {
  const body = document.querySelector('body');
  const imgMdBg = document.querySelector('#img-md-bg');
  const imgSmBg = document.querySelector('#img-sm-bg');
  const iconTheme = document.querySelector('#icon-theme');
  btnSwitchTheme.classList.toggle('is-light');

  if (btnSwitchTheme.classList.contains('is-light')) {
    body.classList.add('theme-light');
    imgMdBg.srcset = './images/bg-desktop-light.jpg';
    imgSmBg.srcset = './images/bg-mobile-light.jpg';
    iconTheme.src = './images/icon-moon.svg';
  } else {
    body.classList.remove('theme-light');
    imgMdBg.srcset = './images/bg-desktop-dark.jpg';
    imgSmBg.srcset = './images/bg-mobile-dark.jpg';
    iconTheme.src = './images/icon-sun.svg';
  }
});

export default switchTheme;
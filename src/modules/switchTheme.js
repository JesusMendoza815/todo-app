const btnSwitchTheme = document.querySelector('#btn-theme');

const switchTheme = () => btnSwitchTheme.addEventListener('click', () => {
  btnSwitchTheme.classList.toggle('is-light');

  if (btnSwitchTheme.classList.contains('is-light')) {
    document.querySelector('body').classList.add('theme-light');
    const imgMdBg = document.querySelector('#img-md-bg');
    imgMdBg.srcset = './images/bg-desktop-light.jpg';
  
    const imgSmBg = document.querySelector('#img-sm-bg');
    imgSmBg.srcset = './images/bg-mobile-light.jpg';
  } else {
    const body = document.querySelector('body');
    body.classList.remove('theme-light');
    const imgMdBg = document.querySelector('#img-md-bg');
    imgMdBg.srcset = './images/bg-desktop-dark.jpg';
  
    const imgSmBg = document.querySelector('#img-sm-bg');
    imgSmBg.srcset = './images/bg-mobile-dark.jpg';
  }
});

export default switchTheme;
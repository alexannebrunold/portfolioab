AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: true,
  offset: 10,
  delay: 200,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
})

const menuBg = document.getElementById('menuBg')

const menuBgOpen = document.querySelector('.header__content--bg--open')
const menuBgClose = document.querySelector('.header__content--bg--close')
const menuContent = document.querySelector('.header__menu')

menuBg.addEventListener('click', () => {
  const styleBgOpen = getComputedStyle(menuBgOpen)
  if (styleBgOpen.display === 'block') {
    menuBgOpen.style.display = 'none'
    menuBgClose.style.display = 'block'
    menuContent.classList.toggle('visible')
  }
  else {
    menuBgOpen.style.display = 'block'
    menuBgClose.style.display = 'none'
    menuContent.classList.remove('visible')
  }
})

const header = document.getElementById('header')
const hamburguer = document.querySelector('.hamburger')

const openMenu = () => {
  hamburguer.classList.toggle('is-active')
}

const headerBlur = () => {
  if (window.scrollY > 20) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

const header = document.getElementById('header')
const hamburguer = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

const openMenu = () => {
  hamburguer.classList.toggle('is-active')
  menu.classList.toggle('menu-active')
}

const headerBlur = () => {
  if (window.scrollY > 20) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// Fechar o menu quando clicar em algum item do mesmo.
const links = document.querySelectorAll('.menu-list ul li a')
for (const link of links) {
  link.addEventListener('click', () => {
    menu.classList.remove('menu-active')
  })
}

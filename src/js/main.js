const body = document.querySelector('body')
const header = document.getElementById('header')
const hamburguer = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

const openMenu = () => {
  hamburguer.classList.toggle('is-active')
  menu.classList.toggle('menu-active')

  if (menu.classList.contains('menu-active')) {
    // Disable scroll
    body.style.overflow = 'hidden'
  } else {
    // Enable scroll
    body.style.overflow = 'auto'
  }
}

const headerBlur = () => {
  if (window.scrollY > 20) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// Close menu when click on any item of list.
const links = document.querySelectorAll('.menu-list ul li a')
for (const link of links) {
  link.addEventListener('click', () => {
    menu.classList.remove('menu-active')
    hamburguer.classList.remove('is-active')
    body.style.overflow = 'auto'
  })
}

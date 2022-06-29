const body = document.querySelector('body')
const header = document.getElementById('header')
const hamburguer = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const cards = document.querySelectorAll('.card.hidden')
const expandButton = document.querySelector('.expand-projects')

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

const removeHeader = () => {
  if (window.scrollY > 20) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// Close menu when click on any item of menu list.
const links = document.querySelectorAll('.menu-list ul li a')
for (const link of links) {
  link.addEventListener('click', () => {
    menu.classList.remove('menu-active')
    hamburguer.classList.remove('is-active')
    body.style.overflow = 'auto'
  })
}

// expand project cards
const expandCards = () => {
  cards.forEach(card => {
    card.classList.toggle('hidden')
    if (card.classList.contains('hidden')) {
      expandButton.textContent = 'Ver mais'
    } else {
      expandButton.textContent = 'Ver menos'
    }
  })
}

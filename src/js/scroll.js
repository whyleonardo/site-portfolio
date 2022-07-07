import ScrollReveal from 'scrollreveal'

ScrollReveal().reveal('body', { delay: 50 })

// Scroll Reveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 800,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .home-wrapper,
   #about .about-wrapper,
   #about .about-wrapper p, #about .about-wrapper .paragraph_2,
   #projects .projects-wrapper h2, #projects .projects-wrapper,
   #skills h2, #skills .skills-wrapper .skill,
   footer .brand, footer .social
  `,
  { interval: 100 }
)

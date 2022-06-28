import ScrollReveal from 'scrollreveal'

ScrollReveal().reveal('body', { delay: 50 })

// Scroll Reveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '150px',
  duration: 800,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .main-wrapper,
   #about .text, #about .image,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links,
   footer .brand, footer .social
  `,
  { interval: 100 }
)

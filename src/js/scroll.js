import ScrollReveal from 'scrollreveal'

ScrollReveal().reveal('body', { delay: 50 })

// Scroll Reveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '120px',
  duration: 800,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .home-wrapper h3, #home .home-wrapper h1,
   #about .about-wrapper img, #about .about-wrapper h2,
   #about .about-wrapper p, #about .about-wrapper .paragraph_2,
   #projects .projects-wrapper h2, #projects .projects-wrapper,
   #skills h2, #skills .skills-wrapper .skill,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links,
   footer .brand, footer .social
  `,
  { interval: 100 }
)

import Swal from 'sweetalert2'
const button = document.querySelector('.dois')
const skills = document.querySelectorAll('.skill')

const primaryColor = '#323299'
const secondaryColor = '#7D7DE3'
const colorBlack = '#121214'
const colorJet = '#27272B'
const colorWhite = '#FAFAFF'

let skillsInfo = [
  {
    title: 'html',
    name: 'HTML',
    message: 'Linguagem de marcação'
  },
  {
    title: 'css',
    name: 'CSS',
    message: 'Linguagem de estilização'
  },
  {
    title: 'js',
    name: 'Javascript',
    message: 'Linguagem de programação'
  },
  {
    title: 'react',
    name: 'ReactJS',
    message: 'Biblioteca Javascript'
  },
  {
    title: 'tailwind',
    name: 'TailwindCSS',
    message: 'Framework CSS'
  },
  {
    title: 'sass',
    name: 'SASS',
    message: 'Framework CSS'
  },
  {
    title: 'node',
    name: 'NodeJS',
    message: 'Ambiente de Desenvolvimento no Back End '
  },
  {
    title: 'git',
    name: 'GIT',
    message: 'Ferramenta de Versionamento de código'
  }
]

skills.forEach(skill => {
  skill.onclick = el => {
    skillsInfo.map(info => {
      if (el.target.title === info.title) {
        Swal.fire({
          title: info.name,
          background: colorBlack,
          width: '400',
          color: colorWhite,
          text: info.message,
          icon: 'info',
          iconColor: colorWhite,
          confirmButtonColor: secondaryColor,
          confirmButtonText: 'Fechar'
        })
      }
    })
  }
})

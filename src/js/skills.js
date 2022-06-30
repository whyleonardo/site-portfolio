const skills = document.querySelectorAll('.skill')

for (let skill of skills) {
  let skillValue = []
  let titleValue = skill.attributes.title.value
  skillValue.push(titleValue)
  skill.addEventListener('onmouseover', skill => {})
}

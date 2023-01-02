const navbar = document.querySelector('nav')
const menu = navbar.querySelector('ul')
const openbtn = navbar.querySelector('.fa-bars')
const closebtn = menu.querySelector('.fa-times')

openbtn.onclick = () => menu.classList.toggle('menu')
closebtn.onclick = () => menu.classList.toggle('menu')




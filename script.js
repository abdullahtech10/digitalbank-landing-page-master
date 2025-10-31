const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')
const links = document.querySelector('.links')
const backdrop = document.querySelector('.backdrop')

menuOpen.addEventListener('click',  ()=>{
    menuOpen.classList.add('active')
    menuClose.classList.add('active')
    links.classList.add('active')
    backdrop.classList.add('active')
})

menuClose.addEventListener('click',  ()=>{
    menuOpen.classList.remove('active')
    menuClose.classList.remove('active')
    links.classList.remove('active')
    backdrop.classList.remove('active')
})
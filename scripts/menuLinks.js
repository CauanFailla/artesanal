const btnMenu = document.querySelector('header span')
const navLinks = document.querySelector('header nav')
window.addEventListener('resize',()=>{
    if (window.innerWidth > 700) {
        navLinks.style.display = 'block'
    } else {
        navLinks.style.display = 'none'
        btnMenu.innerHTML = 'menu'
    }
})
btnMenu.addEventListener('click',()=>{
    if (navLinks.style.display == 'block') {
        navLinks.style.display = 'none'
        btnMenu.innerHTML = 'menu'
        document.body.style.overflow = 'auto'
    } else {
        navLinks.style.display = 'block'
        btnMenu.innerHTML = 'close'
        document.body.style.overflow = 'hidden'
    }
})
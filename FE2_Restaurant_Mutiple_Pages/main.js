const navIconEl = document.querySelector('.nav__icon')
const navCloseEl = document.querySelector('.nav__close')
const navList = document.querySelector('.nav__list')
const navBgOverlay = document.querySelector('.nav__bgOverlay')

const openNavigation = () => {
    navList.classList.add('show')
    navBgOverlay.classList.add('active')
    document.body.style = 'visibility: visible; height: 100vh; width: 100vw; overflow:hidden'
}

const closeNavigation = () => {
    navList.classList.remove('show')
    navBgOverlay.classList.remove('active')
    document.body.style = 'visibility: visible; height: initial; width: 100%; overflow-x:hidden'
    
    // setTimeout(() => {
    //     document.body.style = 'visibility: visible; height: initial; width: 100%;'
    // }, 300)
}

navIconEl.addEventListener('click', openNavigation)
navCloseEl.addEventListener('click', closeNavigation)
navBgOverlay.addEventListener('click', closeNavigation)
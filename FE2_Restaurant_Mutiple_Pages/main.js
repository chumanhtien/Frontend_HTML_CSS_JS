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

// AOS
// AOS.refreshHard();
AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
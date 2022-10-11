let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.navbar')
let searchIcon = document.querySelector('#search-icon')
let searchForm = document.querySelector('#search-form')
let closeSearchForm = document.querySelector('#close')

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

searchIcon.addEventListener('click', function () {
    searchForm.classList.toggle('active')
})

closeSearchForm.addEventListener('click', function () {
    searchForm.classList.remove('active')
})

var swiper = new Swiper(".home-slider", {
    spaceBetween: 120,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
})
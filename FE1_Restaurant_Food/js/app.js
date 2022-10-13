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
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
})

var swiper2 = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
})
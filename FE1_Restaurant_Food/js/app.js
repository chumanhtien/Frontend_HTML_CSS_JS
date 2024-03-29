let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.navbar')
let searchIcon = document.querySelector('#search-icon')
let searchForm = document.querySelector('#search-form')
let closeSearchForm = document.querySelector('#close')

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a')
let onClickNavLink = true

navLinks.forEach((navLinkItem) => {
    navLinkItem.addEventListener('onclick', function() {
        onClickNavLink = false
    }) 
})

window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')

    section.forEach(sec => {
        let top = window.scrollY
        let height = sec.offsetHeight
        let offset = sec.offsetTop - 150
        let id = sec.getAttribute('id')

        if (onClickNavLink) {
            if (top >= offset && top < offset + height) {
                navLinks.forEach((links) => {
                    links.classList.remove('active')
                    document.querySelector('header .navbar a[href*='+id+']').classList.add('active')
                })
            }
        }
    })
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

function loading() {
    let loaderContainer = document.querySelector('.loader-container')
    loaderContainer.classList.add('fade-out');
}

function fadeOut() {
    setInterval(loading, 3000)
}

window.addEventListener('load',  fadeOut)
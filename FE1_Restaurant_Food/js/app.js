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
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

searchIcon.addEventListener('click', function () {
    searchForm.classList.toggle('active')
})

closeSearchForm.addEventListener('click', function () {
    searchForm.classList.remove('active')
})
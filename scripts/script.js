let lightDark = document.querySelector('.lightDark');
let menuToggle = document.querySelector('.menuToggle');
let body = document.querySelector('body');
let navigation = document.querySelector('.navigation');

lightDark.onclick = function() {
    body.classList.toggle('dark')
    lightDark.classList.toggle('active')
}

menuToggle.onclick = function() {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}
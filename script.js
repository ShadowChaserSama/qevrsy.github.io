let darkmode = document.querySelector('.darkmode');
let logo = document.querySelector('.logo');
let nav_links = document.querySelectorAll('.nav-link');
let image = document.querySelector('.image');
let nick = document.querySelector('.nick');
let title = document.querySelector('.title');
let contacts = document.querySelectorAll('.contact');
let contact_btn = document.querySelector('.contact-btn');

let bg = document.querySelector('body');

dark = true

darkmode.addEventListener('click', e => {
   if (dark) {
    darkmode.innerHTML = '<i class="fa-sharp fa-solid fa-moon">'
    bg.classList.toggle('dark-bg')
    logo.classList.toggle('dark-txt')
    darkmode.classList.toggle('dark-txt')
    
    nav_links.forEach(nav => {
        nav.classList.toggle('dark-nav-link');
    })

    image.classList.toggle('dark-image')
    nick.classList.toggle('dark-txt')
    title.classList.toggle('dark-title')

    contacts.forEach(contact => {
        contact.classList.toggle('dark-contact');
    })

    contact_btn.classList.toggle('dark-btn')

    dark = false
   } else {
    darkmode.innerHTML = '<i class="fa-sharp fa-solid fa-sun">'
    bg.classList.toggle('dark-bg')
    logo.classList.toggle('dark-txt')
    darkmode.classList.toggle('dark-txt')
   
    nav_links.forEach(nav => {
        nav.classList.toggle('dark-nav-link');
    })

    image.classList.toggle('dark-image')
    nick.classList.toggle('dark-txt')
    title.classList.toggle('dark-title')

    contacts.forEach(contact => {
        contact.classList.toggle('dark-contact');
    })

    contact_btn.classList.toggle('dark-btn')

    dark = true
   } 
})


let hamburger_btn = document.getElementById('hamburgerBtn')
let hamburger_nav = document.getElementById('hamburger-links')

let is_active = false

hamburger_btn.addEventListener('click', e => {
    if (is_active) {
        hamburger_btn.innerHTML = '<i class="fa-solid fa-bars" id="menuIcon"></i>';
        hamburger_nav.classList.toggle('active')
        is_active = false
    } else {
        hamburger_btn.innerHTML = '<i class="fa-solid fa-xmark" id="menuIcon"></i>';
        hamburger_nav.classList.toggle('active')
        is_active = true
    }
})

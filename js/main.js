
$(document).ready(function(){
    new WOW().init();
});

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

(function age(){
    let birth = new Date('2000-05-03');

    let age = new Date(new Date() - birth).getFullYear() - 1970;

    let div_age = document.getElementById("age");
    div_age.innerHTML=age;
})();

/* ************ REMOVE MOBILE MENU ************ */
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    document.getElementById('nav-menu').classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click',linkAction));

/* ************ ACCORDION SKILLS ************ */

const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header');


function toggleSkills(){
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close';
    }

    if (itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open';
    }
}

skillsHeader.forEach((e) =>{
    e.addEventListener('click', toggleSkills);
});

/* ************ QUALICATION TABS ************ */

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active');
        })
        target.classList.add('qualification_active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active');
        })
        tab.classList.add('qualification_active');
    })
})

/* ************ SWIPER BUNDLE ************ */

let swiper = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/* ************ DARK/LIGHT THEME ************ */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

/*==================== DARK LIGHT THEME ====================*/  
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }

    })
}

window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    this.scrollY >= 80 ? document.getElementById('header').classList.add('scroll-header') : document.getElementById('header').classList.remove('scroll-header');
} 

window.addEventListener('scroll',scrollHeader);

/*==================== SHOW SCROLL ====================*/
function scrollUp(){
    this.scrollY >= 560 ? document.getElementById('scroll-up').classList.add('show-scroll') : document.getElementById('scroll-up').classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollUp);
// Swiperjs script
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    slidesPerView: 3,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Animate On Scroll Script
AOS.init();


// Add class scroll to navbar when window scrolling
const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', function() {
    if(window.scrollY > 30) {
        navbar.classList.add('scroll')
    } else {
        navbar.classList.remove('scroll')
    }
})
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
});

const navbar = document.querySelector('.navbar')
// let lastScrollY = window.scrollY

window.addEventListener('scroll', function() {
    if(window.scrollY > 80) {
        navbar.classList.add('scroll')
        console.log('Udah di atas')
    } else {
        navbar.classList.remove('scroll')
        console.log('udah dibawah')
    }
})
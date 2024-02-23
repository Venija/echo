let contentVue = document.querySelector('.access-bar');
let button = document.querySelector('.btn-hidden');

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    contentVue.classList.toggle("access-bar-hidden");
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    initialSlide: 3,
    freeMode: true,
    slidesPerView: 3,
    centeredSlides: false,

    // Navigation arrows
    navigation: {
        nextEl: '.s-button-next',
        prevEl: '.s-button-prev',
    },
});


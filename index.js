let contentVue = document.querySelector('.body');
let button = document.querySelector('.btn-hidden');

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    contentVue.classList.toggle("body-hidden");
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

const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-nav-button');
const navBtnImg = document.querySelector('#nav-button__img')

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {

    } else {

    }
}

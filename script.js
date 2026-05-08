// ----------------slider-----------
const slider = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const sliderImages = document.querySelectorAll('.slider-image');
let currentIndex = 0;
const imageWidth = sliderImages[0].offsetWidth;

console.log("hii")

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
});

nextBtn.addEventListener('click', () => {
    console.log("check click")
    currentIndex = (currentIndex + 1) % sliderImages.length;
    slider.style.transform = `translateX(-${ currentIndex * imageWidth}px)`;
});


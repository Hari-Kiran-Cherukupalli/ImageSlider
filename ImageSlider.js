const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let slideIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slider.children.length) % slider.children.length;
    showSlide(slideIndex);
});

nextButton.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slider.children.length;
    showSlide(slideIndex);
});

showSlide(slideIndex);
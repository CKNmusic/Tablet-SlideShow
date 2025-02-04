// Intervalo de tempo em milissegundos (por exemplo, 5000 ms = 5 segundos)
const slideInterval = 15000;

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function startSlideshow() {
    showSlide(currentIndex);
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, slideInterval);
}

document.addEventListener('DOMContentLoaded', startSlideshow);

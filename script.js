const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
];

let currentIndex = 0;

function showSlide(index) {
    const slide = document.getElementById('current-slide');
    const dots = document.querySelectorAll('.dot');

    currentIndex = (index + images.length) % images.length; // Циклический переход

    slide.src = images[currentIndex];

    dots.forEach((dot, i) => {
        if (i === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

showSlide(currentIndex);

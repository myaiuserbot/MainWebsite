document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;
    if (name && email && message) {
        alert('Thank you for your message! We’ll get back to you soon.');
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Testimonial Carousel
const carousel = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let currentIndex = 0;

function updateCarousel() {
    const offset = window.innerWidth < 640 ? -currentIndex * 100 : -currentIndex * 50;
    carousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - (window.innerWidth < 640 ? 1 : 2);
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - (window.innerWidth < 640 ? 1 : 2)) ? currentIndex + 1 : 0;
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);

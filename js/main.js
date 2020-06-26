// Select element function
const selectElement = (element) => document.querySelector(element);
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', () => {
    body.classList.toggle('open');
});

// Scroll
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

// lazy load image
const preloadImage = (img) => {
    const src = img.getAttribute("data-src");
    img.src = src ? src : '';
}
function lazyLoad() {
    const images = document.querySelectorAll("[data-src]");
    const config = {
        root: null,
        roorMargin: '0px',
        threshold: 0.25
    }

    const observer = new IntersectionObserver((entries, imageObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                preloadImage(entry.target);
                imageObserver.unobserve(entry.target);
            }
        });
    }, config);

    images.forEach(image => observer.observe(image));
}
lazyLoad();
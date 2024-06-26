const carousel = document.querySelector('.carousel-images');
let pressed = false;
let startX = 0;

carousel.addEventListener('mousedown', function(e) {
    pressed = true;
    startX = e.clientX;
    this.style.cursor = 'grabbing';
});

carousel.addEventListener('mouseleave', function(e) {
    pressed = false;
});

window.addEventListener('mouseup', function(e) {
    pressed = false;
    carousel.style.cursor = 'grab';
});

carousel.addEventListener('mousemove', function(e) {
    if (!pressed) {
        return;
    }
    
    const diffX = startX - e.clientX;
    carousel.scrollBy(diffX, 0);
    startX = e.clientX;
});

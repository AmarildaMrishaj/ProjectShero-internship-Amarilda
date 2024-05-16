new Glide('.glide', {
    type: 'carousel',
    perView: 2, 
    breakpoints: {
        1200: {
            perView: 2
        },
        940: {
            perView: 2
        },
        600: {
            perView: 1 
        }
    }
}).mount();


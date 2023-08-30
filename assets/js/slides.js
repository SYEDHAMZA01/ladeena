document.addEventListener('DOMContentLoaded', function () {
    var splide1 = new Splide('#splide-1', {
        type: 'loop',
        pagination: false,
        perPage: 4,
        perMove: 1,
        gap: 25,
        breakpoints: {
            960: {
                perPage: 3,
            },
            768: {
                perPage: 2,
            },
        }
    });
    splide1.mount();

    var splide2 = new Splide('#splide-2', {
        type: 'loop',
        pagination: false,
        perPage: 4,
        perMove: 1,
        gap: 25,
        breakpoints: {
            960: {
                perPage: 3,
            },
            768: {
                perPage: 2,
            },
        }
    });
    splide2.mount();

    var splide3 = new Splide('#splide-3', {
        type: 'loop',
        pagination: false,
        perPage: 4,
        perMove: 1,
        gap: 25,
        breakpoints: {
            960: {
                perPage: 3,
            },
            768: {
                perPage: 2,
            },
        }
    });
    splide3.mount();

    var splide4 = new Splide('#splide-4', {
        type: 'loop',
        pagination: false,
        perPage: 4,
        perMove: 1,
        gap: 25,
        breakpoints: {
            960: {
                perPage: 3,
            },
            768: {
                perPage: 2,
            },
        }
    });
    splide4.mount();
});

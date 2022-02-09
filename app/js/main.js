
window.addEventListener("load", function(){
    new Swiper('.home__swiper', {
        slideClass: 'home__slide',
        wrapperClass: 'home__wrapper',

        pagination: {
            el: '.home__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.home__arrow--next',
            prevEl: '.home__arrow--prev',
        },

    });

    // new WOW().init();
});

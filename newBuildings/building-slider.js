new Swiper(`.building-slider`, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.building-slider__button-prev',
        prevEl: '.building-slider__button-next',
    },

    thumbs: {
        el: '.building-slider__mini-version',
        slidesPreview: 5,
    }
});

// Добавляем минислайдер таббар, для интерактивной галлереи картинок

const MAX_COUNT_OF_SLIDES = 7;
const swiper = document.querySelector('.building-slider').swiper;
const miniSwiper = document.querySelector('.building-slider__mini-version');
const wrapperSlides = miniSwiper.querySelector('.swiper-wrapper');
const allSlides = wrapperSlides.querySelectorAll('.swiper-slide__mini');

swiper.on('activeIndexChange', function () {
    console.log(swiper?.activeIndex);
    if (swiper.activeIndex < MAX_COUNT_OF_SLIDES) {
        allSlides.forEach((slide) => {
            slide
                .querySelector('.new-buildings__image__rc__mini')
                .classList.remove('new-buildings__image__rc__mini__active');
        });

        allSlides[swiper.activeIndex]
            .querySelector('.new-buildings__image__rc__mini')
            .classList.add('new-buildings__image__rc__mini__active');
    }
});

allSlides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        swiper.slideTo(index);
    });
})

if (allSlides.length > MAX_COUNT_OF_SLIDES) {
    allSlides.length = MAX_COUNT_OF_SLIDES;

}

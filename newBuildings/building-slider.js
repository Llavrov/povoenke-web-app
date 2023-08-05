new Swiper(`.building-slider`, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.building-slider__button-prev',
        prevEl: '.building-slider__button-next',
    },
});

const buildingSliderPagination = document.querySelector('.building-slider-pagination');
const buildingSlider = document.querySelector('.building-slider');
const wrapperSlider = buildingSlider.querySelector('.buildingSlider');

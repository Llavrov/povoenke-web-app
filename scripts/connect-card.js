const WINDOW_WIDTH = document.body.clientWidth;
const WINDOW_HEIGHT = document.body.clientHeight;

const TOUCH_SCREEN = 660;

new Swiper(`.swiper`, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: `.swiper-pagination`,
    },
});

// Добавляем смену изображений при наведении на Swiper
const swiperContainer = document.querySelectorAll('.swiper');

if (swiperContainer.length && WINDOW_WIDTH > TOUCH_SCREEN) {
    swiperContainer.forEach((container) => {
        // Берем wrapper
        const swiperWrapper = container.querySelector('.swiper-wrapper');
        // Берем список со слайдами и считаем их количество, размер области hoverSection
        const swiperSlides = swiperWrapper.querySelectorAll('.swiper-slide');
        const countOfSlides = swiperSlides.length;
        const hoverSectionWidth = swiperWrapper.clientWidth / countOfSlides;

        // Задаем контейнер для наводимой секции
        const hoverSectionContainer = document.createElement('div');
        hoverSectionContainer.style.width = `${swiperWrapper.clientWidth}px`;
        hoverSectionContainer.style.height = `${swiperWrapper.clientHeight}px`;
        hoverSectionContainer.className = 'swiper__hover-section__container';

        // Добавляем countOfSlides равнодлинных секций hoverSection для наведения
        for (let section = 0; section < countOfSlides; section++) {
            const hoverSection = document.createElement('div');
            hoverSection.style.width = `${hoverSectionWidth}px`;
            hoverSection.style.height = `${swiperWrapper.clientHeight}px`;

            hoverSection.addEventListener('mouseover', () => {
                container.swiper.slideTo(section);
            });

            hoverSectionContainer.appendChild(hoverSection);
        }

        container.appendChild(hoverSectionContainer);
    })
}


// rc-card: При наведении на контент карточки rc-card - картинка уменьшается
const listOfCards = document.querySelectorAll('.rc-card');

listOfCards.forEach((card) => {
    const content = card.querySelector('.rc-card__content');
    const swiper = card.querySelector('.swiper');
    const images = card.querySelectorAll('.rc-card__image__rc');

    content.addEventListener('mouseover', () => {
        if (WINDOW_WIDTH > TOUCH_SCREEN) {
            swiper.style.height = '200px';
            images.forEach((image) => {
                image.style.height = '200px';
            });
        }
    });

    content.addEventListener('mouseout', () => {
        swiper.style.height = '272px';
        images.forEach((image) => {
            image.style.height = '272px';
        })
    });
});

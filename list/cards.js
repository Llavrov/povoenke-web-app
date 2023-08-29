const SWIPER_HOVER_CONTAINER_CLASS = 'swiper__hover-section__container';
const SWIPER_CLASS = '.swiper';
const SWIPER_WRAPPER_CLASS = '.swiper-wrapper';
const SWIPER_SLIDE_CLASS = '.swiper-slide';
const RC_CARD_CLASS = '.rc-card';
const RC_CARD_CONTENT_CLASS = '.rc-card__content';
const RC_IMAGE_CLASS = '.rc-card__image__rc';
const RC_LOGO_CLASS = '.rc-card__image__logo';
const RC_LABEL_CLASS = '.rc-card__image__logo__content';

const WINDOW_WIDTH = document.body.clientWidth;
const TOUCH_SCREEN = 660;

const container = document.querySelector('.rc-cards-container__content');

function createNewCard(cardId) {
    const card = document.createElement('div');
    card.className = 'rc-card';
    card.innerHTML = `
        <div class="rc-card__image">
            <div class="rc-card__image__logo">
                <img
                    class="rc-logo"
                    src="../assets/logo.png"
                    alt="residential complex description"
                >
                
                <div class="rc-card__image__logo__content">
                    <p class="title__light title__white no-whitespace">ГК Гранель</p>
                    <p class="title__light title__gray no-whitespace">234 объекта</p>
                </div>
            </div>
            <!-- Slider main container  -->
            <!-- Класс свайпера мы определяем уникальный, чтобы в последствии инициализировать его отдельно каждый  -->
            <div class="swiper ${cardId}">
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide">
                        <div class="rc-card__image__rc">
                            <img src="../assets/rc.png" alt="residential complex description">
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="rc-card__image__rc">
                            <img src="../assets/rc-2.png" alt="residential complex description">
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="rc-card__image__rc">
                            <img src="../assets/rc.png" alt="residential complex description">
                        </div>
                    </div>
                </div>
    
                <div class="swiper-pagination ${cardId}-pagination"></div>
            </div>
        </div>

        <div class="rc-card__content">
            <div class="rc-card__content__title__container">
                <div class="rc-card__content__title">
                    <p class="title__medium">
                        ЖК Новая Рига
                    </p>

                    <div class="button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0587 4.44659C17.9181 2.6224 14.7346 2.95052 12.7698 4.97783L12.0003 5.77078L11.2308 4.97783C9.26987 2.95052 6.08243 2.6224 3.94185 4.44659C1.48877 6.5403 1.35987 10.298 3.55514 12.5675L11.1136 20.3721C11.6019 20.876 12.3948 20.876 12.8831 20.3721L20.4415 12.5675C22.6407 10.298 22.5118 6.5403 20.0587 4.44659Z" fill="#2A547E" fill-opacity="0.13"/>
                        </svg>
                    </div>
                </div>
        
                <div class="horizontal gap-3">
                    <div class="horizontal gap-2 metro-icon__green">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5107 11.8002L11.7113 2.72656L8.49988 8.02861L5.30181 2.72656L1.48908 11.8002H0.371094V13.1751H6.12137V11.8002H5.26173L6.09465 9.53807L8.49988 13.2718L10.9051 9.53807L11.738 11.8002H10.8784V13.1751H16.6287V11.8002H15.5107Z" fill="#fff"/>
                        </svg>
    
                        <p class="title__light">
                            Филатов луг
                        </p>
                    </div>
    
                    <div class="horizontal gap-1 icon__on-foot">
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5183 7.78629L13.206 7.00574L12.6524 5.62157C12.1771 4.43352 11.0435 3.66602 9.76381 3.66602H6.23603C4.95659 3.66602 3.8227 4.43352 3.34742 5.62157L2.79381 7.00574L2.48159 7.78629C1.81159 8.04102 1.33325 8.68435 1.33325 9.44379V10.7771C1.33325 11.2249 1.50436 11.6291 1.7777 11.9418V13.4438C1.7777 13.9346 2.17575 14.3327 2.66659 14.3327H3.55547C4.04631 14.3327 4.44436 13.9346 4.44436 13.4438V12.5549H11.5555V13.4438C11.5555 13.9346 11.9535 14.3327 12.4444 14.3327H13.3333C13.8241 14.3327 14.2221 13.9346 14.2221 13.4438V11.9418C14.4955 11.6293 14.6666 11.2252 14.6666 10.7771V9.44379C14.6666 8.68435 14.1883 8.04102 13.5183 7.78629ZM4.99797 6.28185C5.20047 5.77574 5.69075 5.44379 6.23603 5.44379H9.76381C10.3091 5.44379 10.7994 5.77574 11.0019 6.28185L11.5555 7.66602H4.44436L4.99797 6.28185ZM3.55547 10.7716C3.02214 10.7716 2.66659 10.4171 2.66659 9.88546C2.66659 9.35379 3.02214 8.99935 3.55547 8.99935C4.08881 8.99935 4.88881 9.79685 4.88881 10.3285C4.88881 10.8602 4.08881 10.7716 3.55547 10.7716ZM12.4444 10.7716C11.911 10.7716 11.111 10.8602 11.111 10.3285C11.111 9.79685 11.911 8.99935 12.4444 8.99935C12.9777 8.99935 13.3333 9.35379 13.3333 9.88546C13.3333 10.4171 12.9777 10.7716 12.4444 10.7716Z" fill="#173B5E" fill-opacity="0.35"/>
                        </svg>

                        <p class="title__light title__gray">
                            10 мин
                        </p>
                    </div>
                </div>
            </div>
    
            <div class="horizontal gap-2">
                <div class="label">
                    Скидка 10%
                </div>
                <div class="label">
                    0Р оформление
                </div>
                <div class="label">
                    С отделкой
                </div>
            </div>
    
            <div class="rc-card__content__list" >
                <div class="rc-card__content__list__row title__light">
                    <a href="#" class="title__link">
                        Студии
                    </a>
    
                    <p class="title__light title__gray">
                        от 19.23м2
                    </p>
    
                    <p class="title__light">
                        от 4.6 млн. р
                    </p>
                </div>
    
                <div class="rc-card__content__list__row title__light">
                    <a href="#" class="title__link">
                        1 комн.
                    </a>
    
                    <p class="title__light title__gray">
                        от 19.23м2
                    </p>
    
                    <p class="title__light">
                        от 4.6 млн. р
                    </p>
                </div>
    
                <div class="rc-card__content__list__row title__light">
                    <a href="#" class="title__link">
                        2 комн.
                    </a>
    
                    <p class="title__light title__gray">
                        от 19.23м2
                    </p>
    
                    <p class="title__light">
                        от 4.6 млн. р
                    </p>
                </div>
    
                <div class="rc-card__content__list__row title__light">
                    <a href="#" class="title__link">
                        3 комн.
                    </a>
    
                    <p class="title__light title__gray">
                        от 19.23м2
                    </p>
    
                    <p class="title__light">
                        от 4.6 млн. р
                    </p>
                </div>
            </div>
    
            <div class="rc-card__content__buttons">
                <div class="button__green button__center">
                    Позвонить
                </div>
    
                <div class="button__secondary button__center no-whitespace">
                    Заказать звонок
                </div>
            </div>
        </div>
    `;

    container.appendChild(card);

    new Swiper(`.${cardId}`, {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: `.${cardId}-pagination`,
        },
    });
}

// С помощью цикла создаем и добавляем карточки жк в размере COUNT_OF_CARDS;
const COUNT_OF_CARDS = 9;

for (let cardId = 0; cardId < COUNT_OF_CARDS; cardId++) {
    createNewCard(`swiper-${cardId}`);
}

// Добавляем смену изображений при наведении на Swiper
const swiperContainer = document.querySelectorAll(SWIPER_CLASS);

if (swiperContainer && swiperContainer.length && WINDOW_WIDTH > TOUCH_SCREEN) {
    swiperContainer.forEach((container) => {
        // Берем wrapper
        const swiperWrapper = container.querySelector(SWIPER_WRAPPER_CLASS);
        // Берем список со слайдами и считаем их количество, размер области hoverSection
        const swiperSlides = swiperWrapper.querySelectorAll(SWIPER_SLIDE_CLASS);
        const countOfSlides = swiperSlides.length;
        const hoverSectionWidth = swiperWrapper.clientWidth / countOfSlides;

        // Задаем контейнер для наводимой секции
        const hoverSectionContainer = document.createElement('div');
        hoverSectionContainer.style.width = `${swiperWrapper.clientWidth}px`;
        hoverSectionContainer.style.height = `${swiperWrapper.clientHeight}px`;
        hoverSectionContainer.className = SWIPER_HOVER_CONTAINER_CLASS;

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
const listOfCards = document.querySelectorAll(RC_CARD_CLASS);

WINDOW_WIDTH > TOUCH_SCREEN && listOfCards && listOfCards.forEach((card) => {
    const content = card.querySelector(RC_CARD_CONTENT_CLASS);
    const swiper = card.querySelector(SWIPER_CLASS);
    const images = card.querySelectorAll(RC_IMAGE_CLASS);
    const rcLabel = card.querySelector(RC_LABEL_CLASS);
    const rcLogo = card.querySelector(RC_LOGO_CLASS);

    content.addEventListener('mouseover', () => {
        if (WINDOW_WIDTH > TOUCH_SCREEN) {
            swiper.style.height = '200px';
            rcLabel.style.display = 'flex';
            rcLogo.classList.add('rc-card__image__logo__active')
            images.forEach((image) => {
                image.style.height = '200px';
            });
        }
    });

    content.addEventListener('mouseout', () => {
        swiper.style.height = '272px';
        rcLabel.style.display = 'none';
        rcLogo.classList.remove('rc-card__image__logo__active')
        images.forEach((image) => {
            image.style.height = '272px';
        })
    });
});

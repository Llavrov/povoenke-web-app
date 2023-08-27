const HEADER_OPTIONS = [
    {
        selector: '.header-nav__building',
        options: ['опция 1', 'опция 2', 'опция 3'],
    },
    {
        selector: '.header-nav__mortgage',
        options: ['опция 1', 'опция 2', 'опция 3'],
    },
    {
        selector: '.header-nav__calc',
        options: ['опция 1', 'опция 2', 'опция 3'],
    },
    {
        selector: '.header-nav__army',
        options: ['опция 1', 'опция 2', 'опция 3'],
    },
];

function parentsNodesContainClass(node, className) {
    if (node?.parentNode?.classList?.contains(className))
        return true;

    if (node?.className !== className && node?.className != null) {
        return parentsNodesContainClass(node.parentNode, className);
    } else if (node?.className !== null) {
        return false;
    }
}

function handleCloseAllMenus(event) {
    HEADER_OPTIONS.map(({selector, options}) => {
        const filterTabElement = document.querySelector(selector);
        const iconArrow = filterTabElement.querySelector('.header-content__icon__arrow');

        if (filterTabElement && !parentsNodesContainClass(event.target, selector)) {
            const menu = filterTabElement.querySelector('.rc-filters__menu');
            menu && filterTabElement.removeChild(menu);
            iconArrow.style.transform = 'rotate(0)';
        }
    });
}

window.addEventListener('resize', () => {
    // handleSwitchShowAllFilters();
    setTimeout(() => {
        try {
            handleSwitchShowAllFilters()
        } catch (e) {}
    }, 0);
});

// При нажатии на таб бар открывается выпадающее меню

function handleOpenMenuFilter(event, selector, menu) {
    const filterTabElement = document.querySelector(selector);

    const isVisible = filterTabElement.querySelector('.rc-filters__menu');
    const iconArrow = filterTabElement.querySelector('.header-content__icon__arrow');

    if (isVisible) {
        if (filterTabElement.querySelector('.rc-filters__menu')) {
            try {
                filterTabElement.removeChild(menu);
                iconArrow.style.transform = 'rotate(0)';
            } catch (e) {}
        }
    } else {
        handleCloseAllMenus(event);
        filterTabElement.appendChild(menu);
        iconArrow.style.transform = 'rotate(180deg)';
    }
}

function handleSetMenusForAllFiltersTabs() {
    HEADER_OPTIONS.map(({selector, options}) => {
        const filterTabElement = document.querySelector(selector);

        const menu = document.createElement('div');
        menu.className = 'rc-filters__menu';

        options.map((option) => {
            const optionElement = document.createElement('p');
            optionElement.className = 'rc-filters__option';
            optionElement.innerHTML = option;

            menu.appendChild(optionElement);
        });

        filterTabElement && filterTabElement.addEventListener('click', (event) =>
            handleOpenMenuFilter(event, selector, menu)
        );
    });
}

window.addEventListener('click', (event) => {
    if (!parentsNodesContainClass(event.target, 'header-nav__tab')) {
        handleCloseAllMenus(event);
    }
});

handleSetMenusForAllFiltersTabs();

// Открытие мобильного меню

let isMobileMenuOpen = false;
const headerMenu = document.querySelector('.burger-menu');

headerMenu.addEventListener('click', () => {
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';

    mobileMenu.innerHTML = `
        <header>
            <div class="header-container content-border">
                <div class="horizontal gap-3">
                    <div class="burger-menu_inside button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3 5.7107C17.91 5.3207 17.28 5.3207 16.89 5.7107L12 10.5907L7.10997 5.7007C6.71997 5.3107 6.08997 5.3107 5.69997 5.7007C5.30997 6.0907 5.30997 6.7207 5.69997 7.1107L10.59 12.0007L5.69997 16.8907C5.30997 17.2807 5.30997 17.9107 5.69997 18.3007C6.08997 18.6907 6.71997 18.6907 7.10997 18.3007L12 13.4107L16.89 18.3007C17.28 18.6907 17.91 18.6907 18.3 18.3007C18.69 17.9107 18.69 17.2807 18.3 16.8907L13.41 12.0007L18.3 7.1107C18.68 6.7307 18.68 6.0907 18.3 5.7107Z" fill="#323232"/>
                        </svg>
                    </div>

                    <div class="logotype">
                        <img src="../assets/logotype.svg" alt="logotype">
                    </div>
                </div>

                <div class="header-content">
                    <div class="header-contacts">
                        <div class="header-contacts__icons">
                            <div class="button">
                                <img class="header-contacts__icons__like" src="./../assets/icons/like.svg" alt="search icon">
                                <img class="header-contacts__icons__like-mobile" src="./../assets/icons/like-mobile.svg" alt="search icon">
                            </div>

                            <div class="button">
                                <img class="header-contacts__icons__search" src="./../assets/icons/search.svg" alt="search icon">
                                <img class="header-contacts__icons__search-mobile" src="./../assets/icons/search-mobile.svg" alt="search icon">
                            </div>
                        </div>

                        <div class="header-contacts__phone">
                            <p class="title__extra-medium__bold">
                                +7 912 992 53 84
                            </p>

                            <p class="button title__link title__extra-medium__bold title__green">
                                Заказать звонок
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class="footer__container">
            <div class="footer__container__col__contacts">
                <div class="footer__container__phone">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="44" height="44" rx="10" fill="#E5F5ED"/>
                        <path d="M31.4296 26.1327L27.0546 24.2577C26.8677 24.178 26.6599 24.1612 26.4627 24.2098C26.2654 24.2585 26.0893 24.3698 25.9608 24.5272L24.0233 26.8944C20.9825 25.4607 18.5353 23.0136 17.1017 19.9728L19.4689 18.0353C19.6266 17.907 19.7382 17.7309 19.7868 17.5336C19.8354 17.3362 19.8185 17.1284 19.7384 16.9415L17.8634 12.5665C17.7755 12.365 17.6202 12.2006 17.4241 12.1015C17.228 12.0024 17.0034 11.9748 16.7891 12.0235L12.7266 12.961C12.52 13.0087 12.3357 13.125 12.2037 13.291C12.0718 13.4569 12 13.6627 12 13.8747C12 23.8944 20.1212 32 30.1253 32C30.3374 32.0001 30.5433 31.9284 30.7093 31.7964C30.8753 31.6644 30.9917 31.4801 31.0394 31.2734L31.9769 27.2108C32.0253 26.9955 31.9971 26.7701 31.8972 26.5733C31.7973 26.3765 31.632 26.2207 31.4296 26.1327Z" fill="#009B47"/>
                    </svg>

                    <div class="footer__container__phone__content">
                        <p class="title__normal-medium title__green">
                            +7 912 992 53 84
                        </p>
                        <p class="title__extra-medium title__gray">
                            Пн-Пт 09:00-18:00
                        </p>
                    </div>
                </div>
            </div>
    
            <div class="footer__container__col">
                <div class="footer__container__col__menu">
                    <p class="title__extra-medium title__gray">Купить</p>
    
                    <a class="title__link title__black title__normal-medium__regular" href="#">
                        Каталог квартир
                    </a>
    
                    <a class="title__link title__black title__normal-medium__regular" href="#">
                        Каталог новостроек
                    </a>
    
                    <a class="title__link title__black title__normal-medium__regular" href="#">
                        Вторичное жильё
                    </a>
    
                    <a class="title__link title__black title__normal-medium__regular" href="#">
                        Застройщики
                    </a>
                </div>
    
                <div class="footer__container__col__menu">
                    <p class="title__extra-medium title__gray">Ипотека</p>
    
                    <a class="title__link title__black title__normal-medium__regular" href="#">
                        Список банков
                    </a>
    
                    <a class="title__link title__black title__normal-medium__regular" href="#">
                        Рефинансирование
                    </a>
                </div>
            </div>
    
            <div class="footer__container__col">
                <div class="footer__container__col__menu">
                    <p class="title__extra-medium title__gray">Калькуляторы</p>
    
                    <a class="title__link title__black title__normal-medium__regular" href="#">
                        Сумма накоплений
                    </a>
    
                    <a class="title__link title__black title__normal-medium__regular" href="#">
                        Выгода от рефинансирования
                    </a>
                </div>
    
                <div class="footer__container__col__menu">
                    <p class="title__extra-medium title__gray">Военнослужащим</p>
    
                    <a class="title__link title__black title__normal-medium__regular" href="#">
                        База знаний
                    </a>
    
                    <a class="title__link title__black title__normal-medium__regular" href="#">
                        Вопросы и ответы
                    </a>
    
                    <a class="title__link title__black title__normal-medium__regular" href="#">
                        Акции
                    </a>
                </div>
            </div>
    
            <div class="footer__container__col">
                <div class="footer__container__col__menu">
                    <p class="title__extra-medium title__gray">О компании</p>
    
                    <a class="title__link title__black title__normal-medium__regular" href="#">
                        Контакты
                    </a>
    
                    <a class="title__link title__black title__normal-medium__regular" href="#">
                        О нас
                    </a>
    
                    <a class="title__link title__black title__normal-medium__regular" href="#">
                        Новости
                    </a>
    
                    <a class="title__link title__black title__normal-medium__regular" href="#">
                        Наша команда
                    </a>
    
                    <a class="title__link title__black title__normal-medium__regular" href="#">
                        Отзывы
                    </a>
    
                    <a class="title__link title__black title__normal-medium__regular" href="#">
                        Гарантии
                    </a>
                </div>
            </div>
        </div>
        `;

    if (isMobileMenuOpen) {
        isMobileMenuOpen = false;
    } else {
        document.body.appendChild(mobileMenu);

        const headerInMenu = document.querySelector('.burger-menu_inside');
        headerInMenu.addEventListener('click', () => {
            document.body.removeChild(document.querySelector('.mobile-menu'))

            isMobileMenuOpen = false;
        })

        isMobileMenuOpen = true;
    }
});

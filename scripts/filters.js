const filtersContainer = document.querySelector('.rc-filters__content__filters');
const mainFiltersContainer = document.querySelector('.rc-filters__content__filters__main');
const additionalFiltersContainer = document.querySelector('.rc-filters__content__filters__additional');
const buttonAllFilters = document.querySelector('#rc-filters__button__all-filters');
const iconAllFilters = document.querySelector('.rc-filters__button__all-filters__icon');

let MAIN_FILTERS_HEIGHT = mainFiltersContainer.clientHeight;
let FULL_FILTERS_HEIGHT = mainFiltersContainer.clientHeight + 20 + additionalFiltersContainer.clientHeight;

// Показать все фильтры

window.addEventListener('resize', () => {
    let MAIN_FILTERS_HEIGHT = mainFiltersContainer.clientHeight;
    let FULL_FILTERS_HEIGHT = mainFiltersContainer.clientHeight + 20 + additionalFiltersContainer.clientHeight;

    if (showAllFilters) {
        filtersContainer.style.height = `${FULL_FILTERS_HEIGHT}px`;
        iconAllFilters.style.transform = 'rotate(180deg)';
    } else {
        filtersContainer.style.height = `${MAIN_FILTERS_HEIGHT}px`;
        iconAllFilters.style.transform = 'rotate(0deg)';
    }
})

let showAllFilters = false;

buttonAllFilters.addEventListener('click', () => {
    showAllFilters = !showAllFilters;

    if (showAllFilters) {
        filtersContainer.style.height = `${FULL_FILTERS_HEIGHT}px`;
        iconAllFilters.style.transform = 'rotate(180deg)';
    } else {
        filtersContainer.style.height = `${MAIN_FILTERS_HEIGHT}px`;
        iconAllFilters.style.transform = 'rotate(0deg)';
    }
});


// При нажатии на таб бар открывается выпадающее меню

const FILTER_OPTIONS = [
    {
        selector: '.rc-filters__price',
        options: ['опция 1', 'опция 2', 'опция 3'],
    },
    {
        selector: '.rc-filters__place',
        options: ['опция 1', 'опция 2', 'опция 3'],
    },
    {
        selector: '.rc-filters__date',
        options: ['опция 1', 'опция 2', 'опция 3'],
    },
    {
        selector: '.rc-filters__corpus',
        options: ['опция 1', 'опция 2', 'опция 3'],
    },
    {
        selector: '.rc-filters__city',
        options: ['опция 1', 'опция 2', 'опция 3'],
    },
    {
        selector: '.rc-filters__builder',
        options: ['опция 1', 'опция 2', 'опция 3'],
    },
    {
        selector: '.rc-filters__banks',
        options: ['опция 1', 'опция 2', 'опция 3'],
    },
    {
        selector: '.rc-filters__finishing',
        options: ['опция 1', 'опция 2', 'опция 3'],
    }
];

FILTER_OPTIONS.map(({selector, options}) => {
    const filterTabElement = document.querySelector(selector);

    const menu = document.createElement('div');
    menu.className = 'rc-filters__menu';

    options.map((option) => {
        const optionElement = document.createElement('p');
        optionElement.className = 'rc-filters__option';
        optionElement.innerHTML = option;

        menu.appendChild(optionElement);
    });

    filterTabElement.addEventListener('click', () => {
        filterTabElement.appendChild(menu);
    })
});

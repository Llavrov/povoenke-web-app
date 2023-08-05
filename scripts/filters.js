const filtersContainer = document.querySelector('.rc-filters__content__filters');
const mainFiltersContainer = document.querySelector('.rc-filters__content__filters__main');
const additionalFiltersContainer = document.querySelector('.rc-filters__content__filters__additional');
const buttonAllFilters = document.querySelector('#rc-filters__button__all-filters');
const iconAllFilters = document.querySelector('.rc-filters__button__all-filters__icon');

let MAIN_FILTERS_HEIGHT = mainFiltersContainer.clientHeight;
let FULL_FILTERS_HEIGHT = mainFiltersContainer.clientHeight + 20 + additionalFiltersContainer.clientHeight;

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

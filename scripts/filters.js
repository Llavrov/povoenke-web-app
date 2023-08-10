const filtersContainer = document.querySelector('.rc-filters__content__filters');
const mainFiltersContainer = document.querySelector('.rc-filters__content__filters__main');
const additionalFiltersContainer = document.querySelector('.rc-filters__content__filters__additional');
const buttonAllFilters = document.querySelector('#rc-filters__button__all-filters');
const iconAllFilters = document.querySelector('.rc-filters__button__all-filters__icon');

const FILTER_OPTIONS = [
    {
        selector: '.rc-filters__builder',
        options: ['опция 1', 'опция 2', 'опция 3'],
    },
    {
        selector: '.rc-filters__corpus',
        options: ['опция 1', 'опция 2', 'опция 3'],
    },
    {
        selector: '.rc-filters__finishing',
        options: ['опция 1', 'опция 2', 'опция 3'],
    },
    {
        selector: '.rc-filters__banks',
        options: ['опция 1', 'опция 2', 'опция 3'],
    },
    {
        selector: '.rc-filters__city',
        options: ['опция 1', 'опция 2', 'опция 3'],
    },
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
    }
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
    FILTER_OPTIONS.map(({selector, options}) => {
        const filterTabElement = document.querySelector(selector);

        if (filterTabElement && !parentsNodesContainClass(event.target, selector)) {
            const menu = filterTabElement.querySelector('.rc-filters__menu');
            menu && filterTabElement.removeChild(menu);
        } else {
        }
    });
}



// Показать все фильтры

function handleSwitchShowAllFilters() {
    if (additionalFiltersContainer) {
        let MAIN_FILTERS_HEIGHT = mainFiltersContainer.clientHeight;
        let FULL_FILTERS_HEIGHT = mainFiltersContainer.clientHeight + 20 + additionalFiltersContainer.clientHeight;

        if (showAllFilters) {
            additionalFiltersContainer.style.display = 'flex';
            additionalFiltersContainer.style.opacity = '1';
            filtersContainer.style.height = `${FULL_FILTERS_HEIGHT}px`;
            iconAllFilters.style.transform = 'rotate(180deg)';
        } else {
            additionalFiltersContainer.style.display = 'none';
            additionalFiltersContainer.style.opacity = '0';
            filtersContainer.style.height = `${MAIN_FILTERS_HEIGHT}px`;
            iconAllFilters.style.transform = 'rotate(0deg)';
        }
    }
}

window.addEventListener('resize', () => {
    handleSwitchShowAllFilters();
    setTimeout(() => handleSwitchShowAllFilters(), 0);
    setTimeout(() => handleSetMenusForAllFiltersTabs(), 0);
})

let showAllFilters = false;

buttonAllFilters && buttonAllFilters.addEventListener('click', () => {
    showAllFilters = !showAllFilters;
    handleSwitchShowAllFilters();
    setTimeout(() => handleSwitchShowAllFilters(), 0);
    setTimeout(() => handleSetMenusForAllFiltersTabs(), 0);
});

// При нажатии на таб бар открывается выпадающее меню

function handleOpenMenuFilter(event, filterTabElement, menu, title) {
    const isVisible = filterTabElement.querySelector('.rc-filters__menu');
    const isOption = event.target.classList.contains('rc-filters__option');

    if (isVisible) {
        if (filterTabElement.querySelector('.rc-filters__menu')) {
            try {
                filterTabElement.removeChild(menu);
            } catch (e) {}
        }

        if (isOption && title)
            title.innerHTML = event.target.innerHTML;
    } else {
        handleCloseAllMenus(event);
        filterTabElement.appendChild(menu);
    }
}

function handleSetMenusForAllFiltersTabs() {
    FILTER_OPTIONS.map(({selector, options}) => {
        const filterTabElement = document.querySelector(selector);
        const title =
            filterTabElement && filterTabElement
                .querySelector('.horizontal')
                .querySelector('.title__light');

        const menu = document.createElement('div');
        menu.className = 'rc-filters__menu';

        options.map((option) => {
            const optionElement = document.createElement('p');
            optionElement.className = 'rc-filters__option';
            optionElement.innerHTML = option;

            menu.appendChild(optionElement);
        });

        filterTabElement && filterTabElement.addEventListener('click', (event) =>
            handleOpenMenuFilter(event, filterTabElement, menu, title)
        );
    });
}

window.addEventListener('click', (event) => {
    if (!parentsNodesContainClass(event.target, 'rc-filters__content__filters__tab')) {
        handleCloseAllMenus(event);
    }
});

handleSetMenusForAllFiltersTabs();

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

        if (filterTabElement && !parentsNodesContainClass(event.target, selector)) {
            const menu = filterTabElement.querySelector('.rc-filters__menu');
            menu && filterTabElement.removeChild(menu);
        }
    });
}

window.addEventListener('resize', () => {
    handleSwitchShowAllFilters();
    setTimeout(() => handleSwitchShowAllFilters(), 0);
});

// При нажатии на таб бар открывается выпадающее меню

function handleOpenMenuFilter(event, selector, menu) {
    const filterTabElement = document.querySelector(selector);

    const isVisible = filterTabElement.querySelector('.rc-filters__menu');

    if (isVisible) {
        if (filterTabElement.querySelector('.rc-filters__menu')) {
            try {
                filterTabElement.removeChild(menu);
            } catch (e) {}
        }
    } else {
        handleCloseAllMenus(event);
        filterTabElement.appendChild(menu);
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

// При ресайзинге часть меню перемещаются в дополнительные меню

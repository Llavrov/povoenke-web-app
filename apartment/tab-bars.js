const tabBarsDescriptionContainer = document.querySelectorAll('.apartment-description__tab-bar');
const tabBarsMortgageContainer = document.querySelectorAll('.apartment-mortgage__tab-bar');


// При нажатии на таб бар изменяется на активный

[
    tabBarsDescriptionContainer,
    tabBarsMortgageContainer
].map((tabBarsContainer) =>
    tabBarsContainer.forEach((tabBarContainer) => {
        const tabBars = tabBarContainer.querySelectorAll('.apartment__tab-bar__item');

        tabBars.forEach((tabBar) => {
            tabBar.addEventListener('click', () => {
                tabBars.forEach((tabBarItem) => {
                    tabBarItem.classList.remove('apartment__tab-bar__item__active');
                });

                tabBar.classList.add('apartment__tab-bar__item__active');
            })
        });
    })
);

const TAB_DESCRIPTION_LIST = [
    {
        tabSelector: '.apartment-tab__about-apartment',
        selector: '.apartment-description__details__paragraphs',
        paragraphs: [
            {
                title: null,
                content: `
                    Жилой район «Саларьево парк» расположен в Новой Москве, в 6 километрах от МКАД по Киевскому шоссе.
                    В пяти минутах пешком находится станция метро «Филатов Луг».
                    ТРЦ «Саларис» и крупные торговые центры — «РИО», Metro Cash & Carry, «Леруа Мерлен» — всего в пяти минутах езды на машине.
                    Жилой район «Саларьево парк» расположен в Новой Москве, в 6 километрах от МКАД по Киевскому шоссе.
                    В пяти минутах пешком находится станция метро «Филатов Луг».
                    ТРЦ «Саларис» и крупные торговые центры — «РИО», Metro Cash & Carry, «Леруа Мерлен» — всего в пяти минутах езды на машине.
                `
            },
        ]
    },
    {
        tabSelector: '.apartment-tab__about-apartment__02',
        selector: '.apartment-description__details__02__paragraphs',
        paragraphs: [
            {
                title: null,
                content: `
                    Жилой район «Саларьево парк» расположен в Новой Москве, в 6 километрах от МКАД по Киевскому шоссе.
                    В пяти минутах пешком находится станция метро «Филатов Луг».
                    ТРЦ «Саларис» и крупные торговые центры — «РИО», Metro Cash & Carry, «Леруа Мерлен» — всего в пяти минутах езды на машине.
                    Жилой район «Саларьево парк» расположен в Новой Москве, в 6 километрах от МКАД по Киевскому шоссе.
                    В пяти минутах пешком находится станция метро «Филатов Луг».
                    ТРЦ «Саларис» и крупные торговые центры — «РИО», Metro Cash & Carry, «Леруа Мерлен» — всего в пяти минутах езды на машине.
                `
            },
            {
                title: 'Экология',
                content: `
                    Жилой район «Саларьево парк» расположен в Новой Москве, в 6 километрах от МКАД по Киевскому шоссе.
                    В пяти минутах пешком находится станция метро «Филатов Луг».
                    ТРЦ «Саларис» и крупные торговые центры — «РИО», Metro Cash & Carry, «Леруа Мерлен» — всего в пяти минутах езды на машине.
                    Жилой район «Саларьево парк» расположен в Новой Москве, в 6 километрах от МКАД по Киевскому шоссе.
                    В пяти минутах пешком находится станция метро «Филатов Луг».
                    ТРЦ «Саларис» и крупные торговые центры — «РИО», Metro Cash & Carry, «Леруа Мерлен» — всего в пяти минутах езды на машине.
                `
            },
            {
                title: 'Урбанистика',
                content: `
                    Жилой район «Саларьево парк» расположен в Новой Москве, в 6 километрах от МКАД по Киевскому шоссе.
                    В пяти минутах пешком находится станция метро «Филатов Луг».
                    ТРЦ «Саларис» и крупные торговые центры — «РИО», Metro Cash & Carry, «Леруа Мерлен» — всего в пяти минутах езды на машине.
                    Жилой район «Саларьево парк» расположен в Новой Москве, в 6 километрах от МКАД по Киевскому шоссе.
                    В пяти минутах пешком находится станция метро «Филатов Луг».
                    ТРЦ «Саларис» и крупные торговые центры — «РИО», Metro Cash & Carry, «Леруа Мерлен» — всего в пяти минутах езды на машине.
                `
            }
        ]
    }
];

const TAB_CHARACTERISTIC_LIST = [
    {
        tabSelector: '.apartment-tab__details',
        selector: '.apartment-description__details__paragraphs',
        title: 'Жилой комплекс',
        paragraphs: [
            {
                detailsTitle: null,
                detailsContent:
                    [
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                    ]
            },
            {
                detailsTitle: null,
                detailsContent:
                    [
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                    ]
            },
            {
                detailsTitle: {
                    corpus: 'Корпус 1',
                    address: 'Красногвардейская 32А, Литер Б',
                },
                detailsContent:
                    [
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                    ]
            },
            {
                detailsTitle: {
                    corpus: 'Корпус 2',
                    address: 'Красногвардейская 32А, Литер Б',
                },
                detailsContent:
                    [
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                    ]
            },
            {
                detailsTitle: {
                    corpus: 'Корпус 3',
                    address: 'Красногвардейская 32А, Литер Б',
                },
                detailsContent:
                    [
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                    ]
            }
        ],
    },
    {
        tabSelector: '.apartment-description__details__02',
        selector: '.apartment-description__details__02__paragraphs',
        title: 'Жилой комплекс',
        paragraphs: [
            {
                detailsTitle: null,
                detailsContent:
                    [
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                    ]
            },
            {
                detailsTitle: null,
                detailsContent:
                    [
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                    ]
            },
            {
                detailsTitle: {
                    corpus: 'Корпус 1',
                    address: 'Красногвардейская 32А, Литер Б',
                },
                detailsContent:
                    [
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                    ]
            },
            {
                detailsTitle: {
                    corpus: 'Корпус 2',
                    address: 'Красногвардейская 32А, Литер Б',
                },
                detailsContent:
                    [
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                    ]
            },
            {
                detailsTitle: {
                    corpus: 'Корпус 3',
                    address: 'Красногвардейская 32А, Литер Б',
                },
                detailsContent:
                    [
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                        {
                            char: 'Характеристика',
                            value: 'значение'
                        },
                    ]
            }
        ],
    }
]

TAB_DESCRIPTION_LIST.forEach(({tabSelector, selector, paragraphs}) => {
    const aboutApartmentTab = document.querySelector(tabSelector);
    const apartmentDetails = document.querySelector(selector);

    const apartmentDetailsContainer = document.createElement('div');

    paragraphs.forEach(({title, content}) => {
        const paragraphElement = document.createElement('div');
        paragraphElement.className = 'apartment-description__paragraph';

        paragraphElement.innerHTML = `
            ${title ? (
                `<div class="apartment-description__title">
                    <p class="title__large__xxs">
                        ${title}
                    </p>
                </div>`
            ) : ''}

            <div class="apartment-description__paragraph__content">
                <p class="title__light">
                    ${content}
                </p>
                <div class="apartment-description__paragraph__content__bottom"></div>
            </div>
    
            <div class="button paragraph__show-all">
                <p class="title__extra-medium title__link title__green">
                    Показать полностью
                </p>
            </div>
        `;

        apartmentDetailsContainer.appendChild(paragraphElement);
    });

    aboutApartmentTab.addEventListener('click', () => {
        apartmentDetails.innerHTML = apartmentDetailsContainer.innerHTML;
        handleShowAllParagraph();
    });
})

// aboutApartmentTab.addEventListener('click', () => {
//     apartmentDetails.innerHTML = `
//         <p class="title__light">
//             Жилой район «Саларьево парк» расположен в Новой Москве, в 6 километрах от МКАД по Киевскому шоссе.
//             В пяти минутах пешком находится станция метро «Филатов Луг».
//             ТРЦ «Саларис» и крупные торговые центры — «РИО», Metro Cash & Carry, «Леруа Мерлен» — всего в пяти минутах езды на машине.
//         </p>
//     `;
// });

function handleCreateTitleContainer(title) {
    const container = document.createElement('div');
    container.className = 'paragraph__details-container';

    const titleElement = document.createElement('div');
    titleElement.className = 'title__extra-medium__bold';
    titleElement.innerHTML = title;

    container.appendChild(titleElement);

    return container;
}

function handleCreateContainer() {
    const container = document.createElement('div');
    container.className = 'paragraph__details-container';

    return container;
}

function handleCreateContent() {
    const content = document.createElement('div');
    content.className = 'paragraph__details__content';

    return content;
}

function handleCreateColumn(detailsContent) {
    const column = document.createElement('div');
    column.className = 'paragraph__details__row';

    detailsContent.forEach(({char, value}) => {
        column.appendChild(handleCreateLine(char, value));
    });

    return column;
}

function handleCreateColumnWithTitle(detailsContent, detailsTitle) {
    const column = document.createElement('div');
    column.className = 'paragraph__details__row';

    column.innerHTML = `
        <div>
            <p class="title__extra-medium__bold">
                ${detailsTitle.corpus}
            </p>
            <p class="title__light title__gray">
                ${detailsTitle.address}
            </p>
        </div>
    `;

    detailsContent.forEach(({char, value}) => {
        column.appendChild(handleCreateLine(char, value));
    });

    return column;
}

function handleCreateLine(char, value) {
    const line = document.createElement('div');
    line.classList.add('horizontal');
    line.classList.add('gap-3');

    line.innerHTML = `
        <p class="title__light">${char}</p>
        <div class="dashed__gray"></div>
        <p class="title__light__bold">${value}</p>
    `;

    return line;
}

TAB_CHARACTERISTIC_LIST.forEach(({tabSelector, selector, title, paragraphs}) => {
    const detailsContainer = document.createElement('div');
    const titleContainer = handleCreateTitleContainer(title);
    const titleContent = handleCreateContent();

    // Если у нас >= 2 столбцов, то создаем столбец с заголовком и добавляем в него первые две колонки
    if (paragraphs.length >= 2) {
        titleContent.appendChild(handleCreateColumn(paragraphs[0].detailsContent))
        titleContent.appendChild(handleCreateColumn(paragraphs[1].detailsContent));
        titleContainer.appendChild(titleContent);

        detailsContainer.appendChild(titleContainer);

        // Если больше 2 столбцов, то добавляем их в остальные контейнеры
        if (paragraphs.length > 2) {
            const columns = [];

            paragraphs
                .slice(2)
                .forEach(({ detailsTitle, detailsContent }, index) => {
                    columns.push(handleCreateColumnWithTitle(detailsContent, detailsTitle));
                });

            columns.map((column, index) => {
                if (index % 2) {
                    const container = handleCreateContainer();
                    const content = handleCreateContent();

                    content.appendChild(columns[index - 1]);
                    content.appendChild(column);
                    container.appendChild(content);

                    detailsContainer.appendChild(container);
                } else if (columns.length === index + 1) {
                    const container = handleCreateContainer();
                    const content = handleCreateContent();

                    content.appendChild(column);
                    container.appendChild(content);

                    detailsContainer.appendChild(container);
                }
            });
        }
    } else {
        titleContent.appendChild(handleCreateColumn(paragraphs[0].detailsContent));
        titleContainer.appendChild(titleContent);

        detailsContainer.appendChild(titleContainer);
    }

    document.querySelector(tabSelector).addEventListener('click', () => {
        document.querySelector(selector).innerHTML = detailsContainer.innerHTML;
    });
});


// После переключения табов активируем раскрытие параграфа при нажатии на "Показать полностью"
function handleShowAllParagraph() {
    const APARTMENT_PARAGRAPH_BUTTON = '.paragraph__show-all';
    const APARTMENT_PARAGRAPH = '.apartment-description__paragraph__content';
    const HEIGHT_OF_PARAGRAPH = '70px';

    const paragraphsContainer = document.querySelectorAll('.apartment-description__paragraph');

    paragraphsContainer && paragraphsContainer.forEach((paragraph) => {
        let showAllParagraph = true;

        const button = paragraph.querySelector(APARTMENT_PARAGRAPH_BUTTON);
        const contentContainer = paragraph.querySelector(APARTMENT_PARAGRAPH);
        const content = contentContainer.querySelector('p');
        const bottom = contentContainer.querySelector('.apartment-description__paragraph__content__bottom');

        button && button.addEventListener('click', () => {
            if (showAllParagraph) {
                contentContainer.style.maxHeight = `${content.clientHeight }px`;
                showAllParagraph = false;
                bottom.style.display = 'none';
                button.innerHTML = `
                <p class="title__extra-medium title__link title__green">
                    Скрыть
                </p>`;
            } else {
                contentContainer.style.maxHeight = HEIGHT_OF_PARAGRAPH;
                showAllParagraph = true;
                bottom.style.display = 'block';
                button.innerHTML = `
                <p class="title__extra-medium title__link title__green">
                    Показать полностью
                </p>`;
            }
        });
    });
}
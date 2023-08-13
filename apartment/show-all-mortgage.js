const HEIGHT_OF_ONE_ROW = 170;
const HEIGHT_OF_MORTGAGE = '400px';
const BUILDING_MORTGAGE_TABLE = '.apartment-mortgage__table__body';

const showAllMortgageButton = document.querySelector('.apartment-mortgage__show-all');
const mortgageContainer = document.querySelector('.apartment-mortgage__table');
const mortgageBodyContainer = document.querySelector(BUILDING_MORTGAGE_TABLE);

let showAllMortgage = true;

showAllMortgageButton && showAllMortgageButton.addEventListener('click', () => {
    const mortgageRows = mortgageBodyContainer.querySelectorAll('tr');
    if (showAllMortgage) {
        mortgageContainer.style.maxHeight = `${HEIGHT_OF_ONE_ROW * mortgageRows.length}px`;
        showAllMortgage = false;
        showAllMortgageButton.innerHTML = `
            <p class="title__light title__green">
                Скрыть
            </p>`;
    } else {
        mortgageContainer.style.maxHeight = HEIGHT_OF_MORTGAGE;
        showAllMortgage = true;
        showAllMortgageButton.innerHTML = `
            <p class="title__light title__green">
                Показать целиком
            </p>`;
    }
});

const infoIcon = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" rx="10" fill="#E5F5ED"/>
        <path d="M11.28 14H9.66V8.48H11.28V14ZM9.6 6.98C9.6 6.74 9.688 6.532 9.864 6.356C10.048 6.172 10.26 6.08 10.5 6.08C10.74 6.08 10.948 6.172 11.124 6.356C11.308 6.532 11.4 6.74 11.4 6.98C11.4 7.22 11.308 7.432 11.124 7.616C10.948 7.792 10.74 7.88 10.5 7.88C10.26 7.88 10.048 7.792 9.864 7.616C9.688 7.432 9.6 7.22 9.6 6.98Z" fill="#009B47"/>
    </svg>`;

const mortgageHeaders = ['Банки', 'Стандартная', 'Господдержка', 'Семейная', 'Супружеская'];

// Через массив mortgageData заполняется информация в таблице с Ипотекой.

const mortgageData = [
    {
        banks: 'Дом РФ',
        standard: '4,6%',
        government: '4,6%',
        family: '4,6%',
        marital: '4,6%',
    },
    {
        banks: 'Дом РФ',
        standard: '4,6%',
        government: '4,6%',
        family: '4,6%',
        marital: '4,6%',
    },
    {
        banks: 'Дом РФ',
        standard: '4,6%',
        government: '4,6%',
        family: '4,6%',
        marital: '4,6%',
    },
    {
        banks: 'Дом РФ',
        standard: '4,6%',
        government: '4,6%',
        family: '4,6%',
        marital: '4,6%',
    },
    {
        banks: 'Дом РФ',
        standard: '4,6%',
        government: '4,6%',
        family: '4,6%',
        marital: '4,6%',
    },
    {
        banks: 'Дом РФ',
        standard: '4,6%',
        government: '4,6%',
        family: '4,6%',
        marital: '4,6%',
    },
];

function createMortgageRow(mortgageData) {
    const container = document.createElement('tr');

    mortgageData.map((info, index) => {
        const column = document.createElement('td');
        if (index) {
            column.innerHTML = `
                <div class="horizontal mobile-header__container">
                    <div class="horizontal gap-1 mobile-header">
                        <p class="title__light title__gray">
                            ${mortgageHeaders[index]}
                        </p>
    
                        ${infoIcon}
                    </div>
                    
                    <div class="">
                        <p class="title__light">
                            ${info}
                        </p>
                        
                        <p class="title__small title__gray">
                            430000p
                        </p>
                    </div>
                </div>
            `;
        } else {
            column.innerHTML = `
                <div class="horizontal mobile-header__container"> 
                    <p class="title__light">
                        ${info}
                    </p>
                </div>
            `;
        }

        container.appendChild(column);
    });

    const button = document.createElement('div');
    button.classList.add('button__green');
    button.classList.add('button__center');
    button.classList.add('mobile-header');
    button.innerHTML = 'Позвонить';

    container.appendChild(button);

    return container;
}

// Добавляем карточки таблицы ипотеки

mortgageData.map((mortgage) => {
    const row = createMortgageRow(Object.values(mortgage));
    mortgageBodyContainer.appendChild(row);
})
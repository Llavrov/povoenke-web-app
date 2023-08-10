const HEIGHT_OF_ONE_ROW = 170;
const HEIGHT_OF_MORTGAGE = '400px';
const showAllMortgageButton = document.querySelector('.building-mortgage__show-all');
const mortgageContainer = document.querySelector('.building-mortgage__table');
const mortgageBodyContainer = document.querySelector('.building-mortgage__table__body');
const mortgageRows = mortgageBodyContainer.querySelectorAll('tr');

let showAllMortgage = true;

showAllMortgageButton && showAllMortgageButton.addEventListener('click', () => {
    if (showAllMortgage) {
        mortgageContainer.style.maxHeight = `${HEIGHT_OF_ONE_ROW * mortgageRows.length}px`;
        showAllMortgage = false;
    } else {
        mortgageContainer.style.maxHeight = HEIGHT_OF_MORTGAGE;
        showAllMortgage = true;
    }
})
const tabBarNavigationContainer = document.querySelector('.object-type-container');
const tabBarNavigation = document.querySelector('.building-object-type-content');


const apartments = document.querySelector('.building-apartments-container');
const mortgage = document.querySelector('.building-mortgage-container');
const description = document.querySelector('.building-description-container');
const geo = document.querySelector('.building-geo-container');
const recommendations = document.querySelector('.building-nearest-complex-container');

window.addEventListener('scroll', (event) => {
    const objectTypeNavigationTabs = document.querySelectorAll('.building-object-type__item');

    if (tabBarNavigationContainer.getBoundingClientRect().top <= 0) {
        tabBarNavigation.style.position = 'fixed';
        tabBarNavigation.style.top = '0'
        tabBarNavigation.style.zIndex = '100'
        tabBarNavigation.style.background = 'white'

        objectTypeNavigationTabs.forEach((object) => {
            object.classList.remove('building-object-type__item__active');
        });

        if (recommendations.getBoundingClientRect().top <= 90) {
            objectTypeNavigationTabs[4].classList.add('building-object-type__item__active')
            tabBarNavigation.scrollBy({
                left: objectTypeNavigationTabs[4].getBoundingClientRect().x - 28,
                top: 0,
                behavior: 'smooth'
            });
        } else if (geo.getBoundingClientRect().top <= 90) {
            objectTypeNavigationTabs[3].classList.add('building-object-type__item__active')
            tabBarNavigation.scrollBy({
                left: objectTypeNavigationTabs[3].getBoundingClientRect().x - 28,
                top: 0,
                behavior: 'smooth'
            });
        } else if (description.getBoundingClientRect().top <= 90) {
            objectTypeNavigationTabs[2].classList.add('building-object-type__item__active')
            tabBarNavigation.scrollBy({
                left: objectTypeNavigationTabs[2].getBoundingClientRect().x - 28,
                top: 0,
                behavior: 'smooth'
            });
        } else if (mortgage.getBoundingClientRect().top <= 90) {
            objectTypeNavigationTabs[1].classList.add('building-object-type__item__active')
            tabBarNavigation.scrollBy({
                left: objectTypeNavigationTabs[1].getBoundingClientRect().x - 28,
                top: 0,
                behavior: 'smooth'
            });
        } else {
            objectTypeNavigationTabs[0].classList.add('building-object-type__item__active')
            tabBarNavigation.scrollBy({
                left: objectTypeNavigationTabs[0].getBoundingClientRect().x - 28,
                top: 0,
                behavior: 'smooth'
            });
        }
    } else {
        tabBarNavigation.style.position = 'unset';
    }
});

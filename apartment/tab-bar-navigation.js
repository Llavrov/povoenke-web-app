const tabBarNavigationContainer = document.querySelector('.object-type-container');
const tabBarNavigation = document.querySelector('.apartment-object-type-container');


const about = document.querySelector('#apartment-about-container');
const mortgage = document.querySelector('.apartment-mortgage-container');
const description = document.querySelector('#apartment-description-container');
const geo = document.querySelector('.apartment-geo-container');
const recommendations = document.querySelector('.apartment-nearest-complex-container');

window.addEventListener('scroll', (event) => {
    const objectTypeNavigationTabs = document.querySelectorAll('.apartment-object-type__item');

    if (tabBarNavigationContainer.getBoundingClientRect().top <= 0) {
        tabBarNavigation.style.position = 'fixed';
        tabBarNavigation.style.top = '0'
        tabBarNavigation.style.zIndex = '100'
        tabBarNavigation.style.background = 'white'

        objectTypeNavigationTabs.forEach((object) => {
            object.classList.remove('apartment-object-type__item__active');
        });

        if (recommendations.getBoundingClientRect().top <= 90) {
            objectTypeNavigationTabs[3].classList.add('apartment-object-type__item__active')
            tabBarNavigation.scrollBy({
                left: objectTypeNavigationTabs[4].getBoundingClientRect().x - 28,
                top: 0,
                behavior: 'smooth'
            });
        } else if (geo.getBoundingClientRect().top <= 90) {
            objectTypeNavigationTabs[2].classList.add('apartment-object-type__item__active')
            tabBarNavigation.scrollBy({
                left: objectTypeNavigationTabs[3].getBoundingClientRect().x - 28,
                top: 0,
                behavior: 'smooth'
            });
        } else if (description.getBoundingClientRect().top <= 90) {
            objectTypeNavigationTabs[0].classList.add('apartment-object-type__item__active')
            tabBarNavigation.scrollBy({
                left: objectTypeNavigationTabs[0].getBoundingClientRect().x - 28,
                top: 0,
                behavior: 'smooth'
            });
        } else if (mortgage.getBoundingClientRect().top <= 90) {
            objectTypeNavigationTabs[1].classList.add('apartment-object-type__item__active')
            tabBarNavigation.scrollBy({
                left: objectTypeNavigationTabs[1].getBoundingClientRect().x - 28,
                top: 0,
                behavior: 'smooth'
            });
        } else {
            objectTypeNavigationTabs[0].classList.add('apartment-object-type__item__active')
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

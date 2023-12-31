<h1 align="center">Po voenke</h1>

## Использование

1. Для использования данных страницы вам следует разместить содержимое HTML-файла в нужном месте вашего проекта. При необходимости, вы можете вносить изменения в текст, изображения, стили и скрипты для адаптации под ваши требования.

2. Вы можете открыть данные Html файлы через IDE (Webstorm, VSCode, ...)

3. Также можно разместить данные страницы на хостинге ghpages, netlify, vercel


# Страницы

- **List**
- **Map**
- **new Buildings**
- **Apartment**
- **ApartmentRC**

---

## List

### Обзор

Данная HTML страница представляет собой интерфейс для отображения информации о новостройках. Она включает в себя фильтры, карточки новостроек и элементы для визуализации данных. Страница использует стили и скрипты для обеспечения интерактивности и визуального оформления.

### Структура страницы

1. Верхний блок содержит информацию о дешевых предложениях и скидках на покупку.
2. Блок фильтров позволяет пользователю выбирать параметры новостроек.
    - Внутри этого блока находятся вкладки с различными фильтрами, такими как город, количество комнат, цена и т.д.
    - Дополнительные вкладки предоставляют дополнительные параметры фильтрации.
3. Блок с контейнером для карточек новостроек содержит кнопки для отображения на карте и сортировки по цене.
    - Внутри этого блока находятся карточки новостроек и элементы управления слайдером фотографий.


### Используемые стили

- `common.css` - общие стили для страницы, вероятно, содержащие общие элементы дизайна.
- `styles.css` - стили, специфичные для данной страницы, скорее всего, для настройки внешнего вида элементов.

### Используемые скрипты

- `filters.js` - скрипт, обеспечивающий функциональность сворачивания и разворачивания дополнительных фильтров.
- `cards.js` - скрипт, отвечающий за добавление карточек новостроек и создание слайдера фотографий.

Общий дизайн страницы строится на основе классов, определенных в используемых стилях, и оживляется с помощью скриптов.

---

## Map

### Структура страницы

1. Верхний блок содержит информацию о дешевых предложениях и скидках на покупку.
2. Блок фильтров позволяет пользователю выбирать параметры новостроек.
   - Внутри этого блока находятся вкладки с различными фильтрами, такими как город, количество комнат, цена и т.д.
   - Дополнительные вкладки предоставляют дополнительные параметры фильтрации. 
3. Блок с картой и содержимым, связанным с ней.
   - На карте отображаются метки новостроек.
   - В блоке содержится также информация о выбранной новостройке.
4. В нижней части страницы находятся кнопки для сортировки и переключения между режимами отображения.

### Используемые стили

- `common.css` - общие стили для страницы, вероятно, содержащие общие элементы дизайна.
- `list/styles.css` - стили из другой директории, возможно, для настройки внешнего вида общих элементов.
- `styles.css` - стили, специфичные для данной страницы, скорее всего, для настройки внешнего вида элементов.

### Используемые скрипты

- `filters.js` - скрипт, обеспечивающий функциональность сворачивания и разворачивания дополнительных фильтров.
- `connect-card.js` - скрипт, отвечающий за добавление карточек новостроек и создание слайдера фотографий.

---

## New Buildings & Apartment

### Обзор

Документация предоставляет описание структуры и компонентов HTML-страницы "Жилой комплекс Новая Рига". Эта страница отображает информацию о жилом комплексе, его характеристиках, планировке, расположении, ипотечных условиях и других важных аспектах.

### Структура страницы

1. **Заголовок страницы**: В этой части указывается название жилого комплекса и описание комплекса.
2. **Характеристики квартир**: В данной секции представлена информация о доступных квартирах: количество комнат, площадь, квартал сдачи и стоимость.
3. **Изображение здания**: Здесь размещено изображение здания жилого комплекса.
4. **Информация о ипотеке**: Эта секция содержит информацию о военной ипотеке, предлагаемой банками, с разбивкой по условиям и процентным ставкам.
5. **Описание комплекса**: Здесь предоставлена дополнительная информация о жилом комплексе, такая как застройщик, экология, урбанистика и прочее.
6. **Расположение на карте**: В данной части показано расположение комплекса на карте, указан адрес и ближайшие станции метро.
7. **Ближайшие жилые комплексы**: Здесь представлены другие близлежащие жилые комплексы.

### Используемые стили

- `common.css` - общие стили для страницы, вероятно, содержащие общие элементы дизайна.
- `list/styles.css` - стили из другой директории, возможно, для настройки внешнего вида общих элементов.
- `styles.css` - стили, специфичные для данной страницы, скорее всего, для настройки внешнего вида элементов.

### Используемые скрипты

- `filters.js` - скрипт, обеспечивающий функциональность сворачивания и разворачивания дополнительных фильтров.
- `connect-card.js` - скрипт, отвечающий за добавление карточек новостроек и создание слайдера фотографий.
- `building-apartments.js` - скрипт, отвечающий за подключение функционала к таблице с квартирами
- `show-all-mortgage.js` - скрипт, отвечающий за подключение функционала к таблице с ипотекой
- `cards.js` - скрипт, отвечающий за добавление карточек новостроек и создание слайдера фотографий.
- `building-slider.js` - скрипт, отвечающий за создание главного слайдера фотографий квартир ЖК и добавление функционала

---

## ApartmentRC

### Обзор

Документация предоставляет описание структуры и компонентов HTML-страницы "Квартиры в ЖК и Квартиры". Эта страница отображает информацию о жилом комплексе, его характеристиках, планировке, расположении, ипотечных условиях и других важных аспектах.

### Структура страницы

1. Блок фильтров позволяет пользователю выбирать параметры новостроек.
   - Внутри этого блока находятся вкладки с различными фильтрами, такими как город, количество комнат, цена и т.д.
   - Дополнительные вкладки предоставляют дополнительные параметры фильтрации.
2. Блок с контейнером для карточек квартир содержит кнопки для отображения на карте и сортировки по цене.
   - Внутри этого блока находятся карточки квартир и элементы управления слайдером фотографий.

### Используемые стили

- `common.css` - общие стили для страницы, вероятно, содержащие общие элементы дизайна.
- `list/styles.css` - стили из другой директории, возможно, для настройки внешнего вида общих элементов.
- `styles.css` - стили, специфичные для данной страницы, скорее всего, для настройки внешнего вида элементов.

### Используемые скрипты

- `filters.js` - скрипт, обеспечивающий функциональность сворачивания и разворачивания дополнительных фильтров.
- `cards.js` - скрипт, отвечающий за добавление карточек новостроек и создание слайдера фотографий.

## Автор

Автор данной документации: github.com/Llavrov

---

## Скрипты (scripts)

- connect-card - подключение карточки ЖК объекта (можно использовать для интеграции на других страницах)
- filters - подключение компонента с фильтрами 


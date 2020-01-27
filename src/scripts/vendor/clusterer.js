ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.831191833807, 37.446191310883],
            zoom: 5,
            scroll: false,
            behaviors: ['default', 'scrollZoom']
        }, {
            searchControlProvider: 'yandex#search'
        }),
        /**
         * Создадим кластеризатор, вызвав функцию-конструктор.
         * Список всех опций доступен в документации.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Clusterer.xml#constructor-summary
         */
            clusterer = new ymaps.Clusterer({
                clusterIcons: [
                    {
                        href: 'assets/img/m1.png',
                        size: [50, 50],
                        offset: [0, -50]
                    }
                ],
            /**
             * Через кластеризатор можно указать только стили кластеров,
             * стили для меток нужно назначать каждой метке отдельно.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/option.presetStorage.xml
             */
            preset: 'islands#invertedVioletClusterIcons',
            /**
             * Ставим true, если хотим кластеризовать только точки с одинаковыми координатами.
             */
            groupByCoordinates: false,
            /**
             * Опции кластеров указываем в кластеризаторе с префиксом "cluster".
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ClusterPlacemark.xml
             */
            clusterDisableClickZoom: true,
            clusterHideIconOnBalloonOpen: false,
            geoObjectHideIconOnBalloonOpen: false
        }),
        /**
         * Функция возвращает объект, содержащий данные метки.
         * Поле данных clusterCaption будет отображено в списке геообъектов в балуне кластера.
         * Поле balloonContentBody - источник данных для контента балуна.
         * Оба поля поддерживают HTML-разметку.
         * Список полей данных, которые используют стандартные макеты содержимого иконки метки
         * и балуна геообъектов, можно посмотреть в документации.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/GeoObject.xml
         */
            getPointData = function (index, name, address, phone, phoneText, site) {
            return {
                balloonContentBody: '<div class="card-map"><div class="card-map-name">'+name+'</div><div class="card-map-address">'+address+'</div><div class="card-map-phone">Тел: <a href="'+phoneText+'">'+phone+'</a></div><div class="card-map-site"><a href="'+site+'" target="_blank">'+site+'</a></div></div>',
                clusterCaption: 'метка <strong>' + index + '</strong>'
            };
        },
        /**
         * Функция возвращает объект, содержащий опции метки.
         * Все опции, которые поддерживают геообъекты, можно посмотреть в документации.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/GeoObject.xml
         */
            getPointOptions = function () {
            return {
                iconLayout: 'default#imageWithContent',
                iconImageHref: 'assets/img/m0.png',
                iconImageSize: [30, 42],
                iconImageOffset: [-15, -42],
                balloonMaxWidth: 218,
                balloonOffset: [0, -42]
            };
        },
        points = [
            {
                coord: [57.993839153398,56.256963014603], 
                name: 'Лунда - Тушино 1',
                address: 'г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115',
                phone: '+7 (495) 665-01-00',
                phoneText: '+74956650100',
                site: 'https://lunda.ru/'
            },
            {
                coord: [55.831191833807,37.446191310883], 
                name: 'Лунда - Тушино 2',
                address: 'г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115',
                phone: '+7 (495) 665-01-00',
                phoneText: '+74956650100',
                site: 'https://lunda.ru/'
            },
            {
                coord: [57.4686767398, 56.452442403], 
                name: 'Лунда - Тушино 3',
                address: 'г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115',
                phone: '+7 (495) 665-01-00',
                phoneText: '+74956650100',
                site: 'https://lunda.ru/'
            },
            {
                coord: [57.757507,37.2452483], 
                name: 'Лунда - Тушино 4',
                address: 'г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115',
                phone: '+7 (495) 665-01-00',
                phoneText: '+74956650100',
                site: 'https://lunda.ru/'
            },
            {
                coord: [57.787857398, 37.422452403], 
                name: 'Лунда - Тушино 5',
                address: 'г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115',
                phone: '+7 (495) 665-01-00',
                phoneText: '+74956650100',
                site: 'https://lunda.ru/'
            },
            {
                coord: [57.757577,37.76475875], 
                name: 'Лунда - Тушино 6',
                address: 'г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115',
                phone: '+7 (495) 665-01-00',
                phoneText: '+74956650100',
                site: 'https://lunda.ru/'
            },
            {
                coord: [57.01204528, 56.9275423], 
                name: 'Лунда - Тушино 7',
                address: 'г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115',
                phone: '+7 (495) 665-01-00',
                phoneText: '+74956650100',
                site: 'https://lunda.ru/'
            },
            {
                coord: [52.757507,34.2452483], 
                name: 'Лунда - Тушино 8',
                address: 'г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115',
                phone: '+7 (495) 665-01-00',
                phoneText: '+74956650100',
                site: 'https://lunda.ru/'
            },
            {
                coord: [57.785247398, 37.452542403], 
                name: 'Лунда - Тушино 9',
                address: 'г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115',
                phone: '+7 (495) 665-01-00',
                phoneText: '+74956650100',
                site: 'https://lunda.ru/'
            },
            {
                coord: [57.757577, 37.78575875], 
                name: 'Лунда - Тушино 10',
                address: 'г. Москва, ул. Вишневая, д. 9, корп. 1, блок 115',
                phone: '+7 (495) 665-01-00',
                phoneText: '+74956650100',
                site: 'https://lunda.ru/'
            }
            ],
        geoObjects = [];

    
    /**
     * Данные передаются вторым параметром в конструктор метки, опции - третьим.
     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark.xml#constructor-summary
     */
    for(var i = 0, len = points.length; i < len; i++) {
        geoObjects[i] = new ymaps.Placemark(points[i].coord, getPointData(i, points[i].name, points[i].address, points[i].phone, points[i].phoneText, points[i].site), getPointOptions());
    }

    /**
     * Можно менять опции кластеризатора после создания.
     */
    clusterer.options.set({
        gridSize: 80,
        clusterDisableClickZoom: false
    });

    /**
     * В кластеризатор можно добавить javascript-массив меток (не геоколлекцию) или одну метку.
     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Clusterer.xml#add
     */
    clusterer.add(geoObjects);
    myMap.geoObjects.add(clusterer);

    /**
     * Спозиционируем карту так, чтобы на ней были видны все объекты.
     */
    myMap.behaviors.disable('scrollZoom');
    myMap.setBounds(clusterer.getBounds(), {
        checkZoomRange: true
    });
});
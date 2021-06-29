/*====================================
*     Yandex Map
======================================*/

const mapInit = (data) =>
  $(document).ready(function () {
    // Проверка наличия карты на странице
    const isMapContainer = $("div").is("#map");
    

    if (isMapContainer) {
      ymaps.ready(init);

      function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [35.0, 10.0],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 1.5,
          maxZoom: 1,

          type: "yandex#satellite",

          controls: [],
        }, {
          // Зададим ограниченную область прямоугольником,           
          restrictMapArea: [
              [85.000000, -179.000000],
              [-85.000000, 179.000000]
          ]
        });

        data.forEach((element) => {
          myMap.geoObjects.add(
            new ymaps.Placemark(
              [element.lat, element.lon],
              {
                hintContent: element.title,
              },
              {                
                // Необходимо указать данный тип макета.
                iconLayout: "default#imageWithContent",
                // Своё изображение иконки метки.
                // iconImageHref: 'assets/icons/placeMark.svg',
                iconImageHref: "/static/assets/icons/placeMark.svg",

                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconImageOffset: [-15, -15],
              }
            )
          );
        });
      }
    }
  });

const mapSelfInit = (data) =>
  $(document).ready(function () {
    // Карта на странице контактов
    const isMapContacts = $("div").is("#mapSelf");

    if (isMapContacts) {

      ymaps.ready(mapSelfInit);

      function mapSelfInit() {
        // Создание карты.
        var myMap = new ymaps.Map("mapSelf", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [data[0].lat, data[0].lon],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 17,
          maxZoom: 1,
          controls: [],
        });

        data.forEach((element) => {
          myMap.geoObjects.add(
            new ymaps.Placemark(
              [element.lat, element.lon],
              {
                hintContent: element.title,
              },
              {
                // Необходимо указать данный тип макета.
                iconLayout: "default#imageWithContent",
                // Своё изображение иконки метки.
                // iconImageHref: 'assets/icons/placeMark2.svg',
                iconImageHref: "/static/assets/icons/placeMark2.svg",
                // Размеры метки.
                iconImageSize: [60, 60],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconImageOffset: [-30, -50],
              }
            )
          );
        });
      }
    }
  });


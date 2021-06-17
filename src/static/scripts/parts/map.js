// console.log("Файл map.scss подключен");

// document.querySelector('.btn').onclick = loader;

/*====================================
*     Yandex Map
======================================*/
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
// const x = [{
//         title: "Хьюстон",
//         lat: 29.766892,
//         lon: -95.342553
//     },
//     {
//         title: "Ноябрьск",
//         lat: 63.189667,
//         lon: 75.461747
//     },
//     {
//         title: "Москва",
//         lat: 55.661574,
//         lon: 37.573856
//     },
// ];
// const y = [
//       {
//           "lat": 63.197546,
//           "lon": 75.511242,
//       }
//   ]
// ;

const mapInit = (data) =>
  $(document).ready(function () {
    // Проверка наличия карты на странице
    const isMapContainer = $("div").is("#map");
    

    if (isMapContainer) {
      console.log("Нашел контейнер", "#map");
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
          console.log(element, "element");
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
      console.log("Нашел контейнер", "#mapSelf");

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
          console.log(element);
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

// mapInit(x);

// mapSelfInit(y);





// =================================================================================================================================
// =================================================================================================================================

function showFile(input) {
  let file = input.files[0];
  $(".header-callback__load-file__desc").text(`${file.name}`);  
}

function fileNameClear() {    
  const clear = () => $(".header-callback__load-file__desc").text(`Прикрепить резюме`);
  const clearInput = () => $(".header-callback__load-file__input").val("");  
  setTimeout(clear, 1000);
  setTimeout(clearInput, 1000);
}
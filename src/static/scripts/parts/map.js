console.log("Файл map.scss подключен");

// document.querySelector('.btn').onclick = loader;

/*====================================
*     Yandex Map
======================================*/
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
const data = [
{
  title: "Ноябрьск",
  lat: 63.189667,
  lon: 75.461747
},
{
  title: "Хьюстон",
  lat: 29.766892,
  lon: -95342553.0
}];



const mapInit = (data) => $(document).ready(function () {

  console.log(data);
  // const mapContainer = $("#map");


  const mapContainer = $("div").is('#map');
  // console.log(mapContainer);
  

  if (mapContainer) {
    // console.log(" Нашел карту ");
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
        // mark = []
      
      });      
    }
  }
});

mapInit(data);

const myPoints = (data) => {
  return 
}

// myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
//   hintContent: 'Собственный значок метки с контентом',
//   balloonContent: 'А эта — новогодняя',
//   iconContent: '12'
// }, {
//   // Опции.
//   // Необходимо указать данный тип макета.
//   iconLayout: 'default#imageWithContent',
//   // Своё изображение иконки метки.
//   iconImageHref: 'images/ball.png',
//   // Размеры метки.
//   iconImageSize: [48, 48],
//   // Смещение левого верхнего угла иконки относительно
//   // её "ножки" (точки привязки).
//   iconImageOffset: [-24, -24],
//   // Смещение слоя с содержимым относительно слоя с картинкой.
//   iconContentOffset: [15, 15],
//   // Макет содержимого.
//   iconContentLayout: MyIconContentLayout
// });
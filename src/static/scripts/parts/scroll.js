// jQuery("main").scroll(function () {  
//   var $sections = $("section");
//   $sections.each(function (i, el) {
//     var top = $(el).offset().top - 100;
//     var bottom = top + $(el).height();
//     var scroll = $(window).scrollTop();
//     var id = $(el).attr("id");      
//     if (scroll > top && scroll < bottom) {
//       $("#scroll-to-anchor a").removeClass("_current");
//       $('#scroll-to-anchor a[href="#' + id + '"]').addClass("_current");
//     }
//   });
// });
// $("nav#scroll-to-anchor").on("click", "a", function (event) {
//   // исключаем стандартную реакцию браузера
//   event.preventDefault();

//   // получем идентификатор блока из атрибута href
//   var id = $(this).attr("href"),
//     // находим высоту, на которой расположен блок
//     coord = $(id).offset(); 
//     console.log(coord);
//     top = coord.top;
    
//   // анимируем переход к блоку, время: 800 мс
//   $("body,html").animate({ scrollTop: top }, 800);
// });

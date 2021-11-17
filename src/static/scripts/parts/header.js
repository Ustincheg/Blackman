//=== MODAL REQUEST AJAX RESPONSE ===//

function ModalCallbackAjaxResponse(_modal, _status) {
  switch (_status) {
    case 'success':
      $(_modal).find('.header-callback__content').addClass('_disabled');
      $(_modal).find('.header-callback-success').removeClass('_disabled');
      if ($(_modal).find('form ._preloader').length > 0) {
        $(_modal).find('form ._preloader').removeClass('_show');
      }
      var _timeout = setTimeout(function () {
        $(_modal).find('._btn-close').click();
        // $(_modal).find('.header-callback__content').removeClass('_disabled');
        // $(_modal).find('.header-callback-success').addClass('_disabled');
      }, 3000);
      $(_modal).find('.header-callback__btn-close').bind('click.timeout', function () {
        clearTimeout(_timeout);
        $(_modal).find('.header-callback__content').removeClass('_disabled');
        $(_modal).find('.header-callback-success').addClass('_disabled');
      });
      break;
    case 'fail':
      $(_modal).find('.header-callback__content').addClass('_disabled');
      $(_modal).find('.header-callback-fail').removeClass('_disabled');
      if ($(_modal).find('form ._preloader').length > 0) {
        $(_modal).find('form ._preloader').removeClass('_show');
      }
      var _timeout = setTimeout(function () {
        $(_modal).find('.header-callback__content').removeClass('_disabled');
        $(_modal).find('.header-callback-fail').addClass('_disabled');
      }, 3000);
      $(_modal).find('.header-callback__btn-close').bind('click.timeout', function () {
        clearTimeout(_timeout);
        $(_modal).find('.header-callback__content').removeClass('_disabled');
        $(_modal).find('.header-callback-fail').addClass('_disabled');
      });
      break;
    case 'reset':
      $(_modal).find('.header-callback__content').removeClass('_disabled');
      $(_modal).find('.header-callback-success').addClass('_disabled');
      $(_modal).find('.header-callback-fail').addClass('_disabled');
      break;
  }
}

//=== HEADER ACTIVE LINK ===//

$(document).ready(() => {
  const _headerLinks = $('.header-nav-list__link');
  const _currentURL = window.location.pathname.replace(/^[\/]/, '');

  for (let i = 0; i < _headerLinks.length; i++) {
    if ($(_headerLinks[i]).attr('href') === _currentURL) {
      $(_headerLinks[i]).addClass('_current');
      break;
    }
  }
});


// //=== HEADER delete LINK ===//
// const $nav = $('.header-nav');
// var $btn = $('.header-nav-list button');
// var $hlinks = $('.header-nav-list.hidden-links');
// var $placeHolderWidth = $('.header__btn-nav-modal').width() + $('.header__link-logo').width() + $('.header-wrap').width() + $('.header-contacts').width() + $('.header__btn-callback').width();
// var $vlinks = $('.header-nav-list');

// var navItemsObj = $('.header-nav-list__item'); 
// console.log(navItemsObj, "navItems");
// var navItems = [];
// var breaks = [];
// var a = [];

// const disp = (item) => {
//   console.log(item.length)
//   for ( var i = 0; i < item.length; i++ ) {
//     a.push( item[ i ] );
//     console.log(a);
//   }  
// };

// disp(navItemsObj);


// function updateNav() {

//   var headerWidhth = $('.header').width();
//   var displayWidth = document.documentElement.scrollWidth;
//   var availableSpace = $nav.width();
//   // var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

//   console.log(availableSpace);
//   console.log($vlinks.width());
//   console.log(headerWidhth);
//   console.log(displayWidth);

//   console.log($vlinks.children().last());

//   // The visible list is overflowing the nav
//   if (headerWidhth < displayWidth) {    

//     // Record the width of the list
//     breaks.push($vlinks.width());
//     $vlinks.children()[ breaks.length ].addClass('qs_hidden');

//     console.log(a)
//     // Move item to the hidden list
//     console.log($vlinks.children().last());
//     $vlinks.children().last().prependTo($hlinks);
//     $vlinks.children().last().addClass('qs_hidden');
//     $vlinks.children().last().removeClass('header-nav-list__item');


//     // The visible list is not overflowing
//   } else {

//     // There is space for another item in the nav
//     if (availableSpace > breaks[breaks.length - 1]) {

//       // Move the item to the visible list
//       $hlinks.children().first().appendTo($vlinks);
//       breaks.pop();
//     }
//   }

//   // Recur if the visible list is still overflowing the nav
//   if ($vlinks.width() > displayWidth) {
//     updateNav();    
//   }
// }

// // Window listeners

// $(window).resize(function () {
//   updateNav();  
// });

// updateNav();









var $btn = $('.header-nav-list button');
var $hlinks = $('.header-nav-list.hidden-links');
var $placeHolderWidth = $('.header__btn-nav-modal').width() + $('.header__link-logo').width() + $('.header-wrap').width() + $('.header-contacts').width() + $('.header__btn-callback').width();
var $vlinks = $('.header-nav-list');



// var navItemsObj = $('.header-nav-list__item'); 
// console.log(navItemsObj, "navItems");
// var navItems = [];
// var breaks = [];
// var a = [];

// const disp = (item) => {
//   console.log(item.length)
//   for ( var i = 0; i < item.length; i++ ) {
//     a.push( item[ i ] );
//     console.log(a);
//   }  
// };

// disp(navItemsObj);
var displayWidth = document.documentElement.scrollWidth;

const $nav = $('.header-nav');


function updateNav() {

  var headerWidhth = $('.header').width();
  var availableSpace = $nav.width();

  console.log(availableSpace);
  console.log($vlinks.width());
  console.log(headerWidhth);
  console.log(displayWidth);
  console.log($vlinks.children().last());
  console.log($vlinks.children())

if (headerWidhth < displayWidth) {
  
  // $vlinks.children().each(function (index, element) {
  //   // index (число) - текущий индекс итерации (цикла)
  //     // данное значение является числом
  //     // начинается отсчёт с 0 и заканчивается количеству элементов в текущем наборе минус 1
  //   // element - содержит DOM-ссылку на текущий элемент
  //   // if (headerWidhth <= displayWidth) {
  //   //   break;
  //   // }
  //   // console.log('Индекс элемента div: ' + index + '; id элемента = ' + $(element).html()); 
  //   if (!$(element).hasClass('qs_hidden')) {
      
  //     $(element).addClass('qs_hidden');
      
  //   }
  //   console.log($(element));
    
  // });
  

  for (var i = 0; i <= $vlinks.children().length-1; i++) {
    console.log($vlinks.children()[i], "здесь цикл фор"); //выведет 1, 2, 3, 4, 5
  }


//     //если размер хедера больше размера 
//     $vlinks.children().forEach(element => {
//       console.log(element);
//     });
  }
}

// // Recur if the visible list is still overflowing the nav
// if ($vlinks.width() > displayWidth) {
//   updateNav();
// }


// Window listeners

$(window).resize(function () {
  updateNav();
});

updateNav();
console.log("123123")
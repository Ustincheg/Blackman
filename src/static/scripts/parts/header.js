//=== MENU ===//

$(document).ready(function () {
  var _ModalMenu = ModalWindows($('.header-menu')[0], $('.header__btn-nav-modal'));
  var _btnMenu = $('.header__btn-nav-modal');
  var _menu = $('.header-menu');

  $(_btnMenu).hover(function () {
    $(_btnMenu).addClass('_hover');
  }, function () {
    $(_btnMenu).removeClass('_hover');
  });
})

// $(document).ready(function () {
//   var _btnMenu = $('.header__btn-nav-modal');
//   var _menu = $('.header-menu');
//   var _btnClose = $(_menu).find('._btn-close');

//   $(_menu).fadeOut(0);

//   $(_btnMenu).hover(function () {
//     $(_btnMenu).addClass('_hover');
//   }, function () {
//     $(_btnMenu).removeClass('_hover');
//   });

//   $(_menu).on('mouseover', function () {
//     $(_btnMenu).addClass('_hover');
//   });

//   $(_btnMenu).on('click', function () {    
//     $(_menu).fadeIn(250);
//     _btnClose.focus();
//   });

//   $(_btnClose).on('click', function () {
//     $(_menu).fadeOut(250, function () {
//       setTimeout(function () {
//         if (!$(_btnMenu).is(':hover')) {
//           $(_btnMenu).removeClass('_hover');
//         }
//       }, 50);
//     }); 
//     _btnMenu.focus();
//   })

//   $(document).keyup(function (_evt) {
//     if (_evt.originalEvent.keyCode === 27 && $(_menu).css('display') !== 'none') {
//       $(_menu).fadeOut(250, function () {
//         setTimeout(function () {
//           if (!$(_btnMenu).is(':hover')) {
//             $(_btnMenu).removeClass('_hover');
//           }
//         }, 50);
//       }); 
//     }
//   })
// })

//=== CALLBACK ===//

$(document).ready(function () {
  var _ModalCallback = ModalWindows($('.header-callback')[0], $('.header__btn-callback'));

  // var _btnCallback = $('.header__btn-callback');
  // var _callback = $('.header-callback');
  // var _btnClose = $('.header-callback__btn-close');

  // $(_callback).fadeOut(0);

  // $(_btnCallback).hover(function () {
  //   $(_btnCallback).addClass('_hover');
  // }, function () {
  //   $(_btnCallback).removeClass('_hover');
  // });

  // $(_callback).on('mouseover', function () {
  //   $(_btnCallback).addClass('_hover');
  // });

  // $(_btnCallback).on('click', function () {    
  //   $(_callback).fadeIn(250);
  //   _btnClose.focus();
  // });

  // $(_btnClose).on('click', function () {
  //   $(_callback).fadeOut(250); 
  //   _btnCallback.focus();
  // })

  // $(document).keyup(function (_evt) {
  //   if (_evt.originalEvent.keyCode === 27 && $(_callback).css('display') !== 'none') {
  //     $(_callback).fadeOut(250); 
  //   }
  // })
})

//=== SEARCH ===//

$(document).ready(function () {
  var _ModalSearch = ModalWindows($('.header-search')[0], $('.header__search'));

  // var _btnSearch = $('.header__search');
  // var _search = $('.header-search');
  // var _btnClose = $('.header-search__btn-close');

  // $(_search).fadeOut(0);

  // $(_btnSearch).hover(function () {
  //   $(_btnSearch).addClass('_hover');
  // }, function () {
  //   $(_btnSearch).removeClass('_hover');
  // });

  // $(_search).on('mouseover', function () {
  //   $(_btnSearch).addClass('_hover');
  // });

  // $(_btnSearch).on('click', function () {    
  //   $(_search).fadeIn(250);
  //   _btnClose.focus();
  // });

  // $(_btnClose).on('click', function () {
  //   $(_search).fadeOut(250); 
  //   _btnSearch.focus();
  // })

  // $(document).keyup(function (_evt) {
  //   if (_evt.originalEvent.keyCode === 27 && $(_search).css('display') !== 'none') {
  //     $(_search).fadeOut(250); 
  //   }
  // })
})

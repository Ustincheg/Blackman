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

var $btn = $('.header-nav-list button');
var $hlinks = $('.header-nav-list.hidden-links');
var $placeHolderWidth = $('.header__btn-nav-modal').width() + $('.header__link-logo').width() + $('.header-wrap').width() + $('.header-contacts').width() + $('.header__btn-callback').width();
var $vlinks = $('.header-nav-list');
var displayWidth = document.documentElement.scrollWidth;
const $nav = $('.header-nav');

function updateNav() {

  var headerWidhth = $('.header').width();

  // console.log($vlinks.width());
  // console.log(headerWidhth);
  // console.log(displayWidth);  
  // console.log(typeof($vlinks.children()))

  if (headerWidhth < displayWidth) {

    let iRevert = $vlinks.children().length - 1;
    // console.log(iRevert, 'iRevert');


    for (var i = 0; i <= $vlinks.children().length; i++) {
      // console.log("Ширина хедера",$('.header').width())
      // console.log("Ширина экрана", document.documentElement.scrollWidth)
      // console.log(i, "это I");
      const arr = $vlinks.children();

      let item = $(arr[arr.length - i]);
      if (!item.hasClass('qs_hidden')) {
        $(item).addClass('qs_hidden');
        // console.log(item);
      }
      
      if ($('.header').width() >= document.documentElement.scrollWidth) {
        // console.log('брейк тру');
        break;
      }
    }
  }
}

// Window listeners

$(window).resize(function () {
  updateNav();
});

updateNav();

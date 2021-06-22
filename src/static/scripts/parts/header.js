//=== MODAL REQUEST AJAX RESPONSE ===//

function ModalCallbackAjaxResponse(_modal, _status) {
  switch (_status) {
    case 'success':
      $(_modal).find('.header-callback__content').addClass('_disabled');
      $(_modal).find('.header-callback-success').removeClass('_disabled');
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
})
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
  }
}

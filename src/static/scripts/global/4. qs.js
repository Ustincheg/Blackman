$(document).ready(function () {
  if ($('.qs_btn-dropdown').length > 0) {
    var _qsBtnDropdown = $('.qs_btn-dropdown');
    var _animationTime = 400;

    $(_qsBtnDropdown).each(function (_index) {
      $(this).find('._content').slideUp(0);
      $(this).click(function () {
        if ($(this).hasClass('_opened')) {
          $(this).removeClass('_opened');
          $(this).find('._content').slideUp(_animationTime);
        } else {
          $(this).addClass('_opened');
          $(this).find('._content').slideDown(_animationTime);
        }
      });
    })
  }
})
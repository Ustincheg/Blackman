$(document).ready(() => {
  var _inputVacancy = $('.header-callback__vacancy')[0];
  var _linkVacancyArr = $('a[data-vacancy]');

  _linkVacancyArr.each((_index, _elem) => {
    $(_elem).click(() => {
      _inputVacancy.value = $(_elem).attr('data-vacancy');
    })
  })
})
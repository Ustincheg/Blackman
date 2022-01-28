$(document).ready(() => {
  var _inputVacancy = $('.header-callback__vacancy')[0];
  var _hiddenInputVacancy = $('.header-callback-form__career_objective')[0];
  var _linkVacancyArr = $('a[data-vacancy]');

  _linkVacancyArr.each((_index, _elem) => {
    $(_elem).click(() => {
      _inputVacancy.value = $(_elem).attr('data-vacancy');
      _hiddenInputVacancy.value = $(_elem).attr('data-vacancy');
      console.log(_hiddenInputVacancy);
    })
  })
})
$(document).ready(function () {
  if ($('.about-history-slider').length > 0 && $('.about-history-subslider').length > 0) {
    var _sliderSub = new Swiper('.about-history-subslider', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    });
    var _sliderMain = new Swiper('.about-history-slider', {
      slidesPerView: 1,
      spaceBetween: 100,
      allowTouchMove: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      thumbs: {
        swiper: _sliderSub
      }
    });
  }
})
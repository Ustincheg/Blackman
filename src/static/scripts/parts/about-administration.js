$(document).ready(function () {
  const _aboutAdministrationSlider = new Swiper('.about-administration-slider', {
    direction: 'horizontal',
    loop: false,
    scrollbar: {
      el: '.about-administration-slider__scrollbar'
    },
    navigation: {
      prevEl: '.about-administration-slider__prev',
      nextEl: '.about-administration-slider__next'
    },
    spaceBetween: 20,
    slidesPerView: 'auto'
  })

  function ScrollbarFix(_sliderContainer, _slideArr, _controlsWrap) {
    if (_slideArr.length > 0) {
      let _contentWidth = 0;
      
      for (let i = 0; i < _slideArr.length; i++) {
        if (i < _slideArr.length - 1) {
          _contentWidth += parseInt($(_slideArr[i]).css('width')) + parseInt($(_slideArr[i]).css('margin-right'));
        } else {
          _contentWidth += parseInt($(_slideArr[i]).css('width'));
        }
      }

      if ($(_sliderContainer).width() >= _contentWidth) {
        $(_controlsWrap).addClass('_disabled');
      } else {
        $(_controlsWrap).removeClass('_disabled');
      }
    }
  }

  ScrollbarFix($('.about-administration-slider'), $('.about-administration-slider__slide'), $('.about-administration-slider').find('._scrollbar'));

  $(window).resize(function() {
    ScrollbarFix($('.about-administration-slider'), $('.about-administration-slider__slide'), $('.about-administration-slider').find('._scrollbar'));
  })
});

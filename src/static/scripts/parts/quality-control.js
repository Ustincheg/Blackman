$(document).ready(function () {
  const _qualityControlCertificates = new Swiper('.quality-control-slider', {
    direction: 'horizontal',
    loop: false,
    scrollbar: {
      el: '.quality-control-slider__scrollbar'
    },
    navigation: {
      prevEl: '.quality-control-slider__prev',
      nextEl: '.quality-control-slider__next'
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

  ScrollbarFix($('.quality-control-slider'), $('.quality-control-slider__slide'), $('.quality-control-slider').find('._scrollbar'));

  $(window).resize(function() {
    ScrollbarFix($('.quality-control-slider'), $('.quality-control-slider__slide'), $('.quality-control-slider').find('._scrollbar'));
  })
});
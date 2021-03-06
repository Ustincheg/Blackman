$(document).ready(function () {
  const _shortProductsSlider = new Swiper('.short-products-slider', {
    direction: 'horizontal',
    loop: false,
    scrollbar: {
      el: '.short-products-slider__scrollbar'
    },
    navigation: {
      prevEl: '.short-products-slider__prev',
      nextEl: '.short-products-slider__next'
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

  ScrollbarFix($('.short-products-slider'), $('.short-products-slider__slide'), $('.short-products-slider').find('._scrollbar'));

  $(window).resize(function() {
    ScrollbarFix($('.short-products-slider'), $('.short-products-slider__slide'), $('.short-products-slider').find('._scrollbar'));
  })
});

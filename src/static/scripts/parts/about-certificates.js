$(document).ready(function () {
  const _aboutCertificates = new Swiper('.about-certificates-slider', {
    direction: 'horizontal',
    loop: false,
    scrollbar: {
      el: '.about-certificates-slider__scrollbar'
    },
    navigation: {
      prevEl: '.about-certificates-slider__prev',
      nextEl: '.about-certificates-slider__next'
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

  ScrollbarFix($('.about-certificates-slider'), $('.about-certificates-slider__slide'), $('.about-certificates-slider').find('._scrollbar'));

  $(window).resize(function() {
    ScrollbarFix($('.about-certificates-slider'), $('.about-certificates-slider__slide'), $('.about-certificates-slider').find('._scrollbar'));
  })
})
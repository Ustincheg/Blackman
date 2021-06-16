//=== DEVICE DETECTION ===//

function isMobile() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true; 
  }
  return false;
}

//=== INPUT PLACEHOLDER ANIMATION ===//

$(document).ready(function () {
  var _qsArr = $('.qs_input');

  for (let i = 0; i < _qsArr.length; i++) {
    $(_qsArr[i]).find('input, textarea').on('focus', function () {
      $(_qsArr[i]).find('input, textarea').addClass('_upper');
    })

    $(_qsArr[i]).find('input, textarea').on('blur', function () {
      if ($(_qsArr[i]).find('input, textarea').val() === '') {
        $(_qsArr[i]).find('input, textarea').removeClass('_upper');
      }
    })
  }
})

//=== ASIDE NAV SWIPER ===//

$(document).ready(function () {
  if ($('.aside-nav').length > 0) {
    var _options = {
      init: false,
      direction: 'horizontal',
      loop: false,
      spaceBetween: 30,
      slidesPerView: 'auto',
    }
    var _asideNav = new Swiper('.aside-nav', _options);
    var _currentSize;

    _asideNav.init();

    function SwiperAdaptive() {
      if (window.innerWidth > 850) {
        if (_currentSize !== 'large') {
          _currentSize = 'large';
          _asideNav.destroy();
          _asudeNav = null;
        }
      } else {
        if (_currentSize !== 'small') {
          _currentSize = 'small';
          _asideNav = new Swiper('.aside-nav', _options);
          _asideNav.init();
        }
      }
    }

    SwiperAdaptive();
    $(window).resize(SwiperAdaptive);
  }
})

//=== CALL MODAL REQUEST ===//

// $(document).ready(function () {
//   ModalWindows($('.header-callback')[0], $('.qs_consultation-and-next ._consultation'));
// })

//=== ANCHOR SCROLL ===//

$(document).ready(function () {
  const smoothLinks = document.querySelectorAll('a[href^="#"].aside-nav-list__link');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');        
      document.querySelector('a[href^="#"].aside-nav-list__link._current')
        .classList.remove('_current');

      smoothLink.classList.add('_current');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  if (!$('.body').hasClass('page-home') && $('.aside').length > 0) {
    var _asideLinks = $('.aside-nav-list__link[href^="#"]');
    var _main = $('.main');
    var _contentWrapper = $('.content-wrapper');
    var _anchorArr = [];

    _asideLinks.each((_index, _elem) => _anchorArr.push({
      elem: _elem,
      value: $(_elem).attr('href').replace(/#/, '') 
    }));

    _asideLinks[0].addClass('current');

    function CurrentValue(_id) {
      _anchorArr.forEach(_elem => {
        if (_elem.value === _id) {
          $(_elem.elem).addClass('_current');
        } else {
          $(_elem.elem).removeClass('_current');
        }
      })
    }

    function Anchor() {
      let _scroll = _contentWrapper[0].offsetWidth - _contentWrapper[0].clientWidth;
      let _elemIntoView = document.elementFromPoint(window.screen.width - (_scroll + 101), window.screen.height / 2);
      if ($('body').hasClass('page-projects')) {
        if ($(_elemIntoView).is('li[id]')) {
          CurrentValue($(_elemIntoView).attr('id'));
        } else if ($(_elemIntoView).parents('li[id]').length > 0) {
          CurrentValue($(_elemIntoView).parents('li[id]').attr('id'));
        }
      } else {
        if ($(_elemIntoView).is('section[id]')) {
          CurrentValue($(_elemIntoView).attr('id'));
        } else if ($(_elemIntoView).parents('section[id]').length > 0) {
          CurrentValue($(_elemIntoView).parents('section[id]').attr('id'));
        }
      }
    }

    _contentWrapper.on('scroll', Anchor);
  }
})

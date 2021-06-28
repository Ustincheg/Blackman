//=== DEVICE DETECTION ===//

function isMobile() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true; 
  }
  return false;
}

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

//=== TELEPHONE LINKS ===//

$(document).ready(() => {
  var _linksTel = $('a[href^="tel:"]');
  _linksTel.each((_index, _elem) => {
    $(_elem).attr({'href': 'tel:' + $(_elem).text().replace(/[^\+*\d]/gim, '')});
  });
});

//=== ANCHOR SCROLL ===//

$(document).ready(function () {
  const smoothLinks = document.querySelectorAll('a[href^="#"].aside-nav-list__link');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');       
      console.log(id); 
      document.querySelector('a[href^="#"].aside-nav-list__link._current')
        .classList.remove('_current');

      smoothLink.classList.add('_current');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  if (!$('body').hasClass('page-home') && $('.aside').length > 0) {
    const _asideLinks = $('.aside-nav-list__link[href^="#"]');
    const _main = $('.main');
    const _contentWrapper = $('.content-wrapper');
    const _anchorArr = [];

    _asideLinks.each((_index, _elem) => _anchorArr.push({
      elem: _elem,
      value: $(_elem).attr('href').replace(/#/, '') 
    }));

    $(_asideLinks[0]).addClass('_current');

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
      let _elemIntoView = document.elementFromPoint(window.screen.width - (_scroll + parseInt($($('main section')[0]).css('padding-right')) + 10), 200);
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
});

//=== LIGHTGALLERY ===//

$(document).ready(() => {
  const _lg = $('.js_lightgallery');

  for (let i = 0; i < _lg.length; i++) {
    lightGallery(_lg[i]);
  }

  // Use class "js_lightgallery" for "swiper-wrapper" class block of slider.
});

$(document).ready(() => {
  const _body = $('body');
  const _textareaArr = $('textarea');
  const _textareaObj = [];

  function Size(_index) {
    if (_index) {
      $(_textareaObj[_index].pseudo).css({'width': $(_textareaArr[_index]).css('width')});
    } else {
      _textareaObj.forEach((_obj, _index) => {
        $(_obj.pseudo).css({'width': $(_textareaArr[_index]).css('width')});
      })
    }
  }

  _textareaArr.each((_index, _elem) => {
    _body.append($('<div class="textarea-fix qs_hidden"></div>'));
    _textareaObj.push({
      elem: _elem,
      pseudo: $('.textarea-fix')[_index]
    }) 
    $(_textareaObj[_index].pseudo).addClass('qs_hidden');
    $(_textareaObj[_index].pseudo).css({'min-height': '30px'});
    $(_textareaObj[_index].pseudo).css({'height': 'auto'});
    $(_textareaObj[_index].pseudo).css({'padding-bottom': '10px'});

    _elem.addEventListener('input', () => {
      $(_textareaObj[_index].pseudo).text(_elem.value);
      Size(_index);
      $(_elem).css({'height': _textareaObj[_index].pseudo.clientHeight});
    })
  })

  $(document).resize(Size);
})

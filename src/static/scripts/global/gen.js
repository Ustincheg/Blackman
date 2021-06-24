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

// $(document).ready(function () {
//   const smoothLinks = document.querySelectorAll('a[href^="#"].aside-nav-list__link');
//   for (let smoothLink of smoothLinks) {
//     smoothLink.addEventListener('click', function (e) {
//       e.preventDefault();
//       const id = smoothLink.getAttribute('href');       
//       console.log(id); 
//       document.querySelector('a[href^="#"].aside-nav-list__link._current')
//         .classList.remove('_current');

//       smoothLink.classList.add('_current');
//       document.querySelector(id).scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     });
//   };

//   if (!$('body').hasClass('page-home') && $('.aside').length > 0) {
//     var _asideLinks = $('.aside-nav-list__link[href^="#"]');
//     var _main = $('.main');
//     var _contentWrapper = $('.content-wrapper');
//     var _anchorArr = [];

//     _asideLinks.each((_index, _elem) => _anchorArr.push({
//       elem: _elem,
//       value: $(_elem).attr('href').replace(/#/, '') 
//     }));

//     $(_asideLinks[0]).addClass('_current');

//     function CurrentValue(_id) {
//       _anchorArr.forEach(_elem => {
//         if (_elem.value === _id) {
//           $(_elem.elem).addClass('_current');
//         } else {
//           $(_elem.elem).removeClass('_current');
//         }
//       })
//     }

//     function Anchor() {
//       let _scroll = _contentWrapper[0].offsetWidth - _contentWrapper[0].clientWidth;
//       let _elemIntoView = document.elementFromPoint(window.screen.width - (_scroll + parseInt($($('main section')[0]).css('padding-right')) + 10), window.screen.height / 4);
//       if ($('body').hasClass('page-projects')) {
//         if ($(_elemIntoView).is('li[id]')) {
//           CurrentValue($(_elemIntoView).attr('id'));
//         } else if ($(_elemIntoView).parents('li[id]').length > 0) {
//           CurrentValue($(_elemIntoView).parents('li[id]').attr('id'));
//         }
//       } else {
//         if ($(_elemIntoView).is('section[id]')) {
//           CurrentValue($(_elemIntoView).attr('id'));
//         } else if ($(_elemIntoView).parents('section[id]').length > 0) {
//           CurrentValue($(_elemIntoView).parents('section[id]').attr('id'));
//         }
//       }
//     }

//     _contentWrapper.on('scroll', Anchor);
//     //NEW VERSION
//   }
// });

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
      let _elemIntoView = document.elementFromPoint(window.screen.width - (_scroll + parseInt($($('main section')[0]).css('padding-right')) + 10), 100);
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

    _main.on('scroll', Anchor);
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

//=== FILE LOAD PROGRESS ===//

// let x = {
//   a1: 0,
//   a2: 1
// }

// let proxied = new Proxy(x, {
//   set() {
    
//   }
// });

// $(document).ready(() => {
//   const _inputFile = $('.js_input-file-progress')[0];
//   console.log(_inputFile);
//   if (_inputFile.length > 0) {
//     let _file = new FileReader();
//     let _proxy = new Proxy(_file, {
//       set(_target, _phrase) {
//         if (_phrase in _target) {
//           console.log(_target);
//           console.log(_phrase);
//         }
//       }
//     });

//     _inputFile.change(() => {
//       _file.readAsArrayBuffer(_inputFile.files[0]);

//       _file.addEventListener('loadstart', () => { console.log('loadstart'); });
//       _file.addEventListener('progress', () => { console.log('progress'); });
//       _file.addEventListener('loadend', () => { console.log('loadend'); });
//     });

//     _file.addEventListener('loadstart', () => { console.log('loadstart'); });
//     _file.addEventListener('progress', () => { console.log('progress'); });
//     _file.addEventListener('loadend', () => { console.log('loadend'); });
//   }
// })

// function keyCode(_evt) {
//   console.log(_evt);
//   return false;
<<<<<<< HEAD
// }
=======
// }

//=== TEXTAREA AUTO SIZE ===//

// $(document).ready(() => {
//   const _textareaArr = $('textarea');
//   let _firefoxFlag = false;
//   let _value = 0;

//   _textareaArr.each((_index, _elem) => {
//     _elem.addEventListener('input', () => {
//       console.log(_firefoxFlag);
//       if (/Firefox/.test(navigator.userAgent)) {
//         if (_value.length < _elem.value.length) {
//           if (_elem.scrollHeight <= 30) {
//             $(_elem).css({'height': '30px'});
//             _firefoxFlag = false;
//           } else if (_firefoxFlag === false) {
//             $(_elem).css({'height': (_elem.scrollHeight + 10) + 'px'});
//             _firefoxFlag = true;
//           } else if (_firefoxFlag === true) {
//             if (parseInt($(_elem).css('height')) - _elem.scrollHeight < 0) {
//               $(_elem).css({'height': (_elem.scrollHeight + 10) + 'px'});
//             }
//           }
//         } else if (_value.length > _elem.value.length) {
          
//         }
//         _value = _elem.value;
//       }
//       // } else {
//       //   if (parseInt($(_elem).css('height')) - _elem.scrollHeight !== 1 || parseInt($(_elem).css('height')) - _elem.scrollHeight !== -1) {
//       //     $(_elem).css({'height': _elem.scrollHeight + 'px'});
//       //   }
//       // }
//     });
//   })
// })

// $(document).ready(function() {
//   if ($.browser.mozilla) {
//        $('textarea[rows]').each(function(i, el) {
//            if (!$(el).data('ffRowsFixed')) {
//                var rows = parseInt($(el).attr('rows'));
//                if (rows > 1) {
//                    $(el).attr('rows', (rows - 1));
//                }
//                $(el).data('ffRowsFixed', true);
//            }
//        });
//   }
// });

// $(document).ready(() => {
//   console.log($('textarea')[0].value.split('\n').length);

//   const _textareaArr = $('textarea');
//   let _firefoxFlag = false;
//   let _value = 0;

//   _textareaArr.each((_index, _elem) => {
//     _elem.addEventListener('input', () => {
//       console.log(_elem.value.split('\s\n').length);
//       //_elem.value.split('\n').length;
//     })
//   })
// })
>>>>>>> 8b3710a49b69cdbfc1b7b621ac1f5c1c2eeb6237

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

//=== MODAL WINDOWS ===//

// var _ModalObj = {
//   modal: undefined,
//   content: undefined,
//   btnOpen: [],
//   btnClose: [],
//   animationTime: undefined,
//   open() {
//     let _this = this;
//     if (_this.content) {
//       $(_this.modal).slideDown(_this.animationTime, function () {
//         $(_this.content).fadeIn(_this.animationTime);
//         if (_this.btnClose.length > 0) {
//           _this.btnClose[0].focus();
//         }
//         if (_this.btnClose.length > 0) {
//           for (let i = 0; i < _this.btnClose.length; i++) {
//             if ($(_this.btnClose[i]).hasClass('_btn-close')) {
//               $(_this.btnClose[i]).fadeIn(_this.animationTime);
//             }
//           }
//         }
//       });
//     } else {
//       $(_this.modal).slideDown(_this.animationTime, function () {
//         if (_this.btnClose.length > 0) {
//           for (let i = 0; i < _this.btnClose.length; i++) {
//             if ($(_this.btnClose[i]).hasClass('_btn-close')) {
//               $(_this.btnClose[i]).fadeIn(_this.animationTime);
//             }
//           }
//         }
//       });
//     }
//   },
//   close() {
//     let _this = this;
//     if (_this.content) {
//       $(_this.content).fadeOut(_this.animationTime, function () {
//         $(_this.modal).slideUp(_this.animationTime);
//       })
//     }
//     if (_this.btnClose.length > 0) {
//       for (let i = 0; i < _this.btnClose.length; i++) {
//         if ($(_this.btnClose[i]).hasClass('_btn-close')) {
//           $(_this.btnClose[i]).fadeOut(_this.animationTime);
//         }
//       }
//     }
//   }
// };

function ModalWindows(_modal, _btnOpen, _btnClose, _animationTime) {
  // _modalId | HTML element | Modal window.
  // _btnOpen | none / HTML element / array of HTML elements | Modal window open button (button list).
  // _btnClose | none / HTML element / array of HTML elements | Modal window close button (button list).
  // _animationTime | none / int | Animation time.

  //var _current = Object.create(_ModalObj);
  var _current = {
    modal: undefined,
    content: undefined,
    btnOpen: [],
    btnClose: [],
    animationTime: undefined,
    open() {
      let _this = this;
      if (_this.content) {
        $(_this.modal).slideDown(_this.animationTime, function () {
          $(_this.content).fadeIn(_this.animationTime);
          if (_this.btnClose.length > 0) {
            _this.btnClose[0].focus();
          }
          if (_this.btnClose.length > 0) {
            for (let i = 0; i < _this.btnClose.length; i++) {
              if ($(_this.btnClose[i]).hasClass('_btn-close')) {
                $(_this.btnClose[i]).fadeIn(_this.animationTime);
              }
            }
          }
        });
      } else {
        $(_this.modal).slideDown(_this.animationTime, function () {
          if (_this.btnClose.length > 0) {
            for (let i = 0; i < _this.btnClose.length; i++) {
              if ($(_this.btnClose[i]).hasClass('_btn-close')) {
                $(_this.btnClose[i]).fadeIn(_this.animationTime);
              }
            }
          }
        });
      }
    },
    close() {
      let _this = this;
      if (_this.content) {
        $(_this.content).fadeOut(_this.animationTime, function () {
          $(_this.modal).slideUp(_this.animationTime);
        })
      }
      if (_this.btnClose.length > 0) {
        for (let i = 0; i < _this.btnClose.length; i++) {
          if ($(_this.btnClose[i]).hasClass('_btn-close')) {
            $(_this.btnClose[i]).fadeOut(_this.animationTime);
          }
        }
      }
    }
  };

  _current.modal = _modal;
  if (_btnOpen && typeof _btnOpen === 'object') {
    if (!_btnOpen.length) {
      _current.btnOpen.push(_btnOpen);
    } else if (_btnOpen.length > 0) {
      for (let i = 0; i < _btnOpen.length; i++) {
        _current.btnOpen.push(_btnOpen[i]);
      }
    }
  }
  if (_btnClose && typeof _btnOpen === 'object') {
    if (!_btnOpen.length) {
      _current.btnClose.push(_btnClose);
    } else if (_btnClose.length > 0) {
      for (let i = 0; i < _btnClose.length; i++) {
        _current.btnClose.push(_btnClose[i]);
      }
    }
  }
  if ($(_current.modal).find('._btn-close')) {
    _current.btnClose.push($(_current.modal).find('._btn-close')[0]);
    $($(_current.modal).find('._btn-close')[0]).fadeOut(0);
  }

  $(_current.modal).slideUp(0);
  if (_current.btnOpen.length > 0) {
    for (let i = 0; i < _current.btnOpen.length; i++) {
      $(_current.btnOpen[i]).click(function () {
        _current.open();
      })
    }
  }
  if (_current.btnClose.length > 0) {
    for (let i = 0; i < _current.btnClose.length; i++) {
      $(_current.btnClose[i]).click(function () {
        _current.close();
      })
    }
  }
  if ($(_current.modal).find('._content')) {
    _current.content = $(_current.modal).find('._content')[0];
    $(_current.content).fadeOut(0);
  }
  if (_animationTime) {
    _current.animationTime = _animationTime;
  } else {
    _current.animationTime = 350;
  }

  _current.open = function () {
    let _this = this;
    if (_this.content) {
      $(_this.modal).slideDown(_this.animationTime, function () {
        $(_this.content).fadeIn(_this.animationTime);
        if (_this.btnClose.length > 0) {
          _this.btnClose[0].focus();
        }
        if (_this.btnClose.length > 0) {
          for (let i = 0; i < _this.btnClose.length; i++) {
            if ($(_this.btnClose[i]).hasClass('_btn-close')) {
              $(_this.btnClose[i]).fadeIn(_this.animationTime);
            }
          }
        }
      });
    } else {
      $(_this.modal).slideDown(_this.animationTime, function () {
        if (_this.btnClose.length > 0) {
          for (let i = 0; i < _this.btnClose.length; i++) {
            if ($(_this.btnClose[i]).hasClass('_btn-close')) {
              $(_this.btnClose[i]).fadeIn(_this.animationTime);
            }
          }
        }
      });
    }
  }

  _current.close = function () {
    let _this = this;
    if (_this.content) {
      $(_this.content).fadeOut(_this.animationTime, function () {
        $(_this.modal).slideUp(_this.animationTime);
      })
    }
    if (_this.btnClose.length > 0) {
      for (let i = 0; i < _this.btnClose.length; i++) {
        if ($(_this.btnClose[i]).hasClass('_btn-close')) {
          $(_this.btnClose[i]).fadeOut(_this.animationTime);
        }
      }
    }
  }

  return _current;
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

//=== CALL MODAL REQUEST ===//

$(document).ready(function () {
  ModalWindows($('.header-callback')[0], $('.qs_consultation-and-next ._consultation'));
})

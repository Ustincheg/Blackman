"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//=== BTN-DROPDOWN ===//
$(document).ready(function () {
  if ($('.qs_btn-dropdown').length > 0) {
    var _qsBtnDropdown = $('.qs_btn-dropdown');

    var _animationTime = 400;
    $(_qsBtnDropdown).each(function () {
      $(this).find('._content').slideUp(0);
      $(this).click(function () {
        if ($(this).hasClass('_opened')) {
          $(this).removeClass('_opened');
          $(this).find('._content').slideUp(_animationTime);
        } else {
          $(this).addClass('_opened');
          $(this).find('._content').slideDown(_animationTime);
        }
      });
    });
  }
}); //=== MODAL ===//

var Modal = function Modal(_selectorModal, _animationTime) {
  var _this = this;

  try {
    if (_typeof(_selectorModal) !== 'object' || !_selectorModal.nodeName) {
      throw new TypeError('First argument is not a DOM element. Expected: DOM element.');
    }

    this.inside = {};
    this.inside.root = _selectorModal;
    this.inside.content = $(_selectorModal).find('._content')[0];
    this.inside.upside = $(_selectorModal).find('._upside')[0] || undefined;
    this.inside.btnOpen = [];

    if ($(_selectorModal).find('._btn-close')[0]) {
      this.inside.btnClose = [$(_selectorModal).find('._btn-close')[0]];
    } else {
      this.inside.btnClose = [null];
    }

    this.settings = {};

    if (_animationTime) {
      this.settings.animationTime = _animationTime;
    } else {
      this.settings.animationTime = 400;
    }

    this.action = {};

    this.action.open = function () {
      if (_this.inside.content) {
        $(_this.inside.root).slideDown(_this.settings.animationTime, function () {
          if (_this.inside.content) {
            $(_this.inside.content).fadeIn(_this.settings.animationTime);
          }

          if (_this.inside.upside) {
            $(_this.inside.upside).fadeIn(_this.settings.animationTime);
          } else if (_this.inside.btnClose[0]) {
            $(_this.inside.btnClose[0]).fadeIn(_this.settings.animationTime);

            _this.inside.btnClose[0].focus();
          }
        });
      }
    };

    this.action.close = function (_force) {
      var _setAnimationTime;

      if (_force === 'force') {
        _setAnimationTime = 0;
      } else {
        _setAnimationTime = _this.settings.animationTime;
      }

      if (_this.inside.upside) {
        $(_this.inside.upside).fadeOut(_setAnimationTime);
      } else if (_this.inside.btnClose[0]) {
        $(_this.inside.btnClose[0]).fadeOut(_setAnimationTime);
      }

      if (_this.inside.content) {
        $(_this.inside.content).fadeOut(_setAnimationTime, function () {
          $(_this.inside.root).slideUp(_setAnimationTime);
        });
      }
    };

    $(this.inside.btnClose).click(function () {
      _this.action.close();

      if ($(_this.inside.root).find('input').length > 0) {
        var _inputArr = $(_this.inside.root).find('input:not([type="hidden"]), textarea');

        _inputArr.each(function (_index, _elem) {
          $(_elem).removeClass('_incorrect');

          if ($(_elem).is(':not([type="radio"]):not([type="checkbox"])')) {
            $(_elem).val('');
            $(_elem).blur();
          }
        }); // $(this.inside.root).find('input')

      }

      if ($(_this.inside.root).find('.form-tip').length > 0) {
        var _tips = $(_this.inside.root).find('.form-tip');

        _tips.each(function (_index, _tip) {
          $(_tip).find('span').text('');
          $(_tip).css({
            'display': 'none'
          });
        });
      }
    });
    $(this.inside.btnClose).each(function (_index, _elem) {
      $(_elem).click(_this.action.close);
    });
    $(this.inside.root).css({
      'opacity': '1'
    });
    this.action.close('force');
    $(window).keyup(function (_evt) {
      if (_evt.originalEvent.code === 'Escape') {
        _this.action.close();
      }
    });

    this.addBtnOpen = function (_btns) {
      if (_typeof(_btns) === 'object' && _btns instanceof Array) {
        for (var i = 0; i < _btns.length; i++) {
          if (_typeof(_btns[i]) === 'object' && _btns[i].nodeName) {
            _this.inside.btnOpen.push(_btns[i]);
          } else if (typeof _btns[i] === 'undefined') {
            continue;
          } else {
            throw new TypeError('Unexpected type of argument. Expected: DOM element or array of DOM elements');
          }
        }
      } else if (_typeof(_btns) === 'object' && _btns.nodeName) {
        _this.inside.btnOpen.push(_btns);
      } else if (typeof _btns === 'undefined') {
        return false;
      } else {
        throw new TypeError('Unexpected type of argument. Expected: DOM element or array of DOM elements');
      }

      for (var _i = 0; _i < _this.inside.btnOpen.length; _i++) {
        $(_this.inside.btnOpen[_i]).click(function () {
          _this.action.open();

          if ($(_this.inside.root).find('input').length > 0) {
            var _inputArr = $(_this.inside.root).find('input, textarea');

            _inputArr.each(function (_index, _elem) {
              if (!$(_elem).is('input[type="hidden"], input[type="checkbox"], input[type="radio"]')) {
                _elem.value = '';
              }
            });
          }

          if ($('.textarea-fix').length > 0 && $(_this.inside.root).find('textarea').length > 0) {
            $(_this.inside.root).find('textarea').css({
              'height': '30px'
            });
            $('.textarea-fix').text('');
          }

          if ($(_this.inside.root).find('form ._preloader').length > 0) {
            $(_this.inside.root).find('form ._preloader').removeClass('_show');
          }
        });
      }
    };
  } catch (_err) {
    console.log(_err);
  }
};

var qsModalArr = [];
$(document).ready(function () {
  $('.qs_modal').each(function (_index, _elem) {
    qsModalArr.push({
      elem: _elem,
      index: _index,
      obj: new Modal(_elem)
    });
  });

  var _loop = function _loop(i) {
    switch (qsModalArr[i].elem) {
      case $('.header-menu')[0]:
        qsModalArr[i].obj.addBtnOpen($('.header__btn-nav-modal')[0]);
        break;

      case $('.header-callback')[0]:
        qsModalArr[i].obj.addBtnOpen($('.header__btn-callback')[0]);
        qsModalArr[i].obj.addBtnOpen($('.qs_consultation-and-next ._consultation')[0]);
        ModalCallbackAjaxResponse(qsModalArr[i].elem, 'reset');
        break;

      case $('.header-search')[0]:
        qsModalArr[i].obj.addBtnOpen($('.header__search')[0]);
        qsModalArr[i].obj.addBtnOpen($('.header-menu-upside-left__search')[0]);
        break;

      case $('.header-callback-vacancy')[0]:
        $('.carrier-list__vacancy').each(function (_index, _elem) {
          qsModalArr[i].obj.addBtnOpen(_elem);
          ModalCallbackAjaxResponse(qsModalArr[i].elem, 'reset');
        });
        break;
    }
  };

  for (var i = 0; i < qsModalArr.length; i++) {
    _loop(i);
  }
}); //=== INPUT PLACEHOLDER ANIMATION ===//

$(document).ready(function () {
  var _qsArr = $('.qs_input');

  var _loop2 = function _loop2(i) {
    $(_qsArr[i]).find('input, textarea').on('focus', function () {
      $(_qsArr[i]).find('input, textarea').addClass('_upper');
    });
    $(_qsArr[i]).find('input, textarea').on('blur', function () {
      if ($(_qsArr[i]).find('input, textarea').val() === '') {
        $(_qsArr[i]).find('input, textarea').removeClass('_upper');
      }
    });
  };

  for (var i = 0; i < _qsArr.length; i++) {
    _loop2(i);
  }
});
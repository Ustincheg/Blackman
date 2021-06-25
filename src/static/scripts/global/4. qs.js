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
    })
  }
})

//=== MODAL ===//

const Modal = function (_selectorModal, _animationTime) {
  try {
    if (typeof _selectorModal !== 'object' || !_selectorModal.nodeName) {
      throw new TypeError('First argument is not a DOM element. Expected: DOM element.');
    }
    this.inside = {};
    this.inside.root = _selectorModal;
    this.inside.content = $(_selectorModal).find('._content')[0];
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
    this.action.open = () => {
      if (this.inside.content) {
        $(this.inside.root).slideDown(this.settings.animationTime, () => {
          if (this.inside.content) {
            $(this.inside.content).fadeIn(this.settings.animationTime);
          }
          if (this.inside.btnClose[0]) {
            $(this.inside.btnClose[0]).fadeIn(this.settings.animationTime);
            this.inside.btnClose[0].focus();
          }
        });
      }
    }
    this.action.close = (_force) => {
      let _setAnimationTime;
      if (_force === 'force') {
        _setAnimationTime = 0;
      } else {
        _setAnimationTime = this.settings.animationTime;
      }
      if (this.inside.btnClose[0]) {
        $(this.inside.btnClose[0]).fadeOut(_setAnimationTime);
      }
      if (this.inside.content) {
        $(this.inside.content).fadeOut(_setAnimationTime, () => {
          $(this.inside.root).slideUp(_setAnimationTime);
        });
      }
    }
    $(this.inside.btnClose).click(() => {
      this.action.close();
      if ($(this.inside.root).find('input').length > 0) {
        let _inputArr = $(this.inside.root).find('input:not([type="hidden"]), textarea');
        _inputArr.each((_index, _elem) => {
          $(_elem).removeClass('_incorrect');
          if ($(_elem).is(':not([type="radio"]):not([type="checkbox"])')) {
            $(_elem).val('');
            $(_elem).blur();
          } 
        });
        // $(this.inside.root).find('input')
      }
      if ($(this.inside.root).find('.form-tip').length > 0) {
        let _tips = $(this.inside.root).find('.form-tip');
        _tips.each((_index, _tip) => {
          $(_tip).find('span').text('');
          $(_tip).css({'display': 'none'});
        })
      }
    });
    $(this.inside.btnClose).each((_index, _elem) => {
      $(_elem).click(this.action.close);
    })
    $(this.inside.root).css({'opacity': '1'});
    this.action.close('force');
    $(window).keyup(_evt => {
      if (_evt.originalEvent.code === 'Escape') {
        this.action.close();
      }
    })
    this.addBtnOpen = (_btns) => {
      if (typeof _btns === 'object' && _btns instanceof Array) {
        for (let i = 0; i < _btns.length; i++) {
          if (typeof _btns[i] === 'object' && _btns[i].nodeName) {
            this.inside.btnOpen.push(_btns[i]);
          } else if (typeof _btns[i] === 'undefined') {
            continue;
          } else {
            throw new TypeError('Unexpected type of argument. Expected: DOM element or array of DOM elements');
          }
        }
      } else if (typeof _btns === 'object' && _btns.nodeName) {
        this.inside.btnOpen.push(_btns);
      } else if (typeof _btns === 'undefined') {
        return false;
      } else {
        throw new TypeError('Unexpected type of argument. Expected: DOM element or array of DOM elements');
      }
      for (let i = 0; i < this.inside.btnOpen.length; i++) {
        $(this.inside.btnOpen[i]).click(() => {
          this.action.open();
          if ($(this.inside.root).find('input').length > 0) {
            let _inputArr = $(this.inside.root).find('input, textarea');
            _inputArr.each((_index, _elem) => {
              if (!$(_elem).is('input[type="hidden"], input[type="checkbox"], input[type="radio"]')) {
                _elem.value = '';
              }
            });
          }
          if ($(this.inside.root).find('form ._preloader').length > 0) {
            $(this.inside.root).find('form ._preloader').removeClass('_show');
          }
        });
      }
    }
  } catch (_err) {
    console.log(_err);
  }
}

var qsModalArr = [];
$(document).ready(() => {
  $('.qs_modal').each((_index, _elem) => {
    qsModalArr.push({
      elem: _elem,
      index: _index,
      obj: new Modal(_elem)
    });
  });
  for (let i = 0; i < qsModalArr.length; i++) {
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
        break;
      case $('.header-callback-vacancy')[0]: 
        $('.carrier-list__vacancy').each((_index, _elem) => {
          qsModalArr[i].obj.addBtnOpen(_elem);
          ModalCallbackAjaxResponse(qsModalArr[i].elem, 'reset');
        });
        break;
    }
  }
});

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

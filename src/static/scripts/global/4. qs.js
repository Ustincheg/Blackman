//=== BTN-DROPDOWN ===//

$(document).ready(function () {
  if ($('.qs_btn-dropdown').length > 0) {
    var _qsBtnDropdown = $('.qs_btn-dropdown');
    var _animationTime = 400;

    $(_qsBtnDropdown).each(function (_index) {
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
    $(this.inside.btnClose).click(this.action.close);
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
        $(this.inside.btnOpen[i]).click(this.action.open);
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
        break;
      case $('.header-search')[0]: 
        qsModalArr[i].obj.addBtnOpen($('.header__search')[0]); 
        break;
      case $('.header-callback-vacancy')[0]: 
        $('.carrier-list__vacancy').each((_index, _elem) => {
          qsModalArr[i].obj.addBtnOpen(_elem);
        });
        break;
    }
  }
});

// $('.qs_modal').each(elem => {
//   qsModalArr.push(new Modal.init(elem));
// })

// function ModalWindows(_modal, _btnOpen, _btnClose, _animationTime) {
//   // _modal | HTML element | Modal window.
//   // _btnOpen | none / HTML element / array of HTML elements | Modal window open button (button list).
//   // _btnClose | none / HTML element / array of HTML elements | Modal window close button (button list).
//   // _animationTime | none / int | Animation time.

//   //var _current = Object.create(_ModalObj);
//   var _current = {
//     modal: undefined,
//     content: undefined,
//     btnOpen: [],
//     btnClose: [],
//     animationTime: undefined,
//     open() {
//       let _this = this;
//       if (_this.content) {
//         $(_this.modal).slideDown(_this.animationTime, function () {
//           $(_this.content).fadeIn(_this.animationTime);
//           if (_this.btnClose.length > 0) {
//             _this.btnClose[0].focus();
//           }
//           if (_this.btnClose.length > 0) {
//             for (let i = 0; i < _this.btnClose.length; i++) {
//               if ($(_this.btnClose[i]).hasClass('_btn-close')) {
//                 $(_this.btnClose[i]).fadeIn(_this.animationTime);
//               }
//             }
//           }
//         });
//       } else {
//         $(_this.modal).slideDown(_this.animationTime, function () {
//           if (_this.btnClose.length > 0) {
//             for (let i = 0; i < _this.btnClose.length; i++) {
//               if ($(_this.btnClose[i]).hasClass('_btn-close')) {
//                 $(_this.btnClose[i]).fadeIn(_this.animationTime);
//               }
//             }
//           }
//         });
//       }
//     },
//     close() {
//       let _this = this;
//       if (_this.content) {
//         $(_this.content).fadeOut(_this.animationTime, function () {
//           $(_this.modal).slideUp(_this.animationTime);
//         })
//       }
//       if (_this.btnClose.length > 0) {
//         for (let i = 0; i < _this.btnClose.length; i++) {
//           if ($(_this.btnClose[i]).hasClass('_btn-close')) {
//             $(_this.btnClose[i]).fadeOut(_this.animationTime);
//           }
//         }
//       }
//     }
//   };

//   $(_modal).css({'opacity': '1'});
//   _current.modal = _modal;
//   if (_btnOpen && typeof _btnOpen === 'object') {
//     if (!_btnOpen.length) {
//       _current.btnOpen.push(_btnOpen);
//     } else if (_btnOpen.length > 0) {
//       for (let i = 0; i < _btnOpen.length; i++) {
//         _current.btnOpen.push(_btnOpen[i]);
//       }
//     }
//   }
//   if (_btnClose && typeof _btnOpen === 'object') {
//     if (!_btnOpen.length) {
//       _current.btnClose.push(_btnClose);
//     } else if (_btnClose.length > 0) {
//       for (let i = 0; i < _btnClose.length; i++) {
//         _current.btnClose.push(_btnClose[i]);
//       }
//     }
//   }
//   if ($(_current.modal).find('._btn-close')) {
//     _current.btnClose.push($(_current.modal).find('._btn-close')[0]);
//     $($(_current.modal).find('._btn-close')[0]).fadeOut(0);
//   }

//   $(_current.modal).slideUp(0);
//   if (_current.btnOpen.length > 0) {
//     for (let i = 0; i < _current.btnOpen.length; i++) {
//       $(_current.btnOpen[i]).click(function () {
//         _current.open();
//       })
//     }
//   }
//   if (_current.btnClose.length > 0) {
//     for (let i = 0; i < _current.btnClose.length; i++) {
//       $(_current.btnClose[i]).click(function () {
//         _current.close();
//       })
//     }
//   }
//   if ($(_current.modal).find('._content')) {
//     _current.content = $(_current.modal).find('._content')[0];
//     $(_current.content).fadeOut(0);
//   }
//   if (_animationTime) {
//     _current.animationTime = _animationTime;
//   } else {
//     _current.animationTime = 350;
//   }

//   _current.open = function () {
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
//   }

//   _current.close = function () {
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

//   return _current;
// }
const FormValidation = function (_selectorForm, _options) {
  //  _selectorForm | DOM element | The form.
  //  _options | Object | Options of the form validation.
  //  - EXAMPLE start -
  //  var _form = new FormValidation({{{ 1 }}}, {
  //    {{{ 2 }}}: {
  //      valueCheckAlgorithm: {{{ 3 }}},
  //      valueLength: {{{ 4 }}}
  //    },
  //    acceptance: [
  //      {{{ 5 }}},
  //      {{{ 5 }}}
  //    ]
  //    - OR -
  //    acceptance: {{{ 5 }}}
  //    inputFile: {{{ 6 }}} 
  //  });
  //  - EXAMPLE end -  
  //  {{{ 1 }}} | DOM element | The form's DOM element.
  //  {{{ 2 }}} | Object property | The type of input. Abled values: "inputText", "inputTel", "inputEmail", "textarea", "acceptance", "ignor".
  //  {{{ 3 }}} | RegExp | Regular expression, you want to check with.
  //  {{{ 4 }}} | Number | Maximum size of input value. It creates "maxlength" attribute of "input" in DOM.
  //  {{{ 5 }}} | DOM element, checkbox | The acceptance's input-checkbox.
  //  {{{ 6 }}} | Number | Maximum size of upload file in bites. There is limit for "file" type inputs for only 1 element.
  //
  //  Use property "testMode" in created objects or in constructor to test your validation in front-end and not submit the form.
  //  You can see "test_STATUS-CORRECT" or "test_STATUS-INCORRECT" in form class attribute.

  try {
    if (typeof _selectorForm !== 'object' && !_selectorForm.nodeName) {
      throw new TypeError('Argument is not a DOM element. Expected: DOM element.');
    }
    let _formCorrect = new Event('form-status-correct');
    let _formIncorrect = new Event('form-status-incorrect');
    const Tip = function (_elem) {
      this.wrapper = $(_elem).parents('label')[0];
      this.input = _elem;
      $(this.wrapper).css({'position': 'relative'});
      $(this.wrapper).append($('<div class="form-tip"><span></span></div>'));
      this.tip = $(this.wrapper).find('.form-tip');
      this.desc = _desc => {
        $(this.tip).find('span').text(_desc);
      }
      this.typical = _elem => {
        if ($(_elem).is('input')) {
          switch ($(_elem).attr('type')) {
            case 'text':
              this.desc('Неверно заполнено текстовое поле');
              this.show();
              break;
            case 'tel':
              this.desc('Неверно заполнено поле для телефона. Пример: +79998887766');
              this.show();
              break;
            case 'email':
              this.desc('Неверно заполнено поле для электронной почты. Пример: example@example.com');
              this.show();
              break;
          }         
        } else if ($(_elem).is('textarea')) {
          this.desc('Неверно заполнено текстовое поле');
          this.show();
        }
      }
      this.show = () => {
        $(this.tip).css({'display': 'block'});
      }
      this.hide = () => {
        $(this.tip).css({'display': 'none'});
      }
      return this;
    }
    this.inside = {};
    this.inside.form = _selectorForm;
    this.inside.ignor = [];
    this.inside.inputText = {};
    this.inside.inputText.elems = [];
    this.inside.inputText.valueCheckAlgorithm = undefined;
    this.inside.inputText.valueLength = undefined;
    this.inside.inputText.tip = [];
    this.inside.inputTel = {};
    this.inside.inputTel.elems = [];
    this.inside.inputTel.valueCheckAlgorithm = undefined;
    this.inside.inputTel.valueLength = undefined;
    this.inside.inputTel.tip = [];
    this.inside.inputEmail = {};
    this.inside.inputEmail.elems = [];
    this.inside.inputEmail.valueCheckAlgorithm = undefined;
    this.inside.inputEmail.valueLength = undefined;
    this.inside.inputEmail.tip = [];
    this.inside.textarea = {};
    this.inside.textarea.elems = [];
    this.inside.textarea.valueCheckAlgorithm = undefined;
    this.inside.textarea.valueLength = undefined;
    this.inside.textarea.tip = [];
    this.inside.inputFile = {};
    this.inside.inputFile.elems = [];
    this.inside.inputFile.maxSize = undefined;
    this.inside.inputFile.tip = [];
    this.inside.acceptance = {};
    this.inside.acceptance.elems = [];
    this.inside.acceptance.tip = [];
    this.inside.submit = {};
    this.inside.submit.elems = [];  
    this.options = {};
    this.options.inputText = {
      valueCheckAlgorithm: _option => {
        if (_option instanceof RegExp) {
          this.inside.inputText.valueCheckAlgorithm = _option;
        } else {
          throw new TypeError('Second argument, "inputText.valueCheckAlgorithm" is not a regular expression. Expected: nothing or regular expression.');
        }
      },
      valueLength: _option => {
        if (typeof _option === 'number') {
          this.inside.inputText.valueLength = _option;
        } else {
          throw new TypeError('Second argument, "inputText.valueLength" is not a number. Expected: nothing or number.')
        }
      }
    };
    this.options.inputTel = {
      valueCheckAlgorithm: _option => {
        if (_option instanceof RegExp) {
          this.inside.inputTel.valueCheckAlgorithm = _option;
        } else {
          throw new TypeError('Second argument, "inputTel.valueCheckAlgorithm" is not a regular expression. Expected: nothing or regular expression.');
        }
      },
      valueLength: _option => {
        if (typeof _option === 'number') {
          this.inside.inputTel.valueLength = _option;
        } else {
          throw new TypeError('Second argument, "inputTel.valueLength" is not a number. Expected: nothing or number.')
        }
      }
    };
    this.options.inputEmail = {
      valueCheckAlgorithm: _option => {
        if (_option instanceof RegExp) {
          this.inside.inputEmail.valueCheckAlgorithm = _option;
        } else {
          throw new TypeError('Second argument, "inputText.valueCheckAlgorithm" is not a regular expression. Expected: nothing or regular expression.');
        }
      },
      valueLength: _option => {
        if (typeof _option === 'number') {
          this.inside.inputEmail.valueLength = _option;
        } else {
          throw new TypeError('Second argument, "inputEmail.valueLength" is not a number. Expected: nothing or number.')
        }
      }
    };
    this.options.textarea = {
      valueCheckAlgorithm: _option => {
        if (_option instanceof RegExp) {
          this.inside.textarea.valueCheckAlgorithm = _option;
        } else {
          throw new TypeError('Second argument, "textarea.valueCheckAlgorithm" is not a regular expression. Expected: nothing or regular expression.');
        }
      },
      valueLength: _option => {
        if (typeof _option === 'number') {
          this.inside.textarea.valueLength = _option;
        } else {
          throw new TypeError('Second argument, "textarea.valueLength" is not a number. Expected: nothing or number.')
        }
      }
    };
    this.options.inputFile = _size => {
      if (typeof _size === 'number') {
        this.inside.inputFile.maxSize = _size;
      } else {
        throw new TypeError('Second argument, "inputFile" is not a number. Expected: nothing or number')
      }
    }
    this.options.acceptance = _checkboxes => {
      if (typeof _checkboxes === 'object') {
        if (_checkboxes instanceof Array) {
          _checkboxes.forEach(_elem => {
            if (_elem.nodeName) {
              this.inside.acceptance.elems.push(_elem);
              this.inside.acceptance.tip.push(new Tip(_elem));
            } else {
              throw new TypeError('Second argument, element from "acceptance" array is not a DOM element. Expected: nothing, DOM element or array of DOM elements.');
            }
          });
        } else {
          if (_checkboxes.nodeName) {
            this.inside.acceptance.elems.push(_checkboxes);
          } else {
            throw new TypeError('Second argument, "acceptance" is not a DOM element. Expected: nothing, DOM element or array of DOM elements.');
          }
        }
      } else {
        throw new TypeError('Second argument, "acceptance" is not a DOM element. Expected: nothing, DOM element or array of DOM elements.');
      }
    }
    this.options.ignor = _option => {
      if (typeof _option === 'object') {
        if (_option instanceof Array) {
          _option.forEach(_elem => {
            if (_elem.nodeName) {
              this.inside.ignor.push(_elem);
            } else {
              throw new TypeError('Second argument, element from "ignor" array is not a DOM element. Expected: nothing, DOM element or array of DOM elements.');
            }
          });
        } else {
          if (_option.nodeName) {
            this.inside.ignor.push(_option);
          } else {
            throw new TypeError('Second argument, "ignor" is not a DOM element. Expected: nothing, DOM element or array of DOM elements.');
          }
        }
      } else {
        throw new TypeError('Second argument, "ignor" is not a DOM element. Expected: nothing, DOM element or array of DOM elements.');
      }
    }
    if (typeof _options === 'object') {
      for (_property in _options) {
        switch (_property) {
          case 'inputText':
            if ('valueCheckAlgorithm' in _options.inputText) {
              this.options.inputText.valueCheckAlgorithm(_options.inputText.valueCheckAlgorithm);
            }
            if ('valueLength' in _options.inputText) {
              this.options.inputText.valueLength(_options.inputText.valueLength);
              this.inside.inputText.elems.forEach(_elem => {
                $(_elem).attr({'maxlength': _options.inputText.valueLength});
              })
            }
            break;
          case 'inputTel':
            if ('valueCheckAlgorithm' in _options.inputTel) {
              this.options.inputTel.valueCheckAlgorithm(_options.inputTel.valueCheckAlgorithm);
            }
            if ('valueLength' in _options.inputTel) {
              this.options.inputTel.valueLength(_options.inputTel.valueLength);
              this.inside.inputTel.elems.forEach(_elem => {
                $(_elem).attr({'maxlength': _options.inputTel.valueLength});
              })
            }
            break;
          case 'inputEmail':
            if ('valueCheckAlgorithm' in _options.inputEmail) {
              this.options.inputEmail.valueCheckAlgorithm(_options.inputEmail.valueCheckAlgorithm);
            }
            if ('valueLength' in _options.inputEmail) {
              this.options.inputEmail.valueLength(_options.inputEmail.valueLength);
              this.inside.inputEmail.elems.forEach(_elem => {
                $(_elem).attr({'maxlength': _options.inputEmail.valueLength});
              })
            }
            break;
          case 'textarea':
            if ('valueCheckAlgorithm' in _options.textarea) {
              this.options.textarea.valueCheckAlgorithm(_options.textarea.valueCheckAlgorithm);
            }
            if ('valueLength' in _options.textarea) {
              this.options.textarea.valueLength(_options.textarea.valueLength);
              this.inside.textarea.elems.forEach(_elem => {
                $(_elem).attr({'maxlength': _options.textarea.valueLength});
              })
            }
            break;
          case 'inputFile':
            this.options.inputFile(_options.inputFile);
            break;
          case 'acceptance':
            this.options.acceptance(_options.acceptance);
            break;
          case 'ignor':
            this.options.ignor(_options.ignor);
            break;
        }
      }
    }
    $(_selectorForm).find('input[type="text"]').each((_index, _elem) => {
      if (this.inside.ignor.length > 0) {
        this.inside.ignor.forEach(_elemIgnor => {
          if (_elemIgnor !== _elem) {
            this.inside.inputText.elems.push(_elem);
            this.inside.inputText.tip.push(new Tip(_elem));
          }
        })
      } else {
        this.inside.inputText.elems.push(_elem);
        this.inside.inputText.tip.push(new Tip(_elem));
      }
    });
    $(_selectorForm).find('input[type="tel"]').each((_index, _elem) => {
      if (this.inside.ignor.length > 0) {
        this.inside.ignor.forEach(_elemIgnor => {
          if (_elemIgnor !== _elem) {
            this.inside.inputTel.elems.push(_elem);
            this.inside.inputTel.tip.push(new Tip(_elem));
          }
        })
      } else {
        this.inside.inputTel.elems.push(_elem);
        this.inside.inputTel.tip.push(new Tip(_elem));
      }
    });
    $(_selectorForm).find('input[type="email"]').each((_index, _elem) => {
      if (this.inside.ignor.length > 0) {
        this.inside.ignor.forEach(_elemIgnor => {
          if (_elemIgnor !== _elem) {
            this.inside.inputEmail.elems.push(_elem);
            this.inside.inputEmail.tip.push(new Tip(_elem));
          }
        })
      } else {
        this.inside.inputEmail.elems.push(_elem);
        this.inside.inputEmail.tip.push(new Tip(_elem));
      }
    });
    $(_selectorForm).find('textarea').each((_index, _elem) => {
      if (this.inside.ignor.length > 0) {
        this.inside.ignor.forEach(_elemIgnor => {
          if (_elemIgnor !== _elem) {
            this.inside.textarea.elems.push(_elem);
            this.inside.textarea.tip.push(new Tip(_elem));
          }
        })
      } else {
        this.inside.textarea.elems.push(_elem);
        this.inside.textarea.tip.push(new Tip(_elem));
      }
    });
    $(_selectorForm).find('input[type="file"]').each((_index, _elem) => {
      if (this.inside.inputFile.maxSize) {
        this.inside.inputFile.elems.push(_elem);
        this.inside.inputFile.tip.push(new Tip(_elem));
      } else {
        this.inside.ignor.push(_elem);
      }      
    });
    $(_selectorForm).find('input[type="submit"]').each((_index, _elem) => {
      this.inside.submit.elems.push(_elem);
    });
    $(_selectorForm).find('button[type="submit"]').each((_index, _elem) => {
      this.inside.submit.elems.push(_elem);
    });
    this.inside.submit.elems.forEach(_elem => {
      $(_elem).click(_evt => {
        _evt.preventDefault();
        this.check();
      })
    })
    this._elemStatus = [];
    this.testMode = false;
    this.check = () => {
      this._elemStatus.length = 0;
      _this = this;
      function CheckTemplate1(_insideObj) {
        if (_insideObj.elems.length > 0) {
          for (let i = 0; i < _insideObj.elems.length; i++) {
            let _elem = _insideObj.elems[i];
            let _tip = _insideObj.tip[i];
            if ($(_elem).attr('required')) {
              if (_elem.value === '') {
                _this._elemStatus.push({
                  elem: _elem,
                  status: 'incorrect'
                });
                if ($(_elem).attr('type') === 'checkbox') {
                  _tip.desc('Подтвердите согласие');
                  _tip.show();
                } else if ($(_elem).attr('type') === 'file') {
                  _tip.desc('Загрузите необходимый файл');
                  _tip.show();
                } else {
                  _tip.desc('Это обязательное поле');
                  _tip.show();
                }
                $(_elem).addClass('_incorrect');
                continue;
              }
            } else if (_elem.value === '') {
              _this._elemStatus.push({
                elem: _elem,
                status: 'correct'
              });
              $(_elem).removeClass('_incorrect');
              continue;
            }
            if ($(_elem).attr('type') !== 'file') {
              if (_insideObj.valueLength != undefined) {
                if (_elem.value.length <= _insideObj.valueLength) {
                  _this._elemStatus.push({
                    elem: _elem,
                    status: 'correct'
                  });
                } else {
                  _this._elemStatus.push({
                    elem: _elem,
                    status: 'incorrect'
                  });
                  $(_elem).addClass('_incorrect');
                  _tip.desc('Превышена допустимая длина строки');
                  _tip.show();
                  continue;
                }
              }
              if (_elem.checkValidity()) {
                if (_insideObj.valueCheckAlgorithm) {
                  if (_insideObj.valueCheckAlgorithm.test(_elem.value)) {
                    _this._elemStatus.push({
                      elem: _elem,
                      status: 'correct'
                    });
                    $(_elem).removeClass('_incorrect');
                  } else {
                    _this._elemStatus.push({
                      elem: _elem,
                      status: 'incorrect'
                    });
                    $(_elem).addClass('_incorrect');
                    _tip.typical(_elem);
                  }
                } else {
                  _this._elemStatus.push({
                    elem: _elem,
                    status: 'correct'
                  });
                  $(_elem).removeClass('_incorrect');
                }
              } else {
                _this._elemStatus.push({
                  elem: _elem,
                  status: 'incorrect'
                });
                $(_elem).addClass('_incorrect');
                _tip.typical(_elem);
              }
            } else if ($(_elem).attr('type') === 'file') {
              let _fileSizeSum = 0;
              for (let j = 0; j < _elem.files.length; j++) {
                _fileSizeSum += _elem.files[j].size;
              }
              if (_fileSizeSum <= _this.inside.inputFile.maxSize) {
                _this._elemStatus.push({
                  elem: _elem,
                  status: 'correct'
                });
                _tip.hide();
                $(_elem).removeClass('_incorrect');
              } else {
                _this._elemStatus.push({
                  elem: _elem,
                  status: 'incorrect'
                });
                $(_elem).addClass('_incorrect');
                _tip.desc('Превышен размер загружаемого файла. Максимальный размер 50 Мб');
                _tip.show();
              }
            }
          }
        } else {
          return true;
        }
      }
      CheckTemplate1(this.inside.inputText);
      CheckTemplate1(this.inside.inputTel);
      CheckTemplate1(this.inside.inputEmail);
      CheckTemplate1(this.inside.textarea);
      CheckTemplate1(this.inside.inputFile);
      if (this.inside.acceptance.elems.length > 0) {
        this.inside.acceptance.elems.forEach(_elem => {
          if ($(_elem).is(':checked')) {
            this._elemStatus.push({
              elem: _elem,
              status: 'correct'
            })
          } else {
            this._elemStatus.push({
              elem: _elem,
              status: 'incorrect'
            })
          }
        })
      }
      for (let i = 0; i < this._elemStatus.length; i++) {
        if (this._elemStatus[i].status === 'incorrect') {
          if (this.testMode) {
            $(this.inside.form).removeClass('test_STATUS-CORRECT');
            $(this.inside.form).addClass('test_STATUS-INCORRECT');
          }
          this.inside.form.dispatchEvent(_formIncorrect);
          break;
        }
        if (i + 1 === this._elemStatus.length) {
          if (this.testMode) {
            $(this.inside.form).removeClass('test_STATUS-INCORRECT');
            $(this.inside.form).addClass('test_STATUS-CORRECT');
          } else {
            this.inside.form.dispatchEvent(_formCorrect);
            if (this.inside.inputFile.elems.length > 0 && $(this.inside.inputFile.elems[0]).parents('label').find('._preloader').length > 0) {
              $(this.inside.inputFile.elems[0]).parents('label').find('._preloader').addClass('_show');
            }
          }
        }
      }
    }
    Object.defineProperty(this, '_elemStatus', {
      writable: false,
      configurable: false
    });
    if (this.inside.inputFile.elems.length > 0) {
      $(this.inside.inputFile.elems[0]).click(() => {
        $(this.inside.inputFile.elems[0]).val(null);
        this.inside.inputFile.tip[0].hide();
      })
    }
    let _elemArr = [];
    let _tipArr = [];
    _elemArr = _elemArr.concat(this.inside.inputText.elems, this.inside.inputTel.elems, this.inside.inputEmail.elems, this.inside.textarea.elems, this.inside.acceptance.elems);
    _tipArr = _tipArr.concat(this.inside.inputText.tip, this.inside.inputTel.tip, this.inside.inputEmail.tip, this.inside.textarea.tip, this.inside.acceptance.tip)
    _elemArr.forEach(_elem => {
      $(_elem).focus(() => {
        _tipArr.forEach(_tip => {
          _tip.hide();
        })
      })
    })
  } catch (_err) {
    console.log(_err);
  }
}

$(document).ready(() => {
  if ($('.header-callback .header-callback-form').length > 0) {
    const _formHeaderCallback = new FormValidation($('.header-callback .header-callback-form')[0], {
      inputText: {
        valueLength: 254
      },
      inputTel: {
        valueLength: 50
      },
      inputEmail: {
        valueCheckAlgorithm: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        valueLength: 254
      }
    })
  }
  
  if ($('.header-callback-vacancy .header-callback-form').length > 0) {
    const _formHeaderCallbackVacancy = new FormValidation($('.header-callback-vacancy .header-callback-form')[0], {
      inputText: {
        valueLength: 254
      },
      inputTel: {
        valueLength: 50
      },
      inputEmail: {
        valueCheckAlgorithm: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        valueLength: 254
      },
      //inputFile: 52428800,
      inputFile: 25000,
      ignor: $('.header-callback__vacancy')[0]
    })
  }
});
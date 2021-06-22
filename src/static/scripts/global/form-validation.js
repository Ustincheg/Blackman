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
  //  });
  //  - EXAMPLE end -  
  //  {{{ 1 }}} | DOM element | The form's DOM element.
  //  {{{ 2 }}} | Object property | The type of input. Abled values: "inputText", "inputTel", "inputEmail", "textarea", "acceptance", "ignor".
  //  {{{ 3 }}} | RegExp | Regular expression, you want to check with.
  //  {{{ 4 }}} | Number | Maximum size of input value. It creates "maxlength" attribute of "input" in DOM.
  //  {{{ 5 }}} | DOM element, checkbox | The acceptance's input-checkbox.
  //
  //  Use property "testMode" in created objects or in constructor to test your validation in front-end and not submit the form.
  //  You can see "test_STATUS-CORRECT" or "test_STATUS-INCORRECT" in form class attribute.

  try {
    if (typeof _selectorForm !== 'object' && !_selectorForm.nodeName) {
      throw new TypeError('Argument is not a DOM element. Expected: DOM element.');
    }
    let _formCorrect = new Event('form-status-correct');
    let _formIncorrect = new Event('form-status-incorrect');
    this.inside = {};
    this.inside.form = _selectorForm;
    this.inside.ignor = [];
    this.inside.inputText = {};
    this.inside.inputText.elems = [];
    this.inside.inputText.valueCheckAlgorithm = undefined;
    this.inside.inputText.valueLength = undefined;
    this.inside.inputTel = {};
    this.inside.inputTel.elems = [];
    this.inside.inputTel.valueCheckAlgorithm = undefined;
    this.inside.inputTel.valueLength = undefined;
    this.inside.inputEmail = {};
    this.inside.inputEmail.elems = [];
    this.inside.inputEmail.valueCheckAlgorithm = undefined;
    this.inside.inputEmail.valueLength = undefined;
    this.inside.textarea = {};
    this.inside.textarea.elems = [];
    this.inside.textarea.valueCheckAlgorithm = undefined;
    this.inside.textarea.valueLength = undefined;
    this.inside.acceptance = {};
    this.inside.acceptance.elems = [];
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
    this.options.acceptance = _checkboxes => {
      if (typeof _checkboxes === 'object') {
        if (_checkboxes instanceof Array) {
          _checkboxes.forEach(_elem => {
            if (_elem.nodeName) {
              this.inside.acceptance.elems.push(_elem);
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
          }
        })
      } else {
        this.inside.inputText.elems.push(_elem);
      }
    });
    $(_selectorForm).find('input[type="tel"]').each((_index, _elem) => {
      if (this.inside.ignor.length > 0) {
        this.inside.ignor.forEach(_elemIgnor => {
          if (_elemIgnor !== _elem) {
            this.inside.inputTel.elems.push(_elem);
          }
        })
      } else {
        this.inside.inputTel.elems.push(_elem);
      }
    });
    $(_selectorForm).find('input[type="email"]').each((_index, _elem) => {
      if (this.inside.ignor.length > 0) {
        this.inside.ignor.forEach(_elemIgnor => {
          if (_elemIgnor !== _elem) {
            this.inside.inputEmail.elems.push(_elem);
          }
        })
      } else {
        this.inside.inputEmail.elems.push(_elem);
      }
    });
    $(_selectorForm).find('textarea').each((_index, _elem) => {
      if (this.inside.ignor.length > 0) {
        this.inside.ignor.forEach(_elemIgnor => {
          if (_elemIgnor !== _elem) {
            this.inside.textarea.elems.push(_elem);
          }
        })
      } else {
        this.inside.textarea.elems.push(_elem);
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
        if ($(_elem).attr('disabled') === false) {
          this.check();
        }
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
            if ($(_elem).attr('required')) {
              if (_elem.value === '') {
                _this._elemStatus.push({
                  elem: _elem,
                  status: 'incorrect'
                });
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
            //this.inside.form.submit();
            this.inside.form.dispatchEvent(_formCorrect);
          }
        }
      }
    }
    Object.defineProperty(this, '_elemStatus', {
      writable: false,
      configurable: false
    });
  } catch (_err) {
    console.log(_err);
  }
}

$(document).ready(() => {
  if ($('.header-callback .header-callback-form').length > 0) {
    var _formHeaderCallback = new FormValidation($('.header-callback .header-callback-form')[0], {
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
    var _formHeaderCallbackVacancy = new FormValidation($('.header-callback-vacancy .header-callback-form')[0], {
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
      ignor: $('.header-callback__vacancy')[0]
    })
  }
});
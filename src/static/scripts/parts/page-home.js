//=== BACKGROUND VIDEO ===//

// $(document).ready(function () {
//   var _sourceLD = 'assets/vids/bg-video_360p.mp4';
//   var _sourceHD = 'assets/vids/bg-video_720p.mp4';

//   var _sourceHD = $(".page-home-bg__video").attr("data-url-720p");
//   var _sourceLD = $(".page-home-bg__video").attr("data-url-360p");

//   var _MIME = "video/mp4";

//   function BGVideoAdaptive(_source, _type) {
//     var _bgVideo = $('.page-home-bg__video')[0];
    
//     $(_bgVideo).append($('<source>', {
//       src: _source,
//       type: _type
//     }))
//   }

//   if (isMobile()) {
//     BGVideoAdaptive(_sourceLD, _MIME);
//   } else {
//     BGVideoAdaptive(_sourceHD, _MIME);
//   }
// })

// //=== CONTENT ===//

// $(document).ready(function () {
//   if ($('body').hasClass('page-home')) {
//     var _contentArr = $('.main section');
//     var _showCurrentSection = $('.footer-nav-tabs');
//     var _footerInfo = $('.footer-info')[0];
//     var _slogan = $('.page-home-bg__slogan');
//     var _footerTipScroll = $('.footer-tip._scroll');
//     var _footerTipReturn = $('.footer-tip._return');
//     var _animationTime = 800;
//     var _main = $('main')[0];
//     var _paddingRightDefault = 80;

//     // WARNING! For correct work, you need to set animation of footer elements less than animation of content.

//     _footerTipReturn.removeClass('qs_hidden');
//     $(_footerTipReturn).click(function () {
//       let _counter = _contentArr.length - 1;
//       function Step(_index) {
//         Open(_index, 'up');
//         let _timeout = setTimeout(() => {
//           if (_counter !== 0) {
//             _counter--;
//             Step(_counter);
//           } else {
//             clearTimeout(_timeout);
//           }
//         }, _animationTime);
//       }
//       Step(_counter);
//       $(_footerTipReturn).fadeOut(100, function () {
//         $(_footerTipScroll).fadeIn(100);
//       })
//     })
//     _footerTipReturn.fadeOut(0);

//     function SloganFix() {
//       $(_slogan).css({'bottom': $('.footer').css('height')});
//     }

//     SloganFix();
//     $(_showCurrentSection).text($(_contentArr[0]).find('.qs_section-ttl span').text());
//     $(_footerInfo).addClass('_disabled');

//     $(window).resize(SloganFix);

//     function Open(_currentIndex, _direction) {
//       if (_currentIndex != undefined && _currentIndex != null) {
//         if (_direction === 'down') {
//           if (_currentIndex != _contentArr.length - 1) {
//             $(_contentArr[_currentIndex + 1]).addClass('_animating');
//             $(_contentArr[_currentIndex + 1]).slideDown(_animationTime, function () {
//               $(_contentArr[_currentIndex]).removeClass('_current');
//               $(_contentArr[_currentIndex + 1]).removeClass('_animating');
//             });
//             if (_currentIndex + 2 <= _contentArr.length - 1) {
//               $(_showCurrentSection).text($(_contentArr[_currentIndex + 2]).find('.qs_section-ttl span').text());
//             } else {
//               $(_showCurrentSection).addClass('_disabled');
//               $(_footerInfo).removeClass('_disabled');
//               $(_footerTipScroll).fadeOut(100, function () {
//                 $(_footerTipReturn).fadeIn(100);
//               })
//             }
//             $(_contentArr[_currentIndex + 1]).addClass('_opened _current');
//           }
//         } else if (_direction === 'up') {
//           if (_currentIndex != 0) {
//             $(_contentArr[_currentIndex]).addClass('_animating');
//             $(_contentArr[_currentIndex]).slideUp(_animationTime, function () {
//               $(_contentArr[_currentIndex]).removeClass('_opened _current _animating');
//               $(_contentArr[_currentIndex - 1]).addClass('_current');
//               $(_showCurrentSection).removeClass('_disabled');
//               $(_footerInfo).addClass('_disabled');
//               $(_showCurrentSection).text($(_contentArr[_currentIndex]).find('.qs_section-ttl span').text());
//             })
//             if (_currentIndex === _contentArr.length - 1) {
//               $(_footerTipReturn).fadeOut(100, function () {
//                 $(_footerTipScroll).fadeIn(100);
//               })
//             }
//           } else {
//             $(_contentArr[_currentIndex]).addClass('_animating');
//             $(_contentArr[_currentIndex]).slideUp(_animationTime, function () {
//               $(_contentArr[_currentIndex]).removeClass('_opened _current _animating');
//               $(_showCurrentSection).removeClass('_disabled');
//               $(_footerInfo).addClass('_disabled');
//               $(_showCurrentSection).text($(_contentArr[0]).find('.qs_section-ttl span').text());
//               SloganFix();
//               $(_slogan).removeClass('_disabled');
//             });
//           }
//         }
//       } else {
//         $(_slogan).addClass('_disabled');
//         $(_contentArr[0]).slideDown(_animationTime, function () {
//           $(_contentArr[0]).addClass('_opened _current');
//           if (_contentArr.length > 1) {
//             $(_showCurrentSection).text($(_contentArr[1]).find('.qs_section-ttl span').text());
//           } else {
//             $(_showCurrentSection).addClass('_disabled');
//             $(_footerInfo).removeClass('_disabled');
//           }
//         })
//       }
//     }

//     window.addEventListener('wheel', function (_evt) {
//       let _isAnyCurrent = $('.main section._current');

//       if (_isAnyCurrent.length == 0) {
//         if (_evt.deltaY > 0) {
//           Open();
//         }
//       } else {
//         let _currentIndex;

//         for (let i = 0; i < _contentArr.length; i++) {
//           if ($(_contentArr[i]).hasClass('_current')) {
//             _currentIndex = i;
//             break;
//           }
//         }

//         if (_evt.deltaY > 0) {
//           if ($(_contentArr).is('._animating')) {
//             _evt.preventDefault();
//           } else {
//             if ($(_contentArr[_currentIndex]).scrollTop() === _contentArr[_currentIndex].scrollHeight - _contentArr[_currentIndex].clientHeight) {
//               Open(_currentIndex, 'down');
//             }
//           }
//         } else if (_evt.deltaY < 0) {
//           if ($(_contentArr).is('._animating')) {  
//             _evt.preventDefault();
//           } else {
//             if ($(_contentArr[_currentIndex]).scrollTop() === 0) {
//               Open(_currentIndex, 'up');
//             }
//           }
//         }
//       }
//     }, {
//       passive: false
//     });

//     function Size() {
//       $('.qs_section').each((_index, _elem) => {
//         $(_elem).css({'padding-right': 'calc(80px - (' + _main.clientWidth + 'px - 100%'});
//       });
//     }

//     $(window).resize(Size);

//     Size();
//   }
// })

$(document).ready(() => {
  if ($('body').hasClass('page-home')) {
    var _footer = $('.footer');
    var _main = $('.main');
    var _placeholderSize;
    var _slogan = $('.page-home-bg__slogan');
  
    function SloganFix() {
      $(_slogan).css({'bottom': $('.footer').css('height')});
    }

    function PlaceholderSize() {
      _placeholderSize = $('.short-empty').height();
    }
  
    $(window).resize(() => {
      SloganFix();
      PlaceholderSize();
    });
  
    SloganFix();
    PlaceholderSize();

    _footer.find('.footer-nav-tabs').text($($('main section:not(.short-empty)')[0]).find('.qs_section-ttl span').text());

    _main[0].addEventListener('scroll', _evt => {
      if (_main.scrollTop() > 0 && !_main.hasClass('_show') && !_main.hasClass('_animation')) {
        _main.addClass('_show _animation');
        _footer.stop();
        _footer.fadeOut(400);
        _main.animate({
          scrollTop: _placeholderSize
        }, 600, () => {
          _main.removeClass('_animation');
        });
      } else if (_main.scrollTop() < window.screen.height / 3 && _main.hasClass('_show') && !_main.hasClass('_animation')) {
        _main.addClass('_animation');
        _main.removeClass('_show');
        _footer.stop();
        _footer.fadeIn(400);
        _main.animate({
          scrollTop: 0
        }, 600, () => {
          _main.removeClass('_animation');
        });
      }
    });
  }
})

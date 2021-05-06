//=== BACKGROUND VIDEO ===//

$(document).ready(function () {
  var _sourceLD = 'assets/vids/bg-video_360p.mp4';
  var _sourceHD = 'assets/vids/bg-video_720p.mp4';
  var _MIME = 'video/mp4';

  function BGVideoAdaptive(_source, _type) {
    var _bgVideo = $('.page-home-bg__video')[0];
    
    $(_bgVideo).append($('<source>', {
      src: _source,
      type: _type
    }))
  }

  if (isMobile()) {
    BGVideoAdaptive(_sourceLD, _MIME);
  } else {
    BGVideoAdaptive(_sourceHD, _MIME);
  }
})

//=== CONTENT ===//

$(document).ready(function () {
  if ($('body').hasClass('page-home')) {
    var _contentArr = $('.main section');
    var _showCurrentSection = $('.footer-nav-tabs');
    var _footerInfo = $('.footer-info')[0];

    $(_showCurrentSection).text($(_contentArr[0]).find('.qs_section-ttl span').text());
    $(_footerInfo).addClass('_disabled');

    function Open(_currentIndex, _direction) {
      let _animationTime = 800;
      if (_currentIndex != undefined && _currentIndex != null) {
        if (_direction === 'down') {
          if (_currentIndex != _contentArr.length - 1) {
            $(_contentArr[_currentIndex + 1]).slideDown(_animationTime, function () {
              $(_contentArr[_currentIndex]).removeClass('_current');
              if (_currentIndex + 2 <= _contentArr.length - 1) {
                $(_showCurrentSection).text($(_contentArr[_currentIndex + 2]).find('.qs_section-ttl span').text());
              } else {
                $(_showCurrentSection).addClass('_disabled');
                $(_footerInfo).removeClass('_disabled');
              }
            });
            $(_contentArr[_currentIndex + 1]).addClass('_opened _current');
          }
        } else if (_direction === 'up') {
          if (_currentIndex != 0) {
            $(_contentArr[_currentIndex]).slideUp(_animationTime, function () {
              $(_contentArr[_currentIndex]).removeClass('_opened _current');
              $(_contentArr[_currentIndex - 1]).addClass('_current');
              $(_showCurrentSection).removeClass('_disabled');
              $(_footerInfo).addClass('_disabled');
              $(_showCurrentSection).text($(_contentArr[_currentIndex]).find('.qs_section-ttl span').text());
            });
          } else {
            $(_contentArr[_currentIndex]).slideUp(_animationTime, function () {
              $(_contentArr[_currentIndex]).removeClass('_opened _current');
              $(_showCurrentSection).removeClass('_disabled');
              $(_footerInfo).addClass('_disabled');
              $(_showCurrentSection).text($(_contentArr[0]).find('.qs_section-ttl span').text());
            });
          }
        }
      } else {
        $(_contentArr[0]).slideDown(_animationTime, function () {
          $(_contentArr[0]).addClass('_opened _current');
          $(_showCurrentSection).text($(_contentArr[1]).find('.qs_section-ttl span').text());
        })
      }
    }

    $(window).on('wheel', function (_evt) {
      let _isAnyCurrent = $('.main section._current');

      if (_isAnyCurrent.length == 0) {
        Open();
      } else {
        let _currentIndex;

        for (let i = 0; i < _contentArr.length; i++) {
          if ($(_contentArr[i]).hasClass('_current')) {
            _currentIndex = i;
            break;
          }
        }

        //if ($(_contentArr[_currentIndex].scrollTop())
        console.log(_contentArr[_currentIndex].clientHeight);
        if (_evt.originalEvent.deltaY > 0) {
          Open(_currentIndex, 'down');
        } else if (_evt.originalEvent.deltaY < 0) {
          Open(_currentIndex, 'up');
        }
      }
    })
  }
})

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
  var _target = $('main');

  $(window).on('wheel', function (_evt) {
    if ($(_target).css('display') === 'none') {
      $(_target).slideDown(800);
    } else if ($(_target).scrollTop() == 0 && _evt.originalEvent.deltaY < 0) {
      $(_target).slideUp(800);
    }
  })
})

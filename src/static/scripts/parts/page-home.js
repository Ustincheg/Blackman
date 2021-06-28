//=== BACKGROUND VIDEO ===//

$(document).ready(function () {
  var _sourceLD = 'assets/vids/bg-video_360p.mp4';
  var _sourceHD = 'assets/vids/bg-video_720p.mp4';

  var _sourceHD = $(".page-home-bg__video").attr("data-url-720p");
  var _sourceLD = $(".page-home-bg__video").attr("data-url-360p");

  var _MIME = "video/mp4";

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

$(document).ready(() => {
  if ($('body').hasClass('page-home')) {
    const _footer = $('.footer');
    const _main = $('.main');
    const _slogan = $('.page-home-bg__slogan');
    const _sectionTitlesDesktop = $('main section:not(.short-empty) .qs_section-ttl');
    const _sectionTitlesMobile = $('main section:not(.short-empty) ._ttl');
    let _placeholderSize;

    function SloganFix() {
      $(_slogan).css({'bottom': $(_sectionTitlesMobile[0]).css('height')});
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

    if (isMobile() || window.screen.width <= 1100) {
      function FooterFix() {
        _main[0].scrollTop = $($('main section:not(.short-empty)')[0]).find('._ttl')[0].clientHeight;
      }

      $(window).resize(FooterFix);

      _footer.css({'display': 'none'});
      _main.css({'opacity': '1'});
      _sectionTitlesDesktop.css({'display': 'none'});
      FooterFix();

      _main[0].addEventListener('scroll', _evt => {
        let _firstTitleHeight = $($('main section:not(.short-empty)')[0]).find('._ttl')[0].clientHeight;
        if (_main.scrollTop() < _firstTitleHeight) {
          FooterFix();
        }
      });
    } else {
      _sectionTitlesMobile.css({'display': 'none'});
      _footer.find('.footer-nav-tabs').text($($('main section:not(.short-empty)')[0]).find('.qs_section-ttl').text());
      _main[0].addEventListener('scroll', _evt => {
        if (_main.scrollTop() > 0 && !_main.hasClass('_show') && !_main.hasClass('_animation')) {
          _main.addClass('_show');
          _footer.stop();
          _footer.fadeOut(400);
          _main.addClass('_animation');
          _main.animate({
            scrollTop: _placeholderSize
          }, 600, () => {
            _main.removeClass('_animation');
          });
        } else if (_main.scrollTop() < window.screen.height / 3 && _main.hasClass('_show') && !_main.hasClass('_animation')) {
          _main.removeClass('_show');
          _footer.stop();
          _footer.fadeIn(400);
          _main.addClass('_animation');
          _main.animate({
            scrollTop: 0
          }, 600, () => {
            _main.removeClass('_animation');
          });
        }
      });
    }
  }
})

// ===================================================================================================================
// ==================================компенсация высоты поисковой строки мобильных браузеров==========================
// ===================================================================================================================

$(document).ready(function () {
  if (isMobile()) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {      
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      // console.log(`${vh}px`)
    });
  }
});

let screenHeight = window.screen.height;
let jqScreenHeight = $(window).height();
let browserOutHeight = window.outerHeight;
let browserInHeight = window.innerHeight;
let bodyHeight = $('body').height();

console.log(screenHeight);
console.log(jqScreenHeight);
console.log(browserOutHeight);
console.log(browserInHeight);
console.log(bodyHeight);

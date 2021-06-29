/*====================================
*     LOADER
======================================*/

if (!sessionStorage.isShow) {
  loader();
  $(".preloader").css({
    'opacity': '1'
  });  
} else {  
  $(".preloader").toggle();
}

function loader(_success) {
  sessionStorage.setItem("isShow", true);

  var obj = $(".preloader"),
    desc = $(".preloader-container"),
    inner = $(".preloader-counter");
  var w = 0,


  t = setInterval(function () {
    w = w + 1;
    inner.html(w);
    if (w === 100) {
      // obj.fadeOut();
      desc.fadeOut();
      slideUpInterval = setInterval(function () {
        obj.slideUp(400);
        clearInterval(slideUpInterval);
      }, 400);
      clearInterval(t);
      w = 0;
      if (_success) {
        return _success();
      }
    }
  }, 10);
}

/*====================================
*     Cookie message
======================================*/


if (!sessionStorage.isShowCookie) {  
  showCookie();
} 

function showCookie() {
  $(".js_cookie").fadeIn();
}

function cookieToggle() {
  sessionStorage.setItem("isShowCookie", true);  
  $(".js_cookie").fadeOut();  
}
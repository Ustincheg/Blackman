// loader();

if (!sessionStorage.isShow) {
  loader();  
} else {  
  $(".preloader").toggle();
}


/*====================================
*     LOADER
======================================*/
function loader(_success) {
  sessionStorage.setItem("isShow", true);

  var obj = $(".preloader"),
    desc = $(".preloader-container"),
    inner = $(".preloader-counter"),
    cookie = $(".js_cookie");
  var w = 0,

    t = setInterval(function () {
      w = w + 1;
      inner.html(w);
      if (w === 100) {
        // obj.fadeOut();
        desc.fadeOut();
        slideUpInterval = setInterval(function () {
          obj.slideUp(400);
          cookie.fadeIn();
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

function cookieToggle() {
  $(".js_cookie").fadeOut();  
}
// loader();

if (!sessionStorage.isShow) {
    loader();
    // console.log("Запускаю прелоадер");
  } else {
    // console.log("Уже показывал");
    $(".preloader").toggle();
};
// document.querySelector('.btn').onclick = loader;

/*====================================
*     LOADER
======================================*/
function loader(_success) {
  
  sessionStorage.setItem('isShow', true);
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
        }, 400)
        clearInterval(t);
        w = 0;
        if (_success) {
          return _success();
        }
      }
    }, 10);
}

loader();

// document.querySelector('.btn').onclick = loader;

/*====================================
*     LOADER
======================================*/
function loader(_success) {
  
  var obj = $(".preloader"),
    inner = $(".preloader-counter");    
  var w = 0,

    t = setInterval(function () {
      w = w + 1;           
      inner.html(w);    
      if (w === 100) {        
        obj.fadeOut();
        clearInterval(t); 
        w = 0;
        if (_success) {
          return _success();
        }
      }
    }, 10);
}

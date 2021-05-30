loader();

// document.querySelector('.btn').onclick = loader;

/*====================================
*     LOADER
======================================*/
function loader(_success) {
  var obj = $(".preloader"),
    inner = $(".preloader-counter");    
//   obj.toggleClass("show");
  var w = 0,
    t = setInterval(function () {
      w = w + 1;
      console.log(w);      
      inner.html(w);
    
      if (w === 100) {
        console.log("конец");
        // obj.removeClass("show");   
        obj.fadeOut();
        clearInterval(t); 
        w = 0;
        if (_success) {
          return _success();
        }
      }
    }, 10);
}

const showMenu = () => {
  btn = $(".header__btn-nav-modal");
  modal = $(".modal-navigation");
  !btn.hasClass("isOpen") ? btn.addClass("isOpen") : btn.removeClass("isOpen");
  modal.fadeToggle("slow", "linear");
  console.log(btn);
};

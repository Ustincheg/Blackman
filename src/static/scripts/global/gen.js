const showMenu = () => {
  const btn = $(".header__btn-nav-modal");
  !btn.hasClass("isOpen") ? btn.addClass("isOpen") : btn.removeClass("isOpen");
  $(".modal-navigation").slideDown();
  setTimeout(() => {
    $(".modal-navigation__preloader").fadeToggle("slow", "linear");
  }, 700);
};

const hideMenu = () => {
  const btn = $(".header__btn-nav-modal");
  $(".modal-navigation__preloader").fadeToggle("slow", "linear");
  setTimeout(() => {
    $(".modal-navigation").slideUp();
  }, 700);
  setTimeout(() => {
    !btn.hasClass("isOpen")
      ? btn.addClass("isOpen")
      : btn.removeClass("isOpen");
  }, 1100);
};

const showModalForm = () => {
  const modalForm = $(".modal-form");
  const preloader = $(".modal-form__preloader");
  $(".modal-form").slideDown();
  setTimeout(() => {
    $(".modal-form__button-close").fadeToggle("slow", "linear");
    $(".modal-form__preloader").fadeToggle("slow", "linear");
  }, 400);
};

const hideModalForm = () => {
  //   $(".modal-form").fadeToggle("slow", "linear");
  $(".modal-form__preloader").fadeToggle("slow", "linear");
  $(".modal-form__button-close").fadeToggle("slow", "linear");
  setTimeout(() => {
    $(".modal-form").slideUp();
  }, 400);
};

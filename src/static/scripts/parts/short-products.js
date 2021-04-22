const _swiper = new Swiper('.short-products-slider', {
  direction: 'horizontal',
  loop: false,
  scrollbar: {
    el: '.short-products-slider__scrollbar'
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },
  spaceBetween: 20,
  slidesPerView: 'auto'
})
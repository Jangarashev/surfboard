const slider = $(".products").bxSlider({
  contols: false,
  pager: false,
});

$(".products-slider__btn--prev").click ((e) => {
  e.preventDefault();
  slider.goToPrevSlide();
});

$(".products-slider__btn--next").click ((e) => {
  e.preventDefault();
  slider.goToNextSlide();
});
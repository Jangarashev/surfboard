const slider = $(".products__list").bxSlider({
  contols: false,
  pager: false,
});

$(".arrows__direction--prev").click ((e) => {
  e.preventDefault();
  slider.goToPrevSlide();
});

$(".arrows__direction--next").click ((e) => {
  e.preventDefault();
  slider.goToNextSlide();
});
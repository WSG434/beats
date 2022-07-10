// $('.slider__list').bxSlider({
//   pager: false,
//   controls: false
// });



const slider = $('.slider__list').bxSlider({
  //https://bxslider.com/install/
  pager: false,
  controls: false,
  touchEnabled: false

});

$('.arrow--left').click((e) => {
  e.preventDefault();
  slider.goToPrevSlide();
})


$('.arrow--right').click((e) => {
  e.preventDefault();
  slider.goToNextSlide();
})
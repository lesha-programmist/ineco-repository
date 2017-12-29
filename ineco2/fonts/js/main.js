var TIMEOUT = 6000; 
var interval = setInterval(handleNext, TIMEOUT);
function handleNext() {
  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');
  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;
  $radios
    .attr('checked', false);
  if (currentIndex >= radiosLength - 1) {
    $radios
      .first()
      .attr('checked', true);
  } else {
    $activeRadio
      .next('input[class*="slide-radio"]')
      .attr('checked', true);
  }
}


$(document).ready(function(){
      $('.menu-icon').click(function(){
        $('.overlay').toggleClass('open');
        $('.menu-icon').toggleClass('open1');
      })
    })


//Scrolling Effect
$(window).on("scroll", function() {
  if($(window).scrollTop()) {
    $('nav').addClass('white');
    $('.logo a').addClass('scroll');
    $('.hamburger').addClass('scroll');
  }
  else{
    $('nav').removeClass('white');
    $('.logo a').removeClass('scroll');
    $('.hamburger').removeClass('scroll');
  }
})














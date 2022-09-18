$(function(){

  $('.humb').click(function(){
    $('.head-sub').toggleClass('open');
    $('.humb').toggleClass('open');
  })

  $('.head-nav a').click(function(){
    $('.head-sub').removeClass('open');
    $('.humb').removeClass('open');
  })

  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    fade:true,
    speed: 3000,
  });
    
})
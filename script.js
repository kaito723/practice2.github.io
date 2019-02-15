$(function(){
  $('.fa-angle-right').click(function(){
   if($('.top-wrapper-1').hasClass('active')){
     $('.top-wrapper-1').removeClass('active');
     $('.top-wrapper-2').addClass('active');
   }
   else if($('.top-wrapper-2').hasClass('active')){
     $('.top-wrapper-2').removeClass('active');
     $('.top-wrapper-3').addClass('active');
   }
   else{
     $('.top-wrapper-3').removeClass('active');
     $('.top-wrapper-1').addClass('active');
   }
  });

  $('.fa-angle-left').click(function(){
   if($('.top-wrapper-1').hasClass('active')){
     $('.top-wrapper-1').removeClass('active');
     $('.top-wrapper-3').addClass('active');
   }
   else if($('.top-wrapper-2').hasClass('active')){
     $('.top-wrapper-2').removeClass('active');
     $('.top-wrapper-1').addClass('active');
   }
   else{
     $('.top-wrapper-3').removeClass('active');
     $('.top-wrapper-2').addClass('active');
   }
  });

  var $win = $(window),
    $main = $('main'),
    $header = $('header'),
    headerHeight = $header.outerHeight(),
    headerPos = $header.offset().top,
    fixedClass = 'nav-fixed';

$win.on('load scroll', function() {
  var value = $(this).scrollTop();
  if ( value > headerPos ) {
    $header.css('background-color','#dddddd');
    $main.css('margin-top', headerHeight);
  } else {
    $header.css('background-color','Transparent');
    $main.css('margin-top', '0');
  }
});


  $('.menu-open').click(function(){
    $('.overlay').addClass('open');
    $('header').css('display','none');
    $('.sidebar').fadeIn();
    $('body').css('position','fixed');
  });
  $('.menu-close').click(function(){
    $('.overlay').removeClass('open');
    $('header').css('display','block');
    $('.sidebar').fadeOut();
    $('body').css('position','static');

});



});

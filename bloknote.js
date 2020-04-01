//появление липкого меню
$(window).scroll(function(){
    var heightMenu = $('.top_menu').height();
    var thisScroll = $(this).scrollTop();

    if(thisScroll >= heightMenu){
        $('#stick').addClass('stick_active');
    }
    else{
        $('#stick').removeClass('stick_active');
    }
}); 



// Кнопка обратного звонка
$(".more_7").click(function(){
  
  $(".modal_overlay").slideDown(600);

  $(".modalka").delay(800).fadeIn(700);
});

$(".cloze").click(function(){
  
  $(".modal_overlay").slideUp(600);

  $(".modalka").fadeOut(500);
  return false;
});



// Слайдер owl-carousel
$(".owl-carousel").owlCarousel({
 	items:1,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:true,
    nav:true,
   
});



// маска для номера телефона
$("#phone").mask("8 (999) 999 99 99");
$("#phone2").mask("8 (999) 999 99 99");
$("#phone3").mask("8 (999) 999 99 99");




// вкладка на странице
$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");




// вкладки на странице двойная
$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
  $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");



$(".tab_ext").not(":first").hide();
$(".wrapper .tab").click(function() {
  $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab_ext").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
// вкладки на странице END






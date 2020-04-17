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



		//фиксация левого меню orange на странице услуги
    $(window).scroll(function(){
      var heightMenu = 240;
      var thisScroll = $(this).scrollTop();
                    
      if(thisScroll >= heightMenu){
        $('.tabs_management_and_registration_orange').addClass('active_tabs_management_and_registration_orange');
      }
      else{
        $('.tabs_management_and_registration_orange').removeClass('active_tabs_management_and_registration_orange');
      }
    });
      //фиксация левого меню orange на странице услуги END
  
  
      //снятие фиксации левого меню orange на странице услуги
    $(window).scroll(function(){
      var aktivblock = 4820;
      var thisScroll = $(this).scrollTop();
                    
      if(thisScroll >= aktivblock){
        $('.active_tabs_management_and_registration_orange').addClass('active_tabs_management_and_registration_orange_none');
      }
      else{
        $('.active_tabs_management_and_registration_orange').removeClass('active_tabs_management_and_registration_orange_none');
      }
    });                          
      //снятие фиксации левого меню orange на странице услуги END	
      
      
      		//снятие фиксации левого меню orange на странице услуги
	$(window).scroll(function(){
		var aktivblock = $('.body').height();
		var buferblock = 784;
		var thisScroll = $(this).scrollTop();
									
		if(thisScroll >= aktivblock - buferblock){
			$('.active_tabs_management_and_registration_orange').addClass('active_tabs_management_and_registration_orange_none');
		}
		else{
			$('.active_tabs_management_and_registration_orange').removeClass('active_tabs_management_and_registration_orange_none');
		}
	});                          
		//снятие фиксации левого меню orange на странице услуги END		
  
  
  
      // Переключение активного пункта левого меню при скролле на странице услуги


		// подключение на странице
		<script src="js/nav.js"></script>

    // нужно разместить в папке js файл nav.js
    
    $('.header-scroll').onePageNav({
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing',
      begin: function() {
      },
      end: function() {
      },
      scrollChange: function($currentListItem) {             
      }
    });
  
  
    // данный скрипт делает, чтобы при переходе по ссылке на якорь, этот якорь немного опускался вниз
  // --------------------------------------------------------------------------
    $('.js-scroll').click(function(){
      var headerHeight = 200;
  
      $('html, body')
      .animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top - headerHeight
      }, 500);
      return false;
    });






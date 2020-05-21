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








    // Кнопка обратного звонка
	$(".registration_wrap_link").click(function(){
		
		$(".modal_overlay").slideDown(600);

		$(".modal_uslugi").delay(800).fadeIn(700);
	});

	$(".modal_overlay").click(function(){
		
		$(".modal_overlay").slideUp(600);

		$(".modal_uslugi").fadeOut(500);
		return false;
	});
	// Кнопка обратного звонка END

		// обработка формы заказа услуги
		$('form#uslugi').submit(function(){

			$('.order_uslugi').attr('disabled', true);
			var th = $(this);
	
			$.ajax({
					url: 'mail_application.php',
					type: 'POST',
					dataType: 'html',
					data: th.serialize()
			})
					.done(function() {
							console.log("success");
	
							setTimeout(function(){
								$(".modal_uslugi").fadeOut(1100);
							},700);
	
							setTimeout(function(){
								$(".modal_01").slideDown(700);
							},2000);
	
							setTimeout(function(){
								$(".modal_01").slideUp(700);
							},6000);
	
							setTimeout(function(){
								$(".modal_overlay").slideUp(700);
							},7000);
	
							setTimeout(function(){
									th.trigger("reset");
									$('.order_uslugi').attr('disabled', false);
							},7500);
					})
	
					.fail(function() {
							console.log("error");
							// alert('Ошибочка');
					});
	
			return false;
		});
		// обработка формы заказа услуги END





	// Кнопка обратного звонка
	$(".registration_link_01").click(function(){
		
		$(".modal_overlay").slideDown(600);

		$(".modal_tarif_01").delay(800).fadeIn(700);
	});

	$(".modal_overlay").click(function(){
		
		$(".modal_overlay").slideUp(600);

		$(".modal_tarif_01").fadeOut(500);
		return false;
	});
	// Кнопка обратного звонка END

			// обработка формы заказа услуги с тарифом базовый
	$('form#uslugi_tarif_01').submit(function(){

		$('.order_tarif_01').attr('disabled', true);
		var th = $(this);

		$.ajax({
				url: 'mail_application.php',
				type: 'POST',
				dataType: 'html',
				data: th.serialize()
		})
				.done(function() {
						console.log("success");

						setTimeout(function(){
							$(".modal_tarif_01").fadeOut(1100);
						},700);

						setTimeout(function(){
							$(".modal_01").slideDown(700);
						},2000);

						setTimeout(function(){
							$(".modal_01").slideUp(700);
						},6000);

						setTimeout(function(){
							$(".modal_overlay").slideUp(700);
						},7000);

						setTimeout(function(){
								th.trigger("reset");
								$('.order_tarif_01').attr('disabled', false);
						},7500);
				})

				.fail(function() {
						console.log("error");
						// alert('Ошибочка');
				});

		return false;
	});
	// обработка формы заказа услуги с тарифом базовый END




	// Кнопка обратного звонка
	$(".registration_link_02").click(function(){
		
		$(".modal_overlay").slideDown(600);

		$(".modal_tarif_02").delay(800).fadeIn(700);
	});

	$(".modal_overlay").click(function(){
		
		$(".modal_overlay").slideUp(600);

		$(".modal_tarif_02").fadeOut(500);
		return false;
	});
	// Кнопка обратного звонка END

		// обработка формы заказа услуги с тарифом стандарт
		$('form#uslugi_tarif_02').submit(function(){

			$('.order_tarif_02').attr('disabled', true);
			var th = $(this);
	
			$.ajax({
					url: 'mail_application.php',
					type: 'POST',
					dataType: 'html',
					data: th.serialize()
			})
					.done(function() {
							console.log("success");
	
							setTimeout(function(){
								$(".modal_tarif_02").fadeOut(1100);
							},700);
	
							setTimeout(function(){
								$(".modal_01").slideDown(700);
							},2000);
	
							setTimeout(function(){
								$(".modal_01").slideUp(700);
							},6000);
	
							setTimeout(function(){
								$(".modal_overlay").slideUp(700);
							},7000);
	
							setTimeout(function(){
									th.trigger("reset");
									$('.order_tarif_02').attr('disabled', false);
							},7500);
					})
	
					.fail(function() {
							console.log("error");
							// alert('Ошибочка');
					});
	
			return false;
		});
		// обработка формы заказа услуги с тарифом стандарт END





	// Кнопка обратного звонка
	$(".registration_link_03").click(function(){
		
		$(".modal_overlay").slideDown(600);

		$(".modal_tarif_03").delay(800).fadeIn(700);
	});

	$(".modal_overlay").click(function(){
		
		$(".modal_overlay").slideUp(600);

		$(".modal_tarif_03").fadeOut(500);
		return false;
	});
	// Кнопка обратного звонка END

					// обработка формы заказа услуги с тарифом под ключ
	$('form#uslugi_tarif_03').submit(function(){

		$('.order_tarif_03').attr('disabled', true);
		var th = $(this);

		$.ajax({
				url: 'mail_application.php',
				type: 'POST',
				dataType: 'html',
				data: th.serialize()
		})
				.done(function() {
						console.log("success");

						setTimeout(function(){
							$(".modal_tarif_03").fadeOut(1100);
						},700);

						setTimeout(function(){
							$(".modal_01").slideDown(700);
						},2000);

						setTimeout(function(){
							$(".modal_01").slideUp(700);
						},6000);

						setTimeout(function(){
							$(".modal_overlay").slideUp(700);
						},7000);

						setTimeout(function(){
								th.trigger("reset");
								$('.order_tarif_03').attr('disabled', false);
						},7500);
				})

				.fail(function() {
						console.log("error");
						// alert('Ошибочка');
				});

		return false;
	});
	// обработка формы заказа услуги с тарифом под ключ END



		// обработка формы Оставить заявку на странице отдельной услуги
		$('form#form_application').submit(function(){

			$('.link_application').attr('disabled', true);
			var th = $(this);
	
			$.ajax({
					url: 'mail_application.php',
					type: 'POST',
					dataType: 'html',
					data: th.serialize()
			})
					.done(function() {
							console.log("success");
							setTimeout(function(){
								$(".modal_01").slideDown(700);
							},1000);
	
							setTimeout(function(){
								$(".modal_01").slideUp(700);
							},7000);
	
	
							setTimeout(function(){
									th.trigger("reset");
									$('.link_application').attr('disabled', false);
							},7500);
					})
	
					.fail(function() {
							console.log("error");
							// alert('Ошибочка');
					});
	
			return false;
		});
		// обработка формы Оставить заявку на странице отдельной услуги END



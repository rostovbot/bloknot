$(document).ready(function(){


	// смена текста в кнопке "прикрепить резюме"
	(function() {
   
		'use strict';
	 
		$('.input-file').each(function() {
			var $input = $(this),
					$label = $input.next('.js-labelFile'),
					labelVal = $label.html();
			 
		 $input.on('change', function(element) {
				var fileName = '';
				if (element.target.value) fileName = element.target.value.split('\\').pop();
				fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
		 });
		});
	 
	})();
		// смена текста в кнопке "прикрепить резюме" END



	$("#phone").mask("8 (999) 999 99 99");
	$("#phone1").mask("8 (999) 999 99 99");
	$("#phone2").mask("8 (999) 999 99 99");
	$("#phone3").mask("8 (999) 999 99 99");
	$("#phone4").mask("8 (999) 999 99 99");
	$("#phone5").mask("8 (999) 999 99 99");
	$("#phone6").mask("8 (999) 999 99 99");
	$("#phone7").mask("8 (999) 999 99 99");
	$("#phone8").mask("8 (999) 999 99 99");
	$("#phone9").mask("8 (999) 999 99 99");
	$("#phone01").mask("8 (999) 999 99 99");



		// подключение sf-menu
	$('ul.sf-menu').superfish();


	// Слайдер top
	$("#slider_01").owlCarousel({
		items:1,
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
		nav:true,
	});
	// Слайдер top END



	// Кнопка обратного звонка
	$(".back_call").click(function(){
		
		$(".modal_overlay").slideDown(600);

		$(".modal").delay(800).fadeIn(700);
	});

	$(".modal_overlay").click(function(){
		
		$(".modal_overlay").slideUp(600);

		$(".modal").fadeOut(500);
		return false;
	});
	// Кнопка обратного звонка END



	// обработка формы обратного звонка
	$('form#recall').submit(function(){

		$('.order').attr('disabled', true);
		var th = $(this);

		$.ajax({
				url: 'mail.php',
				type: 'POST',
				dataType: 'html',
				data: th.serialize()
		})
				.done(function() {
						console.log("success");

						setTimeout(function(){
							$(".modal").fadeOut(1100);
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
								$('.order').attr('disabled', false);
						},7500);
				})

				.fail(function() {
						console.log("error");
						// alert('Ошибочка');
				});

		return false;
	});
	// обработка формы обратного звонка END



	// вкладка услуги на главной
	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	// вкладка услуги на главной END



	// обработка формы обратного звонка в блоке "о компании"
	$('form#recall_01').submit(function(){

		$('.order_01').attr('disabled', true);
		var th = $(this);

		$.ajax({
				url: 'mail.php',
				type: 'POST',
				dataType: 'html',
				data: th.serialize()
		})
				.done(function() {
						console.log("success");
						setTimeout(function(){
							$(".o_kompanii_modal").slideDown(700);
						},1000);

						setTimeout(function(){
							$(".o_kompanii_modal").slideUp(700);
						},7000);


						setTimeout(function(){
								th.trigger("reset");
								$('.order_01').attr('disabled', false);
						},7500);
				})

				.fail(function() {
						console.log("error");
						// alert('Ошибочка');
				});

		return false;
	});
	// обработка формы обратного звонка в блоке "о компании" END



	// листалка Наши партнеры на главной
	$("#partners").owlCarousel({
    loop: true,
		// autoHeight: true,
		// stagePadding: 5,
		// autoWidth:true,
		// center:true,
    // margin: 22,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 700,
    items: 6,
    dots:false,
    nav: false,
    navText: ['<img src="./img/arrow_left.svg">','<img src="./img/arrow_right.svg">'],
    responsiveClass: true,
    responsive:{
        0: {
          items: 1,
          nav:false,
        },

        800:{
          items: 2,
          nav:false
        },

        1100:{
          items: 6
        }
      }
			});



			
	// Слайдер отзывы
	$("#reviews").owlCarousel({
		items:1,
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		nav: false,
	});
	// Слайдер отзывы END




		// Слайдер статьи
		$("#articles").owlCarousel({
			items:1,
			loop:true,
			margin:0,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			nav: false,
		});
		// Слайдер статьи END



			// обработка формы обратного звонка в блоке "остались вопросы?"
	$('form#form_request').submit(function(){

		$('.request_Recall').attr('disabled', true);
		var th = $(this);

		$.ajax({
				url: 'mail.php',
				type: 'POST',
				dataType: 'html',
				data: th.serialize()
		})
				.done(function() {
						console.log("success");

						setTimeout(function(){
							$(".modal_overlay").slideDown(700);
						},1000);

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
								$('.request_Recall').attr('disabled', false);
						},7500);
				})

				.fail(function() {
						console.log("error");
						// alert('Ошибочка');
				});

		return false;
	});
	// обработка формы обратного звонка в блоке "остались вопросы?" END

		// Кнопка подписки
		$(".subscription_link").click(function(){
		
			$(".modal_overlay").slideDown(600);
	
			$(".modal_02").delay(800).fadeIn(700);
		});
	
		$(".modal_overlay").click(function(){
			
			$(".modal_overlay").slideUp(600);
	
			$(".modal_02").fadeOut(500);
			return false;
		});
		// Кнопка подписки END



			// обработка формы подписки
	$('form#subscription').submit(function(){

		$('.order').attr('disabled', true);
		var th = $(this);

		$.ajax({
				url: 'mail.php',
				type: 'POST',
				dataType: 'html',
				data: th.serialize()
		})
				.done(function() {
						console.log("success");

						setTimeout(function(){
							$(".modal_02").fadeOut(1100);
						},700);

						setTimeout(function(){
							$(".modal_03").slideDown(700);
						},2000);

						setTimeout(function(){
							$(".modal_03").slideUp(700);
						},6000);

						setTimeout(function(){
							$(".modal_overlay").slideUp(700);
						},7000);

						setTimeout(function(){
								th.trigger("reset");
								$('.order').attr('disabled', false);
						},7500);
				})

				.fail(function() {
						console.log("error");
						// alert('Ошибочка');
				});

		return false;
	});
	// обработка формы подписки END



			// Слайдер документации
			$("#documentation_slider").owlCarousel({
				items:6,
				loop:true,
				margin:0,
				autoplay:true,
				autoplayTimeout:5000,
				autoplayHoverPause:true,
				nav: false,
			});
			// Слайдер документации END

					// Кнопка оставить отзыв
					$(".reviews_button").click(function(){
			
						$(".modal_overlay").slideDown(600);
													
						$(".modal_reviews").delay(800).fadeIn(700);
					});
												
					$(".modal_overlay").click(function(){
													
						$(".modal_overlay").slideUp(600);
												
						$(".modal_reviews").fadeOut(500);
						return false;
					});
					// Кнопка оставить отзыв END


					// обработка формы оставить отзыв
					$('form#reviewsPage').submit(function(){

						$('.order_reviews').attr('disabled', true);
						var th = $(this);
				
						$.ajax({
								url: 'mail.php',
								type: 'POST',
								dataType: 'html',
								data: th.serialize()
						})
								.done(function() {
										console.log("success");
				
										setTimeout(function(){
											$(".modal_reviews").fadeOut(1100);
										},700);
				
										setTimeout(function(){
											$(".modal_reviews_01").slideDown(700);
										},2000);
				
										setTimeout(function(){
											$(".modal_reviews_01").slideUp(700);
										},6000);
				
										setTimeout(function(){
											$(".modal_overlay").slideUp(700);
										},7000);
				
										setTimeout(function(){
												th.trigger("reset");
												$('.order_reviews').attr('disabled', false);
										},7500);
								})
				
								.fail(function() {
										console.log("error");
										// alert('Ошибочка');
								});
				
						return false;
					});
					// обработка формы оставить отзыв END

	// вкладка на странице список новостей
	$(".tab_item_news_listPage").not(":first").hide();
	$(".wrapper_news_listPage .tab_news_listPage").click(function() {
		$(".wrapper_news_listPage .tab_news_listPage").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item_news_listPage").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	// вкладка на странице список новостей END

	// вкладка на странице список статей
	$(".tab_item_list_articlesPage").not(":first").hide();
	$(".wrapper_list_articlesPage .tab_list_articlesPage").click(function() {
		$(".wrapper_list_articlesPage .tab_list_articlesPage").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item_list_articlesPage").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	// вкладка на странице список статей END

		// вкладка на странице вакансии
		$(".tab_item_vacanciesPage").not(":first").hide();
		$(".wrapper_vacanciesPage .tab_vacanciesPage").click(function() {
			$(".wrapper_vacanciesPage .tab_vacanciesPage").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab_item_vacanciesPage").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");
		// вкладка на странице вакансии END



				// вкладка на странице контакты
				$(".tab_item_contactsPage").not(":first").hide();
				$(".wrapper_contactsPage .tab_contactsPage").click(function() {
					$(".wrapper_contactsPage .tab_contactsPage").removeClass("active").eq($(this).index()).addClass("active");
					$(".tab_item_contactsPage").hide().eq($(this).index()).fadeIn()
				}).eq(0).addClass("active");
				// вкладка на странице контакты END



		// фокус на инпуте загрузки файла на странице вакансии
		$('#file-input').focus(function() {
			$('label').addClass('focus');
		})
		.focusout(function() {
			$('label').removeClass('focus');
		});
		// фокус на инпуте загрузки файла на странице вакансии END

			// Кнопка отправить резюме
	$(".vacancies_button").click(function(){
			
		$(".modal_overlay").slideDown(600);
																	
		$(".modal_vacancies").delay(800).fadeIn(700);
	});
																
	$(".modal_overlay").click(function(){
																	
		$(".modal_overlay").slideUp(600);
																
		$(".modal_vacancies").fadeOut(500);
		return false;
	});
			// Кнопка отправить резюме END

	// обработка формы отправить резюме
	$('form#form_request_vacancies').submit(function(){

		$('.request_vacancies_Recall').attr('disabled', true);
		var th = $(this);
		var formData = new FormData($('#form_request_vacancies')[0]);

		$.ajax({
			url: 'mail_file.php',
			data: formData,
			processData: false,
			contentType: false,
			type: 'POST',
			dataType: 'html',
		})
				.done(function() {
						console.log("success");

						setTimeout(function(){
							$(".modal_overlay").slideDown(700);
						},1000);

						setTimeout(function(){
							$(".modal_vacancies_01").slideDown(700);
						},2000);

						setTimeout(function(){
							$(".modal_vacancies_01").slideUp(700);
						},6000);

						setTimeout(function(){
							$(".modal_overlay").slideUp(700);
						},7000);

						setTimeout(function(){
								th.trigger("reset");
								$('.request_vacancies_Recall').attr('disabled', false);
						},7500);

				})

				.fail(function() {
						console.log("error");
						// alert('Ошибочка');
				});

		return false;
	});
		// обработка формы отправить резюме END



			// обработка формы отправить резюме из модального окна
	$('form#form_request_vacancies_modal').submit(function(){

		$('.vacancies_Recall_modal').attr('disabled', true);
		var th = $(this);
		var formData = new FormData($('#form_request_vacancies_modal')[0]);

		$.ajax({
			url: 'mail_file.php',
			data: formData,
			processData: false,
			contentType: false,
			type: 'POST',
			dataType: 'html',
		})
				.done(function() {
						console.log("success");

						setTimeout(function(){
							$(".modal_vacancies").fadeOut(1100);
						},700);

						setTimeout(function(){
							$(".modal_vacancies_01").slideDown(700);
						},2000);

						setTimeout(function(){
							$(".modal_vacancies_01").slideUp(700);
						},6000);

						setTimeout(function(){
							$(".modal_overlay").slideUp(700);
						},7000);

						setTimeout(function(){
								th.trigger("reset");
								$('.vacancies_Recall_modal').attr('disabled', false);
						},7500);
				})

				.fail(function() {
						console.log("error");
						// alert('Ошибочка');
				});

		return false;
	});
	// обработка формы отправить резюме из модального окна END



	// выбор вкладки в блоке частые вопросы
  $(".set > a").on("click", function(){
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.content').slideUp(200);
      $(".set > a i").removeClass("mdi-minus").addClass("mdi-plus");
    }else{
      $(".set > a i").removeClass("mdi-minus").addClass("mdi-plus");
    $(this).find("i").removeClass("mdi-plus").addClass("mdi-minus");
    $(".set > a").removeClass("active");
    $(this).addClass("active");
    $('.content').slideUp(200);
    $(this).siblings('.content').slideDown(200);
    }
    return false;
	});
		// выбор вкладки в блоке частые вопросы END


	  //появление липкого меню
	$(window).scroll(function(){
    var heightMenu = $('header').height();
    var thisScroll = $(this).scrollTop();

    if(thisScroll >= heightMenu){
      $('.stick').addClass('stick_active');
    }
    else{
      $('.stick').removeClass('stick_active');
    }
	});

	$(window).scroll(function(){
		var heightMenu = $('.top_header').height();
		var thisScroll = $(this).scrollTop();
			
		if(thisScroll >= heightMenu){
			$('.bottom_header').addClass('bottom_header_aktiv');
		}
		else{
			$('.bottom_header').removeClass('bottom_header_aktiv');
		}
	});

	$(window).scroll(function(){
		var heightMenu = $('.top_header').height();
		var thisScroll = $(this).scrollTop();
			
		if(thisScroll >= heightMenu){
			$('.slider_top').addClass('activ_slider_top');
		}
		else{
			$('.slider_top').removeClass('activ_slider_top');
		}
	});
		//появление липкого меню END



		//появление липкого меню orange
		$(window).scroll(function(){
			var heightMenu = $('.top_header_orange').height();
			var thisScroll = $(this).scrollTop();
				
			if(thisScroll >= heightMenu){
				$('.stick_orange').addClass('stick_active_orange');
			}
			else{
				$('.stick_orange').removeClass('stick_active_orange');
			}
		});
	
		$(window).scroll(function(){
			var heightMenu = $('.top_header_orange').height();
			var thisScroll = $(this).scrollTop();
				
			if(thisScroll >= heightMenu){
				$('.bottom_header_orange').addClass('bottom_header_orange_aktiv');
			}
			else{
				$('.bottom_header_orange').removeClass('bottom_header_orange_aktiv');
			}
		});

		$(window).scroll(function(){
			var heightMenu = $('.top_header_orange').height();
			var thisScroll = $(this).scrollTop();
				
			if(thisScroll >= heightMenu){
				$('.uslugi_banner').addClass('uslugi_banner_aktiv');
			}
			else{
				$('.uslugi_banner').removeClass('uslugi_banner_aktiv');
			}
		});
		//появление липкого меню orange END



		//появление липкого меню lightblue
		$(window).scroll(function(){
			var heightMenu = $('.top_header_lightblue').height();
			var thisScroll = $(this).scrollTop();
				
			if(thisScroll >= heightMenu){
				$('.bottom_header_lightblue').addClass('bottom_header_lightblue_aktiv');
			}
			else{
				$('.bottom_header_lightblue').removeClass('bottom_header_lightblue_aktiv');
			}
		});

		$(window).scroll(function(){
			var heightMenu = $('.top_header_lightblue').height();
			var thisScroll = $(this).scrollTop();
				
			if(thisScroll >= heightMenu){
				$('.stick_lightblue').addClass('stick_active_lightblue');
			}
			else{
				$('.stick_lightblue').removeClass('stick_active_lightblue');
			}
		});
		//появление липкого меню lightblue END

		

		//появление липкого меню emerald
	$(window).scroll(function(){
		var heightMenu = $('.top_header_emerald').height();
		var thisScroll = $(this).scrollTop();
			
		if(thisScroll >= heightMenu){
			$('.stick_emerald').addClass('stick_active_emerald');
		}
		else{
			$('.stick_emerald').removeClass('stick_active_emerald');
		}
	});

	$(window).scroll(function(){
		var heightMenu = $('.top_header_emerald').height();
		var thisScroll = $(this).scrollTop();
			
		if(thisScroll >= heightMenu){
			$('.bottom_header_emerald').addClass('bottom_header_emerald_aktiv');
		}
		else{
			$('.bottom_header_emerald').removeClass('bottom_header_emerald_aktiv');
		}
	});
		//появление липкого меню emerald END



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
		var aktivblock = $('.body').height();
		var buferblock = 770;
		var thisScroll = $(this).scrollTop();
									
		if(thisScroll >= aktivblock - buferblock){
			$('.active_tabs_management_and_registration_orange').addClass('active_tabs_management_and_registration_orange_none');
		}
		else{
			$('.active_tabs_management_and_registration_orange').removeClass('active_tabs_management_and_registration_orange_none');
		}
	});                          
		//снятие фиксации левого меню orange на странице услуги END		
		
		

				//фиксация левого меню lightblue на странице услуги
				$(window).scroll(function(){
					var heightMenu = 240;
					var thisScroll = $(this).scrollTop();
												
					if(thisScroll >= heightMenu){
						$('.tabs_legal_services_lightblue').addClass('active_tabs_legal_services_lightblue');
					}
					else{
						$('.tabs_legal_services_lightblue').removeClass('active_tabs_legal_services_lightblue');
					}
				});
					//фиксация левого меню lightblue на странице услуги END
			
			
					//снятие фиксации левого меню lightblue на странице услуги
				$(window).scroll(function(){
					var aktivblock = $('.body').height();
					var buferblock = 770;
					var thisScroll = $(this).scrollTop();
												
					if(thisScroll >= aktivblock - buferblock){
						$('.active_tabs_legal_services_lightblue').addClass('active_tabs_legal_services_lightblue_none');
					}
					else{
						$('.active_tabs_legal_services_lightblue').removeClass('active_tabs_legal_services_lightblue_none');
					}
				});                          
					//снятие фиксации левого меню lightblue на странице услуги END	



				//фиксация левого меню emerald на странице услуги
	$(window).scroll(function(){
		var heightMenu = 240;
		var thisScroll = $(this).scrollTop();
									
		if(thisScroll >= heightMenu){
			$('.tabs_accounting_services_emerald').addClass('active_tabs_accounting_services_emerald');
		}
		else{
			$('.tabs_accounting_services_emerald').removeClass('active_tabs_accounting_services_emerald');
		}
	});
		//фиксация левого меню emerald на странице услуги END


		//снятие фиксации левого меню emerald на странице услуги
	$(window).scroll(function(){
		var aktivblock = $('.body').height();
		var buferblock = 770;
		var thisScroll = $(this).scrollTop();
									
		if(thisScroll >= aktivblock - buferblock){
			$('.active_tabs_accounting_services_emerald').addClass('active_tabs_accounting_services_emerald_none');
		}
		else{
			$('.active_tabs_accounting_services_emerald').removeClass('active_tabs_accounting_services_emerald_none');
		}
	});                          
		//снятие фиксации левого меню emerald на странице услуги END		



		// Переключение активного пункта левого меню при скролле на странице услуги

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
		// Переключение активного пункта левого меню при скролле на странице услуги END

	


	// SCROLL ON CLICK
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
	$(".tarif_link").click(function(){
		
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
					url: 'mail.php',
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
	$(".tarif_link_01").click(function(){
		
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
				url: 'mail.php',
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
	$(".tarif_link_02").click(function(){
		
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
					url: 'mail.php',
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
	$(".tarif_link_03").click(function(){
		
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
				url: 'mail.php',
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
					url: 'mail.php',
					type: 'POST',
					dataType: 'html',
					data: th.serialize()
			})
					.done(function() {
							console.log("success");
							setTimeout(function(){
								$(".modal_overlay").slideDown(700);
							},1000);
	
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



	




});



		

										

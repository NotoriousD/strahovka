$(function() {

	$('.open-smenu').hover(function(){
		$(this).toggleClass('open-smenu-active');
	});

	$('.vkl').click(function(e){
		e.preventDefault();
		$('.fr-item ').find('.fi-bot').toggleClass('fi-bot-active');
	});

	$('.open-popup-link').magnificPopup({
		
	  });

	$('.toggle-mnu').click(function(){
		$('.top-toggle-mnu').toggleClass('top-toggle-mnu-active');
	});

	$(document).mouseup(function (e) {
		var container = $(".top-toggle-mnu");
		if (container.has(e.target).length === 0){
			container.removeClass('top-toggle-mnu-active');
		}
	});


	  var winWidth = $(window).width();

	  if(winWidth <= 900){
		  $('.toggle-mnu').click(function(){
			$('.top-mnu ul').toggleClass('mnu-active')
		  });
		}

		$('.faq h2').click(function(){
			$(this).toggleClass('h-active');
			$(this).parents(".faq").toggleClass('faq-active');
		});
		
		$('.open-select a').click(function(e){
			e.preventDefault();
			$(this).toggleClass("open-select-active");
			$(this).parents(".open-select").children(".toggle-select").toggleClass("toggle-select-active");
		});

		$('.fl-drop-down a').click(function(e){
			e.preventDefault();
			$(this).toggleClass("open-select-active");
			$(this).parents(".fl-drop-down").children(".toggle-select").toggleClass("toggle-select-active");
		});

		
		$('#dtp1').datetimepicker({
			viewMode: 'years'
		});

		$('#dtp2').datetimepicker({
			viewMode: 'years'
		});

		$('#dtp3').datetimepicker({
			viewMode: 'years'
		});

		$('#dtp4').datetimepicker({
			viewMode: 'years'
		});

		$('#dtp5').datetimepicker({
			viewMode: 'years'
		});


});

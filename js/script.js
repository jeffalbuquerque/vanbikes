(function($) {

		function getWindowSize() {
			windowHeight = $(window).height();
			windowWidth = $(window).width();

			// Atribuindo altura da tela para #webgoal, #contato
			$('#topo , #servicos, #contato').css({height: windowHeight});


			if(windowHeight > 629)
				heightRatio = windowHeight / 750;
			else
				heightRatio = 1.06;

		}
		

		$(document).ready(function(){
			getWindowSize();
			
			// SCROLL EASING
			$('nav.menu a')
				.bind('click',function(event){ 
					var $anchor = $(this);
		        	$('html, body').stop().animate({
		            	scrollTop: $($anchor.attr('href')).offset().top
	        		}, 800,'easeInOutExpo');
		        	
	        		event.preventDefault();
	    		});

		});


})( jQuery );

function setupAlertScroll(){
	jQuery('a.seta').hide();
	alertScroll();
	jQuery(window).scroll(function(){
		jQuery('a.seta').animate({opacity: 0}, 600);
	});
}

function alertScroll(){
	jQuery('a.seta').fadeIn('slow').delay(800).fadeOut('slow', alertScroll);
}

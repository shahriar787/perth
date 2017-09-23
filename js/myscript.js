$(document).ready(function() {
 	
 	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 569) {
	        $(".navbar").addClass("dark-bar");
	    } else {
	        $(".navbar").removeClass("dark-bar");
	    }
	});


 	// Menu bar
	$( ".menu" ).click(function() {
		$(this).toggleClass('m c');
		$('.menu span').toggleClass('ion-navicon ion-android-close');
		$('#menu-item').toggleClass( "show-menu hide-menu" );
	});

	$( "#menu-item a" ).click(function() {
		$('.menu').toggleClass('c m');
		$('.menu span').toggleClass('ion-navicon ion-android-close');
		$('#menu-item').toggleClass( "show-menu hide-menu" );
	});


});



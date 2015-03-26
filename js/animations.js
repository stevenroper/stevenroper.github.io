$(document).ready(function() {
	
	$('.contact-message').focus(function() {
		$('.contact-message').animate({rows: 7}, 250);
	}).blur(function() {
		$('.contact-message').animate({rows: 1}, 250);
	});

});
$(document).ready(function() {
	
	var textareaHeight = 0;
	$('.contact-message').focus(function() {
		textareaHeight = $('.contact-message').height();
		console.log(textareaHeight);
		$('.contact-message').animate({rows: 7}, 250);
	}).blur(function() {
		$('.contact-message').animate({rows: 1}, 250);
	});

});
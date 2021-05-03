$(document).ready(function(){

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var options = {
		strings: ['学生', '游戏爱好者'],
  		typeSpeed: 90,
  		loop: true,
  		startDelay: 1000,
  		showCursor: false,
  		fadeOut: true
	};

	var typed = new Typed('.typed', options);
});
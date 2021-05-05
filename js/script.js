$(document).ready(function(){

	// activing superslides for top image to slide
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	// creating the typed effect of the words
	var options = {
		strings: ['学生', '游戏爱好者'],
  		typeSpeed: 90,
  		loop: true,
  		startDelay: 1000,
  		showCursor: false,
  		fadeOut: true
	};

	var typed = new Typed('.typed', options);

	// activing owl carousel for scrolling left or right of skill section
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

	var skillsTopOffset = $(".skillsSection").offset().top;
	$(window).scroll(function(){
		if (window.pageYOffset > skillsTopOffset - $(window).height() + 100){
			$('.chart').easyPieChart({
			    barColor: "#fff",
			    trackColor: false,
			    scaleColor: false,
			    easing: "easeInOut",
			    size: 152,
			    lineWidth: 4,
			    onStep: function(from, to, percent){
			    	$(this.el).find(".percent").text(Math.round(percent));
			    }
			});
		}
	});

	
});
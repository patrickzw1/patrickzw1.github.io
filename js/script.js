$(window).on("load", function(){
	$(".loader .inner").fadeOut(500, function(){
		$(".loader").fadeOut(750);
	});

	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});
});

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

	// active fancybox
	// ps: fancybox and isotope need purchase if project go commercial
	$("[data-fancybox]").fancybox();

	$("#filters a").click(function(){
		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");
		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	});

	//this will move slow at first and then fast which is not good.
	$("#navigation a").click(function(e){
		e.preventDefault();
		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({scrollTop: targetPosition - 50}, "fast");
	});

	const nav = $("#navigation");
	const navTop =  nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation(){
		var body = $("body");
		if ($(window).scrollTop() >= navTop){
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else{
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
	};
});
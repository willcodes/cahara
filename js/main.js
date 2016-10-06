$(document).ready(function(){ //doc ready
	//vars
	var  topNav = $(".top-nav");
	    topNavFixed = "top-nav-scrolled";
	    header = $('header').height();
	    //vars for header-slider
	    dots = $('.dots__white');
	    activeDots = 'dots__active';
	    bgOne = $('#bg-one');
	    bgTwo = $('#bg-two');
	    bgThree = $('#bg-three');
	    counter = 0;
	    interval = setInterval(increment, 5000);

	//init styling
	bgOne.addClass(activeDots);
	//stick nav
	$(window).scroll(function() {
	  if( $(this).scrollTop() > header ) {
	    topNav.addClass(topNavFixed);
	    $('#small-menu').css('background', '#040E18');
	 } 
		else {
	    topNav.removeClass(topNavFixed);
	    $('#small-menu').css('background', 'transparent');
	  }
	});
	//show menu
		$("#navExpand").click(function(){
			$("#nav__menu").slideDown();
			$("#navExpand").hide();
		});
		$(".close").click(function(){
			$("#nav__menu").slideUp();
			$("#navExpand").show();
		});

		//slick
		$('#partners__slick').slick({
		  infinite: true,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  dots: true,
		  arrows: false,
		  responsive: [
		     {
		       breakpoint: 767,
		       settings: {
		         slidesToShow: 2,
		         slidesToScroll: 2
		       }
		     }
		     // You can unslick at a given breakpoint now by adding:
		     // settings: "unslick"
		     // instead of a settings object
		   ]
		});
		//blog slick
		$('#slick__blog').slick({
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  dots: true,
		  arrows: false,
		  responsive: [
		     {
		       breakpoint: 767,
		       settings: {
		         slidesToShow: 2,
		         slidesToScroll: 2
		       }
		     },
		     {
		       breakpoint: 650,
		       settings: {
		         slidesToShow: 1,
		         slidesToScroll: 1
		       }
		     }
		     // You can unslick at a given breakpoint now by adding:
		     // settings: "unslick"
		     // instead of a settings object
		   ]
		});
	//change bg image
		function increment(){
			counter = counter + 1;
			if (counter >= 1) {
				$('header').css('background-image', 'url(./assets/hero_img.jpg)');
				dots.removeClass(activeDots);
				bgOne.addClass(activeDots);
				
			}
			if (counter >= 2) {
				$('header').css('background-image', 'url(./assets/hero-2.jpg)');
				dots.removeClass(activeDots);
				bgTwo.addClass(activeDots);
				
			}
			if (counter >= 3) {
				$('header').css('background-image', 'url(./assets/hero-3.jpg)');
				dots.removeClass(activeDots);
				bgThree.addClass(activeDots);
				
			}

			if (counter > 4) {
				counter = 0;
			}
		}
		bgOne.click(function(){
			$('header').css('background-image', 'url(./assets/hero_img.jpg)');
			counter = 1;
			dots.removeClass(activeDots);
			bgOne.addClass(activeDots);
		
		});
		bgTwo.click(function(){
			$('header').css('background-image', 'url(./assets/hero-2.jpg)');
			dots.removeClass(activeDots);
			bgTwo.addClass(activeDots);
			counter = 2;
		
		});
		bgThree.click(function(){
			$('header').css('background-image', 'url(./assets/hero-3.jpg)');
			dots.removeClass(activeDots);
			bgThree.addClass(activeDots);
			counter = 3;
		});
		//gooogle map
	$('.map').click(function () {
	    $('.map iframe').css("pointer-events", "auto");
	});



	// Get the modal
	var modal = document.getElementById('myModal');
	var btn = document.getElementById("myBtn");
	var span = document.getElementsByClassName("close")[1];
	var video = $("video");
	btn.onclick = function() {
	    modal.style.display = "block";
	    video.get(0).play();
	}
	span.onclick = function() {
	    modal.style.display = "none";
	}
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	        video.get(0).pause();
	    }
	}
});
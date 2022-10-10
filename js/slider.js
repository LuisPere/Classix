

//when the page loads I want to configure slick the way I want to use it based off the object that is passed in 
$(document).ready(function(){
	$('.featured-content').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		pauseOnHover: false,
		pauseOnFocus: false,
		autoplay: true,
	});
});


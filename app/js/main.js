$(function () {



	$('.slider-inner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-right"></span></button>',
		nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-left"></span></button>'
	});

	$('.follower_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-right"></span></button>',
		nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-left"></span></button>'


	});


	$(".rate-star").rateYo({
		rating: 4.5,
		readOnly: true,
		starWidth: "15px"
	});
	var mixer = mixitup('.new_items-slider');
});
// const { on } = require("gulp");

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

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 400,
		from: 30,
		to: 300,
		prefix: "$"
	});

	$('.but-grid').on('click', function () {
		$('.product__page-item').addClass('grid').removeClass('list');
		$('.but-grid').addClass('active');
		$('.but-list').removeClass('active');
	});

	$('.new_products').on('click', function () {
		$('.new_products').addClass('active');
		$('.popular_products').removeClass('active');
	});

	$('.popular_products').on('click', function () {
		$('.popular_products').addClass('active');
		$('.new_products').removeClass('active');
	});

	$('.items_price').on('click', function () {
		$('.items_price').toggleClass('lnr-chevron-up');
	});

	$('.items-onpage').on('click', function () {
		$('.items-onpage').toggleClass('lnr-chevron-up');
	});

	$('.but-list').on('click', function () {
		$('.product__page-item').removeClass('grid').addClass('list');
		$('.but-list').addClass('active');
		$('.but-grid').removeClass('active');
	});

	$('.categories').on('click', function () {
		$('.categories-list > ul').slideToggle();
		$('.categories').toggleClass('lnr-chevron-up');
	});

	$('.products').on('click', function () {
		$('.products-list > ul').slideToggle();
		$('.products').toggleClass('lnr-chevron-up');
	});

	$('.search').on('click', function () {
		$('.search-page').slideToggle();
		$('.search').toggleClass('lnr-chevron-up');
	});



	var mixer = mixitup('.new_items-slider');
});
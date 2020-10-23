$(document).ready(function(){
	if (!location.href.includes("chobani-careers.reconstrukt.net")) {
		$("head").remove();
	}

	var zigzagHeight = $('.bg-wrap').parent().height();
	$('.bg-wrap').css('width', zigzagHeight);

	$('.chobani-perks .carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		centerMode: true,
		centerPadding: '480px',
		responsive: [
			{ 
				breakpoint: 1600,
				settings: {
					dots: true,
					centerMode: true,
					centerPadding: '300px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1400,
				settings: {
					dots: true,
					centerMode: true,
					centerPadding: '250px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1200,
				settings: {
					dots: true,
					centerMode: true,
					centerPadding: '150px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					dots: true,
					centerMode: true,
					centerPadding: '70px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					dots: true,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					dots: true,
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.chobani-culture .carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		centerMode: true,
		centerPadding: '400px',
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					dots: true,
					centerMode: true,
					centerPadding: '250px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1200,
				settings: {
					dots: true,
					centerMode: true,
					centerPadding: '50px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					dots: true,
					centerMode: true,
					centerPadding: '70px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					dots: true,
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					dots: true,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.slide-card .video').on('click', function() {
		var imageHeight = $(this).height();
		$(this).addClass('d-none');
		$(this).parent().find('iframe').attr('height', imageHeight);
		const source = $(this).parent().find('iframe').attr('src');
		$(this).parent().find('iframe').attr('src', source  + '?autoplay=1&loop=1&rel=0&wmode=transparent');
		$(this).parent().find('iframe').attr('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
		$(this).parent().find('iframe').css('display', 'block');
	});

	$(window).on('resize', function() {
		var slickHeight = $('.chobani-culture .video .video-bg').height();
		$('iframe').attr('height', slickHeight);

		var zigzagHeight = $('.bg-wrap').parent().height();
		console.log(zigzagHeight);
		$('.bg-wrap').css('width', zigzagHeight);
	})
});
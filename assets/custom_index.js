$(document).ready(function(){
  
  if ( ! $('body').hasClass('home-page') ) {
    // stop manipulating DOM if not on homepage
    return;
  }
  
	if (location && location.href && !location.href.includes("chobani-careers.reconstrukt.net")) {
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
  
  var jobCats = [{
    title: 'Administration',
    url: '/go/Administration/6847550/'
  },{
    title: 'Cafe',
    url: '/go/Cafe/6847650/'
  },{
    title: 'Communication',
    url: '/go/Communication/6847750/'
  },{
    title: 'Corporate Affairs',
    url: '/go/Corporate-Affairs/6847850/'
  },{
    title: 'Engineering',
    url: '/go/Engineering/6847950/'
  },{
    title: 'Finance',
    url: '/go/Finance/6848050/'
  },{
    title: 'Information Technology',
    url: '/go/Information-Technology/6848150/'
  },{
    title: 'Innovation',
    url: '/go/Innovation/6848250/'
  },{
    title: 'Legal',
    url: '/go/Legal/6848350/'
  },{
    title: 'Logistics',
    url: '/go/Logistics/6848450/'
  },{
    title: 'Marketing',
    url: '/go/Marketing/6848550/'
  },{
    title: 'People',
    url: '/go/People/6848650/'
  },{
    title: 'Planning and Product  Supply',
    url: '/go/Planning-and-Product-Supply/6848750/'
  },{
    title: 'Plant Operations',
    url: '/go/Plant-Operations/6848850/'
  },{
    title: 'Procurement',
    url: '/go/Procurement/6848950/'
  },{
    title: 'Quality',
    url: '/go/Quality/6849050/'
  },{
    title: 'Research & Development',
    url: '/go/Research-&amp;-Development/6849150/'
  },{
    title: 'Sales',
    url: '/go/Sales/6849250/'
  },{
    title: 'Sales & Operations Planning',
    url: '/go/Sales-&amp;-Operations-Planning/6849350/'
  },{
    title: 'Supply Chain',
    url: '/go/Supply-Chain/6849450/'
  },{
    title: 'Transporation',
    url: '/go/Transporation/6849550/'
  }];
  
  var categoryContainer = $('.js-chobani-job-categories');
  categoryContainer.empty();
  
  var href, html = '';
  
  for ( var i=0; i<jobCats.length; i++ ) {
    
    html += '<div class="row">';
    
    if( typeof jobCats[i] !== 'undefined' ) {
      href = jobCats[i].url + '?category=' + encodeURIComponent(jobCats[i].title);
      html += '<div class="col-md-4">';
      html += '<a class="h4 color-green text-center" href="' + href + '">' + jobCats[i].title + '</a>';
      html += '</div>';
    }
    
    i++;
    if( typeof jobCats[i] !== 'undefined' ) {
      href = jobCats[i].url + '?category=' + encodeURIComponent(jobCats[i].title);
      html += '<div class="col-md-4">';
      html += '<a class="h4 color-green text-center" href="' + href + '">' + jobCats[i].title + '</a>';
      html += '</div>';
    }
    
    i++;
    if( typeof jobCats[i] !== 'undefined' ) {
      href = jobCats[i].url + '?category=' + encodeURIComponent(jobCats[i].title);
      html += '<div class="col-md-4">';
      html += '<a class="h4 color-green text-center" href="' + href + '">' + jobCats[i].title + '</a>';
      html += '</div>';
    }
    
    html += '</div>';
  }
  
  categoryContainer.html( html );
  
});
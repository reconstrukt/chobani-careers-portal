$(document).ready(function(){
	
  if (location && location.href && !location.href.includes("chobani-careers.reconstrukt.net")) {
    $("head").find("link[rel=stylesheet]").each(function(){
      if ( $(this).attr('href').indexOf('chobani-careers-portal') == -1 ) {
        // $(this).remove();
        // console.log( 'removed css: ' + $(this).attr('href') );
      }
    });
  }
  
  if ( $('body').hasClass('home-page') ) {
    console.log('home page');
  }
  
  if ( $('body').hasClass('talentlanding-page') ) {
    console.log('job category page');
  }
  
  if ( $('body').hasClass('job-page') ) {
    console.log('job detail page');
  }
  
  if ( $('body').hasClass('search-page') ) {
    console.log('search results page');
  }
  
});
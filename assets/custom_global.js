$(document).ready(function(){
	
  if (location && location.href && !location.href.includes("chobani-careers.reconstrukt.net")) {
		$("head").find("link[rel=stylesheet]").each(function(){
      if ( $(this).attr('href').indexOf('chobani-careers-portal') == -1 ) {
        $(this).remove();
        console.log( 'removed css: ' + $(this).attr('href') );
      }        
    });
	}
  
});
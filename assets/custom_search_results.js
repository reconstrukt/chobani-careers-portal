$(document).ready(function(){
	
  if ( ! $('body').hasClass('search-page') ) {
    // stop manipulating DOM if not on job detail page 
    return;
  }
  
	$("#header").replaceWith(chobaniTheme.header);

  $("#footer").replaceWith(chobaniTheme.footer);

});
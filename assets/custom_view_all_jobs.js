$(document).ready(function(){
	
  if ( ! $('body').hasClass('viewall-page') ) {
    // stop manipulating DOM if not on job detail page 
    return;
  }
  
	$("#header").replaceWith(chobaniTheme.header);

  $("#footer").replaceWith(chobaniTheme.footer);

});
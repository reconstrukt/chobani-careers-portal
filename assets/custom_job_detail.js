$(document).ready(function(){
	
  if ( ! $('body').hasClass('job-page') ) {
    // stop manipulating DOM if not on job detail page 
    return;
  }
  
  var profileLink = $('#header .profileWidget a');  
	$("#header").replaceWith(chobaniTheme.header);
  $('header').find('.js-chobani-header-links').append( profileLink );
  
  $("#footer").replaceWith(chobaniTheme.footer);

});
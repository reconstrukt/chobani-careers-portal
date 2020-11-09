$(document).ready(function(){
	
  if ( ! $('body').hasClass('job-page') ) {
    // stop manipulating DOM if not on job detail page 
    return;
  }
  
  var profileLinks = $('#header .profileWidget a');
  var profileLink = $( profileLink[0] );
  profileLink.removeAttr( 'class' );
  profileLink.addClass( 'font-weight-light mr-5 h6' );
  
	$("#header").replaceWith(chobaniTheme.header);
  $('header').find('.js-chobani-header-links').append( profileLink );
  
  $("#footer").replaceWith(chobaniTheme.footer);

});
jQuery(document).ready(function( $ ){
	
  if ( ! $('body').hasClass('job-page') ) {
    // stop manipulating DOM if not on job detail page 
    return;
  }
  
  // var profileLinks = $('#header .profileWidget a');
  // var profileLink = $( profileLinks[0] );
  // profileLink.removeAttr( 'style' ).removeAttr( 'class' );
  // profileLink.addClass( 'font-weight-light ml-5 h6' );
  
	$("#header").replaceWith(chobaniTheme.header);
  
  // $('header').find('.js-chobani-header-links').append( profileLink );
  
  $("#footer").replaceWith(chobaniTheme.footer);
  
  var allJobsURL = '/go/All-Jobs/8610600/';
  if ( chobaniTheme.env != 'production' ) {
    allJobsURL = '/go/All-Jobs/7063450/';
  }
  var allJobsLink = $('.js-chobani-all-jobs');
  allJobsLink.attr('href', allJobsURL);

});
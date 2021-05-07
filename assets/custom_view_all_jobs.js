jQuery(document).ready(function( $ ){
	
  if ( ! $('body').hasClass('viewall-page') ) {
    // stop manipulating DOM if not on job detail page 
    return;
  }
  
	$("#header").replaceWith(chobaniTheme.header);

  $("#footer").replaceWith(chobaniTheme.footer);

  $('.searchbycat').find('a').each(function() {
    var href = $(this).attr('href');
    var category = $(this).text();
    $(this).attr('href', href + '?category=' + category);
  })
  
  var allJobsURL = '/go/All-Jobs/8610600/';
  if ( chobaniTheme.env != 'production' ) {
    allJobsURL = '/go/All-Jobs/7063450/';
  }
  var allJobsLink = $('.js-chobani-all-jobs');
  allJobsLink.attr('href', allJobsURL);
});
$(document).ready(function(){
	
  if ( ! $('body').hasClass('viewall-page') ) {
    // stop manipulating DOM if not on job detail page 
    return;
  }
  
	$("#header").replaceWith(chobaniTheme.header);

  $("#footer").replaceWith(chobaniTheme.footer);

  $('.searchbycat').find('a').each(function() {
    var href = $(this).attr('href');
    var category = $(this).text();
    $(this).attr('href', href + '/' + category);
  })
});
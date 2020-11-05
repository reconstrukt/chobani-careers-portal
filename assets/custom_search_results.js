$(document).ready(function(){
	
  if ( ! $('body').hasClass('search-page') ) {
    // stop manipulating DOM if not on job detail page 
    return;
  }
  
  $("#header").replaceWith(chobaniTheme.header);
  var mainSection = getParameterByName('category') ? chobaniTheme.main.replace("%CATEGORY%", getParameterByName('category')) : ``;

	$("#header").replaceWith(chobaniTheme.header + mainSection);

  $("#footer").replaceWith(chobaniTheme.footer);

});
$(document).ready(function(){
	
  if ( ! $('body').hasClass('search-page') ) {
    // stop manipulating DOM if not on job detail page 
    return;
  }
  
	function getParameterByName(name, url = window.location.href) {
		name = name.replace(/[\[\]]/g, '\\$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}
  
	var mainSection = getParameterByName('category') && getParameterByName('category') !== 'null' ? chobaniTheme.main.replace("%CATEGORY%", getParameterByName('category')) : ``;

	$("#header").replaceWith(chobaniTheme.header + mainSection);

  $("#footer").replaceWith(chobaniTheme.footer);

  setTimeout(function() {
    $(".jobAlertsSearchForm").append(`<input name="category" type="hidden" value="` + getParameterByName('category') +`">`);
    $("#searchfilter").append(`<input name="category" type="hidden" value="` + getParameterByName('category') +`">`);
  }, 500);


});
jQuery(document).ready(function( $ ){
	
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

	$(".jobAlertsSearchForm").submit(function(e) {
		$(".jobAlertsSearchForm").append(`<input name="category" type="hidden" value="` + getParameterByName('category') +`">`);
		return true;
	});

	$("#searchfilter").submit(function(e) {
		$("#searchfilter").append(`<input name="category" type="hidden" value="` + getParameterByName('category') +`">`);
		return true;
	});
  
  var allJobsURL = '/go/All-Jobs/8610600/';
  if ( chobaniTheme.env != 'production' ) {
    allJobsURL = '/go/All-Jobs/7063450/';
  }
  var allJobsLink = $('.js-chobani-all-jobs');
  allJobsLink.attr('href', allJobsURL);

});
$(document).ready(function(){
	
  if ( ! $('body').hasClass('talentlanding-page') ) {
    // stop manipulating DOM if not on job category page 
    return;
  }
  
	function getParameterByName(name, url = window.location.href) {
		name = name.replace(/[\[\]]/g, '\\$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
    var str = decodeURIComponent(results[2].replace(/\+/g, ' '));
    return str.replace(/[^a-zA-Z0-9\s-]/g, '');
	}

	function getCategoryFromURL(url = window.location.pathname) {
		return url.split('/').length >= 2 && url.split('/')[2];
	}

	if (getCategoryFromURL()) {
		$('.main-filters .category').hide();
		$('.job-category .category').text(getParameterByName('category'));
	} else {
		$('.keywordsearch-button').text('Search All Jobs');
	}
  
  var catName = '';
  if ( catName == '') {
    if ( getParameterByName('category') ) {
      catName = getParameterByName('category');
    }
  }
  if ( catName == '') {
    if ( $('#category-name').length > 0 ) {
      catName = $('#category-name').text();
    }
  }
  if ( catName == '') catName = 'Jobs at Chobani';
  
	var mainSection = chobaniTheme.main.replace("%CATEGORY%", catName);

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
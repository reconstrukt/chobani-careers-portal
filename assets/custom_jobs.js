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
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}

	if (getParameterByName('category')) {
		$('.main-filters .category').hide();
		$('.job-category .category').text(getParameterByName('category'));
		$('.search-filter').css('width', '50%');
		$('.location').css('width', '35%');
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
  if ( catName == '') catName = 'All Jobs';
  
	var mainSection = chobaniTheme.main.replace("%CATEGORY%", catName);

	$("#header").replaceWith(chobaniTheme.header + mainSection);

  $("#footer").replaceWith(chobaniTheme.footer);

});
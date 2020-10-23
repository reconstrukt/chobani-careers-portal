$(document).ready(function(){
	if (location && location.href && !location.href.includes("chobani-careers.reconstrukt.net")) {
		$("head").remove();
	}
	var location = [];
	var category = [];

	var jobsList = [
		{ title: 'Commercial Finance Analyst', location: 'New York City, New York', category: 'Finance'},
		{ title: 'Senior Manager of Enterprise Data Governance', location: 'New York City, New York', category: 'Information Technology'},
		{ title: 'Network Engineer', location: '2 locations', category: 'Information Technology'},
		{ title: 'IT Project Manager', location: '2 locations', category: 'Information Technology'},
		{ title: 'Senior IT Technician', location: 'New York City, New York', category: 'Information Technology'},
		{ title: 'Maintenance Technician I or II - D Shift 4:00 PM to 4:30 AM (Every other weekend required)', location: 'Twin Falls, Idaho', category: 'Manufacturing'},
		{ title: 'Maintenance Technician I or II - C Shift 4:00 PM to 4:30 AM (Every other weekend required)', location: 'Twin Falls, Idaho', category: 'Manufacturing'},
		{ title: 'Production Supervisor - Nights', location: 'Twin Falls, Idaho', category: 'Plant Operations'},
		{ title: 'Preventive Maintenance Technician (Grade 6) - D Shift (6:00 PM to 6:30 AM)', location: 'New Berlin, New York', category: 'Plant Operations'},
		{ title: 'Maintenance Technician (Grade 7) - C Shift (6:00PM-6:30AM)', location: 'New Berlin, New York', category: 'Plant Operations'},
		{ title: 'Junior Electrical Maintenance Technician', location: 'Twin Falls, Idaho', category: 'Plant Operations'},
		{ title: 'Security Officer - D Shift (6:00PM-6:30AM)', location: 'New Berlin, New York', category: 'Plant Operations'},
		{ title: 'Fruit Room Operator (Grade 4) - A Shift (6:00AM-6:30PM, Every other weekend required)', location: 'New Berlin, New York', category: 'Plant Operations'},
		{ title: 'Cereal Filler (Grade 4) - C Shift (6:00 PM to 6:30 AM, every other weekend required)', location: 'Twin Falls, Idaho', category: 'Plant Operations'},
		{ title: 'R&D Scientist II', location: 'Twin Falls, Idaho', category: 'Research & Development'},
		{ title: 'Retail Sales & Execution Specialist - Bronx, NY (Remote)', location: 'New York, New York', category: 'Sales'},
		{ title: 'Retail Sales & Execution Specialist - McLean, VA (Remote)', location: 'McLean, Virginia', category: 'Sales'},
		{ title: 'Retail Sales & Execution Specialist - Omaha, NE (Remote)', location: 'Lincoln, Nebraska', category: 'Sales'},
		{ title: 'Retail Sales & Execution Specialist - Stamford, CT (Remote)', location: 'Stamford, Connecticut', category: 'Sales'},
		{ title: 'Retail Sales & Execution Specialist - Brooklyn, NY (Remote)', location: 'New York, New York', category: 'Sales'},
		{ title: 'Truck Driver (Grade 7) - Nights', location: 'New Berlin, New York', category: 'Transportation'},
	];

	var page = 1;
	var filteredList = Object.assign([], jobsList);

	$.fn.select2.amd.require([
		'select2/selection/single',
		'select2/selection/placeholder',
		'select2/selection/allowClear',
		'select2/dropdown',
		'select2/dropdown/search',
		'select2/dropdown/attachBody',
		'select2/utils'
	], function (SingleSelection, Placeholder, AllowClear, Dropdown, DropdownSearch, AttachBody, Utils) {

		var SelectionAdapter = Utils.Decorate(
			SingleSelection,
			Placeholder
		);
		
		SelectionAdapter = SelectionAdapter;
					
		var DropdownAdapter = Utils.Decorate(
			Dropdown,
			AttachBody
		);
		
		var $selectLocation = $('.selector-location');
		var $selectCategory = $('.selector-category');

		$($selectLocation).select2({
			placeholder: 'Select multiple items',
			selectionAdapter: SelectionAdapter,
			dropdownAdapter: DropdownAdapter,
			allowClear: false,
			templateResult: function (data) {

				if (!data.id) { return data.text; }

				var $res = $('<div></div>');

				$res.text(data.text);
				$res.addClass('wrap');

				return $res;
			},
			templateSelection: function (data) {
				return 'Location';
			}
		});

		$($selectLocation).on('change', function(e) {
			location = $(this).val();
		});

		$($selectCategory).select2({
			placeholder: 'Select multiple items',
			selectionAdapter: SelectionAdapter,
			dropdownAdapter: DropdownAdapter,
			allowClear: false,
			templateResult: function (data) {

				if (!data.id) { return data.text; }

				var $res = $('<div></div>');

				$res.text(data.text);
				$res.addClass('wrap');

				return $res;
			},
			templateSelection: function (data) {
				return 'Category';
			},
		});

		$($selectCategory).on('change', function(e) {
			category = $(this).val();
		});
	
	});

	function getParameterByName(name, url = window.location.href) {
		name = name.replace(/[\[\]]/g, '\\$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}

	function refreshJobsList(term = '') {
		filteredList = jobsList.filter(function(job) {
			if (job.title.toLowerCase().includes(term.toLowerCase()) && (!location.length || location.some(function(a) {
				return job.location.includes(a);
			})) && (!category.length || category.some(function(a) {
				return job.category.includes(a);
			}))) {
				return true;
			}
			return false;
		});

		page = 1;
		$('.pagination-header').text('Result 1 of ' + Math.ceil(filteredList.length / 5));
		$('.page-item').removeClass('active');
		$('.pagination .page-item:eq(0)').addClass('active');
		$('.pagination .page-item').show();
		$('.pagination .page-item').slice(Math.ceil(filteredList.length / 5), 5).map(function(index, item) {
			$(item).hide();
		});

		$('.jobs-list .table tbody').empty();
		filteredList.slice((page - 1) * 5, (page) * 5).map(function(job) {
			$('.jobs-list .table tbody').append('<tr><td>' + job.title + '</td><td>' + job.location + '</td><td>' + job.category+ '</td></tr>');
		});
	}

	if (getParameterByName('category')) {
		$('.main-filters .category').hide();
		$('.job-category .category').text(getParameterByName('category'));
		category.push(getParameterByName('category'));
		$('.search-filter').css('width', '50%');
		$('.location').css('width', '35%');
		refreshJobsList();
		$('.table tr').find('td:eq(2)').hide();
		$('.table tr').find('th:eq(2)').hide();
	} else {
		$('.search-jobs-title').text('Search All Jobs')
		$('.job-category').hide();
		refreshJobsList();
	}

	$('.search-jobs').on('click', function() {
		var term = $('#search-filter').val() || '';
		location = location || [];
		category = category || [];
		refreshJobsList(term);
	});

	$('.page-link').on('click', function() {
		$('.page-item').removeClass('active');
		$(this).parent().addClass('active');
		page = parseInt($(this).text());
		$('.jobs-list .table tbody').empty();
		filteredList.slice((page - 1) * 5, (page) * 5).map(function(job) {
			$('.jobs-list .table tbody').append('<tr><td>' + job.title + '</td><td>' + job.location + '</td><td style="display: ' + 
				( getParameterByName('category') ? "none" : "table-cell" )
				+ ';">' + job.category+ '</td></tr>');
		});
		$('.pagination-header').text('Result ' + page + ' of ' + Math.ceil(filteredList.length / 5));
	})
});
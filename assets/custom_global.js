chobaniTheme = window.chobaniTheme || {};
chobaniTheme.header = `<header>
	<div class="box-shadow container-fluid">
		<div class="d-flex justify-content-md-between justify-content-center align-items-md-center py-md-4 py-3 px-5">
			<a href="/" class="navbar-brand d-flex align-items-center">
				<svg class="chobani-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 301.46 58.75" role="presentation" aria-hidden="true" tabindex="-1" disabled="disabled" clickable="false" width="160px">
					<title>Chobani</title>
					<path d="M27.44,8.55c3.47,0,5.25,1.45,5.25,3.63,0,1.61-1.29,3-1.29,5.73,0,4.12,2.9,7.26,7.59,7.26,4.92,0,8.15-3.39,8.15-8.72,0-7.5-5.89-13.56-19.29-13.56C11.62,2.91,0,14.61,0,31.39,0,47.85,9.68,58.75,26.15,58.75c13.48,0,21.71-8.72,21.71-19.29,0-3.55-1.13-4.6-2.58-4.6s-2,1.37-2.42,2.18C40.67,41.4,37,45.92,29.13,45.92c-9.36,0-15-7.91-15-19C14.12,16,20.25,8.55,27.44,8.55ZM67.7,56.24c0-.73-.56-1.29-1-2.1-.73-1.37-1-2.42-1-5.73V30.83c0-4.36,2.91-7.91,6-7.91,2.74,0,4.28,2.1,4.28,5.65V48.42c0,3.31-.24,4.36-1,5.73-.48.81-1,1.37-1,2.1,0,.89.48,1.29,1.37,1.29H90.38c1,0,1.45-.4,1.45-1.29,0-.73-.56-1.29-1-2.1-.81-1.37-1-2.42-1-5.73V28.65c0-7.42-4.44-12.75-12.43-12.75a13.78,13.78,0,0,0-11.7,7V6.05c0-1.78-.24-2.1-2.18-2.1H52.61c-1.78,0-2.42.65-2.42,1.78A6.14,6.14,0,0,0,51,8.15a15.81,15.81,0,0,1,.89,6.13V48.42c0,3.31-.24,4.36-1,5.73-.48.81-1,1.37-1,2.1,0,.89.48,1.29,1.45,1.29h15c.89,0,1.37-.4,1.37-1.29Zm68.91-19.12c0-14.28-9-21.38-21-21.38-12.18,0-21.3,8.15-21.3,21.38,0,13.72,9,21.38,21.14,21.38s21.14-8.07,21.14-21.38Zm-14.2,1.94c0,9.12-2.26,14.85-6.37,14.85-4.36,0-7.42-6-7.42-18.88,0-9,2.34-14.69,6.37-14.69,4.36,0,7.42,5.81,7.42,18.72Zm60.28-3.15c0-12.27-6-20.17-15.74-20.17-6.21,0-10.17,3.23-11.94,6.54V6.05c0-1.78-.24-2.1-2.18-2.1h-11c-1.78,0-2.42.65-2.42,1.78a6.14,6.14,0,0,0,.81,2.42,15.81,15.81,0,0,1,.89,6.13V44.06c0,7.1-.32,9.28-.32,11.38a2.49,2.49,0,0,0,2.82,2.74,11.39,11.39,0,0,0,3.87-1,6.78,6.78,0,0,1,2.34-.4,11.93,11.93,0,0,1,2.91.48,30.31,30.31,0,0,0,8,1.21c13.88,0,21.95-8.63,21.95-22.59Zm-23-12.51c5.33,0,8.39,6.13,8.39,16.3,0,9.52-3.31,14.2-7.34,14.2-3.23,0-5.73-3.23-5.73-7.42V29.05c0-3.63,1.69-5.65,4.68-5.65ZM216,58.34c5.33,0,8.15-1.21,8.15-2.91,0-.73-.32-1-.89-1.53-.81-.73-1.45-1.29-1.45-4.28l.08-19.45c0-8.72-5.25-14.53-18.4-14.53-11.3,0-17,4.6-17,10.65a6,6,0,0,0,6.21,6.37c3.79,0,6-2.66,6-5.33,0-2.1-.73-3.07-.73-4.44s1.53-2.74,4.36-2.74c4.28,0,6.29,2.91,6.29,8.07v3.63c-16.3,1.45-23.56,6.37-23.56,15,0,6.7,5,11.7,12.43,11.7a12.32,12.32,0,0,0,11.14-6.13c.16,3.79,1.53,5.89,7.42,5.89Zm-13.48-6.46c-3.15,0-4.92-2.66-4.92-5.73,0-4.76,3.55-8.31,11-9.76l-.08,8.88c0,3.47-2.58,6.62-6,6.62Zm41.4,4.36c0-.73-.56-1.29-1-2.1-.73-1.37-1-2.42-1-5.73V30.83c0-4.36,2.58-8,5.73-8,2.74,0,4.36,1.94,4.36,5.73V48.42c0,3.31-.24,4.36-1,5.73-.48.81-1,1.37-1,2.1,0,.89.48,1.29,1.37,1.29h15.09c1,0,1.45-.4,1.45-1.29,0-.73-.56-1.29-1-2.1-.81-1.37-1-2.42-1-5.73V29.05c0-7.67-4.36-13.15-12.35-13.15a13.76,13.76,0,0,0-12,7.26V18.88c0-1.78-.24-2.18-2.18-2.18H228.45c-1.69,0-2.26.65-2.26,1.61a6,6,0,0,0,1,2.5c.81,1.45.89,2.91.89,6.13V48.42c0,3.31-.24,4.36-1,5.73-.48.81-1,1.37-1,2.1,0,.89.48,1.29,1.45,1.29h15c.89,0,1.37-.4,1.37-1.29ZM270.57,7.18c0,4,3,7.18,8.07,7.18s8.07-3.23,8.07-7.18S283.72,0,278.64,0s-8.07,3.15-8.07,7.18Zm1,50.35h14.93c1,0,1.45-.4,1.45-1.29,0-.73-.56-1.29-1-2.1-.73-1.37-1-2.42-1-5.73V18.88c0-1.78-.24-2.18-2.18-2.18h-11.3c-1.69,0-2.26.65-2.26,1.61a6,6,0,0,0,1,2.5c.73,1.45.89,2.91.89,6.13V48.42c0,3.31-.24,4.36-1,5.73-.48.81-1,1.37-1,2.1,0,.89.48,1.29,1.45,1.29Z" fill="#1c3c34"></path><path d="M296.19,51.26h.91c.61,0,.91.24.91.73s-.32.73-.91.73h-.91Zm2.6.73c0-.9-.6-1.4-1.69-1.4h-1.7v4.87h.79V53.41H297l1.11,2.05H299l-1.22-2.11a1.39,1.39,0,0,0,1-1.36M297,57a3.9,3.9,0,1,1,3.85-3.9A3.75,3.75,0,0,1,297,57m0-8.36a4.46,4.46,0,1,0,4.47,4.46A4.32,4.32,0,0,0,297,48.61" fill="#1c3c34"></path>
				</svg>
			</a>
			<div class="d-md-flex d-none js-chobani-header-links">
				<a class="font-weight-light ml-5 h6" href="/">Home</a>
				<a class="font-weight-light ml-5 h6 js-chobani-all-jobs" href="/go/All-Jobs/8610600/">View All Jobs</a>
        <a class="font-weight-light ml-5 h6" href="#" onclick="j2w.TC.handleViewProfileAction(event)" xml:lang="en-US" lang="en-US">Create / View Profile</a>
			</div>
		</div>
	</div>
</header>
`; 
chobaniTheme.main = `<main>
	<section class="job-category">
		<h1 class="category text-center">%CATEGORY%</h1>
	</section>
	</main>`;
chobaniTheme.footer = `<footer>
<div class="container-fluid">
	<svg class="chobani-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 301.46 58.75" role="presentation" aria-hidden="true" tabindex="-1" disabled="disabled" clickable="false" width="180px">
		<title>Chobani</title>
		<path d="M27.44,8.55c3.47,0,5.25,1.45,5.25,3.63,0,1.61-1.29,3-1.29,5.73,0,4.12,2.9,7.26,7.59,7.26,4.92,0,8.15-3.39,8.15-8.72,0-7.5-5.89-13.56-19.29-13.56C11.62,2.91,0,14.61,0,31.39,0,47.85,9.68,58.75,26.15,58.75c13.48,0,21.71-8.72,21.71-19.29,0-3.55-1.13-4.6-2.58-4.6s-2,1.37-2.42,2.18C40.67,41.4,37,45.92,29.13,45.92c-9.36,0-15-7.91-15-19C14.12,16,20.25,8.55,27.44,8.55ZM67.7,56.24c0-.73-.56-1.29-1-2.1-.73-1.37-1-2.42-1-5.73V30.83c0-4.36,2.91-7.91,6-7.91,2.74,0,4.28,2.1,4.28,5.65V48.42c0,3.31-.24,4.36-1,5.73-.48.81-1,1.37-1,2.1,0,.89.48,1.29,1.37,1.29H90.38c1,0,1.45-.4,1.45-1.29,0-.73-.56-1.29-1-2.1-.81-1.37-1-2.42-1-5.73V28.65c0-7.42-4.44-12.75-12.43-12.75a13.78,13.78,0,0,0-11.7,7V6.05c0-1.78-.24-2.1-2.18-2.1H52.61c-1.78,0-2.42.65-2.42,1.78A6.14,6.14,0,0,0,51,8.15a15.81,15.81,0,0,1,.89,6.13V48.42c0,3.31-.24,4.36-1,5.73-.48.81-1,1.37-1,2.1,0,.89.48,1.29,1.45,1.29h15c.89,0,1.37-.4,1.37-1.29Zm68.91-19.12c0-14.28-9-21.38-21-21.38-12.18,0-21.3,8.15-21.3,21.38,0,13.72,9,21.38,21.14,21.38s21.14-8.07,21.14-21.38Zm-14.2,1.94c0,9.12-2.26,14.85-6.37,14.85-4.36,0-7.42-6-7.42-18.88,0-9,2.34-14.69,6.37-14.69,4.36,0,7.42,5.81,7.42,18.72Zm60.28-3.15c0-12.27-6-20.17-15.74-20.17-6.21,0-10.17,3.23-11.94,6.54V6.05c0-1.78-.24-2.1-2.18-2.1h-11c-1.78,0-2.42.65-2.42,1.78a6.14,6.14,0,0,0,.81,2.42,15.81,15.81,0,0,1,.89,6.13V44.06c0,7.1-.32,9.28-.32,11.38a2.49,2.49,0,0,0,2.82,2.74,11.39,11.39,0,0,0,3.87-1,6.78,6.78,0,0,1,2.34-.4,11.93,11.93,0,0,1,2.91.48,30.31,30.31,0,0,0,8,1.21c13.88,0,21.95-8.63,21.95-22.59Zm-23-12.51c5.33,0,8.39,6.13,8.39,16.3,0,9.52-3.31,14.2-7.34,14.2-3.23,0-5.73-3.23-5.73-7.42V29.05c0-3.63,1.69-5.65,4.68-5.65ZM216,58.34c5.33,0,8.15-1.21,8.15-2.91,0-.73-.32-1-.89-1.53-.81-.73-1.45-1.29-1.45-4.28l.08-19.45c0-8.72-5.25-14.53-18.4-14.53-11.3,0-17,4.6-17,10.65a6,6,0,0,0,6.21,6.37c3.79,0,6-2.66,6-5.33,0-2.1-.73-3.07-.73-4.44s1.53-2.74,4.36-2.74c4.28,0,6.29,2.91,6.29,8.07v3.63c-16.3,1.45-23.56,6.37-23.56,15,0,6.7,5,11.7,12.43,11.7a12.32,12.32,0,0,0,11.14-6.13c.16,3.79,1.53,5.89,7.42,5.89Zm-13.48-6.46c-3.15,0-4.92-2.66-4.92-5.73,0-4.76,3.55-8.31,11-9.76l-.08,8.88c0,3.47-2.58,6.62-6,6.62Zm41.4,4.36c0-.73-.56-1.29-1-2.1-.73-1.37-1-2.42-1-5.73V30.83c0-4.36,2.58-8,5.73-8,2.74,0,4.36,1.94,4.36,5.73V48.42c0,3.31-.24,4.36-1,5.73-.48.81-1,1.37-1,2.1,0,.89.48,1.29,1.37,1.29h15.09c1,0,1.45-.4,1.45-1.29,0-.73-.56-1.29-1-2.1-.81-1.37-1-2.42-1-5.73V29.05c0-7.67-4.36-13.15-12.35-13.15a13.76,13.76,0,0,0-12,7.26V18.88c0-1.78-.24-2.18-2.18-2.18H228.45c-1.69,0-2.26.65-2.26,1.61a6,6,0,0,0,1,2.5c.81,1.45.89,2.91.89,6.13V48.42c0,3.31-.24,4.36-1,5.73-.48.81-1,1.37-1,2.1,0,.89.48,1.29,1.45,1.29h15c.89,0,1.37-.4,1.37-1.29ZM270.57,7.18c0,4,3,7.18,8.07,7.18s8.07-3.23,8.07-7.18S283.72,0,278.64,0s-8.07,3.15-8.07,7.18Zm1,50.35h14.93c1,0,1.45-.4,1.45-1.29,0-.73-.56-1.29-1-2.1-.73-1.37-1-2.42-1-5.73V18.88c0-1.78-.24-2.18-2.18-2.18h-11.3c-1.69,0-2.26.65-2.26,1.61a6,6,0,0,0,1,2.5c.73,1.45.89,2.91.89,6.13V48.42c0,3.31-.24,4.36-1,5.73-.48.81-1,1.37-1,2.1,0,.89.48,1.29,1.45,1.29Z" fill="#ffffff"></path><path d="M296.19,51.26h.91c.61,0,.91.24.91.73s-.32.73-.91.73h-.91Zm2.6.73c0-.9-.6-1.4-1.69-1.4h-1.7v4.87h.79V53.41H297l1.11,2.05H299l-1.22-2.11a1.39,1.39,0,0,0,1-1.36M297,57a3.9,3.9,0,1,1,3.85-3.9A3.75,3.75,0,0,1,297,57m0-8.36a4.46,4.46,0,1,0,4.47,4.46A4.32,4.32,0,0,0,297,48.61" fill="#ffffff"></path>
	</svg>
	<div class="w-100 c-border my-5"></div>
	<div class="d-flex flex-md-row flex-column align-items-center c-nav-links mb-2">
		<div class="mr-md-5">
			<a href="https://www.chobani.com/" target="_blank">Chobani.com</a>
		</div>
		<div class="mr-md-5">
			<a href="https://www.chobani.com/terms-and-conditions/" target="_blank">Terms & Conditions</a>
		</div>
		<div>
			<a href="https://chobani.com/california-employee-job-applicant-privacy-notice" target="_blank">CA Employee and Job Applicant Privacy Notice</a>
		</div>
	</div>
	<div class="d-flex copyright justify-content-md-start justify-content-center">
		©%CURRENTYEAR% Chobani, LLC. All Rights Reserved.
	</div>
</div>
</footer>`;

chobaniTheme.env = window.location.host == 'careers.chobani.com' ? 
  'production' : 'staging';

jQuery(document).ready(function( $ ){
  
  if ( $('body').hasClass('careerSite') ) {
    $('script.chobani-theme').each(function(){
      console.log( 'removed chobani-theme script tag: ' + $(this).attr('src') );
      $(this).remove();
    });
    $('link.chobani-theme').each(function(){
      console.log( 'removed chobani-theme style tag: ' + $(this).attr('href') );
      $(this).remove();
    });
    
    console.log('chobani-theme unsupported page: exiting');
    return;
  }
  
  var ok, js, classes = [{
    key : 'home-page',
    script: 'custom_index.js'
  },{
    key : 'talentlanding-page',
    script: 'custom_jobs.js'
  },{
    key : 'job-page',
    script: 'custom_job_detail.js'
  },{
    key : 'search-page',
    script: 'custom_search_results.js'
  },{
    key : 'viewall-page',
    script: 'custom_view_all_jobs.js'
  }];
  
  for ( var i in classes ) {
    if ( $('body').hasClass( classes[ i ].key ) ) {      
      console.log('chobani-theme supported page found: ' + classes[ i ].key);
      js = classes[ i ].script
      ok = true;
      break;
    }
  }
  
  if ( !ok ) {
    console.log('chobani-theme did not find supported class: exiting');
    return;
  }
  
  // copyright year
  
  var currentYear = (new Date().getFullYear()).toString();
  chobaniTheme.footer = chobaniTheme.footer.replace("%CURRENTYEAR%", currentYear);
  
  // homepage special case
  
  if ( $('body').hasClass( 'home-page' ) ) {
    
    var chobaniInjection = `<!-- global font -->
<link rel="stylesheet" type="text/css" class="chobani-theme" href="//chobani-assets-public.s3.amazonaws.com/fonts/stylesheet.css" />
<!-- chobani style overrides -->
<link rel="stylesheet" type="text/css" class="chobani-theme" href="https://chobani-careers.reconstrukt.net/assets/css/block.css" />
<!-- homepage only -->
<link rel="stylesheet" type="text/css" class="chobani-theme" href="https://chobani-careers.reconstrukt.net/assets/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" class="chobani-theme" href="https://chobani-careers.reconstrukt.net/assets/css/font-awesome.min.css" />
<link rel="stylesheet" type="text/css" class="chobani-theme" href="https://chobani-careers.reconstrukt.net/assets/css/album.css" />
<link rel="stylesheet" type="text/css" class="chobani-theme" href="https://chobani-careers.reconstrukt.net/assets/css/detail.css" />
<link rel="stylesheet" type="text/css" class="chobani-theme" href="https://chobani-careers.reconstrukt.net/assets/css/slick.css" />
<link rel="stylesheet" type="text/css" class="chobani-theme" href="https://chobani-careers.reconstrukt.net/assets/css/slick-theme.css" />
<script type="text/javascript" class="chobani-theme" src="https://chobani-careers.reconstrukt.net/assets/vendor/jquery-1.11.0.min.js"></script>
<script type="text/javascript" class="chobani-theme" src="https://chobani-careers.reconstrukt.net/assets/vendor/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" class="chobani-theme" src="https://chobani-careers.reconstrukt.net/assets/bootstrap.min.js"></script>
<script type="text/javascript" class="chobani-theme" src="https://chobani-careers.reconstrukt.net/assets/vendor/slick.min.js"></script>
<script type="text/javascript" class="chobani-theme" src="https://chobani-careers.reconstrukt.net/assets/custom_index.js"></script>`;
    
    $('body').append( chobaniInjection ).addClass('chobani-theme-applied');    
    return;
  }
  
  // all other pages
  
  var chobaniInjection = `<!-- global font -->
<link rel="stylesheet" type="text/css" class="chobani-theme" href="//chobani-assets-public.s3.amazonaws.com/fonts/stylesheet.css" />
<!-- chobani style overrides -->
<link rel="stylesheet" type="text/css" class="chobani-theme" href="https://chobani-careers.reconstrukt.net/assets/css/block.css" />
<!-- homepage only -->
<link rel="stylesheet" type="text/css" class="chobani-theme" href="https://chobani-careers.reconstrukt.net/assets/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" class="chobani-theme" href="https://chobani-careers.reconstrukt.net/assets/css/font-awesome.min.css" />
<link rel="stylesheet" type="text/css" class="chobani-theme" href="https://chobani-careers.reconstrukt.net/assets/css/album.css" />
<link rel="stylesheet" type="text/css" class="chobani-theme" href="https://chobani-careers.reconstrukt.net/assets/css/detail.css" />
<!-- job detail only -->
<script type="text/javascript" class="chobani-theme" src="https://chobani-careers.reconstrukt.net/assets/%FILENAME%"></script>`;
  
  var append = chobaniInjection.replace("%FILENAME%", js);  
  $('body').append( append ).addClass('chobani-theme-applied');
  
  return; 

});

chobaniTheme = window.chobaniTheme || {};
chobaniTheme.header = `<header>
	<div class="box-shadow container-fluid">
		<div class="d-flex justify-content-md-between justify-content-center align-items-md-center py-md-4 py-3 px-5">
			<a href="/" class="navbar-brand d-flex align-items-center">
				<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="6.91in" height=".5in" viewBox="0 0 497.56 36">
  <defs>
    <style>
      .cls-1 {
        fill: #1a3c34;
      }

      .cls-1, .cls-2, .cls-3 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #0e284b;
      }

      .cls-3 {
        fill: #ff4814;
      }
    </style>
  </defs>
  <g>
    <path class="cls-1" d="M181.97,31.04h.61c.41,0,.61.16.61.49,0,.31-.22.49-.61.49h-.61v-.99ZM183.72,31.53c0-.61-.4-.94-1.14-.94h-1.15v3.28h.53v-1.38h.52l.74,1.38h.61l-.82-1.42c.44-.14.69-.47.69-.91M182.51,34.88c-1.4,0-2.59-1-2.59-2.62s1.19-2.62,2.59-2.62,2.59.99,2.59,2.62-1.19,2.62-2.59,2.62M182.51,29.26c-1.63,0-3.01,1.15-3.01,3s1.38,3,3.01,3,3.01-1.15,3.01-3-1.38-3-3.01-3"/>
    <path class="cls-1" d="M16.81,5.24c2.13,0,3.21.89,3.21,2.23,0,.99-.79,1.83-.79,3.51,0,2.52,1.78,4.45,4.65,4.45,3.02,0,4.99-2.08,4.99-5.34,0-4.6-3.61-8.31-11.82-8.31C7.12,1.78,0,8.95,0,19.24s5.93,16.76,16.02,16.76c8.26,0,13.3-5.34,13.3-11.82,0-2.18-.69-2.82-1.58-2.82-.94,0-1.24.84-1.48,1.34-1.34,2.67-3.61,5.44-8.41,5.44-5.74,0-9.2-4.85-9.2-11.67s3.76-11.23,8.16-11.23h0ZM41.49,34.47c0-.45-.35-.79-.64-1.29-.45-.84-.59-1.48-.59-3.51v-10.78c0-2.67,1.78-4.85,3.66-4.85,1.68,0,2.62,1.29,2.62,3.46v12.16c0,2.03-.15,2.67-.59,3.51-.3.49-.64.84-.64,1.29,0,.54.3.79.84.79h9.25c.59,0,.89-.25.89-.79,0-.45-.35-.79-.64-1.29-.49-.84-.59-1.48-.59-3.51v-12.12c0-4.55-2.72-7.81-7.62-7.81-3.56,0-6.08,2.37-7.17,4.3V3.71c0-1.09-.15-1.29-1.34-1.29h-6.68c-1.09,0-1.48.4-1.48,1.09,0,.59.3.99.49,1.48.35.99.54,1.78.54,3.76v20.92c0,2.03-.15,2.67-.59,3.51-.3.49-.64.84-.64,1.29,0,.54.3.79.89.79h9.2c.54,0,.84-.25.84-.79h0ZM83.72,22.75c0-8.75-5.54-13.1-12.86-13.1s-13.05,4.99-13.05,13.1,5.54,13.1,12.96,13.1,12.96-4.95,12.96-13.1h0ZM75.02,23.93c0,5.59-1.38,9.1-3.91,9.1-2.67,0-4.55-3.66-4.55-11.57,0-5.54,1.43-9,3.91-9,2.67,0,4.55,3.56,4.55,11.47h0ZM111.96,22.01c0-7.52-3.66-12.36-9.64-12.36-3.81,0-6.23,1.98-7.32,4.01V3.71c0-1.09-.15-1.29-1.34-1.29h-6.73c-1.09,0-1.48.4-1.48,1.09,0,.59.3.99.49,1.48.35.99.54,1.78.54,3.76v18.25c0,4.35-.2,5.69-.2,6.97,0,1.09.59,1.68,1.73,1.68.74,0,1.63-.3,2.37-.59.54-.2,1.04-.25,1.43-.25s1.09.1,1.78.3c1.29.35,2.97.74,4.9.74,8.51,0,13.45-5.29,13.45-13.85h0ZM97.86,14.34c3.26,0,5.14,3.76,5.14,9.99,0,5.84-2.03,8.7-4.5,8.7-1.98,0-3.51-1.98-3.51-4.55v-10.68c0-2.23,1.04-3.46,2.87-3.46h0ZM132.38,35.75c3.26,0,4.99-.74,4.99-1.78,0-.45-.2-.64-.54-.94-.49-.45-.89-.79-.89-2.62l.05-11.92c0-5.34-3.21-8.9-11.27-8.9-6.92,0-10.43,2.82-10.43,6.53,0,2.47,1.68,3.91,3.81,3.91,2.32,0,3.66-1.63,3.66-3.26,0-1.29-.45-1.88-.45-2.72s.94-1.68,2.67-1.68c2.62,0,3.86,1.78,3.86,4.95v2.23c-9.99.89-14.44,3.91-14.44,9.2,0,4.1,3.07,7.17,7.62,7.17,3.66,0,5.88-2.03,6.82-3.76.1,2.32.94,3.61,4.55,3.61h0ZM124.12,31.8c-1.93,0-3.02-1.63-3.02-3.51,0-2.92,2.18-5.09,6.73-5.98l-.05,5.44c0,2.13-1.58,4.05-3.66,4.05h0ZM149.49,34.47c0-.45-.35-.79-.64-1.29-.45-.84-.59-1.48-.59-3.51v-10.78c0-2.67,1.58-4.9,3.51-4.9,1.68,0,2.67,1.19,2.67,3.51v12.16c0,2.03-.15,2.67-.59,3.51-.3.49-.64.84-.64,1.29,0,.54.3.79.84.79h9.25c.59,0,.89-.25.89-.79,0-.45-.35-.79-.64-1.29-.49-.84-.59-1.48-.59-3.51v-11.87c0-4.7-2.67-8.06-7.57-8.06-3.76,0-6.28,2.42-7.37,4.45v-2.62c0-1.09-.15-1.34-1.34-1.34h-6.68c-1.04,0-1.38.4-1.38.99,0,.54.35.94.64,1.53.49.89.54,1.78.54,3.76v13.15c0,2.03-.15,2.67-.59,3.51-.3.49-.64.84-.64,1.29,0,.54.3.79.89.79h9.2c.54,0,.84-.25.84-.79h0ZM165.81,4.4c0,2.42,1.83,4.4,4.95,4.4s4.95-1.98,4.95-4.4-1.83-4.4-4.95-4.4-4.95,1.93-4.95,4.4h0ZM166.45,35.26h9.15c.59,0,.89-.25.89-.79,0-.45-.35-.79-.64-1.29-.45-.84-.59-1.48-.59-3.51V11.57c0-1.09-.15-1.34-1.34-1.34h-6.92c-1.04,0-1.38.4-1.38.99,0,.54.35.94.64,1.53.45.89.54,1.78.54,3.76v13.15c0,2.03-.15,2.67-.59,3.51-.3.49-.64.84-.64,1.29,0,.54.3.79.89.79h0Z"/>
  </g>
  <path class="cls-3" d="M218.07,9.46c.93-1.14,1.79-2.35,2.8-3.41.91-.95,1.59-2.15,3-2.62.78-.25,1.42-.91,2.12-1.38.09-.06.17-.17.27-.19,2.52-.54,5.05-.91,7.28.83.49.38.95,1.1.99,1.69.12,1.6-.06,3.22,0,4.83.06,2.01-.64,3.82-1.41,5.59-.42.96-1.16,1.78-1.74,2.68-.2.31-.38.66-.48,1.01-.59,2.03-1.28,3.98-2.64,5.68-.99,1.24-1.97,2.45-3.07,3.6-1.16,1.22-2.08,2.67-3.11,4.02-.83,1.09-1.63,2.2-2.5,3.26-.56.68-1.32.58-2.1-.26-.99-1.06-1.92-2.17-2.91-3.23-1.41-1.5-2.84-2.98-4.29-4.44-2.49-2.51-4.14-5.55-5.73-8.66-1.35-2.64-2.56-5.31-3.18-8.22-.09-.42-.26-.82-.43-1.22-.7-1.62.09-3.07.71-4.42.38-.83,1.13-1.62,2.18-1.89.23-.06.47-.17.66-.33,1.79-1.48,3.94-1.49,6.09-1.47,1.11,0,2.16.27,3.12.89.28.18.73.17,1.1.15.7-.04,1.17.2,1.55.82.95,1.57.97,3.34,1.21,5.07.07.48.15.96.22,1.45.1.05.2.1.3.15Z"/>
  <g>
    <g>
      <g>
        <polygon class="cls-2" points="373.99 28.07 367.44 28.08 367.44 5.67 369.46 2.28 357.18 2.28 359.2 5.66 359.2 31.88 357.18 35.26 375.47 35.26 378.34 26.59 373.99 28.07"/>
        <polygon class="cls-2" points="478.97 28.09 478.97 22.16 482.14 22.16 485.31 23.21 485.31 14.34 482.14 15.39 478.97 15.39 478.97 9.46 485.52 9.47 489.88 10.95 487 2.28 468.72 2.28 470.73 5.67 470.73 31.88 468.72 35.26 487 35.26 489.88 26.6 485.52 28.08 478.97 28.09"/>
        <path class="cls-2" d="M462.43,18.77l2.64-2.64V7.77l-5.49-5.49h-18.35l2.01,3.38v26.22l-2.01,3.38h18.35l5.49-5.49v-8.36l-2.64-2.64ZM454.49,28.08h-3v-6.13h3c1.69,0,3.06,1.37,3.06,3.06s-1.37,3.06-3.06,3.06ZM454.49,15.59h-3v-6.13h3c1.69,0,3.06,1.37,3.06,3.06s-1.37,3.06-3.06,3.06Z"/>
        <polygon class="cls-2" points="436.57 5.68 438.58 2.3 428.55 2.28 423.37 12.04 418.18 2.28 408.15 2.3 410.17 5.68 410.17 31.88 408.15 35.26 420.41 35.26 418.41 31.9 418.41 16.62 423.37 25.96 428.33 16.62 428.33 31.9 426.32 35.26 438.58 35.26 436.57 31.88 436.57 5.68"/>
        <path class="cls-2" d="M399.02,2.28h-13.1l-5.49,5.49v21.99l5.49,5.49h13.1l5.49-5.49V7.77l-5.49-5.49ZM396.06,24.35c0,1.98-1.61,3.72-3.59,3.72s-3.59-1.61-3.59-3.59v-11.42c0-1.98,1.61-3.59,3.59-3.59s3.59,1.61,3.59,3.59v11.29Z"/>
        <path class="cls-2" d="M348.16,2.28h-13.1l-5.49,5.49v21.99l5.49,5.49h13.1l5.49-5.49V7.77l-5.49-5.49ZM345.2,24.35c0,1.98-1.61,3.72-3.59,3.72s-3.59-1.61-3.59-3.59v-11.42c0-1.98,1.61-3.59,3.59-3.59s3.59,1.61,3.59,3.59v11.29Z"/>
        <path class="cls-2" d="M316.55,28.07c-1.98,0-3.59-1.61-3.59-3.59v-11.42c0-1.98,1.61-3.59,3.59-3.59h4.66s4.18,1.48,4.18,1.48l-2.76-8.66h-12.63l-5.49,5.49v21.99l5.49,5.49h12.63l2.76-8.66-4.18,1.48h-4.66Z"/>
      </g>
      <path class="cls-2" d="M277.49,26.47c-.44,2.29-2.5,3.95-4.84,3.95h-8.86c.86-1.45,1.35-3.14,1.35-4.95v-13.52c0-2.78,2.36-5.04,5.26-5.04s5.26,2.26,5.26,5.04c0,1.08-.35,2.11-1.02,2.98-.2.26-.43.51-.69.73l3.18,3.61c.49-.43.93-.9,1.32-1.42,1.31-1.72,2.01-3.76,2.01-5.91,0-5.43-4.52-9.85-10.07-9.85s-10.07,4.42-10.07,9.85v13.52c0,2.73-2.22,4.95-4.95,4.95v4.81h17.26c2.44,0,4.71-.92,6.45-2.45,1.43,1.77,3.62,2.9,6.07,2.9s4.6-1.12,6.03-2.86c1.17,1.47,2.97,2.41,4.98,2.41v-4.81c-.86,0-1.56-.7-1.56-1.56v-6.91h-4.39c-1.37-1.17-3.14-1.88-5.07-1.88-3.83,0-6.98,2.77-7.68,6.4ZM285.17,30.87c-1.65,0-2.99-1.34-2.99-2.99s1.34-2.99,2.99-2.99,2.99,1.34,2.99,2.99-1.34,2.99-2.99,2.99Z"/>
    </g>
    <path class="cls-2" d="M494.02,31.05h.61c.41,0,.61.16.61.49,0,.31-.22.49-.61.49h-.61v-.99ZM495.77,31.54c0-.6-.4-.94-1.14-.94h-1.15v3.27h.53v-1.38h.52l.74,1.38h.61l-.82-1.42c.44-.14.69-.47.69-.91M494.56,34.89c-1.4,0-2.59-1-2.59-2.62s1.19-2.62,2.59-2.62,2.59.99,2.59,2.62-1.19,2.62-2.59,2.62M494.56,29.26c-1.63,0-3.01,1.15-3.01,3s1.38,3,3.01,3,3.01-1.15,3.01-3-1.38-3-3.01-3"/>
  </g>
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

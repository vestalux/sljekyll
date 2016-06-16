// Call Google font-size

WebFontConfig = {
google: { families: [ 'Source+Sans+Pro:400,400italic,500,600,700,700italic:latin' ] }
};
(function() {
var wf = document.createElement('script');
wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
wf.type = 'text/javascript';
wf.async = 'true';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf, s);
})();

// Toggles hide class on .toggle when .toggle-button clicked

document.addEventListener('DOMContentLoaded', function() {
	[].forEach.call(document.querySelectorAll('.toggle-button'), function(el) {
		el.addEventListener('click', function(e) {
			if (e.target.nodeName.toLowerCase() == 'a') {
				e.preventDefault();
			}
			[].forEach.call(document.querySelectorAll('.toggle'), function(el) {
				el.classList.toggle('hide');
			});
		});
	});
});


// Toggles open class on .toggle-button when .toggle-button clicked

document.addEventListener('DOMContentLoaded', function() {
	[].forEach.call(document.querySelectorAll('.toggle-button'), function(el) {
		el.addEventListener('click', function(e) {
			if (e.target.nodeName.toLowerCase() == 'a') {
				e.preventDefault();
			}
			[].forEach.call(document.querySelectorAll('.toggle-button'), function(el) {
				el.classList.toggle('open');
			});
		});
	});
});

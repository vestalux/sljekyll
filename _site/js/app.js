// Toggles db class on .custom-toggle when .custom-toggle-button clicked

document.addEventListener('DOMContentLoaded', function() {
	[].forEach.call(document.querySelectorAll('.custom-toggle-button'), function(el) {
		el.addEventListener('click', function(e) {
			if (e.target.nodeName.toLowerCase() == 'a') {
				e.preventDefault();
			}
			[].forEach.call(document.querySelectorAll('.custom-toggle'), function(el) {
				el.classList.toggle('db');
			});
		});
	});
});


// Toggles custom-open class on .custom-toggle-button when .custom-toggle-button clicked

document.addEventListener('DOMContentLoaded', function() {
	[].forEach.call(document.querySelectorAll('.custom-toggle-button'), function(el) {
		el.addEventListener('click', function(e) {
			if (e.target.nodeName.toLowerCase() == 'a') {
				e.preventDefault();
			}
			[].forEach.call(document.querySelectorAll('.custom-toggle-button'), function(el) {
				el.classList.toggle('custom-open');
			});
		});
	});
});

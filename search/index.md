---
layout: default
title: Search results
sitemap: false
---

<h1 class="{% include /c/page-title.html %}">Search results</h1>

<p class="custom-prose custom-lh-copy {% include /c/generic-panel.html %}">Looking for a title? Try our <a href="https://suffolk.spydus.co.uk">online catalogue of print title, CDs, audiobooks and DVDs</a> or our <a href="/elibrary">eLibrary</a>.</p>

<noscript>

<p>Try this form if you have javascript turned off:</p>

	<form method="get" action="https://google.co.uk" class="pure-form form-custom" role="search" id="search">

		<input type="search" name="q">
		<input type="submit" class="pure-button" value="Search">
		<input type="hidden" name="sitesearch" value="suffolklibraries.co.uk">

	</form>

</noscript>

<div class="custom-search-results">

	<script>
	    (function() {
	        var cx = '005184331307728575178:aigcnsbfsr0';
	        var gcse = document.createElement('script');
	        gcse.type = 'text/javascript';
	        gcse.async = true;
	        gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
	            '//cse.google.com/cse.js?cx=' + cx;
	        var s = document.getElementsByTagName('script')[0];
	        s.parentNode.insertBefore(gcse, s);
	    })();xs
	</script>

	<gcse:searchresults-only linkTarget="_self"></gcse:searchresults-only>

</div>

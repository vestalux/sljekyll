---
layout: default
title: Search results
---

<h1 class="{% include /c/page-title.html %}">Search results</h1>

<p class="custom-prose custom-lh-copy">Looking for a title? Try our <a href="https://suffolk.spydus.co.uk">online catalogue of print title, CDs, audiobooks and DVDs</a> or our <a href="/elibrary">eLibrary</a>.</p>

<noscript>

<p>Try this form if you have javascript turned off:</p>

	<form method="get" action="https://google.co.uk" class="pure-form form-custom" role="search" id="search">

		<input type="search" name="q">
		<input type="submit" class="pure-button" value="Search">
		<input type="hidden" name="sitesearch" value="suffolklibraries.co.uk">

	</form>

</noscript>

<script>
    (function() {
        var cx = '014626350489520397086:dw0dlftob6c';
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

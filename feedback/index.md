---
layout: full-width
title: Feedback
---
Were you able to do what you wanted today? Or find the information you needed?

Leave your feedback here. You can remain anonymous if you want to, but if you do want a reply you'll need to leave your contact details.

Fields marked with a <span class="red">*</span> are required.

<form class="pure-form pure-form-stacked" netlify name="feedback" action="confirmation" netlify-honeypot="bot-field">

    <fieldset>

        <label class="f5 mt2 db">Your name</label>
        <input type="text" name="name" class="border-box w-100 mb2">

        <label class="f5 mt2 db">Your email</label>
        <input type="email" name="email" class="border-box w-100 mb2">

        <label class="f5 mt2 db">Your feedback <span class="red">*</span></label>
        <textarea name="message" required class="border-box w-100 mb2"></textarea>

    </fieldset>

    <p class="dn"><input name="bot-field"></p>

    <button type="submit" class="pure-button pure-button-primary">Send your feedback</button>

</form>

---
layout: default
title: Suffolk Libraries reserve, renew, branches and eLibrary
---

<nav id="nav" class="ph2 ph4-ns mw9 center">

    <h1 class="dn accessibility">Navigation</h1>

    <div class="cf">

        <div class="w-33-ns pr3-ns fl-ns">

            <section class="br3 hidden ba b--black-10 mv4  border-box">

                <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3"><a class="icon icon-tablet" href="/elibrary">eLibrary</a></h1>

                <p class="measure ph2 ph3">Free eBooks, eAudio, downloads, magazines &amp; streaming.</p>

            </section>

        </div>

        <div class="w-33-ns pr3-ns fl-ns">

            <section class="br3 hidden ba b--black-10 mv4">

                <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3"><a class="icon icon-tablet" href="/elibrary">eLibrary</a></h1>

                <p class="measure ph2 ph3">Free eBooks, eAudio, downloads, magazines &amp; streaming.</p>

            </section>

        </div>

        <div class="w-34-ns fl-ns">

            <section class="br3 hidden ba b--black-10 mv4">

                <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3"><a class="icon icon-tablet" href="/elibrary">eLibrary</a></h1>

                <p class="measure ph2 ph3">Free eBooks, eAudio, downloads, magazines &amp; streaming.</p>

            </section>

        </div>

    </div> <!-- end .cf -->

        <div class="g-w-col4 g-w-left">

            <section class="vbox">

                <h1 class="vbox-title"><a class="icon icon-card" href="https://suffolk.spydus.co.uk/cgi-bin/spydus.exe/MSGTRN/OPAC/JOIN">Apply for a card</a></h1>

                <p class="vbox-text">Apply for a card for free access to our physical titles and eLibrary</p>

            </section>

        </div>

        <div class="g-w-col4 g-w-left">

            <section class="vbox">

                <h1 class="vbox-title"><a class="icon icon-desktop" href="http://netloan.suffolklibraries.co.uk/">Book a computer</a></h1>

                <p class="vbox-text">Reserve a library computer</p>

            </section>

        </div>

    </div> <!-- end .g-row -->

    <div class="g-row">

        <div class="g-w-col4 g-w-left">

            <section class="vbox">

                <h1 class="vbox-title"><a class="icon icon-tablet" href="/elibrary">eLibrary</a></h1>

                <p class="vbox-text">Free eBooks, eAudio, downloads, magazines & streaming</p>

            </section>

        </div>

        <div class="g-w-col4 g-w-left">

            <section class="vbox">

                <h1 class="vbox-title"><a class="icon icon-store" href="/branches">Branches &amp; room hire</a></h1>

                <p class="vbox-text">Branch contact details, Ipswich Enterprise + Innovation hub & hiring rooms & venues</p>

            </section>

        </div>

        <div class="g-w-col4 g-w-left">

            <section class="vbox">

                <h1 class="vbox-title"><a class="icon icon-info" href="/help">Help using the service</a></h1>

                <p class="vbox-text">Guides to using the library services, costs & what you can borrow</p>

            </section>

        </div>

    </div> <!-- end .g-row -->

    <div class="g-row">

        <div class="g-w-col4 g-w-left">

            <section class="vbox">

                <h1 class="vbox-title"><a class="icon icon-bus" href="/mobiles-home/">Mobiles & home service</a></h1>

                <p class="vbox-text">Mobile library timetables and books delivered to your home</p>

            </section>

        </div>

        <div class="g-w-col4 g-w-left">

            <section class="vbox">

                <h1 class="vbox-title"><a class="icon icon-calendar" href="/events-activities">Events &amp; activities</a></h1>

                <p class="vbox-text">Free access to Ancestry, Find My Past, Access to Research and many other resources.</p>

            </section>

        </div>

        <div class="g-w-col4 g-w-left">

            <section class="vbox">

                <h1 class="vbox-title"><a class="icon icon-pen" href="/information-resources">Information resources</a></h1>

                <p class="vbox-text">Free access to Ancestry, Find My Past, Access to Research and many other resources</p>

            </section>

        </div>

    </div> <!-- end .g-row -->

        <div class="g-row">

            <div class="g-w-col4 g-w-left">

                <section class="vbox">

                    <h1 class="vbox-title"><a href="/new-suggestions" class="icon icon-book">New in &amp; suggestions</a></h1>

                    <p class="vbox-text">Latest titles, reading lists, author interviews, info for reading groups</p>

                </section>

            </div>

            <div class="g-w-col4 g-w-left">

                <section class="vbox">

                    <h1 class="vbox-title"><a href="/health" class="icon icon-accessibility">Health &amp; wellbeing</a></h1>

                    <p class="vbox-text">Mental health & wellbeing info and resources, Books on Prescription</p>

               </section>

           </div>

           <div class="g-w-col4 g-w-left">

               <section class="vbox">

                   <h1 class="vbox-title"><a href="/schools-literacy" class="icon icon-school">Schools &amp; literacy</a></h1>

                   <p class="vbox-text">Our schools service LBaRTS, literacy resources & blog</p>

              </section>

          </div>

      </div> <!-- end .g-row -->

      <div class="g-row">

          <div class="g-w-col4 g-w-left">

              <section class="vbox">

                  <h1 class="vbox-title"><a href="/about" class="icon icon-info">About us</a></h1>

                  <p class="vbox-text">Governance, board members, documents & jobs</p>

              </section>

          </div>

          <div class="g-w-col4 g-w-left">

              <section class="vbox">

                  <h1 class="vbox-title"><a href="/news" class="icon icon-newspaper">News</a></h1>

                  <ul class="vbox-text">
                    {% for post in site.categories.['news'] limit:3 %}
                      <li>
                        <p><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a> {{ post.date | date: "%b %-d, %Y" }}</p>
                      </li>
                    {% endfor %}
                  </ul>

             </section>

         </div>

         <div class="g-w-col4 g-w-left">

             <section class="vbox">

                 <h1 class="vbox-title"><a href="/blog" class="icon icon-pen">Blog</a></h1>

                 <ul class="vbox-text">
                   {% for post in site.categories.['blog'] limit:3 %}
                     <li>
                       <p><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a> {{ post.date | date: "%b %-d, %Y" }}</p>
                     </li>
                   {% endfor %}
                 </ul>

            </section>

        </div>

    </div> <!-- end .g-row -->


</nav>

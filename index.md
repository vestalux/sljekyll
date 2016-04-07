---
layout: default
title: Suffolk Libraries reserve, renew, branches and eLibrary
---

<nav id="nav">

    <h1 class="hide accessibility">Navigation</h1>

    <div class="g-row">

        <div class="g-left g-col12">

            <ul class="h-nav breadcrumb">

                <li><a href="https://suffolk.spydus.co.uk" class="icon icon-search">Search &amp; reserve &rarr;</a></li>
                <li><a href="https://suffolk.spydus.co.uk/cgi-bin/spydus.exe/MSGTRN/OPAC/LOGINB" class="icon icon-lock">Login &amp; renew &rarr;</a></li>
                <li><a href="#" class="icon icon-card">Apply for or renew a card &rarr;</a></li>

            </ul>

        </div>

    </div>

    <div class="g-row">

        <div class="g-w-col4 g-w-left">

            <section class="vbox">

                <h1 class="vbox-title"><a class="icon icon-tablet" href="/elibrary">eLibrary</a></h1>

                <p class="vbox-text">Free eBooks, eAudio, downloads, magazines &amp; streaming.</p>

            </section>

        </div>

        <div class="g-w-col4 g-w-left">

            <section class="vbox">

                <h1 class="vbox-title"><a class="icon icon-map" href="/branches">Branches, venues, room hire</a></h1>

                <p class="vbox-text">Branch contact details, Ipswich Enterprise + Innovation hub &amp; hiring rooms &amp; venues</p>

            </section>

        </div>

        <div class="g-w-col4 g-w-left">

            <section class="vbox">

                <h1 class="vbox-title"><a class="icon icon-info" href="<?php echo get_site_url(); ?>/help">Help using the service</a></h1>

                <p class="vbox-text">Guides to using the library services, costs &amp; what you can borrow.</p>

            </section>

        </div>

    </div> <!-- end .g-row -->

    <div class="g-row">

        <div class="g-w-col4 g-w-left">

            <section class="vbox">

                <h1 class="vbox-title"><a class="icon icon-bus" href="<?php echo get_site_url(); ?>/community-services">Mobiles &amp; home service</a></h1>

                <p class="vbox-text">Mobile library timetables and books delivered to your home</p>

            </section>

        </div>

        <div class="g-w-col4 g-w-left">

            <section class="vbox">

                <h1 class="vbox-title"><a class="icon icon-calendar" href="/events">Events &amp; activities</a></h1>

                <p class="vbox-text">Special events and regular activities for children &amp; older people. Free computer training.</p>

            </section>

        </div>

        <div class="g-w-col4 g-w-left">

            <section class="vbox">

                <h1 class="vbox-title"><a class="icon icon-accessibility" href="/">Health &amp; wellbeing</a></h1>

                <p class="vbox-text">Mental health information and resources, books on prescription.</p>

            </section>

        </div>

    </div> <!-- end .g-row -->

    <div class="g-row">

        <div class="g-w-col4 g-w-left">

            <section class="vbox">

                <h1 class="vbox-title"><a class="icon icon-book" href="<?php echo get_site_url(); ?>/reading-lists-groups-advice">New in &amp; suggestions</a></h1>

                <p class="vbox-text">Latest titles, reading lists, author interviews.</p>

            </section>

        </div>

        <div class="g-w-col4 g-w-left">

            <section class="vbox">

                <h1 class="vbox-title"><a class="icon icon-library" href="<?php echo get_site_url(); ?>/information-resources">History &amp; reference</a></h1>

                <p class="vbox-text">Free access to Ancestry, Find My Past, Access to Research and many other resources.</p>

            </section>

        </div>

        <div class="g-w-col4 g-w-left">

            <section class="vbox">

                <h1 class="vbox-title"><a class="icon icon-school" href="/">Literacy &amp; schools</a></h1>

                <p class="vbox-text">Literacy resources and schools service.</p>

            </section>

        </div>

    </div> <!-- end .g-row -->

        <div class="g-row">

            <div class="g-w-col4 g-w-left">

                <section class="vbox">

                    <h1 class="vbox-title"><a href="/about" class="icon icon-people">About us</a></h1>

                    <p class="vbox-text">Governance, board members, documents &amp; jobs.</p>

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

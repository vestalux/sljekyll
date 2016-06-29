---
layout: full-width
title: Branches
breadcrumb: home
---

<div class="constrain">

    <iframe
    style="border-style: none;"
    src="branch-map/index.html"
    width="992"
    height="660" >
    </iframe>

</div>

<table class="pure-table">

    <thead>

        <tr>

            <th>Branch</th>
            <th>Address</th>
            <th>Tel</th>
            <th>Room hire</th>

        <tr>

    <thead>

    <tbody>

        {% for branch in site.data.branches %}

        <tr>

            <td><a href="{{ branch.url }}">{{ branch.name}}</a></td>
            <td>{{ branch.address }}</td>
            <td>{{ branch.phone }}</td>
            <td><a href="{{ branch.room-hire-url }}">{{ branch.room-hire-text}}</a></td>

        </tr>

        {% endfor %}

    </tbody>

</table>

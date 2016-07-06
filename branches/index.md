---
layout: full-width
title: Branches
breadcrumb: home
---

<table class="pure-table pure-table-bordered">

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

<div class="custom-constrain">

    <iframe src="https://www.google.com/maps/d/embed?mid=19ACrpwlTRgf_EQgSMkvPOH1V7e0" width="760" height="570" frameborder="0" style="border: 0;"></iframe>

</div>

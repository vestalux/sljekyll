---
layout: full-width
title: Branches
breadcrumb: home
sidebar: 1
---

<table>

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

<div class="constrain">

    <p><iframe src="//batchgeo.com/map/de23a55ff173adf7a38ea781eb410ee4" frameborder="0" width="100%" height="900" style="border:none;"></iframe></p>

</div>

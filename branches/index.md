---
layout: full-width
title: Branches
breadcrumb: 1
sidebar: 1
---

<table>

    <thead>

        <tr>

            <th>Branch</th>
            <th>Address</th>
            <th>Tel</th>

        <tr>

    <thead>

    <tbody>

        {% for branch in site.branches %}

        <tr>

            <td><a href="{{ branch.url }}">{{ branch.branch-name}}</a></td>
            <td>{{ branch.branch-address }}, {{ branch.branch-post-code }}</td>
            <td>{{ branch.branch-tel }}</td>

        </tr>

        {% endfor %}

    </tbody>

</table>

<div class="constrain">

    <p><iframe src="//batchgeo.com/map/de23a55ff173adf7a38ea781eb410ee4" frameborder="0" width="100%" height="900" style="border:none;"></iframe></p>

</div>

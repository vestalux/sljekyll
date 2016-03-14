---
layout: full-width
title: Branches
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

            <td><a href="{{ branch.url }}">{{ branch.name}}</a></td>
            <td>{{ branch.address }}, {{ branch.post-code }}</td>
            <td>{{ branch.tel }}</td>

        </tr>

        {% endfor %}

    </tbody>

</table>

<div class="constrain"><p><iframe style="border: none;" src="https://mapsengine.google.com/map/embed?mid=zeJ1RdRSXjJo.kslrYU6dEAxs" width="1168" height="876"></iframe></p></div>

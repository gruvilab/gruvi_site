---
title: "GrUVi - People"
layout: gridlay
excerpt: "GrUVi: Team members"
sitemap: false
permalink: /people/
---

## Gruviers

### Lab Directors
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% if member.role == "Lab Director" %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-3 clearfix">

<table border="0">
<center>
<tr>
<td><a  href="{{ member.website }}"><img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="75%" style="float: left" /></a></td>
</tr>
<tr>
<td><h4><a href="{{ member.website }}">{{ member.name }}</a></h4></td>
</tr>
</center>
</table>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 3 %}
</div>
{% endif %}

{% endif %}

{% endfor %}



### Affiliated Faculty
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% if member.role == "Affiliated Faculty" %}


{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-3 clearfix">

<table border="0">
<center>
<tr>
<td><a  href="{{ member.website }}"><img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="75%" style="float: left" /></a></td>
</tr>
<tr>
<td><h4><a href="{{ member.website }}">{{ member.name }}</a></h4></td>
</tr>
</center>
</table>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 3 %}
</div>
{% endif %}

{% endif %}

{% endfor %}



### Graduate Students 
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% if member.role == "Graduate Student" %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-3 clearfix">

<table border="0">
<center>
<tr>
<td><a  href="{{ member.website }}"><img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="75%" style="float: left" /></a></td>
</tr>
<tr>
<td><h4><a href="{{ member.website }}">{{ member.name }}</a></h4></td>
</tr>
</center>
</table>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 3 %}
</div>
{% endif %}

{% endif %}

{% endfor %}


### Postdocs and Visitors
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% if member.role == "Postdoc" or member.role == "Visitor" %}


{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-3 clearfix">

<table border="0">
<center>
<tr>
<td><a  href="{{ member.website }}"><img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="75%" style="float: left" /></a></td>
</tr>
<tr>
<td><h4><a href="{{ member.website }}">{{ member.name }}</a></h4></td>
</tr>
</center>
</table>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 3 %}
</div>
{% endif %}

{% endif %}

{% endfor %}


### Alumni

<div class="col-sm-12 clearfix">
 <table style="width:100%">

{% assign number_printed = 0 %}

{% for member in site.data.alumni%}

{% assign number_printed = number_printed | plus: 1 %}  

  <tr>
    <th>{{ member.name }}</th>
    <th><newstit>{{ member.graduation }}</newstit></th>
    <th>{{ member.text }}</th>
  </tr>

{% endfor %}

</table> 
</div>

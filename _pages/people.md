---
title: "GrUVi - People"
layout: gridlay
excerpt: "GrUVi: Team members"
sitemap: false
permalink: /people/
---

## Gruviers

<div class="col-sm-12" style="padding-right: 0px; padding-left: 0px">
### Faculty
</div>
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% if member.role == "Faculty" %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="col-sm-4 col-xs-12 clearfix fixheight" style="padding-right: 17px; padding-left: 17px;">
<div class="row">
{% endif %}

<div class="col-sm-6 col-xs-6 clearfix" style="padding-right: 0px; padding-left: 0px">

<div class="row" style="padding-left: 25%;  margin-bottom: 0px;">
<a  href="{{ member.website }}" target="_blank"><img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="75%" style="float: left;"/></a>
</div>

<h5 style="text-align: center;"><a href="{{ member.website }}" target="_blank">{{ member.name }}</a></h5>


</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
</div>
{% endif %}

{% endif %}

{% endfor %}

{% if even_odd != 1 %}
</div>
</div>
{% endif %}


<div class="col-sm-12" style="padding-right: 0px; padding-left: 0px">
### Affiliated Faculty
</div>
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% if member.role == "Affiliated Faculty" %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="col-sm-4 col-xs-12 clearfix fixheight" style="padding-right: 17px; padding-left: 17px;">
<div class="row">
{% endif %}

<div class="col-sm-6 col-xs-6 clearfix" style="padding-right: 0px; padding-left: 0px">

<div class="row" style="padding-left: 25%;  margin-bottom: 0px;">
<a  href="{{ member.website }}" target="_blank"><img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="75%" style="float: left;"/></a>
</div>

<h5 style="text-align: center;"><a href="{{ member.website }}" target="_blank">{{ member.name }}</a></h5>


</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
</div>
{% endif %}

{% endif %}

{% endfor %}

{% if even_odd != 1 %}
</div>
</div>
{% endif %}



<div class="col-sm-12" style="padding-right: 0px; padding-left: 0px">
### Students
</div>
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% if member.role == "Graduate Student" or member.role == "Postdoc"%}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="col-sm-4 col-xs-12 clearfix fixheight" style="padding-right: 17px; padding-left: 17px;">
<div class="row">
{% endif %}

<div class="col-sm-6 col-xs-6 clearfix" style="padding-right: 0px; padding-left: 0px">

<div class="row" style="padding-left: 25%;  margin-bottom: 0px;">
<a  href="{{ member.website }}" target="_blank"><img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="75%" style="float: left;"/></a>
</div>

<h5 style="text-align: center;"><a href="{{ member.website }}" target="_blank">{{ member.name }}</a></h5>


</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
</div>
{% endif %}

{% endif %}

{% endfor %}

{% if even_odd != 1 %}
</div>
</div>
{% endif %}



<div class="col-sm-12" style="padding-right: 0px; padding-left: 0px">
### Alumni
</div>

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

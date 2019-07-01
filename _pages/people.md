---
title: "GrUVi - People"
layout: gridlay
excerpt: "GrUVi: Team members"
sitemap: false
permalink: /people/
---

## Gruviers

<div class="row" style="margin-top: 0px; margin-bottom: 0px;">
<div class="col-sm-12">
### Faculty
</div>
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% if member.role == "Faculty" %}

{% assign even_odd = number_printed | modulo: 5 %}

{% if even_odd == 0 %}
<div class="col-lg-12 col-sm-12 col-xs-6 clearfix fixheight" style="padding-right: 17px; padding-left: 17px;">
<div class="row">
{% endif %}

<div class="col-sm-2 col-sm-2 col-xs-6 clearfix" style="padding-right: 0px; padding-left: 0px">

<div class="row" style="padding-left: 25%;  margin-bottom: 0px;">
<a  href="{{ member.website }}" target="_blank"><img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="75%" style="float: left;"/></a>
</div>

<h5 style="text-align: center;"><a href="{{ member.website }}" target="_blank">{{ member.name }}</a></h5>


</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 4 %}
</div>
</div>
{% endif %}

{% endif %}

{% endfor %}

{% if even_odd != 1 %}
</div>
</div>
{% endif %}
</div>

<div class="row" style="margin-top: 0px; margin-bottom: 0px;">
<div class="col-sm-12">
### Affiliated Faculty
</div>
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% if member.role == "Affiliated Faculty" %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="col-sm-5 col-xs-12 clearfix fixheight" style="padding-right: 17px; padding-left: 17px;">
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
</div>

<div class="row" style="margin-top: 0px; margin-bottom: 0px;">
<div class="col-sm-12">
### Postdocs and Visitors
</div>
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% if member.role == "Visitor" or member.role == "Postdoc"%}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="col-sm-5 col-xs-12 clearfix fixheight" style="padding-right: 17px; padding-left: 17px;">
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
</div>

<div class="row" style="margin-top: 0px; margin-bottom: 0px;">
<div class="col-sm-12">
### Graduate Students
</div>
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% if member.role == "Graduate Student"%}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="col-sm-5 col-xs-12 clearfix fixheight" style="padding-right: 17px; padding-left: 17px;">
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
</div>

<div class="row" style="margin-top: 0px; margin-bottom: 0px;">
{% assign year = 999 %} 
<div class="col-sm-12">
### Alumni
</div>
<div class="col-sm-12">
{% for member in site.data.alumni%}

  {% assign currentdate = member.graduation | year: "%Y" %}
  {% if currentdate != year %}
#### {{ currentdate }}
    {% assign year = currentdate %} 
  {% endif %}


<p>  <newstit>{{ member.name }}</newstit>, <pubtit>{{ member.text }}</pubtit></p>
{% endfor %}
</div>
</div>

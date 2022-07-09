---
title: "SFU Visual Computing Workshop - Panelists and Organizers"
layout: gridlay
excerpt: "SFU Visual Computing Workshop - Panelists and Organizers"
sitemap: false
permalink: /vc_workshop_2022_people/
---

## SFU Visual Computing Workshop

<div class="row" style="margin-top: 0px; margin-bottom: 0px;">
<div class="col-sm-12">
### Panelists
</div>
{% assign number_printed = 0 %}
{% for member in site.data.vc_workshop_people %}

{% if member.role == "Panelist" %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="col-sm-4 col-xs-12 clearfix fixheight" style="padding-right: 17px; padding-left: 17px;">
<div class="row">
{% endif %}

<div class="col-sm-6 col-xs-6 clearfix" style="padding-right: 0px; padding-left: 0px">

<div class="row" style="padding-left: 15%;  margin-bottom: 0px;">
<a  href="{{ member.website }}" target="_blank"><img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="85%" style="float: left;"/></a>
</div>

<h5 style="text-align: center; margin-top: 2px;"><a href="{{ member.website }}" target="_blank">{{ member.name }}</a></h5>


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
### Organizers
</div>
{% assign number_printed = 0 %}
{% for member in site.data.vc_workshop_people %}

{% if member.role == "Organizer" %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="col-sm-4 col-xs-12 clearfix fixheight" style="padding-right: 17px; padding-left: 17px;">
<div class="row">
{% endif %}

<div class="col-sm-6 col-xs-6 clearfix" style="padding-right: 0px; padding-left: 0px">

<div class="row" style="padding-left: 15%;  margin-bottom: 0px;">
<a  href="{{ member.website }}" target="_blank"><img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="85%" style="float: left;"/></a>
</div>

<h5 style="text-align: center; margin-top: 2px;"><a href="{{ member.website }}" target="_blank">{{ member.name }}</a></h5>


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


</div>

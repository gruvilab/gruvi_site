---
title: "GrUVi - Publications"
layout: gridlay
excerpt: "GrUVi -- Publications."
sitemap: false
permalink: /publications/
---

## Publications

{% for publi in site.data.publist %}
  {% assign currentdate = publi.year | year: "%Y" %}
  {% if currentdate != year %}

<a href="#C{{currentdate}}">{{currentdate}}</a>,&nbspc;

  {% endif %}
{% endfor %}


{% for publi in site.data.publist %}
  {% assign currentdate = publi.year | year: "%Y" %}
  {% if currentdate != year %}

<a id="C{{currentdate}}">
### {{ currentdate }}
</a>
    {% assign year = currentdate %} 
  {% endif %}


    {% if publi.highlight == 1 %}

{% if 0 == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-12 clearfix">
 <div class="well clearfix">


  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="15%" style="float: left; min-width: 80px; min-height: 80px;" />

<pubtit>{{ publi.title }}</pubtit>
<em>{{ publi.authors }}</em><br>
<em>In {{ publi.venue }} ({{ publi.year }})</em>

<p>{{ publi.description }}</p>


{% assign icons_printed = 0 %}
<p style="text-align: right;">
{% include pubdetails.html pdf=publi.pdf presentation=publi.presentation project_page=publi.project_page video=publi.video bibtex=publi.bibtex %}
</p>

 </div>
</div>


{% assign number_printed = number_printed | plus: 1 %}

{% if 1 == 1 %}
</div>
{% endif %}

{% endif %}


{% endfor %}



{% for publi in site.data.publist %}


{% endfor %}



<p> &nbsp; </p>


## Older publications

{% for publi in site.data.publist %}
{% if publi.highlight == 0 %}
  {% assign currentdate = publi.year | year: "%Y" %}
  {% if currentdate != year %}


### {{ currentdate }}

    {% assign year = currentdate %} 
  {% endif %}


<p style="padding-bottom: 15px">

<em>{{ publi.authors }},</em> <pubtit>&quot;{{ publi.title }}&quot;.</pubtit> <em>In {{ publi.venue }} ({{ publi.year }}).</em>
<br>
{% assign icons_printed = 0 %}
{% include pubdetails.html pdf=publi.pdf presentation=publi.presentation project_page=publi.project_page video=publi.video bibtex=publi.bibtex %}
</p>
{% endif %}
{% endfor %}



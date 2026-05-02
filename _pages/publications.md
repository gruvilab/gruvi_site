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

### {{ currentdate }}
    {% assign year = currentdate %} 
  {% endif %}

{% if 0 == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-12 clearfix">
 <div class="well clearfix">

{% if publi.image %}
  {% assign ext = publi.image | split:'.' | last %}
  {% if ext == 'mov' %}
  <video autoplay loop muted playsinline class="img-responsive" width="15%" style="float: left; min-width: 80px; min-height: 80px;">
      <source src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" type="video/mp4">
  </video>
  {% else %}
  <img src="/images/pubpic/{{ publi.image }}" class="img-responsive" width="15%" style="float: left; min-width: 80px; min-height: 80px;" />
  {% endif %}
{% endif %}

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


{% endfor %}



{% for publi in site.data.publist %}


{% endfor %}



<p> &nbsp; </p>



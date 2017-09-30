---
title: "GrUVi - Publications"
layout: gridlay
excerpt: "GrUVi -- Publications."
sitemap: false
permalink: /publications/
---


# Publications

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if 0 == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-12 clearfix">
 <div class="well clearfix">
  <pubtit>{{ publi.title }}</pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="15%" style="float: left; min-width: 80px;" />
  <p>{{ publi.description }}</p>
  <p><em>{{ publi.authors }}</em></p>
  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if 1 == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}



<p> &nbsp; </p>


## Full List

{% for publi in site.data.publist %}

  {{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>

{% endfor %}


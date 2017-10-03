---
title: "GrUVi - Home"
layout: homelay
excerpt: "GrUVi Lab at Simon Fraser University."
sitemap: false
permalink: /
---


{% assign number_printed = 0 %}
{% assign ID = 0 %}
{% for article in site.data.news %}
{% assign ID = ID | plus: 1 %}
{% if article.highlight == 1 %}
{% assign number_printed = number_printed | plus: 1 %}

{% include newsdetails.html number_printed=ID headline=article.headline date=article.date image=article.image text=article.text %}

<div class="col-sm-6 clearfix">
 <div class="well subhover pointer" onclick="openNavD{{ ID }}()" style="cursor:pointer;">
  <newstit>{{ article.headline }}</newstit>
  <p>{{ article.date }}</p>
  <img src="{{ site.url }}{{ site.baseurl }}/images/newspic/{{ article.image }}" class="img-responsive" width="33%" hspace="10" style="float: left;" />
  <p style="padding: 0 15px">{{ article.text | truncatewords: 35 | strip_html }}</p>
 </div>
</div>


{% endif %}
{% endfor %}



---
title: "GrUVi - All News"
layout: textlay
excerpt: "GrUVi Lab at Simon Fraser University."
sitemap: false
permalink: /allnews
---

## News
{% assign number_printed = 0 %}


{% for post in site.data.news %}
   {% capture post_count %} {{ post_count | plus: 1 }} {% endcapture %}
{% endfor %}

{% for article in site.data.news%}

{% capture ids %} {{ post_count | minus: number_printed }} {% endcapture %}

<div class="row">
{% include newsdetails.html number_printed=ids headline=article.headline date=article.date image=article.image text=article.text %}
</div>
  

<div class="subhover pointer" style="cursor:pointer" onclick="openNavD{{ ids }}()">
  <br>{{ article.date }}. <newstit>{{ article.headline }}: </newstit>&nbsp;{{ article.text | strip_html | truncatewords: 45}}
</div>

{% assign number_printed = number_printed | plus: 1 %}
{% endfor %}

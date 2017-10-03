---
title: "GrUVi - All News"
layout: textlay
excerpt: "GrUVi Lab at Simon Fraser University."
sitemap: false
permalink: /allnews
---

## News
{% assign ID = 0 %}


{% for post in site.data.news %}
{% assign ID = ID | plus: 1 %}
   {% capture post_count %} {{ post_count | plus: 1 }} {% endcapture %}
{% endfor %}

{% for article in site.data.news%}

<div class="row">
{% include newsdetails.html number_printed=ID headline=article.headline date=article.date image=article.image text=article.text %}
</div>

{% endfor %}

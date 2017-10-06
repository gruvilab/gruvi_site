---
title: "GrUVi - Home"
layout: homelay
excerpt: "GrUVi Lab at Simon Fraser University."
sitemap: false
permalink: /
---

## Welcome to GrUVi!

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum odio ex, ac aliquet quam blandit eget. Maecenas vel vestibulum metus. Sed ornare justo risus, sit amet porta nunc porttitor nec. Integer cursus dignissim lacus. Nam pellentesque enim eget consectetur lobortis. Nunc suscipit ex at mauris convallis, sit amet hendrerit enim bibendum.

{% assign number_printed = 0 %}
{% assign ID = 0 %}
{% for article in site.data.news %}
{% assign even_odd = number_printed | modulo: 2 %}
{% assign ID = ID | plus: 1 %}
{% if article.highlight == 1 %}
{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

{% include newsdetails.html number_printed=ID headline=article.headline date=article.date image=article.image text=article.text %}

<div class="col-sm-6 clearfix">
 <div class="well subhover pointer" onclick="openNavD{{ ID }}()" style="cursor:pointer;">
  <newstit>{{ article.headline }}</newstit>
  <p>{{ article.date }}</p>
  <img src="{{ site.url }}{{ site.baseurl }}/images/newspic/{{ article.image }}" class="img-responsive" width="33%" hspace="10" style="float: left;" />
  <p style="padding: 0 15px; text-align=justify; text-justify: inter-word;">{{ article.text | truncatewords: 35 | strip_html }}</p>
 </div>
</div>

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}



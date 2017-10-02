---
title: "GrUVi - Home"
layout: homelay
excerpt: "GrUVi Lab at Simon Fraser University."
sitemap: false
permalink: /
---


{% assign number_printed = 0 %}
{% for article in site.data.news %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if article.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}


<div id="myNav{{ number_printed }}" class="overlay clearfix" align="center">

  <div class="overlay-content" style="max-width: 600px;">
<a href="javascript:void(0)" class="closebtn" style="cursor:pointer" onclick="closeNav{{ number_printed }}()">&times;</a>
 <div class="well  clearfix">

  <newstit>{{ article.headline }}</newstit>
  <p>{{ article.date }}</p>
  <img src="{{ site.url }}{{ site.baseurl }}/images/newspic/{{ article.image }}" class="img-responsive" width="33%" hspace="10" style="float: left" />
  <p style="padding: 0 15px">{{ article.text}}</p>
</div>

  </div>
</div>

<div class="col-sm-6 clearfix">
 <div class="well subhover pointer" onclick="openNav{{ number_printed }}()" style="cursor:pointer;">
  <newstit>{{ article.headline }}</newstit>
  <p>{{ article.date }}</p>
  <img src="{{ site.url }}{{ site.baseurl }}/images/newspic/{{ article.image }}" class="img-responsive" width="33%" hspace="10" style="float: left;" />
  <p style="padding: 0 15px">{{ article.text | truncate: 300 }}</p>
 </div>
</div>

<script>
function openNav{{ number_printed }}() {
    document.getElementById("myNav{{ number_printed }}").style.width = "100%";
}

function closeNav{{ number_printed }}() {
    document.getElementById("myNav{{ number_printed }}").style.width = "0%";
}
</script>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}


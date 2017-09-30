---
title: "Home"
layout: textlay
excerpt: "Allan Lab at Leiden University."
sitemap: false
permalink: /allnews.html
---

# News
{% assign number_printed = 0 %}

	{% for article in site.data.news%}


{% assign number_printed = number_printed | plus: 1 %}


<div class="row">
<div id="myNavD{{ number_printed }}" class="overlay clearfix" align="center">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNavD{{ number_printed }}()">&times;</a>
  <div class="overlay-content" style="max-width: 600px;">

 <div class="well clearfix">
  <newstit>{{ article.headline }}</newstit>
  <p style="text-align:center">{{ article.date }}</p>
  {% if article.image %}
  <img src="{{ site.url }}{{ site.baseurl }}/images/newspic/{{ article.image }}" class="img-responsive" width="33%" hspace="10" style="float: left" />
  {% endif %}
  <p style="padding: 0 15px">{{ article.text}}</p>
</div>

  </div>
</div>
</div>

<script>
function openNavD{{ number_printed }}() {
    document.getElementById("myNavD{{ number_printed }}").style.width = "100%";
}

function closeNavD{{ number_printed }}() {
    document.getElementById("myNavD{{ number_printed }}").style.width = "0%";
}
</script>
  

<div class="subhover pointer" style="cursor:pointer" onclick="openNavD{{ number_printed }}()">
  <br>{{ article.date }}. <newstit>{{ article.headline }}</newstit>&nbsp;{{ article.text | truncate: 150 }}<br />
</div>


{% endfor %}

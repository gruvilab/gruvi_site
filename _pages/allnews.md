---
title: "Home"
layout: textlay
excerpt: "Allan Lab at Leiden University."
sitemap: false
permalink: /allnews
---

## News
{% assign number_printed2 = 0 %}


{% for post in site.data.news %}
   {% capture post_count %} {{ post_count | plus: 1 }} {% endcapture %}
{% endfor %}

{% for article in site.data.news%}

{% assign number_printed = post_count | minus: number_printed2 %}



<div class="row">
<div id="myNavD{{ number_printed }}" class="overlay clearfix" align="center">
  <div class="overlay-content" style="max-width: 600px;">

 <div class="well clearfix">
<a href="javascript:void(0)" class="closebtn" onclick="closeNavD{{ number_printed }}()">&times;</a>
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

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function openNews() {
   var newsID = getParameterByName('newsID');
   if((newsID != null) & (newsID != ""))
	window["openNavD"+newsID]();
}
window.onload = openNews;

</script>
  

<div class="subhover pointer" style="cursor:pointer" onclick="openNavD{{ number_printed }}()">
  <br>{{ article.date }}. <newstit>{{ article.headline }}</newstit>&nbsp;{{ article.text | truncate: 150 }}<br />
</div>

{% assign number_printed2 = number_printed2 | plus: 1 %}
{% endfor %}

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

{% assign newsID = post_count | minus: number_printed %}



<div class="row">
{% include newsdetails.html number_printed=ID headline=article.headline date=article.date image=article.image text=article.text %}
</div>

<script>
function openNavD{{ newsID }}() {
    document.getElementById("myNavD{{ newsID }}").style.width = "100%";
}

function closeNavD{{ newsID }}() {
    document.getElementById("myNavD{{ newsID }}").style.width = "0%";
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
  

<div class="subhover pointer" style="cursor:pointer" onclick="openNavD{{ newsID }}()">
  <br>{{ article.date }}. <newstit>{{ article.headline }}: </newstit>&nbsp;{{ article.text | truncatewords: 45 | strip_html }}
</div>

{% assign number_printed = number_printed | plus: 1 %}
{% endfor %}

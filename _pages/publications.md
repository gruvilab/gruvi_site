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


  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="15%" style="float: left; min-width: 80px;" />

<pubtit>{{ publi.title }}</pubtit>
<em>{{ publi.authors }}</em><br>
<em>In {{ publi.venue }}</em>

<p>{{ publi.description }}</p>


{% assign icons_printed = 0 %}
<p style="text-align: right;">
[
{% if publi.pdf %}
{% assign icons_printed = icons_printed | plus: 1 %}
<a target="_blank" href="{{ site.url }}{{ site.baseurl }}/pdfs/{{ publi.pdf }}">
   <img src="{{ site.url }}{{ site.baseurl }}/images/icons/icon_pdf.gif" style="cursor: pointer; margin-bottom: 0px; margin-top: 0px; margin-right: 2px; border-radius:2%;" height="16" border="0" width="16" />
Paper</a>
{% endif %}

{% if publi.project_page %}
{% assign icons_printed = icons_printed | plus: 1 %}

{% if icons_printed >= 2 %}
&#32;|&nbsp;
{% endif %}
<a target="_blank" href="{{ publi.project_page }}">
   <img src="{{ site.url }}{{ site.baseurl }}/images/icons/project_page.png" style="cursor: pointer; margin-bottom: 0px; margin-top: 0px; margin-right: 2px; border-radius:2%;" height="16" border="0" width="16" />
Project&nbsp;Page</a>
{% endif %}

{% if publi.video %}
{% assign icons_printed = icons_printed | plus: 1 %}
{% if icons_printed >= 2 %}
&#32;|&nbsp;
{% endif %}
<a href="{{ publi.video }}" target="_blank">
   <img src="{{ site.url }}{{ site.baseurl }}/images/icons/icon_youtube.png" style="cursor: pointer; margin-bottom: 0px; margin-top: 0px; margin-right: 2px; border-radius:2%;" height="16" border="0" width="16" />
Video</a>
{% endif %}

{% if publi.presentation %}
{% if icons_printed >= 2 %}
&#32;|&nbsp;
{% endif %}
<a target="_blank" href="{{ site.url }}{{ site.baseurl }}/presentations/{{ publi.presentation }}">
   <img src="{{ site.url }}{{ site.baseurl }}/images/icons/icon_ppt.gif" style="cursor: pointer; margin-bottom: 0px; margin-top: 0px; margin-right: 2px; border-radius:2%;" height="16" border="0" width="16" />&nbsp;
Slides</a>
{% endif %}
]</p>

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

<p style="padding-bottom: 15px">

<em>{{ publi.authors }},</em> <pubtit>&quot;{{ publi.title }}&quot;.</pubtit> <em>In {{ publi.venue }}.</em>
<br>
{% assign icons_printed = 0 %}
[
{% if publi.pdf %}
{% assign icons_printed = icons_printed | plus: 1 %}
<a target="_blank" href="{{ site.url }}{{ site.baseurl }}/pdfs/{{ publi.pdf }}">
   <img src="{{ site.url }}{{ site.baseurl }}/images/icons/icon_pdf.gif" style="cursor: pointer; margin-bottom: 0px; margin-top: 0px; margin-right: 2px; border-radius:2%;" height="16" border="0" width="16" />
Paper</a>
{% endif %}

{% if publi.project_page %}
{% assign icons_printed = icons_printed | plus: 1 %}
{% if icons_printed >= 2 %}
&#32;|&nbsp;
{% endif %}
<a target="_blank" href="{{ publi.project_page }}">
   <img src="{{ site.url }}{{ site.baseurl }}/images/icons/project_page.png" style="cursor: pointer; margin-bottom: 0px; margin-top: 0px; margin-right: 2px; border-radius:2%;" height="16" border="0" width="16" />
Project&nbsp;Page</a>
{% endif %}

{% if publi.video %}
{% assign icons_printed = icons_printed | plus: 1 %}
{% if icons_printed >= 2 %}
&#32;|&nbsp;
{% endif %}
<a href="{{ publi.video }}" target="_blank">
   <img src="{{ site.url }}{{ site.baseurl }}/images/icons/icon_youtube.png" style="cursor: pointer; margin-bottom: 0px; margin-top: 0px; margin-right: 2px; border-radius:2%;" height="16" border="0" width="16" />
Video</a>
{% endif %}

{% if publi.presentation %}
{% assign icons_printed = icons_printed | plus: 1 %}
{% if icons_printed >= 2 %}
&#32;|&nbsp;
{% endif %}
<a target="_blank" href="{{ site.url }}{{ site.baseurl }}/presentations/{{ publi.presentation }}">
   <img src="{{ site.url }}{{ site.baseurl }}/images/icons/icon_ppt.gif" style="cursor: pointer; margin-bottom: 0px; margin-top: 0px; margin-right: 2px; border-radius:2%;" height="16" border="0" width="16" />&nbsp;
Slides</a>
{% endif %}
]
</p>
  

{% endfor %}


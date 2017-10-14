---
title: "GrUVi - Home"
layout: homelay
excerpt: "GrUVi Lab at Simon Fraser University."
sitemap: false
permalink: /
---

<script type="text/javascript" language="javascript">
			$(function() {
				$('.news').trunk8({
				  lines: 11
				});
			});
</script>

## Welcome to GrUVi!
<p align="justify" style="padding-bottom: 11px;">
We are an inter-disciplinary team of researchers working in visual computing, in particular, computer graphics and computer vision. Current areas of focus include 3D and robotic vision, 3D printing and content creation, animation, AR/VR, geometric and image-based modelling, machine learning, natural phenomenon, and shape analysis. Our research works frequently appear in top venues such as SIGGRAPH, CVPR, and ICCV (we rank <a href="http://csrankings.org/#/index?vision&graph">#19 in the world in terms of top publications in computer graphics and computer vision</a>, as of 10/2017) and we collaborate widely with the industry and academia (e.g., Adobe Research, Google, MSRA, Princeton, Stanford, and Washington). Our faculty and students have won numerous honours and awards, including <a href="https://rsc-src.ca/en/fellows">FRSC</a>, <a href="http://graphicsinterface.org/awards/alain-fournier/">Alain Fournier Best Thesis Award</a>, Google Faculty Award, TR35@Singapore, <a href="http://graphicsinterface.org/awards/alain-fournier/">NSERC Discover Accelerator</a>, and six best paper awards from ECCV, SCA, SGP, etc. Gruvi alumni went on to take up faculty positions in Canada, the US, and Asia, while others now work at companies including Apple, EA, Facebook, Google, IBM, and Microsoft.
</p>

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
 <div class="well">
  <newstit class="subhover pointer" onclick="openNavD{{ ID }}()" style="cursor:pointer;">{{ article.headline }}</newstit>
  <p>{{ article.date }}</p>
  <img src="{{ site.url }}{{ site.baseurl }}/images/newspic/{{ article.image }}" class="img-responsive subhover pointer" onclick="openNavD{{ ID }}()" width="33%" hspace="10" style="float: left;" />
  <p class="news" style="padding: 0 15px; text-align=justify; text-justify: inter-word;">{{ article.text | strip_html }}</p>
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



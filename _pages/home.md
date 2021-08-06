---
title: "GrUVi - Home"
layout: homelay
excerpt: "GrUVi Lab at Simon Fraser University."
sitemap: false
permalink: /
---

<script type="text/javascript" language="javascript">
	$(function() {
		setTimeout( function(){ 
		    $('.news').trunk8({
			lines: 11
			});
		}  , 150 );
	setTimeout( function(){ 
		    $('.news').trunk8({
			lines: 11
			});
			
			var wells = document.getElementsByClassName("well");
			for (var i = 0; i < wells.length; i++) {
			   console.log(well.item(i));
			   //if($(this).height() > 348)
				//{
				//	$(this).lastChild.addClass('longtitle');
				//}
			}
			
		}  , 500 );
	$('.news').trunk8({
		lines: 11
		});
	});

$(window).resize(function() {

$('.news').trunk8({
	lines: 11
	});

});


</script>



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



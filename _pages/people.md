---
title: "GrUVi - People"
layout: gridlay
excerpt: "GrUVi: Team members"
sitemap: false
permalink: /people/
---

## Gruviers

{% assign faculty = site.data.team_members | where: "role", "Faculty" %}
{% include peoplelist.html title="Faculty" people=faculty %}

{% assign affiliated = site.data.team_members | where: "role", "Affiliated Faculty" %}
{% include peoplelist.html title="Affiliated Faculty" people=affiliated %}

{% assign postdoc_visitors = site.data.team_members | where_exp:
"member", "member.role == 'Visitor' or member.role == 'Postdoc'" %}
{% include peoplelist.html title="Postdocs and Visitors" people=postdoc_visitors %}

{% assign students = site.data.team_members | where:"role", "Graduate Student" %}
{% include peoplelist.html title="Graduate Students" people=students %}

<div class="row" style="margin-top: 0px; margin-bottom: 0px;">
{% assign year = 999 %} 
<div class="col-sm-12">
### Alumni
</div>
<div class="col-sm-12">
{% for member in site.data.alumni%}

  {% assign currentdate = member.graduation | year: "%Y" %}
  {% if currentdate != year %}
#### {{ currentdate }}
    {% assign year = currentdate %} 
  {% endif %}


<p> 
   <newstit>
   {% if member.website %}
      <a  href="{{ member.website }}" target="_blank">{{ member.name }}</a>
   {% else %}  
      {{ member.name }}
   {% endif %}
   </newstit> - <pubtit>{{ member.text }}</pubtit></p>
{% endfor %}
</div>
</div>

---
title: "People · GrUVi"
layout: gridlay
excerpt: "Faculty, students, postdoctoral researchers, visitors, and alumni in the GrUVi visual computing community at SFU."
sitemap: false
permalink: /people/
---

<header class="page-head" markdown="0">
  <h1>People</h1>
  <nav class="jump-nav" aria-label="People sections">
    <a href="#faculty">Faculty</a>
    <a href="#research-labs">Research labs</a>
    <a href="#affiliated-faculty">Affiliated faculty</a>
    <a href="#postdocs-and-visitors">Postdocs and visitors</a>
    <a href="#graduate-students">Graduate students</a>
    <a href="#pawfessors">Pawfessors</a>
    <a href="#alumni">Alumni</a>
  </nav>
</header>

{% assign faculty = site.data.team_members | where: "role", "Faculty" %}
{% include peoplelist.html title="Faculty" people=faculty %}

{% include labs.html %}

{% assign affiliated = site.data.team_members | where: "role", "Affiliated Faculty" %}
{% include peoplelist.html title="Affiliated faculty" people=affiliated %}

{% assign postdoc_visitor_roles = "Visitor,Postdoc" | split: "," %}
{% assign postdoc_visitors = site.data.team_members | where_exp: "member", "postdoc_visitor_roles contains member.role" %}
{% include peoplelist.html title="Postdocs and visitors" people=postdoc_visitors %}

{% assign student_groups = site.data.team_members | where: "role", "Graduate Student" | sort: "last_name" | group_by: "last_name" | sort: "name" %}
{% assign students = "" | split: "," %}
{% for group in student_groups %}{% assign students = students | concat: group.items %}{% endfor %}
{% include peoplelist.html title="Graduate students" people=students %}

{% include pawfessors.html %}

<section class="people-group" id="alumni" aria-labelledby="alumni-heading" markdown="0">
  <div class="group-head"><h2 id="alumni-heading">Alumni</h2><span>{{ site.data.alumni | size }}</span></div>
  <div class="alumni-list">
    {% assign year = 999 %}
    {% for member in site.data.alumni %}
      {% assign currentdate = member.graduation | year: "%Y" %}
      {% if currentdate != year %}<h3>{{ currentdate }}</h3>{% assign year = currentdate %}{% endif %}
      <p><span>{% if member.website %}<a href="{{ member.website }}" target="_blank" rel="noopener">{{ member.name }}</a>{% else %}{{ member.name }}{% endif %}</span>{% assign alumni_text = member.text | strip %}{% if alumni_text != empty %}<small>{{ alumni_text }}</small>{% endif %}</p>
    {% endfor %}
  </div>
</section>

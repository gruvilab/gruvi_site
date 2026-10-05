---
title: "Publications · GrUVi"
layout: gridlay
excerpt: "Research publications from the GrUVi visual computing community at Simon Fraser University."
sitemap: false
permalink: /publications/
---

<header class="page-head" markdown="0">
  <h1>Publications</h1>
  <p>Research from GrUVi faculty and students, newest first.</p>
</header>

<section class="archive" aria-label="All publications" markdown="0">

  <div class="publication-tools" role="search">
    <label class="sr-only" for="publication-search">Search publications</label>
    <input id="publication-search" type="search" placeholder="Search by title, author, venue, or year" autocomplete="off">
    <label class="sr-only" for="publication-year">Filter by year</label>
    <select id="publication-year">
      <option value="all">All years</option>
      {% assign filter_year = 999 %}
      {% for publi in site.data.publist %}
        {% assign current_year = publi.year | year: "%Y" %}
        {% if current_year != filter_year %}<option value="{{ current_year }}">{{ current_year }}</option>{% assign filter_year = current_year %}{% endif %}
      {% endfor %}
    </select>
    <p class="publication-tools__status" id="publication-status" aria-live="polite"></p>
  </div>

  <div class="publication-list" id="publication-list">
  {% assign year = 999 %}
  {% for publi in site.data.publist %}
    {% assign currentdate = publi.year | year: "%Y" %}
    {% if currentdate != year %}<h2 class="publication-year" data-year-heading="{{ currentdate }}">{{ currentdate }}</h2>{% assign year = currentdate %}{% endif %}
    <article class="publication" id="{{ publi.title | slugify | prepend: 'publication-' | append: '-' | append: currentdate }}" data-year="{{ currentdate }}" data-search="{{ publi.title | append: ' ' | append: publi.authors | append: ' ' | append: publi.venue | append: ' ' | append: publi.year | downcase | escape }}">
      <div class="publication__media">
        {% if publi.image %}{% include pubmedia.html image=publi.image title=publi.title %}{% endif %}
      </div>
      <div class="publication__content">
        {% assign year_text = publi.year | append: '' %}
        <p class="publication__venue">{{ publi.venue }}{% unless publi.venue contains year_text %} {{ publi.year }}{% endunless %}</p>
        <h3>{{ publi.title }}</h3>
        <p class="publication__authors">{{ publi.authors }}</p>
        {% assign publication_description = publi.description | strip %}
        {% if publication_description != empty %}<p class="publication__description">{{ publi.description }}</p>{% endif %}
        {% include pubdetails.html pdf=publi.pdf presentation=publi.presentation project_page=publi.project_page video=publi.video bibtex=publi.bibtex %}
      </div>
    </article>
  {% endfor %}
  </div>
  <p class="publication-empty" id="publication-empty" hidden>No publications match this search.</p>
</section>

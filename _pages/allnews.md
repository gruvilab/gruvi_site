---
title: "News · GrUVi"
layout: textlay
excerpt: "News, awards, events, and research updates from the GrUVi community at Simon Fraser University."
sitemap: false
permalink: /news/
---

<header class="page-head" markdown="0">
  <h1>News</h1>
  <p>Papers, awards, events, and announcements from GrUVi.</p>
</header>

<div class="news-archive" markdown="0">
{% for article in site.data.news %}
  {% assign news_id = article.headline | slugify %}
  <details class="news-item" id="{{ news_id }}">
    <summary>
      <div class="news-item__summary">
        <time>{{ article.date }}</time>
        <h2>{{ article.headline }}</h2>
        <p>{{ article.text | strip_html | truncatewords: 32 }}</p>
        <span class="news-item__toggle"><span>Read more</span><i aria-hidden="true">+</i></span>
      </div>
      {% if article.image %}
        {% assign news_img = '/images/newspic/' | append: article.image | relative_url %}
        <span class="poster" style="--poster: url('{{ news_img }}')"><img src="{{ news_img }}" alt="" loading="lazy"></span>
      {% endif %}
    </summary>
    <div class="news-item__content" data-news-content="{{ article.text | escape }}"><noscript>{{ article.text | strip_html }}</noscript></div>
  </details>
{% endfor %}
</div>

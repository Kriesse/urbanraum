---
layout: gallery
title_en: Teachers
title_de: Teachers
---

<div class="gallery">
  {% for teacher in site.teachers %}
    <div class="gallery__item">
      <div class="post">
        <a  class="post__link"
            href="{{ teacher.url | prepend: site.baseurl }}">
          <div class="post__img post__img--teacher">
            {% if teacher.image %}
              <img src="{{ site.baseurl }}/img/{{ teacher.image }}" class="img-flex" />
            {% else %}
              <img src="{{ site.baseurl }}/img/class-placeholder-01.jpg" class="img-flex" />
            {% endif %}
          </div>
          <div  class="post__meta">
            <span>
              {{ teacher.name }}
            </span>
          </div>
        </a>
      </div>
    </div>
  {% endfor %}
</div>

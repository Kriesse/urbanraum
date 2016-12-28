---
  layout: gallery
  title_en: Workshops
  title_de: Workshops
  menu: main
---

{% assign workshops=site.tags.workshops %}
{% assign overview=true %}

<div class="gallery">
  {% for post in site.workshops %}
    <div class="gallery__item gallery__item--large ">
      <div class="post">
        <a  class="post__link"
            href="{{ post.url | prepend: site.baseurl }}">
          <div class="post__img">
            {% if post.image %}
              <img src="{{ site.baseurl }}/img/{{ post.image }}" class="img-flex" />
            {% else %}
              <img src="{{ site.baseurl }}/img/class-placeholder-01.jpg" class="img-flex" />
            {% endif %}
          </div>
          <div  class="post__meta">
            <span data-en="{{ post.title_en }}" data-de="{{ post.title_de }}">
              {{ post.title_en }}
            </span>
            <div class="post__meta__hidden">
            {% if post.date_en or post.date_de %}
              <span data-en="{{ post.date_en }}" data-de="{{ post.date_de }}">{{ post.date_en }}</span>
            {% endif %}
            {% if post.time %}
              ,
              <span>{{ post.time | date: "%R" }}</span>
            {% endif %}
            {% if post.endtime %}
              –
              <span>{{ post.endtime | date: "%R" }}</span>
            {% endif %}
            </div>
          </div>
        </a>
      </div>
    </div>
  {% endfor %}
</div>

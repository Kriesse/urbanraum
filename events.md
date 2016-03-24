---
  layout: default
  title_en: 
  title_de: Veranstaltungen
---

{% assign events=site.tags.events %}
{% assign overview=true %}

<div class="event-list">
  {% for post in site.events %}
    <div class="gallery__item">
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
          </div>
        </a>
      </div>
    </div>
  {% endfor %}
</div>
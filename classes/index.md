---
  layout: default
  title_en: Classes
  title_de: Kurse
---

{% assign classes=site.tags.classes %}
{% assign overview=true %}

<div class="gallery">
  {% for post in classes %}
    <div class="gallery__item">
      <div class="post">
        <a  class="post__link"
            href="{{ post.url | prepend: site.baseurl }}">
          <div class="post__img">
            <img src="{{ site.baseurl }}/img/{{post.image}}" class="img-flex" />
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




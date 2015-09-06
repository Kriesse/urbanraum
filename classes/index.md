---
  layout: default
  title_en: Classes
  title_de: Kurse
---

{% assign classes=site.tags.classes %}
{% assign overview=true %}

{% for post in classes %}
  <div class="post">
    <a  class="post__link"
        href="{{ post.url | prepend: site.baseurl }}">
      <div class="post__img">
        <img src="{{ site.baseurl }}/img/{{post.image}}" class="img-flex" />
      </div>
      <span data-en="{{ post.title_en }}" data-de="{{ post.title_de }}">
        {{ post.title_en }}
      </span>
    </a>
    <!-- {{ post.content }} -->
  </div>
{% endfor %}



---
  layout: default
  title_en: Classes
  title_de: Kurse
---

{% assign classes=site.tags.classes %}
{% assign overview=true %}

{% for post in classes %}
  <div class="post">
    <img src="{{ site.baseurl }}/img/{{post.image}}" class="img-flex" />
    <h4>
      <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </h4>
    
    <!-- {{ post.content }} -->
  </div>
{% endfor %}



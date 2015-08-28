---
  layout: default
  title: Classes
---

{% assign classes=site.tags.classes %}
{% assign overview=true %}

<h2>All Classes:</h2>

{% for post in classes %}
  <div class="post">
    <img src="{{ site.baseurl }}/img/{{post.image}}" class="img-flex" />
    <h4>
      <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </h4>
    
    <!-- {{ post.content }} -->
  </div>
{% endfor %}



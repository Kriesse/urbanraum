---
  layout: default
  title_en: Workshops
  title_de: Workshops
---

{% assign workshops=site.tags.workshops %}
{% assign overview=true %}

<div class="gallery">
  {% for post in site.workshops %}
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
            <div class="post__meta__hidden">
               <span data-en="{{ post.weekday_en }}" data-de="{{ post.weekday_de }}">{{ post.weekday_en }}</span>
  
              {% if post.date_en || post.date_de %}
                 <span data-en="{{ post.date_en }}" data-de="{{ post.date_de }}">{{ post.date_en }}</span>, 
               {% endif %}
               <span data-en="{{ post.time_en }}" data-de="{{ post.time_de }}">{{ post.time_en }}</span>
               –
               <span data-en="{{ post.endtime_en }}" data-de="{{ post.endtime_de }}">{{ post.endtime_en }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  {% endfor %}
</div>



---
layout: archive 
permalink: /
carousel:
  - image: /images/veida-banner4.jpg
  - image: /images/veida-banner6.jpg
  - image: /images/veida-banner7.jpg
  - image: /images/veida-banner8.jpg
  - image: /images/veida-banner9.jpg
  - image: /images/veida-banner10.jpg
---
<div class="tiles">
{% for post in site.posts %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->

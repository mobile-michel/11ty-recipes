---
title: 11ty Recipes Tutorial
layout: base
pagination:
  data: collections.general
  size: 2
  alias: posts
---
## My posts

{%- for post in posts %}
- [{{ post.data.title }}]({{ post.url }})
{%- endfor %}

{% if pagination.href.previous %}
  <a href="{{pagination.href.previous}}">Previous Page</a>
{% endif %}
{% if pagination.href.next %}
  <a href="{{pagination.href.next}}">Next Page</a>
{% endif %}

Tutorial: [11ty Recipes](https://11ty.recipes/)
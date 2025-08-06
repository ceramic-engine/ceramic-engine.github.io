---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ScrollbarVisibility
target: Unity
permalink: api-docs/unity/elements/ScrollbarVisibility/
---

# ScrollbarVisibility

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ScrollbarVisibility.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.ScrollbarVisibility</strong> (Abstract)</div>

Enumeration defining different scrollbar visibility behaviors for scrollable containers.

This enum controls how and when scrollbars appear in scrolling layouts, providing
different strategies for managing the trade-off between visual space and scroll
functionality feedback.

Usage example:
```haxe
var scrollView = new ScrollView();
scrollView.scrollbarVisibility = ScrollbarVisibility.AUTO_SHOW;
```

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:enum` | - |


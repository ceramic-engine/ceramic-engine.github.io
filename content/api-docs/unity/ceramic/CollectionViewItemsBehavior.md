---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: CollectionViewItemsBehavior
target: Unity
permalink: api-docs/unity/ceramic/CollectionViewItemsBehavior/
---

# CollectionViewItemsBehavior

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/CollectionViewItemsBehavior.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.CollectionViewItemsBehavior</strong> (Abstract)</div>

Defines how a CollectionView manages item view creation and recycling.

Different behaviors offer trade-offs between performance and memory usage:
- RECYCLE: Best for large collections with scrolling
- FREEZE: Best for small, static collections
- LAZY: Best for progressively loaded content

```haxe
// Use recycling for a large list
collectionView.itemsBehavior = RECYCLE;

// Freeze items for a small grid that fits on screen
collectionView.itemsBehavior = FREEZE;

// Use lazy loading for content that builds up over time
collectionView.itemsBehavior = LAZY;
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/CollectionView/">CollectionView</a></div>


## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:enum` | - |


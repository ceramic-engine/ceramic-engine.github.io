---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: FragmentData
target: Unity
permalink: api-docs/unity/ceramic/FragmentData/
---

# FragmentData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/FragmentData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.FragmentData</strong> (Typedef)</div>

Data structure that defines a fragment's content and properties.
This is typically loaded from .fragment files and used to instantiate
Fragment objects with their entities, animations, and components.

A FragmentData contains:
- Basic properties like dimensions and appearance
- Entity definitions (items) to instantiate
- Timeline tracks for animations
- Components to attach at the fragment level
- Labels for marking timeline positions

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/Fragment/">Fragment</a>, <a href="/api-docs/unity/ceramic/FragmentItem/">FragmentItem</a>, <a href="/api-docs/unity/ceramic/TimelineTrackData/">TimelineTrackData</a></div>


## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |


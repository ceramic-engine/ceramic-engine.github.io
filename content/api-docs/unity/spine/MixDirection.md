---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: MixDirection
target: Unity
permalink: api-docs/unity/spine/MixDirection/
---

# MixDirection

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Animation.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.MixDirection</strong> (Abstract)</div>

Indicates whether a timeline's <code>alpha</code> is mixing out over time toward 0 (the setup or current pose value) or
mixing in toward 1 (the timeline's value). Some timelines use this to decide how values are applied.
<p>
See Timeline {@link Timeline#apply(Skeleton, float, float, Array, float, MixBlend, MixDirection)}.

## Type Conversions

**From:**
- `[Int](/api-docs/unity/Int/)`

**To:**
- `[Int](/api-docs/unity/Int/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:enum` | - |


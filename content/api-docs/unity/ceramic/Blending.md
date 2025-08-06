---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Blending
target: Unity
permalink: api-docs/unity/ceramic/Blending/
---

# Blending

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Blending.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Blending</strong> (Abstract)</div>

Blending modes that control how pixels are combined when drawing.

Blending determines how source pixels (what you're drawing) are combined
with destination pixels (what's already on screen). Different modes create
different visual effects.

Ceramic uses premultiplied alpha by default for better compositing results.
Most users should stick with AUTO blending unless specific effects are needed.

<div class="see"><strong>See:</strong> Visual.blending</div>


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


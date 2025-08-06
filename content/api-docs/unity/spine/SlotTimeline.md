---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SlotTimeline
target: Unity
permalink: api-docs/unity/spine/SlotTimeline/
---

# SlotTimeline

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Animation.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.SlotTimeline</strong> (Interface) → <a href="/api-docs/unity/spine/AlphaTimeline/">AlphaTimeline</a>, <a href="/api-docs/unity/spine/AttachmentTimeline/">AttachmentTimeline</a>, <a href="/api-docs/unity/spine/DeformTimeline/">DeformTimeline</a>, <a href="/api-docs/unity/spine/RGB2Timeline/">RGB2Timeline</a>, <a href="/api-docs/unity/spine/RGBA2Timeline/">RGBA2Timeline</a>, <a href="/api-docs/unity/spine/RGBATimeline/">RGBATimeline</a>, <a href="/api-docs/unity/spine/RGBTimeline/">RGBTimeline</a></div>

An interface for timelines which change the property of a slot.

## Instance Members

<div class="signature field-method has-description has-plugin" id="getSlotIndex"><div class="plugin-name">spine</div><code><span class="field-name">getSlotIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getSlotIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The index of the slot in {@link Skeleton#getSlots()} that will be changed when this timeline is applied.
| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: BoneTimeline
target: Headless
permalink: api-docs/headless/spine/BoneTimeline/
---

# BoneTimeline

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Animation.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.BoneTimeline</strong> (Interface) → <a href="/api-docs/headless/spine/RotateTimeline/">RotateTimeline</a>, <a href="/api-docs/headless/spine/ScaleTimeline/">ScaleTimeline</a>, <a href="/api-docs/headless/spine/ScaleXTimeline/">ScaleXTimeline</a>, <a href="/api-docs/headless/spine/ScaleYTimeline/">ScaleYTimeline</a>, <a href="/api-docs/headless/spine/ShearTimeline/">ShearTimeline</a>, <a href="/api-docs/headless/spine/ShearXTimeline/">ShearXTimeline</a>, <a href="/api-docs/headless/spine/ShearYTimeline/">ShearYTimeline</a>, <a href="/api-docs/headless/spine/TranslateTimeline/">TranslateTimeline</a>, <a href="/api-docs/headless/spine/TranslateXTimeline/">TranslateXTimeline</a>, <a href="/api-docs/headless/spine/TranslateYTimeline/">TranslateYTimeline</a></div>

An interface for timelines which change the property of a bone.

## Instance Members

<div class="signature field-method has-description has-plugin" id="getBoneIndex"><div class="plugin-name">spine</div><code><span class="field-name">getBoneIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getBoneIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The index of the bone in {@link Skeleton#getBones()} that will be changed when this timeline is applied.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |


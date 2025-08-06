---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: BoneTimeline
target: Clay (Native)
permalink: api-docs/clay-native/spine/BoneTimeline/
---

# BoneTimeline

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Animation.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.BoneTimeline</strong> (Interface) → <a href="/api-docs/clay-native/spine/RotateTimeline/">RotateTimeline</a>, <a href="/api-docs/clay-native/spine/ScaleTimeline/">ScaleTimeline</a>, <a href="/api-docs/clay-native/spine/ScaleXTimeline/">ScaleXTimeline</a>, <a href="/api-docs/clay-native/spine/ScaleYTimeline/">ScaleYTimeline</a>, <a href="/api-docs/clay-native/spine/ShearTimeline/">ShearTimeline</a>, <a href="/api-docs/clay-native/spine/ShearXTimeline/">ShearXTimeline</a>, <a href="/api-docs/clay-native/spine/ShearYTimeline/">ShearYTimeline</a>, <a href="/api-docs/clay-native/spine/TranslateTimeline/">TranslateTimeline</a>, <a href="/api-docs/clay-native/spine/TranslateXTimeline/">TranslateXTimeline</a>, <a href="/api-docs/clay-native/spine/TranslateYTimeline/">TranslateYTimeline</a></div>

An interface for timelines which change the property of a bone.

## Instance Members

<div class="signature field-method has-description has-plugin" id="getBoneIndex"><div class="plugin-name">spine</div><code><span class="field-name">getBoneIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getBoneIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The index of the bone in {@link Skeleton#getBones()} that will be changed when this timeline is applied.
| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |


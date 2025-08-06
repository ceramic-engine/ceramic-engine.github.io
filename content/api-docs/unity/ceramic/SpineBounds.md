---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SpineBounds
target: Unity
permalink: api-docs/unity/ceramic/SpineBounds/
---

# SpineBounds

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/SpineBounds.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SpineBounds</strong> (Class)</div>

Data structure representing the computed bounding box of a Spine animation.
This class provides both storage for bounds data and utilities to extract
bounds from a Spine instance without permanently modifying it.

The bounds include both dimensions (width/height) and anchor point information,
which together define the full bounding rectangle of the visible Spine content.

## Static Members

<div class="signature field-method has-description has-plugin" id="computeAndExtractBounds"><div class="plugin-name">spine</div><code><span class="field-name">computeAndExtractBounds</span><span class="parenthesis">(</span><span class="arg-name">spine</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Spine/" class="type-link">Spine</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bounds</span><span class="operator">:</span> <a href="#" class="type-link">SpineBounds</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">SpineBounds</a></code><a class="header-anchor" href="#computeAndExtractBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the bounding box of a Spine instance and extracts the bounds data.
This method temporarily modifies the Spine instance to compute accurate bounds,
then restores all original values, ensuring the Spine object remains unchanged.

This is useful when you need to know the exact dimensions of Spine content
without affecting its current state or visual appearance.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `spine` | [Spine](/api-docs/unity/ceramic/Spine/) | | The Spine instance to compute bounds for  |
| `bounds` | [SpineBounds](/api-docs/unity/ceramic/SpineBounds/) | *(optional)* | Optional existing SpineBounds object to populate. If null, a new instance is created  |

| Returns | Description |
|---------|-------------|
| [SpineBounds](/api-docs/unity/ceramic/SpineBounds/) | The populated SpineBounds object containing the computed dimensions and anchor points * ```haxe var spine = new Spine(); spine.load(spineData); * // Get the bounds without modifying the spine instance var bounds = SpineBounds.computeAndExtractBounds(spine); trace('Spine dimensions: ${bounds.width}x${bounds.height}'); trace('Anchor point: (${bounds.anchorX}, ${bounds.anchorY})'); ``` |

## Instance Members

<div class="signature field-var has-description has-plugin" id="anchorX"><div class="plugin-name">spine</div><code><span class="field-name">anchorX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#anchorX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The horizontal anchor position (0-1 range) within the bounding box.
A value of 0 means the anchor is at the left edge, 0.5 is centered,
and 1 is at the right edge. This affects how the Spine content is
positioned relative to its x coordinate.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="anchorY"><div class="plugin-name">spine</div><code><span class="field-name">anchorY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#anchorY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The vertical anchor position (0-1 range) within the bounding box.
A value of 0 means the anchor is at the top edge, 0.5 is centered,
and 1 is at the bottom edge. This affects how the Spine content is
positioned relative to its y coordinate.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="width"><div class="plugin-name">spine</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the bounding box in pixels.
This represents the horizontal extent of all visible Spine content.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="height"><div class="plugin-name">spine</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the bounding box in pixels.
This represents the vertical extent of all visible Spine content.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new SpineBounds instance with default values.
All properties are initialized to 0.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


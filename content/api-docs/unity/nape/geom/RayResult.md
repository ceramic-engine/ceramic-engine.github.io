---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: RayResult
target: Unity
permalink: api-docs/unity/nape/geom/RayResult/
---

# RayResult

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/geom/RayResult.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.geom.RayResult</strong> (final class)</div>

Class representing the results of a ray cast operation.
<br/><br/>
These objects are allocated from an object pool and can
be released back to that pool by calling its dispose method.

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/geom/ZPP_ConvexRayResult/" class="type-link">zpp_nape.geom.ZPP_ConvexRayResult</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="normal"><div class="plugin-name">nape</div><code><span class="field-name">normal</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#normal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The normal of the surface at intersection.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="distance"><div class="plugin-name">nape</div><code><span class="field-name">distance</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#distance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The distance to the intersection.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="inner"><div class="plugin-name">nape</div><code><span class="field-name">inner</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this intersection is with the inner surface of an object.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="shape"><div class="plugin-name">nape</div><code><span class="field-name">shape</span><span class="operator">:</span> <a href="/api-docs/unity/nape/shape/Shape/" class="type-link">nape.shape.Shape</a></code><a class="header-anchor" href="#shape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The shape which was intersected.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="dispose"><div class="plugin-name">nape</div><code><span class="field-name">dispose</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Release RayResult object to pool.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:final` | - |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ConvexResult
target: Clay (Web)
permalink: api-docs/clay-web/nape/geom/ConvexResult/
---

# ConvexResult

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/geom/ConvexResult.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.geom.ConvexResult</strong> (final class)</div>

Class representing the results of a convex cast operation.
<br/><br/>
These objects are allocated from an object pool and can
be released back to that pool by calling its dispose method.

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_ConvexRayResult/" class="type-link">zpp_nape.geom.ZPP_ConvexRayResult</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="normal"><div class="plugin-name">nape</div><code><span class="field-name">normal</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/geom/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#normal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The normal of the surface at collision.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="position"><div class="plugin-name">nape</div><code><span class="field-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/geom/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The position of the collision.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="toi"><div class="plugin-name">nape</div><code><span class="field-name">toi</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#toi"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The time of impact to the collision

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="shape"><div class="plugin-name">nape</div><code><span class="field-name">shape</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/shape/Shape/" class="type-link">nape.shape.Shape</a></code><a class="header-anchor" href="#shape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The shape which was collided against.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="dispose"><div class="plugin-name">nape</div><code><span class="field-name">dispose</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Release ConvexResult object to pool.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


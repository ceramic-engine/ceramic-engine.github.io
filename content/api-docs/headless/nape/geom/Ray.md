---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Ray
target: Headless
permalink: api-docs/headless/nape/geom/Ray/
---

# Ray

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/geom/Ray.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.geom.Ray</strong> (final class)</div>

Parametrically defined ray used in ray casting functions.

## Static Members

<div class="signature field-method has-description has-plugin" id="fromSegment"><div class="plugin-name">nape</div><code><span class="field-name">fromSegment</span><span class="parenthesis">(</span><span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">Vec2</a><span class="operator">,</span> <span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Ray</a></code><a class="header-anchor" href="#fromSegment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create ray representing a line segment.
<br/><br/>
This function will a ray who's origin is the start point
and who's direction is towards the end point with the
maxDistance property appropriately set to not extend
beyond the end point.



| Name | Type | Description |
|------|------|-------------|
| `start` | [Vec2](/api-docs/headless/nape/geom/Vec2/) | Start point of line segment  |
| `end` | [Vec2](/api-docs/headless/nape/geom/Vec2/) | End point of line segment  |

| Returns | Description |
|---------|-------------|
| [Ray](/api-docs/headless/nape/geom/Ray/) | A Ray representing this line segment.  |

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_Ray/" class="type-link">zpp_nape.geom.ZPP_Ray</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="userData"><div class="plugin-name">nape</div><code><span class="field-name">userData</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#userData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dynamic object for user to store additional data.
<br/><br/>
This object cannot be set, only its dynamically created
properties may be set. In AS3 the type of this property is &#42
<br/><br/>
This object will be lazily constructed so that until accessed
for the first time, will be null internally.

@default {}

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="origin"><div class="plugin-name">nape</div><code><span class="field-name">origin</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#origin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Origin of ray.
<br/><br/>
This property can be set, and is equivalent to performing:
<code>ray.origin.set(newOrigin)</code>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="direction"><div class="plugin-name">nape</div><code><span class="field-name">direction</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#direction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Direction of ray.
<br/><br/>
This property can be set, and is equivalent to performing:
<code>ray.direction.set(newDirection)</code> with the additional
constraint that the input direction must not be degenerate.
<br/><br/>
This direction vector need not be normalised.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxDistance"><div class="plugin-name">nape</div><code><span class="field-name">maxDistance</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxDistance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The maximum distance for ray to be queried.
<br/><br/>
When used in ray test functions, no search will extend beyond this
distance.
<br/><br/>
This value represents a true distance, even if direction vector is
not normalised. This value may be equal to infinity.

@default infinity

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="aabb"><div class="plugin-name">nape</div><code><span class="field-name">aabb</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/AABB/" class="type-link">AABB</a></code><a class="header-anchor" href="#aabb"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute bounding box of ray.
<br/><br/>
This function will take into account the maxDistance property of this ray.
<br/>
The return AABB may have in the general case infinite values :)


| Returns | Description |
|---------|-------------|
| [AABB](/api-docs/headless/nape/geom/AABB/) | An AABB representing bounding box of ray. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="at"><div class="plugin-name">nape</div><code><span class="field-name">at</span><span class="parenthesis">(</span><span class="arg-name">distance</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#at"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute point along ray at given distance.
<br/><br/>
Even if ray direction is not normalised, this value still repersents
a true distance. The distance may also be negative.
<br/><br/>
The Vec2 returned will be allocated from the global object pool.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `distance` | [Float](/api-docs/headless/Float/) | | The distance along ray to compute point for.  |
| `weak` | [Bool](/api-docs/headless/Bool/) | `false` | If true then a weakly allocated Vec2 will be returned which will be automatically released to global object pool when used as argument to another Nape function. (default false)  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/headless/nape/geom/Vec2/) | Vec2 representing point at given distance along ray. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="copy"><div class="plugin-name">nape</div><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Ray</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Produce a copy of this ray.
<br/><br/>
All ray properties will be copied including maxDistance.


| Returns | Description |
|---------|-------------|
| [Ray](/api-docs/headless/nape/geom/Ray/) | The copy of this Ray. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">origin</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">Vec2</a><span class="operator">,</span> <span class="arg-name">direction</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct new Ray.



| Name | Type | Description |
|------|------|-------------|
| `origin` | [Vec2](/api-docs/headless/nape/geom/Vec2/) | Origin of ray.  |
| `direction` | [Vec2](/api-docs/headless/nape/geom/Vec2/) | Direction of ray.  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


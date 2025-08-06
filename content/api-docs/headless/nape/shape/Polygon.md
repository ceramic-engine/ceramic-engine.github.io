---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Polygon
target: Headless
permalink: api-docs/headless/nape/shape/Polygon/
---

# Polygon

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/shape/Polygon.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/nape/phys/Interactor/">nape.phys.Interactor</a> → <a href="/api-docs/headless/nape/shape/Shape/">Shape</a> → <strong>nape.shape.Polygon</strong> (final class)</div>

Polygon subtype of Shape.
<br/><br/>
Can be used to simulate any convex polygon.

## Static Members

<div class="signature field-method has-description has-plugin" id="rect"><div class="plugin-name">nape</div><code><span class="field-name">rect</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#rect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a polygon representing a rectangle.
<br/><br/>
For a dynamic object, you may consider use of the box method instead
as dynamic bodies will only respond as expected if their centre of mass
is equal to the origin.
<br/><br/>
The generate polygon will have coordinates equal to:
<pre>
(x, y) -> (x + width, y + height)
</pre>
Negative values of width/height are permitted so that the given x/y values
may not necessarigly be the top-left corner of rectangle.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/headless/Float/) | | The x coordinate of rectangle.  |
| `y` | [Float](/api-docs/headless/Float/) | | The y coordinate of rectangle.  |
| `width` | [Float](/api-docs/headless/Float/) | | The width of the ractangle. This value may be negative.  |
| `height` | [Float](/api-docs/headless/Float/) | | The height of the rectangle This value may be negative.  |
| `weak` | [Bool](/api-docs/headless/Bool/) | `false` | If true, the generated list of vertices will be allocated as weak Vec2s so that when this list is passed to a Nape function these Vec2s will be automatically sent back to object pool. (default false)  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/headless/Array/)<[nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/)> | An array of Vec2 representing the given rectangle. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="box"><div class="plugin-name">nape</div><code><span class="field-name">box</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#box"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a polygon representing an origin centred box.
<br/><br/>
This method is equivalent to calling: <code>Polygon.rect(-width/2,-height/2,width,height)</code>



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `width` | [Float](/api-docs/headless/Float/) | | The width of the box (This value may be negative but will make no difference).  |
| `height` | [Float](/api-docs/headless/Float/) | | The height of the box (This value may be negative but will make no difference).  |
| `weak` | [Bool](/api-docs/headless/Bool/) | `false` | If true, the generated list of vertices will be allocated as weak Vec2s so that when this list is passed to a Nape function these Vec2s will be automatically sent back to object pool. (default false)  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/headless/Array/)<[nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/)> | An array of Vec2 representing the given box. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="regular"><div class="plugin-name">nape</div><code><span class="field-name">regular</span><span class="parenthesis">(</span><span class="arg-name">xRadius</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">yRadius</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">edgeCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">angleOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#regular"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a regular polygon centred at origin.
<br/><br/>
Vertices are created at positions on the edge of an ellipsoid of given
radii, when radii are not equal the vertices will not have an equal
angle between them; it will be as though an actual regular polygon were
created, and then squashed to conform to the input radii.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `xRadius` | [Float](/api-docs/headless/Float/) | | The x radius of polygon before angleOffset rotation.  |
| `yRadius` | [Float](/api-docs/headless/Float/) | | The y radius of polygon before angleOffset rotation.  |
| `edgeCount` | [Int](/api-docs/headless/Int/) | | The number of edges/vertices in polygon.  |
| `angleOffset` | [Float](/api-docs/headless/Float/) | `0.0` | The clockwise angular offset to generate vertices at in radians. (default 0.0)  |
| `weak` | [Bool](/api-docs/headless/Bool/) | `false` | If true, the generated list of vertices will be allocated as weak Vec2s so that when this list is passed to a Nape function these Vec2s will be automatically sent back to object pool. (default false)  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/headless/Array/)<[nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/)> | An array of Vec2 representing the polygon. |

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner_zn"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner_zn</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/shape/ZPP_Polygon/" class="type-link">zpp_nape.shape.ZPP_Polygon</a></code><a class="header-anchor" href="#zpp_inner_zn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="localVerts"><div class="plugin-name">nape</div><code><span class="field-name">localVerts</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2List/" class="type-link">nape.geom.Vec2List</a></code><a class="header-anchor" href="#localVerts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Local coordinates of vertices.
<br/><br/>
This list can be modified, but modifications to a Polygon that is
part of a static Body inside of a Space will given an error in
debug builds.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worldVerts"><div class="plugin-name">nape</div><code><span class="field-name">worldVerts</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2List/" class="type-link">nape.geom.Vec2List</a></code><a class="header-anchor" href="#worldVerts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

World coordinates of vertices.
<br/><br/>
This list can be accessed, but any queries of values will result
in an error in debug builds unless this Polygon is part of a Body.
<br/><br/>
This list is immutable.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="edges"><div class="plugin-name">nape</div><code><span class="field-name">edges</span><span class="operator">:</span> <a href="/api-docs/headless/nape/shape/EdgeList/" class="type-link">EdgeList</a></code><a class="header-anchor" href="#edges"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set of edges on polygon.
<br/><br/>
This list is immutable.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="validity"><div class="plugin-name">nape</div><code><span class="field-name">validity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/shape/ValidationResult/" class="type-link">ValidationResult</a></code><a class="header-anchor" href="#validity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine validity of polygon for use in a Nape simulation.
| Returns |
|---------|
| [ValidationResult](/api-docs/headless/nape/shape/ValidationResult/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">localVerts</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">material</span><span class="operator">:</span> <a href="/api-docs/headless/nape/phys/Material/" class="type-link">nape.phys.Material</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/headless/nape/dynamics/InteractionFilter/" class="type-link">nape.dynamics.InteractionFilter</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new Polygon.
<br/><br/>
The localVerts parameter is typed Dynamic and may be one of:
<code>Array&lt;Vec2&gt;, flash.Vector&lt;Vec2&gt;, Vec2List, GeomPoly</code>



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `localVerts` | [Dynamic](/api-docs/headless/Dynamic/) | | The local vertices of polygon.  |
| `material` | [nape.phys.Material](/api-docs/headless/nape/phys/Material/) | `null` | The material for this polygon. (default new Material&#40;&#41;)  |
| `filter` | [nape.dynamics.InteractionFilter](/api-docs/headless/nape/dynamics/InteractionFilter/) | `null` | The interaction filter for this polygon. (default new InteractionFilter&#40;&#41;)  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


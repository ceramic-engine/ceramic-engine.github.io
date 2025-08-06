---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Geom
target: Unity
permalink: api-docs/unity/nape/geom/Geom/
---

# Geom

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/geom/Geom.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.geom.Geom</strong> (final class)</div>

Geom class provides interface to collision detection routines in nape.

## Static Members

<div class="signature field-method has-description has-plugin" id="distanceBody"><div class="plugin-name">nape</div><code><span class="field-name">distanceBody</span><span class="parenthesis">(</span><span class="arg-name">body1</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="operator">,</span> <span class="arg-name">body2</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="operator">,</span> <span class="arg-name">out1</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/Vec2/" class="type-link">Vec2</a><span class="operator">,</span> <span class="arg-name">out2</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/Vec2/" class="type-link">Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#distanceBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine distance and closest points between two Bodies.
<br/><br/>
If the bodies are intersecting, then a negative value is returned
equal to the penetration of the bodies, and the out1/out2 vectors
will still be meaningful with their difference being the minimum
translational vector to seperate the intersecting shapes of the bodies.
(This may not be a global seperation vector as it is considering only
one pair of shapes at a time).
<br/><br/>
As the out1/out2 vectors are used to return values from the function,
this is one of the rare cases where should out1/out2 be weak Vec2's
they will 'not' be sent to the global object pool on being passed to
this function.
<pre>
var closest1 = Vec2.get();
var closest2 = Vec2.get();
var distance = Geom.distanceBody(body1, body2, out1, out2);
if (distance < 0) {
trace("Bodies intersect and penetration distance is " +
(-distance) + " with witness points " + closest1.toString() +
" <-> " + closest2.toString());
}else {
trace("Bodies do not intersect and distance betweem them is " +
distance + " with closest points " + closest1.toString() +
" <-> " + closest2.toString());
}
</pre>
This algorithm is able to take shortcuts in culling pair tests between Shapes
based on the current state of the search, and will be more effecient than
a custom implementation that uses Geom.distance(..) method.



| Name | Type | Description |
|------|------|-------------|
| `body1` | [nape.phys.Body](/api-docs/unity/nape/phys/Body/) | First input Body.  |
| `body2` | [nape.phys.Body](/api-docs/unity/nape/phys/Body/) | Second input Body.  |
| `out1` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | This Vec2 object will be populated with coordinates of closest point on body1.  |
| `out2` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | This Vec2 object will be populated with coordinates of closest point on body2.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | The distance between the two bodies if seperated, or the penetration distance (negative) if intersecting.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="distance"><div class="plugin-name">nape</div><code><span class="field-name">distance</span><span class="parenthesis">(</span><span class="arg-name">shape1</span><span class="operator">:</span> <a href="/api-docs/unity/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="operator">,</span> <span class="arg-name">shape2</span><span class="operator">:</span> <a href="/api-docs/unity/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="operator">,</span> <span class="arg-name">out1</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/Vec2/" class="type-link">Vec2</a><span class="operator">,</span> <span class="arg-name">out2</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/Vec2/" class="type-link">Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#distance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine distance and closest points between two Shapes.
<br/><br/>
The input Shapes must belong to a Body so that their world positions
and orientations are defined; these Bodies need not be different nor
part of any Space.
<br/><br/>
If the shapes are intersecting, then a negative value is returned
equal to the penetration of the shapes, and the out1/out2 vectors
will still be meaningful with their difference being the minimum
translational vector to seperate the Shapes.
<br/><br/>
As the out1/out2 vectors are used to return values from the function,
this is one of the rare cases where should out1/out2 be weak Vec2's
they will 'not' be sent to the global object pool on being passed to
this function.
<pre>
var closest1 = Vec2.get();
var closest2 = Vec2.get();
var distance = Geom.distance(shape1, shape2, out1, out2);
if (distance < 0) {
trace("Shapes intersect and penetration distance is " +
(-distance) + " with witness points " + closest1.toString() +
" <-> " + closest2.toString());
}else {
trace("Shapes do not intersect and distance betweem them is " +
distance + " with closest points " + closest1.toString() +
" <-> " + closest2.toString());
}
</pre>



| Name | Type | Description |
|------|------|-------------|
| `shape1` | [nape.shape.Shape](/api-docs/unity/nape/shape/Shape/) | this shape must belong to a Body.  |
| `shape2` | [nape.shape.Shape](/api-docs/unity/nape/shape/Shape/) | this shape must belong to a Body.  |
| `out1` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | This Vec2 object will be populated with coordinates of closest point on shape1.  |
| `out2` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | This Vec2 object will be populated with coordinates of closest point on shape2.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | The distance between the two shapes if seperated, or the penetration distance (negative) if intersecting.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="intersectsBody"><div class="plugin-name">nape</div><code><span class="field-name">intersectsBody</span><span class="parenthesis">(</span><span class="arg-name">body1</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="operator">,</span> <span class="arg-name">body2</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#intersectsBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine if two Bodies intersect.
<br/><br/>
If you do not need distance/penetration information,
then using this method will be more effecient than testing for a negative
value using the distance method.



| Name | Type | Description |
|------|------|-------------|
| `body1` | [nape.phys.Body](/api-docs/unity/nape/phys/Body/) | First input Body .  |
| `body2` | [nape.phys.Body](/api-docs/unity/nape/phys/Body/) | Second input Body.  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if the Bodies are intersecting.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="intersects"><div class="plugin-name">nape</div><code><span class="field-name">intersects</span><span class="parenthesis">(</span><span class="arg-name">shape1</span><span class="operator">:</span> <a href="/api-docs/unity/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="operator">,</span> <span class="arg-name">shape2</span><span class="operator">:</span> <a href="/api-docs/unity/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#intersects"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine if two Shapes intersect.
<br/><br/>
The input Shapes must belong to a Body so that their world positions
and orientations are defined; these Bodies need not be different nor
part of any Space.
<br/><br/>
If you do not need distance/penetration information,
then using this method will be more effecient than testing for a negative
value using the distance method.



| Name | Type | Description |
|------|------|-------------|
| `shape1` | [nape.shape.Shape](/api-docs/unity/nape/shape/Shape/) | this shape must belong to a Body.  |
| `shape2` | [nape.shape.Shape](/api-docs/unity/nape/shape/Shape/) | this shape must belong to a Body.  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if the shapes are intersecting in world space.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="contains"><div class="plugin-name">nape</div><code><span class="field-name">contains</span><span class="parenthesis">(</span><span class="arg-name">shape1</span><span class="operator">:</span> <a href="/api-docs/unity/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="operator">,</span> <span class="arg-name">shape2</span><span class="operator">:</span> <a href="/api-docs/unity/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#contains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine if one Shape is entirely contained within another.
<br/><br/>
The input Shapes must belong to a Body so that their world positions
and orientations are defined; these Bodies need not be different nor
part of any Space.



| Name | Type | Description |
|------|------|-------------|
| `shape1` | [nape.shape.Shape](/api-docs/unity/nape/shape/Shape/) | this shape must belong to a Body.  |
| `shape2` | [nape.shape.Shape](/api-docs/unity/nape/shape/Shape/) | this shape must belong to a Body.  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if shape2 is completely contained within shape1.  |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:final` | - |


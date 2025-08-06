---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: GeomPoly
target: Clay (Native)
permalink: api-docs/clay-native/nape/geom/GeomPoly/
---

# GeomPoly

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/geom/GeomPoly.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.geom.GeomPoly</strong> (final class)</div>

Polygon class with various geometric methods
<br/><br/>
This class represents a general Polygon, rather than the Polygon class
which is physics shape.
<br/><br/>
Internally this polygon is stored as a circularly linked list of special
vertex types that are exposed via a Vec2 that is lazily constructed whenever
necessary to the API.

## Static Members

<div class="signature field-method has-description has-plugin" id="get"><div class="plugin-name">nape</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">vertices</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">GeomPoly</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allocate GeomPoly from object pool.
<br/><br/>
The vertices argument is typed Dynamic (* in AS3), and is permitted
to be one of: <code>Array&lt;Vec2&gt;, flash.Vector&lt;Vec2&gt;, Vec2List, GeomPoly</code>
<br/><br/>
The input will be used to initialise the vertices of the polygon with
the head of the polygon pointing to the first vertex in input with vertices
inserted in forward order.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `vertices` | [Dynamic](/api-docs/clay-native/Dynamic/) | `null` | Vertex data to initialise polygon, or null for empty polygon.  |

| Returns | Description |
|---------|-------------|
| [GeomPoly](/api-docs/clay-native/nape/geom/GeomPoly/) | New GeomPoly representing input vertex data, allocated from object pool.  |

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_pool"><div class="plugin-name">nape</div><code><span class="field-name">zpp_pool</span><span class="operator">:</span> <a href="#" class="type-link">GeomPoly</a></code><a class="header-anchor" href="#zpp_pool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="zpp_disp"><div class="plugin-name">nape</div><code><span class="field-name">zpp_disp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#zpp_disp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/geom/ZPP_GeomPoly/" class="type-link">zpp_nape.geom.ZPP_GeomPoly</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="empty"><div class="plugin-name">nape</div><code><span class="field-name">empty</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#empty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine if polygon is empty.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if polygon is empty.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="size"><div class="plugin-name">nape</div><code><span class="field-name">size</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine number of vertices in polygon


| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | The number of vertices.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="iterator"><div class="plugin-name">nape</div><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/GeomVertexIterator/" class="type-link">GeomVertexIterator</a></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Haxe iterator over vertices of polygon.


| Returns | Description |
|---------|-------------|
| [GeomVertexIterator](/api-docs/clay-native/nape/geom/GeomVertexIterator/) | A Haxe iterator over the vertices of the polygon.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="forwardIterator"><div class="plugin-name">nape</div><code><span class="field-name">forwardIterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/GeomVertexIterator/" class="type-link">GeomVertexIterator</a></code><a class="header-anchor" href="#forwardIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Haxe iterator over vertices of polygon.


| Returns | Description |
|---------|-------------|
| [GeomVertexIterator](/api-docs/clay-native/nape/geom/GeomVertexIterator/) | A Haxe iterator over the vertices of the polygon. Iterating in a forward direction.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="backwardsIterator"><div class="plugin-name">nape</div><code><span class="field-name">backwardsIterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/GeomVertexIterator/" class="type-link">GeomVertexIterator</a></code><a class="header-anchor" href="#backwardsIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Haxe iterator over vertices of polygon.


| Returns | Description |
|---------|-------------|
| [GeomVertexIterator](/api-docs/clay-native/nape/geom/GeomVertexIterator/) | A Haxe iterator over the vertices of the polygon. Iterating in a backwards direction.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="current"><div class="plugin-name">nape</div><code><span class="field-name">current</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#current"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current vertex at head of polygon.
<br/><br/>
The current vertex will not be changed by this access.
<br/><br/>
This function returns a Vec2 which will be intrinsically tied
to the values of the internal vertex so that modifications to
this Vec2 will be reflected in the vertex of the polygon.
<br/><br/>
If invoked again with the head of the polygon pointing to the
same vertex, then the same Vec2 will be returned; this Vec2 is
not able to be disposed of.


| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/clay-native/nape/geom/Vec2/) | A Vec2 representing the current vertex of polygon.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="push"><div class="plugin-name">nape</div><code><span class="field-name">push</span><span class="parenthesis">(</span><span class="arg-name">vertex</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">GeomPoly</a></code><a class="header-anchor" href="#push"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Push vertex to polygon.
<br/><br/>
A vertex will be allocated from a global object pool, and initialised
with the values of the given Vec2.
<br/><br/>
This vertex will be inserted after the current head, and the head
advanced to the newly inserted vertex, in this way successive pushes
will insert elements in order.
<br/><br/>
Note that the Vec2 supplied as argument is only used to initialise the
inner Vertex.
<pre>
poly := -> A <-> B <-> C <-> D <-> E <-
(head)

poly.push(X);

poly := -> A <-> B <-> X <-> C <-> D <-> E <-
(head)
</pre>



| Name | Type | Description |
|------|------|-------------|
| `vertex` | [Vec2](/api-docs/clay-native/nape/geom/Vec2/) | The Vec2 to be used in initialising the inner vertex.  |

| Returns | Description |
|---------|-------------|
| [GeomPoly](/api-docs/clay-native/nape/geom/GeomPoly/) | A reference to this polygon.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="pop"><div class="plugin-name">nape</div><code><span class="field-name">pop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">GeomPoly</a></code><a class="header-anchor" href="#pop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pop vertex from polygon.
<br/><br/>
Pop the current vertex at head of polygon, retreating the 'current'
vertex to point to the previous vertex in polygon. This inner vertex
will be released to the global object pool.
<br/><br/>
In this way a pop which follows a push will act to reset the push.
<pre>
poly := -> A <-> B <-> C <-> D <-> E <-
(head)

poly.pop();

poly := -> A <-> C <-> D <-> E <-
(head)
</pre>


| Returns | Description |
|---------|-------------|
| [GeomPoly](/api-docs/clay-native/nape/geom/GeomPoly/) | A reference to this polygon.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="unshift"><div class="plugin-name">nape</div><code><span class="field-name">unshift</span><span class="parenthesis">(</span><span class="arg-name">vertex</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">GeomPoly</a></code><a class="header-anchor" href="#unshift"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unshift vertex to polygon.
<br/><br/>
A vertex will be allocated from a global object pool, and initialised
with the values of the given Vec2.
<br/><br/>
This vertex will be inserted before the current head, and the head
retreated to the newly inserted vertex, in this way successive unshifts
will insert elements in the expected reverse order.
<br/><br/>
Note that the Vec2 supplied as argument is only used to initialise the
inner Vertex.
<pre>
poly := -> A <-> B <-> C <-> D <-> E <-
(head)

poly.unshift(X);

poly := -> A <-> X <-> B <-> C <-> D <-> E <-
(head)
</pre>



| Name | Type | Description |
|------|------|-------------|
| `vertex` | [Vec2](/api-docs/clay-native/nape/geom/Vec2/) | The Vec2 to be used in initialising the inner vertex.  |

| Returns | Description |
|---------|-------------|
| [GeomPoly](/api-docs/clay-native/nape/geom/GeomPoly/) | A reference to this polygon.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="shift"><div class="plugin-name">nape</div><code><span class="field-name">shift</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">GeomPoly</a></code><a class="header-anchor" href="#shift"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shift vertex from polygon.
<br/><br/>
Shift the current vertex at head of polygon, advancing the 'current'
vertex to point to the next vertex in polygon. This inner vertex
will be released to the global object pool.
<br/><br/>
In this way a shift which follows an unshift will act to reset the
unshift operation.
<pre>
poly := -> A <-> B <-> C <-> D <-> E <-
(head)

poly.shift();

poly := -> A <-> C <-> D <-> E <-
(head)
</pre>


| Returns | Description |
|---------|-------------|
| [GeomPoly](/api-docs/clay-native/nape/geom/GeomPoly/) | A reference to this polygon.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="skipForward"><div class="plugin-name">nape</div><code><span class="field-name">skipForward</span><span class="parenthesis">(</span><span class="arg-name">times</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">GeomPoly</a></code><a class="header-anchor" href="#skipForward"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Advance head of polygon forward.
<br/><br/>
The current head of polygon will be moved forwards
the given number of times, with a negative value
being equivalent to performing a backwards advance.
<br/><br/>
<code>poly.skip_forwards(times)</code> is equivalent to
<code>poly.skip_backwards(-times)</code>
<pre>
poly := -> A <-> B <-> C <-> D <-> E <-
(head)

poly.skipForwards(2);

poly := -> A <-> B <-> C <-> D <-> E <-
(head)
</pre>

@params times The number of times to advance head forward.
This value can be negative indicating a backwards
advance.


| Name | Type |
|------|------|
| `times` | [Int](/api-docs/clay-native/Int/) |

| Returns | Description |
|---------|-------------|
| [GeomPoly](/api-docs/clay-native/nape/geom/GeomPoly/) | A reference to this polygon.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="skipBackwards"><div class="plugin-name">nape</div><code><span class="field-name">skipBackwards</span><span class="parenthesis">(</span><span class="arg-name">times</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">GeomPoly</a></code><a class="header-anchor" href="#skipBackwards"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Advance head of polygon backwards.
<br/><br/>
The current head of polygon will be moved backwards
the given number of times, with a negative value
being equivalent to performing a forwards advance.
<br/><br/>
<code>poly.skip_backwards(times)</code> is equivalent to
<code>poly.skip_forwards(-times)</code>
<pre>
poly := -> A <-> B <-> C <-> D <-> E <-
(head)

poly.skipBackwards(2);

poly := -> A <-> B <-> C <-> D <-> E <-
(head)
</pre>

@params times The number of times to advance head backwards.
This value can be negative indicating a forwards
advance.


| Name | Type |
|------|------|
| `times` | [Int](/api-docs/clay-native/Int/) |

| Returns | Description |
|---------|-------------|
| [GeomPoly](/api-docs/clay-native/nape/geom/GeomPoly/) | A reference to this polygon.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="erase"><div class="plugin-name">nape</div><code><span class="field-name">erase</span><span class="parenthesis">(</span><span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">GeomPoly</a></code><a class="header-anchor" href="#erase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Erase count number of elements
<br/><br/>
For positive values of count, this is equivalent to successive
unshift operations.
<br/><br/>
For negative values of count, this is equivalent to successive
pop operations.
<pre>
poly := -> A <-> B <-> C <-> D <-> E <-> F <-> G <-
(head)

poly.erase(2);

poly := -> A <-> D <-> E <-> F <-> G <-
(head)

poly.erase(-3);

poly := -> E <-> F <-
(head)
</pre>
In this case that the specified number of elements to erase is
greater than the size of the polygon, the method will simply
terminate with the polygon being empty.



| Name | Type | Description |
|------|------|-------------|
| `count` | [Int](/api-docs/clay-native/Int/) | The number of vertices to erase, with sign indicating the direction for erasing.  |

| Returns | Description |
|---------|-------------|
| [GeomPoly](/api-docs/clay-native/nape/geom/GeomPoly/) | A reference to this polygon.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clear"><div class="plugin-name">nape</div><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">GeomPoly</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clear all vertices from polygon.
<br/><br/>
All of the vertices will be released to the global object pool.


| Returns | Description |
|---------|-------------|
| [GeomPoly](/api-docs/clay-native/nape/geom/GeomPoly/) | A reference to this polygon.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="copy"><div class="plugin-name">nape</div><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">GeomPoly</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copy this polygon.
<br/><br/>
The copy will have its vertices in the same order as 'this' polygon.
It will also have its current vertex at head, as the same vertex
this polygon has.
<br/><br/>
This polygon will not be modified in any way.
<pre>
poly := -> A <-> B <-> C <-> D <-> E <-
(head)

poly2 = poly.copy();

poly2 := -> A' <-> B' <-> C' <-> D' <-> E' <-
(head)
</pre>


| Returns | Description |
|---------|-------------|
| [GeomPoly](/api-docs/clay-native/nape/geom/GeomPoly/) | The new GeomPoly representing the copy.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="dispose"><div class="plugin-name">nape</div><code><span class="field-name">dispose</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Release this GeomPoly to global object pool.
<br/><br/>
Once disposed this GeomPoly will be accessible to Nape internals for re-allocation
and should not be touched (Good practice would be to set any references to this
GeomPoly to null to help ensure this).
<br/><br/>
In debug mode, should you attempt to access this GeomPoly after disposal
and the GeomPoly is still in the object pool, you will be given an Error.
The object pool operates on a First-In-Last-Out principal in debug mode to help
catch these sort of errors.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="area"><div class="plugin-name">nape</div><code><span class="field-name">area</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#area"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute area of weakly-simple polygon.
<br/><br/>
For complex polygons, this function will return an underestimate
to the true area.


| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The area of the polygon.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="winding"><div class="plugin-name">nape</div><code><span class="field-name">winding</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Winding/" class="type-link">Winding</a></code><a class="header-anchor" href="#winding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute the winding order for this polygon.
<br/><br/>
The winding order can be conceptualised by thinking of an analog
clock face, if your polygon is the numbers on the clock then a
clockwise winding would have your polygon's vertices in numerical
order.
<br/><br/>
In the case of a non-simple polygon with self intersections then the
winding order is decided by how 'much' of the polygon is locally
clockwise wound, and how much is locally anti-clockwise wound.
<br/>
(Think of a figure 8 style polygon where one loop is larger than the
other. This larger loop will dictate the winding of the polygon.)
<br/><br/>
If no winding can be computed, then <code>Winding.UNDEFINED</code>
will be returned.


| Returns | Description |
|---------|-------------|
| [Winding](/api-docs/clay-native/nape/geom/Winding/) | The winding of the polygon.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="contains"><div class="plugin-name">nape</div><code><span class="field-name">contains</span><span class="parenthesis">(</span><span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#contains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine if point is contained in polygon.
<br/><br/>
Polygon containment is performed with a ray cast through polygon
from the vertex and counting the number of intersections. In this
way containment will be defined for self-intersecting polygons based
on how such a polygon would be rendered with areas of self-intersection
treat as being 'outside' the polygon.
<br/><br/>
This algorithm operates in O(n) time.



| Name | Type | Description |
|------|------|-------------|
| `point` | [Vec2](/api-docs/clay-native/nape/geom/Vec2/) | The point to test for containment.  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if point is contained in the polygon.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isClockwise"><div class="plugin-name">nape</div><code><span class="field-name">isClockwise</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isClockwise"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine if polygon is clockwise wound.
<br/><br/>
This is equivalent to <code>poly.winding() == Winding.CLOCKWISE</code>.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if polygon is clockwise wound.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isConvex"><div class="plugin-name">nape</div><code><span class="field-name">isConvex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isConvex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine if weakly-simple polygon is convex.
<br/><br/>
This algorithm assumes that the polygon is weakly-simple. Otherwise it may
fail (It is very easy to construct a self intersecting polygon which
will return True for isConvex()).
<br/><br/>
You may wish to instead use <code>isSimple() && isConvex()</code> if
you cannot be sure of the polygon being simple, noting that this will
of course return false in the case of a weakly-simple polygon.
<pre>
_____
|     |
|     |  <-- convex
|____/
__
|  &#92;___
|     /  <-- concave
|____/
</pre>
This algorithm operates in O(n) time.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if polygon is found to be convex.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isSimple"><div class="plugin-name">nape</div><code><span class="field-name">isSimple</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSimple"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine if polygon is strictly simple.
<br/><br/>
By strict simplicity, we refer to not permitting 'glancing'
self intersections (where boundary of polygon 'touches' but does not
pass through another area of the polygon's boundary). This property
is instead referred to as being 'weakly simple' for which there is no
easy test!
<pre>
_______
|   __  |  <-- strictly simple polygon.
|   &#92; &#92;_|
&#92;__/
_______
|   |   |
|  /_&#92;  | <-- weakly simple polygon.
&#92;_____/
____
| __/
X_  __   <-- complex polygon.
|  &#92;/  &#92;
&#92;__/&#92;__|
</pre>
This algorithm operates in O(n.log(n)) time.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if polygon is strictly simple.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isMonotone"><div class="plugin-name">nape</div><code><span class="field-name">isMonotone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isMonotone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine if polygon is y-monotone.
<br/><br/>
To be classed as y-monotone, the polygon must be such that any horizontal
line intersects the polygon in at most 2 intersections.
<pre>
___
|   |
|   |  <-- y-monotone
|___|

|&#92;
| &#92;/|  <-- not y-monotone, offending vertex at bottom of the V.
|___|
</pre>
This algorithm operates in O(n) time.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if polygon is y-monotone.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isDegenerate"><div class="plugin-name">nape</div><code><span class="field-name">isDegenerate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isDegenerate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine if weakly-simple polygon is degenerate.
<br/><br/>
Degeneracy is determined by having a zero area, if polygon is complex,
then this function may report degeneracy erroneously.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if polygon is degenerate.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="simplify"><div class="plugin-name">nape</div><code><span class="field-name">simplify</span><span class="parenthesis">(</span><span class="arg-name">epsilon</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">GeomPoly</a></code><a class="header-anchor" href="#simplify"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Simplify polygon.
<br/><br/>
Simplification is performed with an implementation of the Ramer-Douglas-Peucker
algorithm. The output polygon is formed via subset of the vertices in
the input polygon such that any discarded vertex is at most 'epsilon' pixels
away from the local output polygon.
<br/><br/>
This algorithm works on both simple and complex polygons, but please note
that this algorithm makes no guarantees on a simple polygon remaining simple
after simplification. This should not generally be a problem unless the epsilon
value is large with respect to the size of the features on the polygon.
<br/><br/>
Many of the geometric algorithms will mark vertices as important, such that
they will be guaranteed to exist after simplification (Such as preventing
gaps from opening up in marching squares when simplifying output polygons).
<br/><br/>
The average runtime of this algorithm is O(n.log(n)). This algorithm is
not stable in the sense that adding a new vertex to the polygon may drastically
change the result of simplifying the polygon.



| Name | Type | Description |
|------|------|-------------|
| `epsilon` | [Float](/api-docs/clay-native/Float/) | The distance from polygon at which vertices are ignored.  |

| Returns | Description |
|---------|-------------|
| [GeomPoly](/api-docs/clay-native/nape/geom/GeomPoly/) | A new GeomPoly representing the result of the simplification.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="simpleDecomposition"><div class="plugin-name">nape</div><code><span class="field-name">simpleDecomposition</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/GeomPolyList/" class="type-link">GeomPolyList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/GeomPolyList/" class="type-link">GeomPolyList</a></code><a class="header-anchor" href="#simpleDecomposition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Produce a decomposition of complex polygon into simple components.
<br/><br/>
WARNING: This method is 'not' 100% robust. It may fail!
<br/><br/>
Produce a decomposition of a self intersecting, complex polygon into
a set of weakly-simple components.
<br/><br/>
This algorithm operates in O(n.log(n)) time and is based on the
Bentley-Ottmann algorithm.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `output` | [GeomPolyList](/api-docs/clay-native/nape/geom/GeomPolyList/) | `null` | If supplied, polygons will be appended to this list via 'add' instead of a new list being constructed.  |

| Returns | Description |
|---------|-------------|
| [GeomPolyList](/api-docs/clay-native/nape/geom/GeomPolyList/) | A Nape list of GeomPoly's representing the decomposition.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="monotoneDecomposition"><div class="plugin-name">nape</div><code><span class="field-name">monotoneDecomposition</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/GeomPolyList/" class="type-link">GeomPolyList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/GeomPolyList/" class="type-link">GeomPolyList</a></code><a class="header-anchor" href="#monotoneDecomposition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Produce a decomposition of weakly-simple polygon into monotone components.
<br/><br/>
This algorithm 'should' be 100% robust and has been well tested on for
example, the output of the Marching Squares utility which produces many
degenerate cases of weakly-simple polygons that have not yet broken this
algorithm!.
<br/><br/>
This algorithm operates in O(n.log(n)) time and may strip vertices from
the polygon in degenerate cases where vertex is not needed to define the
polygon.
<br/><br/>
This algorithm is an improved version of the one presented in: Mark de
Berg, Marc van Kreveld, Mark Overmars, and Otfried Schwarzkopf.
Computational Geometry: Algorithms and Applications. Springer-Verlag,
Berlin, 1997.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `output` | [GeomPolyList](/api-docs/clay-native/nape/geom/GeomPolyList/) | `null` | If supplied, polygons will be appended to this list via 'add' instead of a new list being constructed.  |

| Returns | Description |
|---------|-------------|
| [GeomPolyList](/api-docs/clay-native/nape/geom/GeomPolyList/) | A Nape list of GeomPoly's defining the decomposition.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="convexDecomposition"><div class="plugin-name">nape</div><code><span class="field-name">convexDecomposition</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">delaunay</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/GeomPolyList/" class="type-link">GeomPolyList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/GeomPolyList/" class="type-link">GeomPolyList</a></code><a class="header-anchor" href="#convexDecomposition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Produce a decomposition of weakly-simple polygon into convex components.
<br/><br/>
This algorithm 'should' be 100% robust and has been well test on for
example, the output of the Marching Squars utility which produces many
degenerate cases of weakly-simple polygons that have not yet broken this
algorithm!.
<br/><br/>
This algorithm operates in O(n.log(n)) time and will produce no more than
4 times the number of convex poylgons in a minimal decomposition in the
worst case scenario.
<br/><br/>
Vertices may be stripped from the polygon that are found to not be
necessary as part of making this algorithm robust.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `delaunay` | [Bool](/api-docs/clay-native/Bool/) | `false` | This algorithm first performs a triangulation, if this field is true, then this triangulation will be made delaunay and may produce better convex polygons resultanly (default false).  |
| `output` | [GeomPolyList](/api-docs/clay-native/nape/geom/GeomPolyList/) | `null` | If supplied, polygons will be appended to this list via 'add' instead of a new list being constructed.  |

| Returns | Description |
|---------|-------------|
| [GeomPolyList](/api-docs/clay-native/nape/geom/GeomPolyList/) | A Nape list of GeomPoly's defining the decomposition.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="triangularDecomposition"><div class="plugin-name">nape</div><code><span class="field-name">triangularDecomposition</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">delaunay</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/GeomPolyList/" class="type-link">GeomPolyList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/GeomPolyList/" class="type-link">GeomPolyList</a></code><a class="header-anchor" href="#triangularDecomposition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Produce a decomposition of weakly-simple polygon into triangles.
<br/><br/>
This algorithm 'should' be 100% robust and has been well test on for
example, the output of the Marching Squars utility which produces many
degenerate cases of weakly-simple polygons that have not yet broken this
algorithm!.
<br/><br/>
This algorithm operates in O(n.log(n)) time.
<br/><br/>
Vertices may be stripped from the polygon that are found to not be
necessary as part of making this algorithm robust.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `delaunay` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, then an O(n^2) pass will be made to mutate the original triangulation to push it into a delanuay triangulation. (default false)  |
| `output` | [GeomPolyList](/api-docs/clay-native/nape/geom/GeomPolyList/) | `null` | If supplied, polygons will be appended to this list via 'add' instead of a new list being constructed.  |

| Returns | Description |
|---------|-------------|
| [GeomPolyList](/api-docs/clay-native/nape/geom/GeomPolyList/) | A Nape list of GeomPoly's defining the decomposition.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="inflate"><div class="plugin-name">nape</div><code><span class="field-name">inflate</span><span class="parenthesis">(</span><span class="arg-name">inflation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">GeomPoly</a></code><a class="header-anchor" href="#inflate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Inflate/Deflate polygon.
<br/><br/>
This algorithm does not attempt to deal with any self-intersections which may
result from the process. Gaps are joined with a miter joint.
<br/><br/>
This algorithm will work for self-intersecting polygons, though the results
may not be what you expect; some parts will be inflated, and some deflated
depending on the local winding. You should probably avoid using this on
self-intersecting polygons.



| Name | Type | Description |
|------|------|-------------|
| `inflation` | [Float](/api-docs/clay-native/Float/) | The number of pixels to inflate polygon by. To deflate use a negative value.  |

| Returns | Description |
|---------|-------------|
| [GeomPoly](/api-docs/clay-native/nape/geom/GeomPoly/) | The inflated polygon.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="cut"><div class="plugin-name">nape</div><code><span class="field-name">cut</span><span class="parenthesis">(</span><span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">Vec2</a><span class="operator">,</span> <span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">Vec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">boundedStart</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">boundedEnd</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/GeomPolyList/" class="type-link">GeomPolyList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/GeomPolyList/" class="type-link">GeomPolyList</a></code><a class="header-anchor" href="#cut"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cut simple polygon with line.
<br/><br/>
The result of this operation will be a list of new GeomPoly representing
the connected regions of the polygon after an imaginary cut is made.
<pre>
(Result of cut assuming
boundedStart = true)       _
/&#92;    _             /&#92;   / &#92;
/  &#92;  / &#92;           /  &#92; '---'
/ o--&#92;/---&#92;-->  =>  /    &#92;,---,
&#92;_________/         &#92;_________/
</pre>
This algorithm runs in average case O(n.log(n)) time and worst case O(n^2).
For convex polygons, this algorithm runs in guaranteed O(n) time.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `start` | [Vec2](/api-docs/clay-native/nape/geom/Vec2/) | | The start point for line segment  |
| `end` | [Vec2](/api-docs/clay-native/nape/geom/Vec2/) | | The end point for line segment.  |
| `boundedStart` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, then the cut will not extend beyond the start of the line segment. (default false)  |
| `boundedEnd` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, then the cut will not extend beyond the end of the line segment. (default false)  |
| `output` | [GeomPolyList](/api-docs/clay-native/nape/geom/GeomPolyList/) | `null` | A GeomPolyList to append results to if supplied, otherwise a new list is created (default null)  |

| Returns | Description |
|---------|-------------|
| [GeomPolyList](/api-docs/clay-native/nape/geom/GeomPolyList/) | A list of GeomPoly representing the result of the cut.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="transform"><div class="plugin-name">nape</div><code><span class="field-name">transform</span><span class="parenthesis">(</span><span class="arg-name">matrix</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Mat23/" class="type-link">Mat23</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">GeomPoly</a></code><a class="header-anchor" href="#transform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transform polygon by given matrix.
<br/><br/>
Any transformation (not just equiorthogonal ones) are permitted, though
a transformation that causes polygon to be come degenerate is a bit
pointless.



| Name | Type | Description |
|------|------|-------------|
| `matrix` | [Mat23](/api-docs/clay-native/nape/geom/Mat23/) | The matrix to transform polygon by.  |

| Returns | Description |
|---------|-------------|
| [GeomPoly](/api-docs/clay-native/nape/geom/GeomPoly/) | A reference to this polygon.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bounds"><div class="plugin-name">nape</div><code><span class="field-name">bounds</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/AABB/" class="type-link">AABB</a></code><a class="header-anchor" href="#bounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine bounds of polygon.


| Returns | Description |
|---------|-------------|
| [AABB](/api-docs/clay-native/nape/geom/AABB/) | A new AABB representing bounds of polygon.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="top"><div class="plugin-name">nape</div><code><span class="field-name">top</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#top"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find top most vertex of polygon.
<br/><br/>
If there is more than one such vertex then the result is indeterminate.
<br/><br/>
The Vec2 returned is intrinsically tied to the inner vertex like that
returned by current(). This method will not alter the current vertex.
This Vec2 is not able to be disposed of.


| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/clay-native/nape/geom/Vec2/) | A Vec2 representing the top most vertex.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bottom"><div class="plugin-name">nape</div><code><span class="field-name">bottom</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#bottom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find bottom most vertex of polygon.
<br/><br/>
If there is more than one such vertex then the result is indeterminate.
<br/><br/>
The Vec2 returned is intrinsically tied to the inner vertex like that
returned by current(). This method will not alter the current vertex.
This Vec2 is not able to be disposed of.


| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/clay-native/nape/geom/Vec2/) | A Vec2 representing the bottom most vertex.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="left"><div class="plugin-name">nape</div><code><span class="field-name">left</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#left"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find left most vertex of polygon.
<br/><br/>
If there is more than one such vertex then the result is indeterminate.
<br/><br/>
The Vec2 returned is intrinsically tied to the inner vertex like that
returned by current(). This method will not alter the current vertex.
This Vec2 is not able to be disposed of.


| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/clay-native/nape/geom/Vec2/) | A Vec2 representing the left most vertex.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="right"><div class="plugin-name">nape</div><code><span class="field-name">right</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#right"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find right most vertex of polygon.
<br/><br/>
If there is more than one such vertex then the result is indeterminate.
<br/><br/>
The Vec2 returned is intrinsically tied to the inner vertex like that
returned by current(). This method will not alter the current vertex.
This Vec2 is not able to be disposed of.


| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/clay-native/nape/geom/Vec2/) | A Vec2 representing the right most vertex.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">vertices</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new GeomPoly polygon.
<br/><br/>
The vertices argument is typed Dynamic (* in AS3), and is permitted
to be one of: <code>Array&lt;Vec2&gt;, flash.Vector&lt;Vec2&gt;, Vec2List, GeomPoly</code>
<br/><br/>
The input will be used to initialise the vertices of the polygon with
the head of the polygon pointing to the first vertex in input with vertices
inserted in forward order.
<br/><br/>
You should use the static 'get' method in preference to make use of object pool.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `vertices` | [Dynamic](/api-docs/clay-native/Dynamic/) | `null` | Vertex data to initialise polygon, or null for empty polygon.  |

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


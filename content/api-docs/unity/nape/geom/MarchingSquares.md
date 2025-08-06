---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: MarchingSquares
target: Unity
permalink: api-docs/unity/nape/geom/MarchingSquares/
---

# MarchingSquares

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/geom/MarchingSquares.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.geom.MarchingSquares</strong> (final class)</div>

Iso-surface extraction into polygons.
<br/><br/>
This class, with only one static method provides an interface to
an algorithm which will, when given a function mapping each point
in a given AABB to a scalar value extract approximated polygons
which represent the region of the AABB where the function returns
a negative value.
<br/><br/>
This function could be a mathematical function like the equation of
a circle: <code> function (x, y) return (x*x + y*y) - r*r </code>
<br/>
Or something more practical like the biased alpha value interpolated
from a Bitmap:
<pre>
function (x, y) {
var ix = if (x < 0) 0 else if (x >= bitmap.width - 1) bitmap.width - 2 else Std.int(x);
var iy = if (y < 0) 0 else if (y >= bitmap.height - 1) bitmap.height - 2 else Std.int(y);
var fx = x - ix;
var fy = y - iy;
var gx = 1 - fx;
var gy = 1 - fy;

var a00 = bitmap.getPixel32(ix, iy) >>> 24;
var a01 = bitmap.getPixel32(ix, iy + 1) >>> 24;
var a10 = bitmap.getPixel32(ix + 1, iy) >>> 24;
var a11 = bitmap.getPixel32(ix + 1, iy + 1) >>> 24;

return 0x80 - (gx*gy*a00 + fx*gy*a10 + gx*fy*a01 + fx*fy*a11);
}
</pre>
For 'flash', we must wrap this in an IsoFunction interface to be used
by MarchingSquares for performance reasons:
<pre>
class BitmapIsoFunction implements nape.geom.IsoFunction {
public function iso(x:Float, y:Float):Float {
...
}
}
</pre>
This function is converted into a set of polygons by sampling along regular
grid points, and then recursively interpolating along cell edges based on
the function provided to find the point in space along that edge where the
function is approximately 0.
<br/><br/>
From this we generate polygons in each grid cell, which are then by default
combined into larger, weakly simply polygons suitable for use in the
decomposition routines of GeomPoly like convexDecomposition!
<br/><br/>
The runtime of the algorithm is O(N+K) for N number of cells and K number
of output vertices (A final pass is made to remove unnecessary vertices).

## Static Members

<div class="signature field-method has-description has-plugin" id="run"><div class="plugin-name">nape</div><code><span class="field-name">run</span><span class="parenthesis">(</span><span class="arg-name">iso</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/IsoFunctionDef/" class="type-link">IsoFunctionDef</a><span class="operator">,</span> <span class="arg-name">bounds</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/AABB/" class="type-link">AABB</a><span class="operator">,</span> <span class="arg-name">cellsize</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/Vec2/" class="type-link">Vec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">quality</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">2</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">subgrid</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/Vec2/" class="type-link">Vec2</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">combine</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/GeomPolyList/" class="type-link">GeomPolyList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/nape/geom/GeomPolyList/" class="type-link">GeomPolyList</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#run"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Execute marching squares algorithm over region of space.
<br/><br/>
We can, optionally provide a subgrid argument which, when non null
will invoke this algorithm seperately on each subgrid cell of the region
in space, instead of on the entire region at once. This can be very useful
as shown in the DestructibleTerrain demo where regions of a terrain are
recomputed with marching squares without needing to regenerate the whole
of the terrain.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `iso` | [IsoFunctionDef](/api-docs/unity/nape/geom/IsoFunctionDef/) | | The iso-function defining the regions where polygons should be extracted, a negative return indicates a region to be extracted. This function need not be continuous, but if it is continuous then more accurate results will be given for the same input parameters.  |
| `bounds` | [AABB](/api-docs/unity/nape/geom/AABB/) | | The AABB representing the region of space to be converted. The arguments to the iso-function will be in the same region.  |
| `cellsize` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | | The dimensions of each cell used individual polygon extraction. Smaller cells will give more accurate results at a greater cost permitting smaller features to be extracted.  |
| `quality` | [Int](/api-docs/unity/Int/) | `2` | This is the number of recursive interpolations which will be performed along cell edges. If the iso-function is not continuous, then this value should be increased to get better accuracy. (default 2)  |
| `subgrid` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | `null` | When supplied, the region of space will be first subdivided into cells with these given dimensions, and each cell treated as a seperate invocation of this method, this value should obviously be greater than cellsize or it would be a bit pointless. (default null)  |
| `combine` | [Bool](/api-docs/unity/Bool/) | `true` | When True, the polygons generated in each cell of the grid will be combined into the largest possible weakly-simple polygons representing the same area. These polygons will always be suitable for decomposition in Nape. (default true)  |
| `output` | [GeomPolyList](/api-docs/unity/nape/geom/GeomPolyList/) | `null` | When supplied, GeomPoly will be inserted into the list (via add) instead of creating a new GeomPolyList object.  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/unity/Null/)<[GeomPolyList](/api-docs/unity/nape/geom/GeomPolyList/)> | A list of GeomPoly representing the results of the extraction.  |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:final` | - |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SkeletonBounds
target: Unity
permalink: api-docs/unity/spine/SkeletonBounds/
---

# SkeletonBounds

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/SkeletonBounds.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.SkeletonBounds</strong> (Class)</div>

Collects each visible {@link BoundingBoxAttachment} and computes the world vertices for its polygon. The polygon vertices are
provided along with convenience methods for doing hit detection.

## Instance Members

<div class="signature field-method has-description has-plugin" id="update"><div class="plugin-name">spine</div><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">skeleton</span><span class="operator">:</span> <a href="/api-docs/unity/spine/Skeleton/" class="type-link">Skeleton</a><span class="operator">,</span> <span class="arg-name">updateAabb</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clears any previous polygons, finds all visible bounding box attachments, and computes the world vertices for each bounding
box's polygon.


| Name | Type | Description |
|------|------|-------------|
| `skeleton` | [Skeleton](/api-docs/unity/spine/Skeleton/) |  |
| `updateAabb` | [Bool](/api-docs/unity/Bool/) | If true, the axis aligned bounding box containing all the polygons is computed. If false, the SkeletonBounds AABB methods will always return true. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="aabbContainsPoint"><div class="plugin-name">spine</div><code><span class="field-name">aabbContainsPoint</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#aabbContainsPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the axis aligned bounding box contains the point.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="aabbIntersectsSegment"><div class="plugin-name">spine</div><code><span class="field-name">aabbIntersectsSegment</span><span class="parenthesis">(</span><span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#aabbIntersectsSegment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the axis aligned bounding box intersects the line segment.

| Name | Type |
|------|------|
| `x1` | [Float](/api-docs/unity/Float/) |
| `y1` | [Float](/api-docs/unity/Float/) |
| `x2` | [Float](/api-docs/unity/Float/) |
| `y2` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="aabbIntersectsSkeleton"><div class="plugin-name">spine</div><code><span class="field-name">aabbIntersectsSkeleton</span><span class="parenthesis">(</span><span class="arg-name">bounds</span><span class="operator">:</span> <a href="#" class="type-link">SkeletonBounds</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#aabbIntersectsSkeleton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the axis aligned bounding box intersects the axis aligned bounding box of the specified bounds.

| Name | Type |
|------|------|
| `bounds` | [SkeletonBounds](/api-docs/unity/spine/SkeletonBounds/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="containsPoint"><div class="plugin-name">spine</div><code><span class="field-name">containsPoint</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/BoundingBoxAttachment/" class="type-link">spine.attachments.BoundingBoxAttachment</a></code><a class="header-anchor" href="#containsPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the first bounding box attachment that contains the point, or null. When doing many checks, it is usually more
efficient to only call this method if {@link #aabbContainsPoint(float, float)} returns true.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [spine.attachments.BoundingBoxAttachment](/api-docs/unity/spine/attachments/BoundingBoxAttachment/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="polygonContainsPoint"><div class="plugin-name">spine</div><code><span class="field-name">polygonContainsPoint</span><span class="parenthesis">(</span><span class="arg-name">polygon</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#polygonContainsPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the polygon contains the point.

| Name | Type |
|------|------|
| `polygon` | [spine.support.utils.FloatArray](/api-docs/unity/spine/support/utils/FloatArray/) |
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="intersectsSegment"><div class="plugin-name">spine</div><code><span class="field-name">intersectsSegment</span><span class="parenthesis">(</span><span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/BoundingBoxAttachment/" class="type-link">spine.attachments.BoundingBoxAttachment</a></code><a class="header-anchor" href="#intersectsSegment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the first bounding box attachment that contains any part of the line segment, or null. When doing many checks, it
is usually more efficient to only call this method if {@link #aabbIntersectsSegment(float, float, float, float)} returns
true.

| Name | Type |
|------|------|
| `x1` | [Float](/api-docs/unity/Float/) |
| `y1` | [Float](/api-docs/unity/Float/) |
| `x2` | [Float](/api-docs/unity/Float/) |
| `y2` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [spine.attachments.BoundingBoxAttachment](/api-docs/unity/spine/attachments/BoundingBoxAttachment/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="polygonIntersectsSegment"><div class="plugin-name">spine</div><code><span class="field-name">polygonIntersectsSegment</span><span class="parenthesis">(</span><span class="arg-name">polygon</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="operator">,</span> <span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y2</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#polygonIntersectsSegment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the polygon contains any part of the line segment.

| Name | Type |
|------|------|
| `polygon` | [spine.support.utils.FloatArray](/api-docs/unity/spine/support/utils/FloatArray/) |
| `x1` | [Float](/api-docs/unity/Float/) |
| `y1` | [Float](/api-docs/unity/Float/) |
| `x2` | [Float](/api-docs/unity/Float/) |
| `y2` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMinX"><div class="plugin-name">spine</div><code><span class="field-name">getMinX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMinX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The left edge of the axis aligned bounding box.
| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMinY"><div class="plugin-name">spine</div><code><span class="field-name">getMinY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMinY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bottom edge of the axis aligned bounding box.
| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMaxX"><div class="plugin-name">spine</div><code><span class="field-name">getMaxX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The right edge of the axis aligned bounding box.
| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMaxY"><div class="plugin-name">spine</div><code><span class="field-name">getMaxY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The top edge of the axis aligned bounding box.
| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getWidth"><div class="plugin-name">spine</div><code><span class="field-name">getWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the axis aligned bounding box.
| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getHeight"><div class="plugin-name">spine</div><code><span class="field-name">getHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the axis aligned bounding box.
| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getBoundingBoxes"><div class="plugin-name">spine</div><code><span class="field-name">getBoundingBoxes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/spine/attachments/BoundingBoxAttachment/" class="type-link">spine.attachments.BoundingBoxAttachment</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getBoundingBoxes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The visible bounding boxes.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/unity/spine/support/utils/Array/)<[spine.attachments.BoundingBoxAttachment](/api-docs/unity/spine/attachments/BoundingBoxAttachment/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getPolygons"><div class="plugin-name">spine</div><code><span class="field-name">getPolygons</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray2D/" class="type-link">spine.support.utils.FloatArray2D</a></code><a class="header-anchor" href="#getPolygons"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The world vertices for the bounding box polygons.
| Returns |
|---------|
| [spine.support.utils.FloatArray2D](/api-docs/unity/spine/support/utils/FloatArray2D/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getPolygon"><div class="plugin-name">spine</div><code><span class="field-name">getPolygon</span><span class="parenthesis">(</span><span class="arg-name">boundingBox</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/BoundingBoxAttachment/" class="type-link">spine.attachments.BoundingBoxAttachment</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#getPolygon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the polygon for the specified bounding box, or null.

| Name | Type |
|------|------|
| `boundingBox` | [spine.attachments.BoundingBoxAttachment](/api-docs/unity/spine/attachments/BoundingBoxAttachment/) |

| Returns |
|---------|
| [spine.support.utils.FloatArray](/api-docs/unity/spine/support/utils/FloatArray/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="minX"><div class="plugin-name">spine</div><code><span class="field-name">minX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#minX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="minY"><div class="plugin-name">spine</div><code><span class="field-name">minY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#minY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="maxX"><div class="plugin-name">spine</div><code><span class="field-name">maxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="maxY"><div class="plugin-name">spine</div><code><span class="field-name">maxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="boundingBoxes"><div class="plugin-name">spine</div><code><span class="field-name">boundingBoxes</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/spine/attachments/BoundingBoxAttachment/" class="type-link">spine.attachments.BoundingBoxAttachment</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#boundingBoxes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="polygons"><div class="plugin-name">spine</div><code><span class="field-name">polygons</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray2D/" class="type-link">spine.support.utils.FloatArray2D</a></code><a class="header-anchor" href="#polygons"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="polygonPool"><div class="plugin-name">spine</div><code><span class="field-name">polygonPool</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/Pool/" class="type-link">spine.support.utils.Pool</a><span class="operator">&lt;</span><a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#polygonPool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="aabbCompute"><div class="plugin-name">spine</div><code><span class="field-name">aabbCompute</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#aabbCompute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


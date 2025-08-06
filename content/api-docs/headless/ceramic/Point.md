---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Point
target: Headless
permalink: api-docs/headless/ceramic/Point/
---

# Point

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Point.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Point</strong> (Class)</div>

A mutable 3D point class with automatic object pooling for memory efficiency.

Point represents a position in 3D space with x, y, and z coordinates.
For 2D operations, simply ignore the z component (defaults to 0).
The class includes built-in object pooling to reduce garbage collection
pressure in performance-critical applications.

Usage patterns:
```haxe
// Create a new point (allocated from pool if available)
var point = Point.get(100, 200);        // 2D point at (100, 200, 0)
var point3d = Point.get(10, 20, 30);    // 3D point at (10, 20, 30)

// Use the point
visual.x = point.x;
visual.y = point.y;

// Return to pool when done
point.recycle();

// Direct construction (bypasses pool)
var permanent = new Point(50, 75);

// Struct initialization syntax
var p:Point = {x: 100, y: 200, z: 0};
```

Important: Always call `recycle()` on pooled points when done to return
them to the pool. Points created with `new` should not be recycled.

<div class="see"><strong>See:</strong> ceramic.ReadOnlyPoint For immutable point access, ceramic.Transform For transformation matrices, ceramic.GeometryUtils For point-based calculations</div>


## Static Members

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Point</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a Point instance from the object pool or creates a new one.

This method should be preferred over `new Point()` for temporary points
as it reuses objects from a pool, reducing garbage collection pressure.
Remember to call `recycle()` on the returned point when done.

Example:
```haxe
var cursor = Point.get(mouse.x, mouse.y);
processPosition(cursor);
cursor.recycle();
```



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/headless/Float/) | `0` | The X coordinate (default: 0)  |
| `y` | [Float](/api-docs/headless/Float/) | `0` | The Y coordinate (default: 0)  |
| `z` | [Float](/api-docs/headless/Float/) | `0` | The Z coordinate (default: 0)  |

| Returns | Description |
|---------|-------------|
| [Point](/api-docs/headless/ceramic/Point/) | A Point instance with the specified coordinates |

## Instance Members

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The X coordinate of the point.
In screen coordinates, this typically represents the horizontal position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Y coordinate of the point.
In screen coordinates, this typically represents the vertical position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="z"><code><span class="field-name">z</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#z"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Z coordinate of the point.
Used for 3D positioning or depth sorting. Defaults to 0 for 2D usage.

<hr class="field-separator" />

<div class="signature field-method has-description" id="recycle"><code><span class="field-name">recycle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#recycle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns this point to the object pool for reuse.

After calling recycle(), this point should not be used anymore.
The coordinates are reset to (0, 0, 0) before returning to the pool.

Important: Only call this on points obtained via `Point.get()`.
Do not recycle points created with `new Point()`.

Example:
```haxe
var temp = Point.get(100, 200);
// Use the point...
temp.recycle(); // Return to pool
// Don't use temp after this!
```

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Point instance with the specified coordinates.

Note: For memory efficiency, consider using `Point.get()` instead,
which uses object pooling.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/headless/Float/) | `0` | The X coordinate (default: 0)  |
| `y` | [Float](/api-docs/headless/Float/) | `0` | The Y coordinate (default: 0)  |
| `z` | [Float](/api-docs/headless/Float/) | `0` | The Z coordinate (default: 0) |

## Private Members

<div class="signature field-var has-description" id="pool"><code><span class="field-name">pool</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Pool/" class="type-link">Pool</a><span class="operator">&lt;</span><a href="#" class="type-link">Point</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal object pool for efficient Point allocation.
Managed automatically by get() and recycle() methods.

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representation of this point.
Format: "Point(x, y, z)" where x, y, z are the coordinate values.


| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | String representation of the point |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |


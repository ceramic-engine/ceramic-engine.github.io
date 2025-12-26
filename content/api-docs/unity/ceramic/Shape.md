---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Shape
target: Unity
permalink: api-docs/unity/ceramic/Shape/
---

# Shape

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Shape.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">Visual</a> → <a href="/api-docs/unity/ceramic/Mesh/">Mesh</a> → <strong>ceramic.Shape</strong> (Class) → <a href="/api-docs/unity/ceramic/RoundedRect/">RoundedRect</a></div>

A visual for drawing arbitrary 2D shapes with automatic triangulation.

Shape extends Mesh but provides a simpler interface for defining polygons.
You only need to provide the outline points, and Shape automatically
triangulates them into triangles for rendering.

Features:
- Automatic triangulation of concave polygons
- Support for complex shapes with holes (using advanced triangulation)
- Auto-computation of size from points
- Integration with Nape physics for collision shapes
- Efficient updates when shape changes

The shape is defined by a series of points forming a closed polygon.
Points should be provided in counter-clockwise order for proper rendering.

```haxe
// Create a triangle
var shape = new Shape();
shape.points = [
    50, 0,    // Top point
    0, 100,   // Bottom left
    100, 100  // Bottom right
];
shape.color = Color.BLUE; // Fill color

// Create a star shape
var star = new Shape();
var points = [];
for (i in 0...10) {
    var angle = i * Math.PI / 5;
    var radius = (i % 2 == 0) ? 50 : 25;
    points.push(Math.cos(angle) * radius + 50);
    points.push(Math.sin(angle) * radius + 50);
}
star.points = points;
star.color = Color.YELLOW; // Fill color
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/Mesh/">Mesh</a>, <a href="/api-docs/unity/ceramic/Triangulate/">Triangulate</a></div>


## Instance Members

<div class="signature field-var has-description" id="points"><code><span class="field-name">points</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#points"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A flat array of vertex coordinates describing the shape outline.
Format: [x0, y0, x1, y1, x2, y2, ...]

Setting this property automatically triggers triangulation.
When modifying the array contents directly (without reassigning),
you must set `contentDirty = true` to update the shape.

Points should be in counter-clockwise order for proper rendering.
The shape is automatically closed (last point connects to first).

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoComputeSize"><code><span class="field-name">autoComputeSize</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoComputeSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If true, width and height are automatically computed from shape points.
This ensures the shape's bounds always match its actual geometry.
Set to false if you want to manually control the shape's size.
Default is true.

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeContent"><code><span class="field-name">computeContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recomputes the shape's triangulation from its points.
Called automatically when points change or contentDirty is true.

This method:
1. Triangulates the shape points into triangles
2. Updates the mesh indices
3. Optionally recomputes size from points

Override to implement custom triangulation strategies.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="initNapePhysics"><div class="plugin-name">nape</div><code><span class="field-name">initNapePhysics</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">space</span><span class="operator">:</span> <a href="/api-docs/unity/nape/space/Space/" class="type-link">nape.space.Space</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">shape</span><span class="operator">:</span> <a href="/api-docs/unity/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">shapes</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">material</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/Material/" class="type-link">nape.phys.Material</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/VisualNapePhysics/" class="type-link">VisualNapePhysics</a></code><a class="header-anchor" href="#initNapePhysics"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initialize Nape physics body for this shape.
Creates a physics body that matches the visual shape for accurate collisions.

If no collision shape is provided, automatically creates a polygon
matching the shape's points.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `type` | Anonymous | | Physics body type (STATIC for walls, DYNAMIC for moving objects, KINEMATIC for controlled movement)  |
| `space` | [nape.space.Space](/api-docs/unity/nape/space/Space/) | *(optional)* | Nape physics space (uses default if not provided)  |
| `shape` | [nape.shape.Shape](/api-docs/unity/nape/shape/Shape/) | *(optional)* | Custom collision shape (auto-generated from points if null)  |
| `shapes` | [Array](/api-docs/unity/Array/)<[nape.shape.Shape](/api-docs/unity/nape/shape/Shape/)> | *(optional)* | Array of collision shapes for complex bodies  |
| `material` | [nape.phys.Material](/api-docs/unity/nape/phys/Material/) | *(optional)* | Physics material defining friction, elasticity, etc.  |

| Returns | Description |
|---------|-------------|
| [VisualNapePhysics](/api-docs/unity/ceramic/VisualNapePhysics/) | VisualNapePhysics component for further configuration |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


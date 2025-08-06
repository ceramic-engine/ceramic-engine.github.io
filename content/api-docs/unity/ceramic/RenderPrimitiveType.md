---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: RenderPrimitiveType
target: Unity
permalink: api-docs/unity/ceramic/RenderPrimitiveType/
---

# RenderPrimitiveType

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/RenderPrimitiveType.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.RenderPrimitiveType</strong> (Abstract)</div>

Defines the primitive types used for rendering geometry.

This enum specifies how vertices should be interpreted when drawing:
- TRIANGLE: Groups vertices into triangles (3 vertices per primitive)
- LINE: Groups vertices into lines (2 vertices per primitive)

The primitive type affects how the GPU interprets the vertex and index buffers
during rendering. It determines the basic shape that will be drawn from the
provided vertex data.

```haxe
// Set primitive type for triangle-based rendering (default)
renderer.setPrimitiveType(TRIANGLE);

// Switch to line rendering for wireframes or outlines
renderer.setPrimitiveType(LINE);
```

<div class="see"><strong>See:</strong> Renderer For usage in the rendering pipeline, Mesh For geometry that uses these primitive types</div>


## Type Conversions

**From:**
- `[Int](/api-docs/unity/Int/)`

**To:**
- `[Int](/api-docs/unity/Int/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:enum` | - |


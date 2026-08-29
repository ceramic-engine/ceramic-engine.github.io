---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: VisualRendering
target: Headless
permalink: api-docs/headless/ceramic/VisualRendering/
---

# VisualRendering

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/VisualRendering.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.VisualRendering</strong> (Abstract)</div>

How a `Visual` renders itself, used by the renderer to dispatch each visual
to the right draw path without a runtime type check.

Every `Visual` carries a `rendering` tag set by its type (Quad → QUAD,
Mesh → MESH, Renderable → RENDERABLE; plain visuals that render nothing
directly stay NONE). The renderer hot loop switches on this `Int` instead of
reading per-type fields and testing `visual is Renderable`, and the
`Visual.asQuad` / `Visual.asMesh` helpers use it to cast safely.

<div class="see"><strong>See:</strong> Visual.rendering</div>


## Type Conversions

**From:**
- `[Int](/api-docs/headless/Int/)`

**To:**
- `[Int](/api-docs/headless/Int/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:enum` | - |


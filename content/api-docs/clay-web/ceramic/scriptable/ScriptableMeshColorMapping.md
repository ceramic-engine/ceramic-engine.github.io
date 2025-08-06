---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ScriptableMeshColorMapping
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/scriptable/ScriptableMeshColorMapping/
---

# ScriptableMeshColorMapping

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/scriptable/ScriptableMeshColorMapping.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.scriptable.ScriptableMeshColorMapping</strong> (Class)</div>

Scriptable wrapper for MeshColorMapping to expose mesh coloring modes to scripts.

This class provides constants that define how colors are applied to mesh geometry.
In scripts, this type is exposed as `MeshColorMapping` (without the Scriptable prefix).

Color mapping determines how color values are distributed across a mesh's geometry,
allowing for uniform coloring, per-triangle coloring, or per-vertex coloring.

## Usage in Scripts

```haxe
// Create a mesh with uniform color
var mesh = new Mesh();
mesh.colorMapping = MeshColorMapping.MESH;
mesh.color = Color.RED; // Entire mesh is red

// Use per-triangle coloring
mesh.colorMapping = MeshColorMapping.INDICES;
mesh.colors = [
    Color.RED,    // First triangle
    Color.GREEN,  // Second triangle
    Color.BLUE    // Third triangle
];

// Use per-vertex coloring for gradients
mesh.colorMapping = MeshColorMapping.VERTICES;
mesh.colors = [
    Color.RED,    // First vertex
    Color.GREEN,  // Second vertex
    Color.BLUE,   // Third vertex
    Color.YELLOW  // Fourth vertex
];
```

## Mapping Modes

- **MESH**: Single color for the entire mesh (most efficient)
- **INDICES**: One color per triangle (3 vertices)
- **VERTICES**: One color per vertex (allows smooth gradients)

<div class="see"><strong>See:</strong> ceramic.MeshColorMapping The actual implementation, ceramic.Mesh For using color mapping with meshes</div>


## Static Members

<div class="signature field-var has-description" id="MESH"><code><span class="field-name">MESH</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MESH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map a single color to the whole mesh.

<hr class="field-separator" />

<div class="signature field-var has-description" id="INDICES"><code><span class="field-name">INDICES</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#INDICES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map a color to each indice.

<hr class="field-separator" />

<div class="signature field-var has-description" id="VERTICES"><code><span class="field-name">VERTICES</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#VERTICES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map a color to each vertex.


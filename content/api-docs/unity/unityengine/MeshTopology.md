---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: MeshTopology
target: Unity
permalink: api-docs/unity/unityengine/MeshTopology/
---

# MeshTopology

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/MeshTopology.hx">View source</a></div>

<div class="type-hierarchy"><strong>unityengine.MeshTopology</strong> (extern class)</div>

Defines how vertex indices are interpreted to form primitives.
Determines the basic shape type created from vertices.

In Ceramic's Unity backend, Triangles is primarily used for
rendering filled shapes and sprites, while Lines may be used
for debugging or wireframe rendering.

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/unityengine/Mesh/">Mesh</a>, SubMeshDescriptor</div>


## Static Members

<div class="signature field-var has-description has-plugin" id="Triangles"><div class="plugin-name">unity</div><code><span class="field-name">Triangles</span><span class="operator">:</span> <a href="#" class="type-link">MeshTopology</a></code><a class="header-anchor" href="#Triangles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Interprets indices in groups of 3 to form triangles.
Most common topology for 3D and filled 2D rendering.

Index pattern: [0,1,2, 3,4,5, ...]
Forms triangles: (0,1,2), (3,4,5), ...

Used by Ceramic for all filled visuals.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="Quads"><div class="plugin-name">unity</div><code><span class="field-name">Quads</span><span class="operator">:</span> <a href="#" class="type-link">MeshTopology</a></code><a class="header-anchor" href="#Quads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Interprets indices in groups of 4 to form quadrilaterals.

Index pattern: [0,1,2,3, 4,5,6,7, ...]
Forms quads: (0,1,2,3), (4,5,6,7), ...

Note: Deprecated in modern Unity, converted to triangles internally.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="Lines"><div class="plugin-name">unity</div><code><span class="field-name">Lines</span><span class="operator">:</span> <a href="#" class="type-link">MeshTopology</a></code><a class="header-anchor" href="#Lines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Interprets indices in pairs to form individual line segments.

Index pattern: [0,1, 2,3, 4,5, ...]
Forms lines: (0→1), (2→3), (4→5), ...

Used for wireframes, debugging visualizations, or stroked paths.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="LineStrip"><div class="plugin-name">unity</div><code><span class="field-name">LineStrip</span><span class="operator">:</span> <a href="#" class="type-link">MeshTopology</a></code><a class="header-anchor" href="#LineStrip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Forms a continuous line through all vertices in order.

Index pattern: [0,1,2,3,4, ...]
Forms connected line: 0→1→2→3→4→...

Efficient for drawing paths or outlines with fewer indices.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="Points"><div class="plugin-name">unity</div><code><span class="field-name">Points</span><span class="operator">:</span> <a href="#" class="type-link">MeshTopology</a></code><a class="header-anchor" href="#Points"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Renders each vertex as an individual point.

Index pattern: [0,1,2,3, ...]
Renders points at each vertex position.

Point size controlled by shader. Useful for particle
systems or debug visualization of vertex positions.

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |


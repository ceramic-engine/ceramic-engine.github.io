---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: MeshAttachment
target: Unity
permalink: api-docs/unity/spine/attachments/MeshAttachment/
---

# MeshAttachment

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/attachments/MeshAttachment.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/spine/attachments/Attachment/">Attachment</a> → <a href="/api-docs/unity/spine/attachments/VertexAttachment/">VertexAttachment</a> → <strong>spine.attachments.MeshAttachment</strong> (Class)</div>

An attachment that displays a textured mesh. A mesh has hull vertices and internal vertices within the hull. Holes are not
supported. Each vertex has UVs (texture coordinates) and triangles are used to map an image on to the mesh.
<p>
See <a href="http://esotericsoftware.com/spine-meshes">Mesh attachments</a> in the Spine User Guide.

## Instance Members

<div class="signature field-method no-description has-plugin" id="setRegion"><div class="plugin-name">spine</div><code><span class="field-name">setRegion</span><span class="parenthesis">(</span><span class="arg-name">region</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/graphics/TextureRegion/" class="type-link">spine.support.graphics.TextureRegion</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setRegion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `region` | [spine.support.graphics.TextureRegion](/api-docs/unity/spine/support/graphics/TextureRegion/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getRegion"><div class="plugin-name">spine</div><code><span class="field-name">getRegion</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/graphics/TextureRegion/" class="type-link">spine.support.graphics.TextureRegion</a></code><a class="header-anchor" href="#getRegion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [spine.support.graphics.TextureRegion](/api-docs/unity/spine/support/graphics/TextureRegion/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateUVs"><div class="plugin-name">spine</div><code><span class="field-name">updateUVs</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateUVs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates {@link #uvs} using {@link #regionUVs} and the {@link #region}. Must be called after changing the region UVs or
region.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTriangles"><div class="plugin-name">spine</div><code><span class="field-name">getTriangles</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/ShortArray/" class="type-link">spine.support.utils.ShortArray</a></code><a class="header-anchor" href="#getTriangles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triplets of vertex indices which describe the mesh's triangulation.
| Returns |
|---------|
| [spine.support.utils.ShortArray](/api-docs/unity/spine/support/utils/ShortArray/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTriangles"><div class="plugin-name">spine</div><code><span class="field-name">setTriangles</span><span class="parenthesis">(</span><span class="arg-name">triangles</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/ShortArray/" class="type-link">spine.support.utils.ShortArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTriangles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `triangles` | [spine.support.utils.ShortArray](/api-docs/unity/spine/support/utils/ShortArray/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getRegionUVs"><div class="plugin-name">spine</div><code><span class="field-name">getRegionUVs</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#getRegionUVs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The UV pair for each vertex, normalized within the texture region.
| Returns |
|---------|
| [spine.support.utils.FloatArray](/api-docs/unity/spine/support/utils/FloatArray/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setRegionUVs"><div class="plugin-name">spine</div><code><span class="field-name">setRegionUVs</span><span class="parenthesis">(</span><span class="arg-name">regionUVs</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setRegionUVs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the texture coordinates for the region. The values are u,v pairs for each vertex.

| Name | Type |
|------|------|
| `regionUVs` | [spine.support.utils.FloatArray](/api-docs/unity/spine/support/utils/FloatArray/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getUVs"><div class="plugin-name">spine</div><code><span class="field-name">getUVs</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#getUVs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The UV pair for each vertex, normalized within the entire texture.
<p>
See {@link #updateUVs}.
| Returns |
|---------|
| [spine.support.utils.FloatArray](/api-docs/unity/spine/support/utils/FloatArray/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setUVs"><div class="plugin-name">spine</div><code><span class="field-name">setUVs</span><span class="parenthesis">(</span><span class="arg-name">uvs</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUVs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `uvs` | [spine.support.utils.FloatArray](/api-docs/unity/spine/support/utils/FloatArray/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getColor"><div class="plugin-name">spine</div><code><span class="field-name">getColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#getColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color to tint the mesh.
| Returns |
|---------|
| [spine.support.graphics.Color](/api-docs/unity/spine/support/graphics/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getPath"><div class="plugin-name">spine</div><code><span class="field-name">getPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#getPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the texture region for this attachment.
| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setPath"><div class="plugin-name">spine</div><code><span class="field-name">setPath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getHullLength"><div class="plugin-name">spine</div><code><span class="field-name">getHullLength</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getHullLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of entries at the beginning of {@link #vertices} that make up the mesh hull.
| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setHullLength"><div class="plugin-name">spine</div><code><span class="field-name">setHullLength</span><span class="parenthesis">(</span><span class="arg-name">hullLength</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setHullLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `hullLength` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setEdges"><div class="plugin-name">spine</div><code><span class="field-name">setEdges</span><span class="parenthesis">(</span><span class="arg-name">edges</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/ShortArray/" class="type-link">spine.support.utils.ShortArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEdges"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `edges` | [spine.support.utils.ShortArray](/api-docs/unity/spine/support/utils/ShortArray/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getEdges"><div class="plugin-name">spine</div><code><span class="field-name">getEdges</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/ShortArray/" class="type-link">spine.support.utils.ShortArray</a></code><a class="header-anchor" href="#getEdges"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertex index pairs describing edges for controlling triangulation, or be null if nonessential data was not exported. Mesh
triangles will never cross edges. Triangulation is not performed at runtime.
| Returns |
|---------|
| [spine.support.utils.ShortArray](/api-docs/unity/spine/support/utils/ShortArray/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getWidth"><div class="plugin-name">spine</div><code><span class="field-name">getWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the mesh's image, or zero if nonessential data was not exported.
| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setWidth"><div class="plugin-name">spine</div><code><span class="field-name">setWidth</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `width` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getHeight"><div class="plugin-name">spine</div><code><span class="field-name">getHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the mesh's image, or zero if nonessential data was not exported.
| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setHeight"><div class="plugin-name">spine</div><code><span class="field-name">setHeight</span><span class="parenthesis">(</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `height` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getParentMesh"><div class="plugin-name">spine</div><code><span class="field-name">getParentMesh</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">MeshAttachment</a></code><a class="header-anchor" href="#getParentMesh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The parent mesh if this is a linked mesh, else null. A linked mesh shares the {@link #bones}, {@link #vertices},
{@link #regionUVs}, {@link #triangles}, {@link #hullLength}, {@link #edges}, {@link #width}, and {@link #height} with the
parent mesh, but may have a different {@link #name} or {@link #path} (and therefore a different texture).
| Returns |
|---------|
| [MeshAttachment](/api-docs/unity/spine/attachments/MeshAttachment/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setParentMesh"><div class="plugin-name">spine</div><code><span class="field-name">setParentMesh</span><span class="parenthesis">(</span><span class="arg-name">parentMesh</span><span class="operator">:</span> <a href="#" class="type-link">MeshAttachment</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setParentMesh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `parentMesh` | [MeshAttachment](/api-docs/unity/spine/attachments/MeshAttachment/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="copy"><div class="plugin-name">spine</div><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/Attachment/" class="type-link">Attachment</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Attachment](/api-docs/unity/spine/attachments/Attachment/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="newLinkedMesh"><div class="plugin-name">spine</div><code><span class="field-name">newLinkedMesh</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">MeshAttachment</a></code><a class="header-anchor" href="#newLinkedMesh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new mesh with the {@link #parentMesh} set to this mesh's parent mesh, if any, else to this mesh.
| Returns |
|---------|
| [MeshAttachment](/api-docs/unity/spine/attachments/MeshAttachment/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="region"><div class="plugin-name">spine</div><code><span class="field-name">region</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/graphics/TextureRegion/" class="type-link">spine.support.graphics.TextureRegion</a></code><a class="header-anchor" href="#region"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="path"><div class="plugin-name">spine</div><code><span class="field-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#path"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="regionUVs"><div class="plugin-name">spine</div><code><span class="field-name">regionUVs</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#regionUVs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="uvs"><div class="plugin-name">spine</div><code><span class="field-name">uvs</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#uvs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="triangles"><div class="plugin-name">spine</div><code><span class="field-name">triangles</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/ShortArray/" class="type-link">spine.support.utils.ShortArray</a></code><a class="header-anchor" href="#triangles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="color"><div class="plugin-name">spine</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="hullLength"><div class="plugin-name">spine</div><code><span class="field-name">hullLength</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hullLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="parentMesh"><div class="plugin-name">spine</div><code><span class="field-name">parentMesh</span><span class="operator">:</span> <a href="#" class="type-link">MeshAttachment</a></code><a class="header-anchor" href="#parentMesh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="edges"><div class="plugin-name">spine</div><code><span class="field-name">edges</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/ShortArray/" class="type-link">spine.support.utils.ShortArray</a></code><a class="header-anchor" href="#edges"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="width"><div class="plugin-name">spine</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="height"><div class="plugin-name">spine</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


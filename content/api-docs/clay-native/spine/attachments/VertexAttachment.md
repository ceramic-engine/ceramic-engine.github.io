---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: VertexAttachment
target: Clay (Native)
permalink: api-docs/clay-native/spine/attachments/VertexAttachment/
---

# VertexAttachment

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/attachments/VertexAttachment.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/spine/attachments/Attachment/">Attachment</a> → <strong>spine.attachments.VertexAttachment</strong> (Class) → <a href="/api-docs/clay-native/spine/attachments/BoundingBoxAttachment/">BoundingBoxAttachment</a>, <a href="/api-docs/clay-native/spine/attachments/ClippingAttachment/">ClippingAttachment</a>, <a href="/api-docs/clay-native/spine/attachments/MeshAttachment/">MeshAttachment</a>, <a href="/api-docs/clay-native/spine/attachments/PathAttachment/">PathAttachment</a></div>

Base class for an attachment with vertices that are transformed by one or more bones and can be deformed by a slot's
{@link Slot#getDeform()}.

## Instance Members

<div class="signature field-var no-description has-plugin" id="bones"><div class="plugin-name">spine</div><code><span class="field-name">bones</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/IntArray/" class="type-link">spine.support.utils.IntArray</a></code><a class="header-anchor" href="#bones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="vertices"><div class="plugin-name">spine</div><code><span class="field-name">vertices</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#vertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="worldVerticesLength"><div class="plugin-name">spine</div><code><span class="field-name">worldVerticesLength</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#worldVerticesLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="deformAttachment"><div class="plugin-name">spine</div><code><span class="field-name">deformAttachment</span><span class="operator">:</span> <a href="#" class="type-link">VertexAttachment</a></code><a class="header-anchor" href="#deformAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeWorldVertices"><div class="plugin-name">spine</div><code><span class="field-name">computeWorldVertices</span><span class="parenthesis">(</span><span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Slot/" class="type-link">spine.Slot</a><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">worldVertices</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">stride</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeWorldVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transforms the attachment's local {@link #getVertices()} to world coordinates. If the slot's {@link Slot#getDeform()} is
not empty, it is used to deform the vertices.
<p>
See <a href="http://esotericsoftware.com/spine-runtime-skeletons#World-transforms">World transforms</a> in the Spine
Runtimes Guide.


| Name | Type | Description |
|------|------|-------------|
| `slot` | [spine.Slot](/api-docs/clay-native/spine/Slot/) |  |
| `start` | [Int](/api-docs/clay-native/Int/) | The index of the first { |
| `count` | [Int](/api-docs/clay-native/Int/) | The number of world vertex values to output. Must be <= { |
| `worldVertices` | [spine.support.utils.FloatArray](/api-docs/clay-native/spine/support/utils/FloatArray/) | The output world vertices. Must have a length >= <code>offset</code> + <code>count</code> * <code>stride</code> / 2.  |
| `offset` | [Int](/api-docs/clay-native/Int/) | The <code>worldVertices</code> index to begin writing values.  |
| `stride` | [Int](/api-docs/clay-native/Int/) | The number of <code>worldVertices</code> entries between the value pairs written. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getDeformAttachment"><div class="plugin-name">spine</div><code><span class="field-name">getDeformAttachment</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">VertexAttachment</a></code><a class="header-anchor" href="#getDeformAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deform keys for the deform attachment are also applied to this attachment.

| Returns | Description |
|---------|-------------|
| [VertexAttachment](/api-docs/clay-native/spine/attachments/VertexAttachment/) | May be null if no deform keys should be applied. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setDeformAttachment"><div class="plugin-name">spine</div><code><span class="field-name">setDeformAttachment</span><span class="parenthesis">(</span><span class="arg-name">deformAttachment</span><span class="operator">:</span> <a href="#" class="type-link">VertexAttachment</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setDeformAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `deformAttachment` | [VertexAttachment](/api-docs/clay-native/spine/attachments/VertexAttachment/) | May be null if no deform keys should be applied. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getBones"><div class="plugin-name">spine</div><code><span class="field-name">getBones</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/IntArray/" class="type-link">spine.support.utils.IntArray</a></code><a class="header-anchor" href="#getBones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bones which affect the {@link #getVertices()}. The array entries are, for each vertex, the number of bones affecting
the vertex followed by that many bone indices, which is the index of the bone in {@link Skeleton#getBones()}. Will be null
if this attachment has no weights.
| Returns |
|---------|
| [spine.support.utils.IntArray](/api-docs/clay-native/spine/support/utils/IntArray/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setBones"><div class="plugin-name">spine</div><code><span class="field-name">setBones</span><span class="parenthesis">(</span><span class="arg-name">bones</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/IntArray/" class="type-link">spine.support.utils.IntArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `bones` | [spine.support.utils.IntArray](/api-docs/clay-native/spine/support/utils/IntArray/) | May be null if this attachment has no weights. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getVertices"><div class="plugin-name">spine</div><code><span class="field-name">getVertices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#getVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The vertex positions in the bone's coordinate system. For a non-weighted attachment, the values are <code>x,y</code>
entries for each vertex. For a weighted attachment, the values are <code>x,y,weight</code> entries for each bone affecting
each vertex.
| Returns |
|---------|
| [spine.support.utils.FloatArray](/api-docs/clay-native/spine/support/utils/FloatArray/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setVertices"><div class="plugin-name">spine</div><code><span class="field-name">setVertices</span><span class="parenthesis">(</span><span class="arg-name">vertices</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `vertices` | [spine.support.utils.FloatArray](/api-docs/clay-native/spine/support/utils/FloatArray/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getWorldVerticesLength"><div class="plugin-name">spine</div><code><span class="field-name">getWorldVerticesLength</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getWorldVerticesLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The maximum number of world vertex values that can be output by
{@link #computeWorldVertices(Slot, int, int, float[], int, int)} using the <code>count</code> parameter.
| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setWorldVerticesLength"><div class="plugin-name">spine</div><code><span class="field-name">setWorldVerticesLength</span><span class="parenthesis">(</span><span class="arg-name">worldVerticesLength</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWorldVerticesLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `worldVerticesLength` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getId"><div class="plugin-name">spine</div><code><span class="field-name">getId</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a unique ID for this attachment.
| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="copyTo"><div class="plugin-name">spine</div><code><span class="field-name">copyTo</span><span class="parenthesis">(</span><span class="arg-name">attachment</span><span class="operator">:</span> <a href="#" class="type-link">VertexAttachment</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#copyTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Does not copy id (generated) or name (set on construction).

| Name | Type |
|------|------|
| `attachment` | [VertexAttachment](/api-docs/clay-native/spine/attachments/VertexAttachment/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-native/String/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="nextID"><div class="plugin-name">spine</div><code><span class="field-name">nextID</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="id"><div class="plugin-name">spine</div><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getNextID"><div class="plugin-name">spine</div><code><span class="field-name">getNextID</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getNextID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |


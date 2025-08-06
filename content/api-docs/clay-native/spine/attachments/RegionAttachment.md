---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: RegionAttachment
target: Clay (Native)
permalink: api-docs/clay-native/spine/attachments/RegionAttachment/
---

# RegionAttachment

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/attachments/RegionAttachment.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/spine/attachments/Attachment/">Attachment</a> → <strong>spine.attachments.RegionAttachment</strong> (Class)</div>

An attachment that displays a textured quadrilateral.
<p>
See <a href="http://esotericsoftware.com/spine-regions">Region attachments</a> in the Spine User Guide.

## Static Members

<div class="signature field-var no-description has-plugin" id="BLX"><div class="plugin-name">spine</div><code><span class="field-name">BLX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BLX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BLY"><div class="plugin-name">spine</div><code><span class="field-name">BLY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BLY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="ULX"><div class="plugin-name">spine</div><code><span class="field-name">ULX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ULX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="ULY"><div class="plugin-name">spine</div><code><span class="field-name">ULY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ULY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="URX"><div class="plugin-name">spine</div><code><span class="field-name">URX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#URX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="URY"><div class="plugin-name">spine</div><code><span class="field-name">URY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#URY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BRX"><div class="plugin-name">spine</div><code><span class="field-name">BRX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BRX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BRY"><div class="plugin-name">spine</div><code><span class="field-name">BRY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BRY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-method has-description has-plugin" id="updateOffset"><div class="plugin-name">spine</div><code><span class="field-name">updateOffset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the {@link #offset} using the region settings. Must be called after changing region settings.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setRegion"><div class="plugin-name">spine</div><code><span class="field-name">setRegion</span><span class="parenthesis">(</span><span class="arg-name">region</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/graphics/TextureRegion/" class="type-link">spine.support.graphics.TextureRegion</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setRegion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `region` | [spine.support.graphics.TextureRegion](/api-docs/clay-native/spine/support/graphics/TextureRegion/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getRegion"><div class="plugin-name">spine</div><code><span class="field-name">getRegion</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/graphics/TextureRegion/" class="type-link">spine.support.graphics.TextureRegion</a></code><a class="header-anchor" href="#getRegion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [spine.support.graphics.TextureRegion](/api-docs/clay-native/spine/support/graphics/TextureRegion/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeWorldVertices"><div class="plugin-name">spine</div><code><span class="field-name">computeWorldVertices</span><span class="parenthesis">(</span><span class="arg-name">bone</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Bone/" class="type-link">spine.Bone</a><span class="operator">,</span> <span class="arg-name">worldVertices</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">stride</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeWorldVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transforms the attachment's four vertices to world coordinates.
<p>
See <a href="http://esotericsoftware.com/spine-runtime-skeletons#World-transforms">World transforms</a> in the Spine
Runtimes Guide.


| Name | Type | Description |
|------|------|-------------|
| `bone` | [spine.Bone](/api-docs/clay-native/spine/Bone/) |  |
| `worldVertices` | [spine.support.utils.FloatArray](/api-docs/clay-native/spine/support/utils/FloatArray/) | The output world vertices. Must have a length >= <code>offset</code> + 8.  |
| `offset` | [Int](/api-docs/clay-native/Int/) | The <code>worldVertices</code> index to begin writing values.  |
| `stride` | [Int](/api-docs/clay-native/Int/) | The number of <code>worldVertices</code> entries between the value pairs written. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getOffset"><div class="plugin-name">spine</div><code><span class="field-name">getOffset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#getOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For each of the 4 vertices, a pair of <code>x,y</code> values that is the local position of the vertex.
<p>
See {@link #updateOffset()}.
| Returns |
|---------|
| [spine.support.utils.FloatArray](/api-docs/clay-native/spine/support/utils/FloatArray/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getUVs"><div class="plugin-name">spine</div><code><span class="field-name">getUVs</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#getUVs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [spine.support.utils.FloatArray](/api-docs/clay-native/spine/support/utils/FloatArray/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getX"><div class="plugin-name">spine</div><code><span class="field-name">getX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The local x translation.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setX"><div class="plugin-name">spine</div><code><span class="field-name">setX</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getY"><div class="plugin-name">spine</div><code><span class="field-name">getY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The local y translation.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setY"><div class="plugin-name">spine</div><code><span class="field-name">setY</span><span class="parenthesis">(</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `y` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getScaleX"><div class="plugin-name">spine</div><code><span class="field-name">getScaleX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getScaleX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The local scaleX.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setScaleX"><div class="plugin-name">spine</div><code><span class="field-name">setScaleX</span><span class="parenthesis">(</span><span class="arg-name">scaleX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setScaleX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scaleX` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getScaleY"><div class="plugin-name">spine</div><code><span class="field-name">getScaleY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getScaleY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The local scaleY.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setScaleY"><div class="plugin-name">spine</div><code><span class="field-name">setScaleY</span><span class="parenthesis">(</span><span class="arg-name">scaleY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setScaleY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scaleY` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getRotation"><div class="plugin-name">spine</div><code><span class="field-name">getRotation</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getRotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The local rotation.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setRotation"><div class="plugin-name">spine</div><code><span class="field-name">setRotation</span><span class="parenthesis">(</span><span class="arg-name">rotation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setRotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rotation` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getWidth"><div class="plugin-name">spine</div><code><span class="field-name">getWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the region attachment in Spine.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setWidth"><div class="plugin-name">spine</div><code><span class="field-name">setWidth</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `width` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getHeight"><div class="plugin-name">spine</div><code><span class="field-name">getHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the region attachment in Spine.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setHeight"><div class="plugin-name">spine</div><code><span class="field-name">setHeight</span><span class="parenthesis">(</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `height` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getColor"><div class="plugin-name">spine</div><code><span class="field-name">getColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#getColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color to tint the region attachment.
| Returns |
|---------|
| [spine.support.graphics.Color](/api-docs/clay-native/spine/support/graphics/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getPath"><div class="plugin-name">spine</div><code><span class="field-name">getPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#getPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the texture region for this attachment.
| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setPath"><div class="plugin-name">spine</div><code><span class="field-name">setPath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="copy"><div class="plugin-name">spine</div><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/attachments/Attachment/" class="type-link">Attachment</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Attachment](/api-docs/clay-native/spine/attachments/Attachment/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-native/String/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="region"><div class="plugin-name">spine</div><code><span class="field-name">region</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/graphics/TextureRegion/" class="type-link">spine.support.graphics.TextureRegion</a></code><a class="header-anchor" href="#region"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="path"><div class="plugin-name">spine</div><code><span class="field-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#path"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="x"><div class="plugin-name">spine</div><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="y"><div class="plugin-name">spine</div><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="scaleX"><div class="plugin-name">spine</div><code><span class="field-name">scaleX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="scaleY"><div class="plugin-name">spine</div><code><span class="field-name">scaleY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="rotation"><div class="plugin-name">spine</div><code><span class="field-name">rotation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="width"><div class="plugin-name">spine</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="height"><div class="plugin-name">spine</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="uvs"><div class="plugin-name">spine</div><code><span class="field-name">uvs</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#uvs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="offset"><div class="plugin-name">spine</div><code><span class="field-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#offset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="color"><div class="plugin-name">spine</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: BoundingBoxAttachment
target: Clay (Native)
permalink: api-docs/clay-native/spine/attachments/BoundingBoxAttachment/
---

# BoundingBoxAttachment

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/attachments/BoundingBoxAttachment.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/spine/attachments/Attachment/">Attachment</a> → <a href="/api-docs/clay-native/spine/attachments/VertexAttachment/">VertexAttachment</a> → <strong>spine.attachments.BoundingBoxAttachment</strong> (Class)</div>

An attachment with vertices that make up a polygon. Can be used for hit detection, creating physics bodies, spawning particle
effects, and more.
<p>
See {@link SkeletonBounds} and <a href="http://esotericsoftware.com/spine-bounding-boxes">Bounding Boxes</a> in the Spine User
Guide.

## Instance Members

<div class="signature field-var no-description has-plugin" id="color"><div class="plugin-name">spine</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getColor"><div class="plugin-name">spine</div><code><span class="field-name">getColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#getColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color of the bounding box as it was in Spine, or a default color if nonessential data was not exported. Bounding boxes
are not usually rendered at runtime.
| Returns |
|---------|
| [spine.support.graphics.Color](/api-docs/clay-native/spine/support/graphics/Color/) |

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


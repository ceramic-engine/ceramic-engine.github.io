---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: PointAttachment
target: Clay (Native)
permalink: api-docs/clay-native/spine/attachments/PointAttachment/
---

# PointAttachment

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/attachments/PointAttachment.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/spine/attachments/Attachment/">Attachment</a> → <strong>spine.attachments.PointAttachment</strong> (Class)</div>

An attachment which is a single point and a rotation. This can be used to spawn projectiles, particles, etc. A bone can be
used in similar ways, but a PointAttachment is slightly less expensive to compute and can be hidden, shown, and placed in a
skin.
<p>
See <a href="http://esotericsoftware.com/spine-point-attachments">Point Attachments</a> in the Spine User Guide.

## Instance Members

<div class="signature field-var no-description has-plugin" id="x"><div class="plugin-name">spine</div><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="y"><div class="plugin-name">spine</div><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="rotation"><div class="plugin-name">spine</div><code><span class="field-name">rotation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="color"><div class="plugin-name">spine</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getX"><div class="plugin-name">spine</div><code><span class="field-name">getX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setX"><div class="plugin-name">spine</div><code><span class="field-name">setX</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getY"><div class="plugin-name">spine</div><code><span class="field-name">getY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setY"><div class="plugin-name">spine</div><code><span class="field-name">setY</span><span class="parenthesis">(</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `y` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getRotation"><div class="plugin-name">spine</div><code><span class="field-name">getRotation</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getRotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setRotation"><div class="plugin-name">spine</div><code><span class="field-name">setRotation</span><span class="parenthesis">(</span><span class="arg-name">rotation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setRotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rotation` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getColor"><div class="plugin-name">spine</div><code><span class="field-name">getColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#getColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color of the point attachment as it was in Spine, or a default clor if nonessential data was not exported. Point
attachments are not usually rendered at runtime.
| Returns |
|---------|
| [spine.support.graphics.Color](/api-docs/clay-native/spine/support/graphics/Color/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="computeWorldPosition"><div class="plugin-name">spine</div><code><span class="field-name">computeWorldPosition</span><span class="parenthesis">(</span><span class="arg-name">bone</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Bone/" class="type-link">spine.Bone</a><span class="operator">,</span> <span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/math/Vector2/" class="type-link">spine.support.math.Vector2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/math/Vector2/" class="type-link">spine.support.math.Vector2</a></code><a class="header-anchor" href="#computeWorldPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bone` | [spine.Bone](/api-docs/clay-native/spine/Bone/) |
| `point` | [spine.support.math.Vector2](/api-docs/clay-native/spine/support/math/Vector2/) |

| Returns |
|---------|
| [spine.support.math.Vector2](/api-docs/clay-native/spine/support/math/Vector2/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="computeWorldRotation"><div class="plugin-name">spine</div><code><span class="field-name">computeWorldRotation</span><span class="parenthesis">(</span><span class="arg-name">bone</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Bone/" class="type-link">spine.Bone</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#computeWorldRotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bone` | [spine.Bone](/api-docs/clay-native/spine/Bone/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

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


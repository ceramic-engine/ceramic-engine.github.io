---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: BoneData
target: Headless
permalink: api-docs/headless/spine/BoneData/
---

# BoneData

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/BoneData.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.BoneData</strong> (Class)</div>

Stores the setup pose for a {@link Bone}.

## Instance Members

<div class="signature field-var no-description has-plugin" id="index"><div class="plugin-name">spine</div><code><span class="field-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="name"><div class="plugin-name">spine</div><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="parent"><div class="plugin-name">spine</div><code><span class="field-name">parent</span><span class="operator">:</span> <a href="#" class="type-link">BoneData</a></code><a class="header-anchor" href="#parent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="length"><div class="plugin-name">spine</div><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="x"><div class="plugin-name">spine</div><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="y"><div class="plugin-name">spine</div><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="rotation"><div class="plugin-name">spine</div><code><span class="field-name">rotation</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="scaleX"><div class="plugin-name">spine</div><code><span class="field-name">scaleX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="scaleY"><div class="plugin-name">spine</div><code><span class="field-name">scaleY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="shearX"><div class="plugin-name">spine</div><code><span class="field-name">shearX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#shearX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="shearY"><div class="plugin-name">spine</div><code><span class="field-name">shearY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#shearY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="transformMode"><div class="plugin-name">spine</div><code><span class="field-name">transformMode</span><span class="operator">:</span> <a href="/api-docs/headless/spine/TransformMode/" class="type-link">TransformMode</a></code><a class="header-anchor" href="#transformMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="skinRequired"><div class="plugin-name">spine</div><code><span class="field-name">skinRequired</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#skinRequired"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="color"><div class="plugin-name">spine</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getIndex"><div class="plugin-name">spine</div><code><span class="field-name">getIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The index of the bone in {@link Skeleton#getBones()}.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getName"><div class="plugin-name">spine</div><code><span class="field-name">getName</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#getName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the bone, which is unique across all bones in the skeleton.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getParent"><div class="plugin-name">spine</div><code><span class="field-name">getParent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">BoneData</a></code><a class="header-anchor" href="#getParent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [BoneData](/api-docs/headless/spine/BoneData/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getLength"><div class="plugin-name">spine</div><code><span class="field-name">getLength</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bone's length.
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setLength"><div class="plugin-name">spine</div><code><span class="field-name">setLength</span><span class="parenthesis">(</span><span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `length` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getX"><div class="plugin-name">spine</div><code><span class="field-name">getX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The local x translation.
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setX"><div class="plugin-name">spine</div><code><span class="field-name">setX</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getY"><div class="plugin-name">spine</div><code><span class="field-name">getY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The local y translation.
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setY"><div class="plugin-name">spine</div><code><span class="field-name">setY</span><span class="parenthesis">(</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `y` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setPosition"><div class="plugin-name">spine</div><code><span class="field-name">setPosition</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/headless/Float/) |
| `y` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getRotation"><div class="plugin-name">spine</div><code><span class="field-name">getRotation</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getRotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The local rotation.
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setRotation"><div class="plugin-name">spine</div><code><span class="field-name">setRotation</span><span class="parenthesis">(</span><span class="arg-name">rotation</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setRotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rotation` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getScaleX"><div class="plugin-name">spine</div><code><span class="field-name">getScaleX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getScaleX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The local scaleX.
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setScaleX"><div class="plugin-name">spine</div><code><span class="field-name">setScaleX</span><span class="parenthesis">(</span><span class="arg-name">scaleX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setScaleX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scaleX` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getScaleY"><div class="plugin-name">spine</div><code><span class="field-name">getScaleY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getScaleY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The local scaleY.
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setScaleY"><div class="plugin-name">spine</div><code><span class="field-name">setScaleY</span><span class="parenthesis">(</span><span class="arg-name">scaleY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setScaleY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scaleY` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setScale"><div class="plugin-name">spine</div><code><span class="field-name">setScale</span><span class="parenthesis">(</span><span class="arg-name">scaleX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scaleY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scaleX` | [Float](/api-docs/headless/Float/) |
| `scaleY` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getShearX"><div class="plugin-name">spine</div><code><span class="field-name">getShearX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getShearX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The local shearX.
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setShearX"><div class="plugin-name">spine</div><code><span class="field-name">setShearX</span><span class="parenthesis">(</span><span class="arg-name">shearX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setShearX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shearX` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getShearY"><div class="plugin-name">spine</div><code><span class="field-name">getShearY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getShearY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The local shearX.
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setShearY"><div class="plugin-name">spine</div><code><span class="field-name">setShearY</span><span class="parenthesis">(</span><span class="arg-name">shearY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setShearY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shearY` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTransformMode"><div class="plugin-name">spine</div><code><span class="field-name">getTransformMode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/TransformMode/" class="type-link">TransformMode</a></code><a class="header-anchor" href="#getTransformMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The transform mode for how parent world transforms affect this bone.
| Returns |
|---------|
| [TransformMode](/api-docs/headless/spine/TransformMode/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTransformMode"><div class="plugin-name">spine</div><code><span class="field-name">setTransformMode</span><span class="parenthesis">(</span><span class="arg-name">transformMode</span><span class="operator">:</span> <a href="/api-docs/headless/spine/TransformMode/" class="type-link">TransformMode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTransformMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `transformMode` | [TransformMode](/api-docs/headless/spine/TransformMode/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getSkinRequired"><div class="plugin-name">spine</div><code><span class="field-name">getSkinRequired</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getSkinRequired"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true, {@link Skeleton#updateWorldTransform()} only updates this bone if the {@link Skeleton#getSkin()} contains this
bone.
<p>
See {@link Skin#getBones()}.
| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setSkinRequired"><div class="plugin-name">spine</div><code><span class="field-name">setSkinRequired</span><span class="parenthesis">(</span><span class="arg-name">skinRequired</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setSkinRequired"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skinRequired` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getColor"><div class="plugin-name">spine</div><code><span class="field-name">getColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#getColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color of the bone as it was in Spine, or a default color if nonessential data was not exported. Bones are not usually
rendered at runtime.
| Returns |
|---------|
| [spine.support.graphics.Color](/api-docs/headless/spine/support/graphics/Color/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">spine</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">parent</span><span class="operator">:</span> <a href="#" class="type-link">BoneData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/headless/Int/) |
| `name` | [String](/api-docs/headless/String/) |
| `parent` | [BoneData](/api-docs/headless/spine/BoneData/) |


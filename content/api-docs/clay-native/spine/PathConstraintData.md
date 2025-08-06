---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: PathConstraintData
target: Clay (Native)
permalink: api-docs/clay-native/spine/PathConstraintData/
---

# PathConstraintData

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/PathConstraintData.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/spine/ConstraintData/">ConstraintData</a> → <strong>spine.PathConstraintData</strong> (Class)</div>

Stores the setup pose for a {@link PathConstraint}.
<p>
See <a href="http://esotericsoftware.com/spine-path-constraints">Path constraints</a> in the Spine User Guide.

## Instance Members

<div class="signature field-var no-description has-plugin" id="bones"><div class="plugin-name">spine</div><code><span class="field-name">bones</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/BoneData/" class="type-link">BoneData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#bones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="target"><div class="plugin-name">spine</div><code><span class="field-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/SlotData/" class="type-link">SlotData</a></code><a class="header-anchor" href="#target"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="positionMode"><div class="plugin-name">spine</div><code><span class="field-name">positionMode</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/PositionMode/" class="type-link">PositionMode</a></code><a class="header-anchor" href="#positionMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="spacingMode"><div class="plugin-name">spine</div><code><span class="field-name">spacingMode</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/SpacingMode/" class="type-link">SpacingMode</a></code><a class="header-anchor" href="#spacingMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="rotateMode"><div class="plugin-name">spine</div><code><span class="field-name">rotateMode</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/RotateMode/" class="type-link">RotateMode</a></code><a class="header-anchor" href="#rotateMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="offsetRotation"><div class="plugin-name">spine</div><code><span class="field-name">offsetRotation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetRotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="position"><div class="plugin-name">spine</div><code><span class="field-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="spacing"><div class="plugin-name">spine</div><code><span class="field-name">spacing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#spacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mixRotate"><div class="plugin-name">spine</div><code><span class="field-name">mixRotate</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mixRotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mixX"><div class="plugin-name">spine</div><code><span class="field-name">mixX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mixX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mixY"><div class="plugin-name">spine</div><code><span class="field-name">mixY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mixY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getBones"><div class="plugin-name">spine</div><code><span class="field-name">getBones</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/BoneData/" class="type-link">BoneData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getBones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bones that will be modified by this path constraint.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-native/spine/support/utils/Array/)<[BoneData](/api-docs/clay-native/spine/BoneData/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTarget"><div class="plugin-name">spine</div><code><span class="field-name">getTarget</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/SlotData/" class="type-link">SlotData</a></code><a class="header-anchor" href="#getTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The slot whose path attachment will be used to constrained the bones.
| Returns |
|---------|
| [SlotData](/api-docs/clay-native/spine/SlotData/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTarget"><div class="plugin-name">spine</div><code><span class="field-name">setTarget</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/SlotData/" class="type-link">SlotData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `target` | [SlotData](/api-docs/clay-native/spine/SlotData/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getPositionMode"><div class="plugin-name">spine</div><code><span class="field-name">getPositionMode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/PositionMode/" class="type-link">PositionMode</a></code><a class="header-anchor" href="#getPositionMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The mode for positioning the first bone on the path.
| Returns |
|---------|
| [PositionMode](/api-docs/clay-native/spine/PositionMode/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setPositionMode"><div class="plugin-name">spine</div><code><span class="field-name">setPositionMode</span><span class="parenthesis">(</span><span class="arg-name">positionMode</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/PositionMode/" class="type-link">PositionMode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPositionMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `positionMode` | [PositionMode](/api-docs/clay-native/spine/PositionMode/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getSpacingMode"><div class="plugin-name">spine</div><code><span class="field-name">getSpacingMode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/SpacingMode/" class="type-link">SpacingMode</a></code><a class="header-anchor" href="#getSpacingMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The mode for positioning the bones after the first bone on the path.
| Returns |
|---------|
| [SpacingMode](/api-docs/clay-native/spine/SpacingMode/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setSpacingMode"><div class="plugin-name">spine</div><code><span class="field-name">setSpacingMode</span><span class="parenthesis">(</span><span class="arg-name">spacingMode</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/SpacingMode/" class="type-link">SpacingMode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setSpacingMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `spacingMode` | [SpacingMode](/api-docs/clay-native/spine/SpacingMode/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getRotateMode"><div class="plugin-name">spine</div><code><span class="field-name">getRotateMode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/RotateMode/" class="type-link">RotateMode</a></code><a class="header-anchor" href="#getRotateMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The mode for adjusting the rotation of the bones.
| Returns |
|---------|
| [RotateMode](/api-docs/clay-native/spine/RotateMode/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setRotateMode"><div class="plugin-name">spine</div><code><span class="field-name">setRotateMode</span><span class="parenthesis">(</span><span class="arg-name">rotateMode</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/RotateMode/" class="type-link">RotateMode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setRotateMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rotateMode` | [RotateMode](/api-docs/clay-native/spine/RotateMode/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getOffsetRotation"><div class="plugin-name">spine</div><code><span class="field-name">getOffsetRotation</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getOffsetRotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An offset added to the constrained bone rotation.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setOffsetRotation"><div class="plugin-name">spine</div><code><span class="field-name">setOffsetRotation</span><span class="parenthesis">(</span><span class="arg-name">offsetRotation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setOffsetRotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `offsetRotation` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getPosition"><div class="plugin-name">spine</div><code><span class="field-name">getPosition</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The position along the path.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setPosition"><div class="plugin-name">spine</div><code><span class="field-name">setPosition</span><span class="parenthesis">(</span><span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `position` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getSpacing"><div class="plugin-name">spine</div><code><span class="field-name">getSpacing</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The spacing between bones.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setSpacing"><div class="plugin-name">spine</div><code><span class="field-name">setSpacing</span><span class="parenthesis">(</span><span class="arg-name">spacing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `spacing` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMixRotate"><div class="plugin-name">spine</div><code><span class="field-name">getMixRotate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMixRotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A percentage (0-1) that controls the mix between the constrained and unconstrained rotation.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMixRotate"><div class="plugin-name">spine</div><code><span class="field-name">setMixRotate</span><span class="parenthesis">(</span><span class="arg-name">mixRotate</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMixRotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mixRotate` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMixX"><div class="plugin-name">spine</div><code><span class="field-name">getMixX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMixX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A percentage (0-1) that controls the mix between the constrained and unconstrained translation X.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMixX"><div class="plugin-name">spine</div><code><span class="field-name">setMixX</span><span class="parenthesis">(</span><span class="arg-name">mixX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMixX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mixX` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMixY"><div class="plugin-name">spine</div><code><span class="field-name">getMixY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMixY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A percentage (0-1) that controls the mix between the constrained and unconstrained translation Y.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMixY"><div class="plugin-name">spine</div><code><span class="field-name">setMixY</span><span class="parenthesis">(</span><span class="arg-name">mixY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMixY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mixY` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-native/String/) |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: PathConstraint
target: Clay (Web)
permalink: api-docs/clay-web/spine/PathConstraint/
---

# PathConstraint

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/PathConstraint.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.PathConstraint</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/spine/Updatable/">Updatable</a></div>

Stores the current pose for a path constraint. A path constraint adjusts the rotation, translation, and scale of the
constrained bones so they follow a {@link PathAttachment}.
<p>
See <a href="http://esotericsoftware.com/spine-path-constraints">Path constraints</a> in the Spine User Guide.

## Instance Members

<div class="signature field-var no-description has-plugin" id="data"><div class="plugin-name">spine</div><code><span class="field-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/PathConstraintData/" class="type-link">PathConstraintData</a></code><a class="header-anchor" href="#data"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bones"><div class="plugin-name">spine</div><code><span class="field-name">bones</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/Bone/" class="type-link">Bone</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#bones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="target"><div class="plugin-name">spine</div><code><span class="field-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Slot/" class="type-link">Slot</a></code><a class="header-anchor" href="#target"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="position"><div class="plugin-name">spine</div><code><span class="field-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="spacing"><div class="plugin-name">spine</div><code><span class="field-name">spacing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#spacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mixRotate"><div class="plugin-name">spine</div><code><span class="field-name">mixRotate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mixRotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mixX"><div class="plugin-name">spine</div><code><span class="field-name">mixX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mixX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mixY"><div class="plugin-name">spine</div><code><span class="field-name">mixY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mixY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="active"><div class="plugin-name">spine</div><code><span class="field-name">active</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#active"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="update"><div class="plugin-name">spine</div><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Applies the constraint to the constrained bones.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="computeWorldPositions"><div class="plugin-name">spine</div><code><span class="field-name">computeWorldPositions</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/attachments/PathAttachment/" class="type-link">spine.attachments.PathAttachment</a><span class="operator">,</span> <span class="arg-name">spacesCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tangents</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#computeWorldPositions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [spine.attachments.PathAttachment](/api-docs/clay-web/spine/attachments/PathAttachment/) |
| `spacesCount` | [Int](/api-docs/clay-web/Int/) |
| `tangents` | [Bool](/api-docs/clay-web/Bool/) |

| Returns |
|---------|
| [spine.support.utils.FloatArray](/api-docs/clay-web/spine/support/utils/FloatArray/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getPosition"><div class="plugin-name">spine</div><code><span class="field-name">getPosition</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The position along the path.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setPosition"><div class="plugin-name">spine</div><code><span class="field-name">setPosition</span><span class="parenthesis">(</span><span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `position` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getSpacing"><div class="plugin-name">spine</div><code><span class="field-name">getSpacing</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The spacing between bones.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setSpacing"><div class="plugin-name">spine</div><code><span class="field-name">setSpacing</span><span class="parenthesis">(</span><span class="arg-name">spacing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `spacing` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMixRotate"><div class="plugin-name">spine</div><code><span class="field-name">getMixRotate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMixRotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A percentage (0-1) that controls the mix between the constrained and unconstrained rotation.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMixRotate"><div class="plugin-name">spine</div><code><span class="field-name">setMixRotate</span><span class="parenthesis">(</span><span class="arg-name">mixRotate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMixRotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mixRotate` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMixX"><div class="plugin-name">spine</div><code><span class="field-name">getMixX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMixX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A percentage (0-1) that controls the mix between the constrained and unconstrained translation X.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMixX"><div class="plugin-name">spine</div><code><span class="field-name">setMixX</span><span class="parenthesis">(</span><span class="arg-name">mixX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMixX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mixX` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMixY"><div class="plugin-name">spine</div><code><span class="field-name">getMixY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMixY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A percentage (0-1) that controls the mix between the constrained and unconstrained translation Y.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMixY"><div class="plugin-name">spine</div><code><span class="field-name">setMixY</span><span class="parenthesis">(</span><span class="arg-name">mixY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMixY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mixY` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getBones"><div class="plugin-name">spine</div><code><span class="field-name">getBones</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/Bone/" class="type-link">Bone</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getBones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bones that will be modified by this path constraint.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-web/spine/support/utils/Array/)<[Bone](/api-docs/clay-web/spine/Bone/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTarget"><div class="plugin-name">spine</div><code><span class="field-name">getTarget</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Slot/" class="type-link">Slot</a></code><a class="header-anchor" href="#getTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The slot whose path attachment will be used to constrained the bones.
| Returns |
|---------|
| [Slot](/api-docs/clay-web/spine/Slot/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTarget"><div class="plugin-name">spine</div><code><span class="field-name">setTarget</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Slot/" class="type-link">Slot</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `target` | [Slot](/api-docs/clay-web/spine/Slot/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="isActive"><div class="plugin-name">spine</div><code><span class="field-name">isActive</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getData"><div class="plugin-name">spine</div><code><span class="field-name">getData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/PathConstraintData/" class="type-link">PathConstraintData</a></code><a class="header-anchor" href="#getData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The path constraint's setup pose data.
| Returns |
|---------|
| [PathConstraintData](/api-docs/clay-web/spine/PathConstraintData/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">spine</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/PathConstraintData/" class="type-link">PathConstraintData</a><span class="operator">,</span> <span class="arg-name">skeleton</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Skeleton/" class="type-link">Skeleton</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `data` | [PathConstraintData](/api-docs/clay-web/spine/PathConstraintData/) |
| `skeleton` | [Skeleton](/api-docs/clay-web/spine/Skeleton/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="NONE"><div class="plugin-name">spine</div><code><span class="field-name">NONE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NONE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BEFORE"><div class="plugin-name">spine</div><code><span class="field-name">BEFORE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BEFORE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="AFTER"><div class="plugin-name">spine</div><code><span class="field-name">AFTER</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#AFTER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="epsilon"><div class="plugin-name">spine</div><code><span class="field-name">epsilon</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#epsilon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="spaces"><div class="plugin-name">spine</div><code><span class="field-name">spaces</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#spaces"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="positions"><div class="plugin-name">spine</div><code><span class="field-name">positions</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#positions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="world"><div class="plugin-name">spine</div><code><span class="field-name">world</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#world"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="curves"><div class="plugin-name">spine</div><code><span class="field-name">curves</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#curves"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="lengths"><div class="plugin-name">spine</div><code><span class="field-name">lengths</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#lengths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="segments"><div class="plugin-name">spine</div><code><span class="field-name">segments</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#segments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="addBeforePosition"><div class="plugin-name">spine</div><code><span class="field-name">addBeforePosition</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">temp</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="operator">,</span> <span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="operator">,</span> <span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addBeforePosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p` | [Float](/api-docs/clay-web/Float/) |
| `temp` | [spine.support.utils.FloatArray](/api-docs/clay-web/spine/support/utils/FloatArray/) |
| `i` | [Int](/api-docs/clay-web/Int/) |
| `out` | [spine.support.utils.FloatArray](/api-docs/clay-web/spine/support/utils/FloatArray/) |
| `o` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="addAfterPosition"><div class="plugin-name">spine</div><code><span class="field-name">addAfterPosition</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">temp</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="operator">,</span> <span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="operator">,</span> <span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addAfterPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p` | [Float](/api-docs/clay-web/Float/) |
| `temp` | [spine.support.utils.FloatArray](/api-docs/clay-web/spine/support/utils/FloatArray/) |
| `i` | [Int](/api-docs/clay-web/Int/) |
| `out` | [spine.support.utils.FloatArray](/api-docs/clay-web/spine/support/utils/FloatArray/) |
| `o` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="addCurvePosition"><div class="plugin-name">spine</div><code><span class="field-name">addCurvePosition</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cx1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cy1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cx2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cy2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="operator">,</span> <span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tangents</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addCurvePosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p` | [Float](/api-docs/clay-web/Float/) |
| `x1` | [Float](/api-docs/clay-web/Float/) |
| `y1` | [Float](/api-docs/clay-web/Float/) |
| `cx1` | [Float](/api-docs/clay-web/Float/) |
| `cy1` | [Float](/api-docs/clay-web/Float/) |
| `cx2` | [Float](/api-docs/clay-web/Float/) |
| `cy2` | [Float](/api-docs/clay-web/Float/) |
| `x2` | [Float](/api-docs/clay-web/Float/) |
| `y2` | [Float](/api-docs/clay-web/Float/) |
| `out` | [spine.support.utils.FloatArray](/api-docs/clay-web/spine/support/utils/FloatArray/) |
| `o` | [Int](/api-docs/clay-web/Int/) |
| `tangents` | [Bool](/api-docs/clay-web/Bool/) |


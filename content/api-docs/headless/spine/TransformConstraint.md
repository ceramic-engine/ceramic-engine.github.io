---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: TransformConstraint
target: Headless
permalink: api-docs/headless/spine/TransformConstraint/
---

# TransformConstraint

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/TransformConstraint.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.TransformConstraint</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/spine/Updatable/">Updatable</a></div>

Stores the current pose for a transform constraint. A transform constraint adjusts the world transform of the constrained
bones to match that of the target bone.
<p>
See <a href="http://esotericsoftware.com/spine-transform-constraints">Transform constraints</a> in the Spine User Guide.

## Instance Members

<div class="signature field-var no-description has-plugin" id="data"><div class="plugin-name">spine</div><code><span class="field-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/spine/TransformConstraintData/" class="type-link">TransformConstraintData</a></code><a class="header-anchor" href="#data"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bones"><div class="plugin-name">spine</div><code><span class="field-name">bones</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/spine/Bone/" class="type-link">Bone</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#bones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="target"><div class="plugin-name">spine</div><code><span class="field-name">target</span><span class="operator">:</span> <a href="/api-docs/headless/spine/Bone/" class="type-link">Bone</a></code><a class="header-anchor" href="#target"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mixRotate"><div class="plugin-name">spine</div><code><span class="field-name">mixRotate</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mixRotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mixX"><div class="plugin-name">spine</div><code><span class="field-name">mixX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mixX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mixY"><div class="plugin-name">spine</div><code><span class="field-name">mixY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mixY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mixScaleX"><div class="plugin-name">spine</div><code><span class="field-name">mixScaleX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mixScaleX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mixScaleY"><div class="plugin-name">spine</div><code><span class="field-name">mixScaleY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mixScaleY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mixShearY"><div class="plugin-name">spine</div><code><span class="field-name">mixShearY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mixShearY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="active"><div class="plugin-name">spine</div><code><span class="field-name">active</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#active"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="temp"><div class="plugin-name">spine</div><code><span class="field-name">temp</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/math/Vector2/" class="type-link">spine.support.math.Vector2</a></code><a class="header-anchor" href="#temp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="update"><div class="plugin-name">spine</div><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Applies the constraint to the constrained bones.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getBones"><div class="plugin-name">spine</div><code><span class="field-name">getBones</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/spine/Bone/" class="type-link">Bone</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getBones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bones that will be modified by this transform constraint.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/headless/spine/support/utils/Array/)<[Bone](/api-docs/headless/spine/Bone/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTarget"><div class="plugin-name">spine</div><code><span class="field-name">getTarget</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/Bone/" class="type-link">Bone</a></code><a class="header-anchor" href="#getTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The target bone whose world transform will be copied to the constrained bones.
| Returns |
|---------|
| [Bone](/api-docs/headless/spine/Bone/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTarget"><div class="plugin-name">spine</div><code><span class="field-name">setTarget</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/headless/spine/Bone/" class="type-link">Bone</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `target` | [Bone](/api-docs/headless/spine/Bone/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMixRotate"><div class="plugin-name">spine</div><code><span class="field-name">getMixRotate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMixRotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A percentage (0-1) that controls the mix between the constrained and unconstrained rotation.
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMixRotate"><div class="plugin-name">spine</div><code><span class="field-name">setMixRotate</span><span class="parenthesis">(</span><span class="arg-name">mixRotate</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMixRotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mixRotate` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMixX"><div class="plugin-name">spine</div><code><span class="field-name">getMixX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMixX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A percentage (0-1) that controls the mix between the constrained and unconstrained translation X.
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMixX"><div class="plugin-name">spine</div><code><span class="field-name">setMixX</span><span class="parenthesis">(</span><span class="arg-name">mixX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMixX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mixX` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMixY"><div class="plugin-name">spine</div><code><span class="field-name">getMixY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMixY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A percentage (0-1) that controls the mix between the constrained and unconstrained translation Y.
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMixY"><div class="plugin-name">spine</div><code><span class="field-name">setMixY</span><span class="parenthesis">(</span><span class="arg-name">mixY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMixY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mixY` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMixScaleX"><div class="plugin-name">spine</div><code><span class="field-name">getMixScaleX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMixScaleX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A percentage (0-1) that controls the mix between the constrained and unconstrained scale X.
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMixScaleX"><div class="plugin-name">spine</div><code><span class="field-name">setMixScaleX</span><span class="parenthesis">(</span><span class="arg-name">mixScaleX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMixScaleX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mixScaleX` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMixScaleY"><div class="plugin-name">spine</div><code><span class="field-name">getMixScaleY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMixScaleY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A percentage (0-1) that controls the mix between the constrained and unconstrained scale X.
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMixScaleY"><div class="plugin-name">spine</div><code><span class="field-name">setMixScaleY</span><span class="parenthesis">(</span><span class="arg-name">mixScaleY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMixScaleY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mixScaleY` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMixShearY"><div class="plugin-name">spine</div><code><span class="field-name">getMixShearY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMixShearY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A percentage (0-1) that controls the mix between the constrained and unconstrained shear Y.
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMixShearY"><div class="plugin-name">spine</div><code><span class="field-name">setMixShearY</span><span class="parenthesis">(</span><span class="arg-name">mixShearY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMixShearY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mixShearY` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="isActive"><div class="plugin-name">spine</div><code><span class="field-name">isActive</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getData"><div class="plugin-name">spine</div><code><span class="field-name">getData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/TransformConstraintData/" class="type-link">TransformConstraintData</a></code><a class="header-anchor" href="#getData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The transform constraint's setup pose data.
| Returns |
|---------|
| [TransformConstraintData](/api-docs/headless/spine/TransformConstraintData/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">spine</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/spine/TransformConstraintData/" class="type-link">TransformConstraintData</a><span class="operator">,</span> <span class="arg-name">skeleton</span><span class="operator">:</span> <a href="/api-docs/headless/spine/Skeleton/" class="type-link">Skeleton</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `data` | [TransformConstraintData](/api-docs/headless/spine/TransformConstraintData/) |
| `skeleton` | [Skeleton](/api-docs/headless/spine/Skeleton/) |

## Private Members

<div class="signature field-method no-description has-plugin" id="applyAbsoluteWorld"><div class="plugin-name">spine</div><code><span class="field-name">applyAbsoluteWorld</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyAbsoluteWorld"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="applyRelativeWorld"><div class="plugin-name">spine</div><code><span class="field-name">applyRelativeWorld</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyRelativeWorld"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="applyAbsoluteLocal"><div class="plugin-name">spine</div><code><span class="field-name">applyAbsoluteLocal</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyAbsoluteLocal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="applyRelativeLocal"><div class="plugin-name">spine</div><code><span class="field-name">applyRelativeLocal</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyRelativeLocal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: IkConstraint
target: Clay (Web)
permalink: api-docs/clay-web/spine/IkConstraint/
---

# IkConstraint

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/IkConstraint.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.IkConstraint</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/spine/Updatable/">Updatable</a></div>

Stores the current pose for an IK constraint. An IK constraint adjusts the rotation of 1 or 2 constrained bones so the tip of
the last bone is as close to the target bone as possible.
<p>
See <a href="http://esotericsoftware.com/spine-ik-constraints">IK constraints</a> in the Spine User Guide.

## Static Members

<div class="signature field-method has-description has-plugin" id="applyOne"><div class="plugin-name">spine</div><code><span class="field-name">applyOne</span><span class="parenthesis">(</span><span class="arg-name">bone</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Bone/" class="type-link">Bone</a><span class="operator">,</span> <span class="arg-name">targetX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">targetY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">compress</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">stretch</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">uniform</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyOne"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Applies 1 bone IK. The target is specified in the world coordinate system.

| Name | Type |
|------|------|
| `bone` | [Bone](/api-docs/clay-web/spine/Bone/) |
| `targetX` | [Float](/api-docs/clay-web/Float/) |
| `targetY` | [Float](/api-docs/clay-web/Float/) |
| `compress` | [Bool](/api-docs/clay-web/Bool/) |
| `stretch` | [Bool](/api-docs/clay-web/Bool/) |
| `uniform` | [Bool](/api-docs/clay-web/Bool/) |
| `alpha` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="apply"><div class="plugin-name">spine</div><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="arg-name">parent</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Bone/" class="type-link">Bone</a><span class="operator">,</span> <span class="arg-name">child</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Bone/" class="type-link">Bone</a><span class="operator">,</span> <span class="arg-name">targetX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">targetY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">bendDir</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">stretch</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">uniform</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">softness</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Applies 2 bone IK. The target is specified in the world coordinate system.


| Name | Type | Description |
|------|------|-------------|
| `parent` | [Bone](/api-docs/clay-web/spine/Bone/) |  |
| `child` | [Bone](/api-docs/clay-web/spine/Bone/) | A direct descendant of the parent bone. |
| `targetX` | [Float](/api-docs/clay-web/Float/) |  |
| `targetY` | [Float](/api-docs/clay-web/Float/) |  |
| `bendDir` | [Int](/api-docs/clay-web/Int/) |  |
| `stretch` | [Bool](/api-docs/clay-web/Bool/) |  |
| `uniform` | [Bool](/api-docs/clay-web/Bool/) |  |
| `softness` | [Float](/api-docs/clay-web/Float/) |  |
| `alpha` | [Float](/api-docs/clay-web/Float/) |  |

## Instance Members

<div class="signature field-var no-description has-plugin" id="data"><div class="plugin-name">spine</div><code><span class="field-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/IkConstraintData/" class="type-link">IkConstraintData</a></code><a class="header-anchor" href="#data"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bones"><div class="plugin-name">spine</div><code><span class="field-name">bones</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/Bone/" class="type-link">Bone</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#bones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="target"><div class="plugin-name">spine</div><code><span class="field-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Bone/" class="type-link">Bone</a></code><a class="header-anchor" href="#target"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bendDirection"><div class="plugin-name">spine</div><code><span class="field-name">bendDirection</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bendDirection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="compress"><div class="plugin-name">spine</div><code><span class="field-name">compress</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#compress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="stretch"><div class="plugin-name">spine</div><code><span class="field-name">stretch</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stretch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mix"><div class="plugin-name">spine</div><code><span class="field-name">mix</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="softness"><div class="plugin-name">spine</div><code><span class="field-name">softness</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#softness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="active"><div class="plugin-name">spine</div><code><span class="field-name">active</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#active"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="update"><div class="plugin-name">spine</div><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Applies the constraint to the constrained bones.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getBones"><div class="plugin-name">spine</div><code><span class="field-name">getBones</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/Bone/" class="type-link">Bone</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getBones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bones that will be modified by this IK constraint.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-web/spine/support/utils/Array/)<[Bone](/api-docs/clay-web/spine/Bone/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTarget"><div class="plugin-name">spine</div><code><span class="field-name">getTarget</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Bone/" class="type-link">Bone</a></code><a class="header-anchor" href="#getTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bone that is the IK target.
| Returns |
|---------|
| [Bone](/api-docs/clay-web/spine/Bone/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTarget"><div class="plugin-name">spine</div><code><span class="field-name">setTarget</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Bone/" class="type-link">Bone</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `target` | [Bone](/api-docs/clay-web/spine/Bone/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMix"><div class="plugin-name">spine</div><code><span class="field-name">getMix</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A percentage (0-1) that controls the mix between the constrained and unconstrained rotation.
<p>
For two bone IK: if the parent bone has local nonuniform scale, the child bone's local Y translation is set to 0.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMix"><div class="plugin-name">spine</div><code><span class="field-name">setMix</span><span class="parenthesis">(</span><span class="arg-name">mix</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mix` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getSoftness"><div class="plugin-name">spine</div><code><span class="field-name">getSoftness</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getSoftness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For two bone IK, the target bone's distance from the maximum reach of the bones where rotation begins to slow. The bones
will not straighten completely until the target is this far out of range.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setSoftness"><div class="plugin-name">spine</div><code><span class="field-name">setSoftness</span><span class="parenthesis">(</span><span class="arg-name">softness</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setSoftness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `softness` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getBendDirection"><div class="plugin-name">spine</div><code><span class="field-name">getBendDirection</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getBendDirection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For two bone IK, controls the bend direction of the IK bones, either 1 or -1.
| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setBendDirection"><div class="plugin-name">spine</div><code><span class="field-name">setBendDirection</span><span class="parenthesis">(</span><span class="arg-name">bendDirection</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBendDirection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bendDirection` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getCompress"><div class="plugin-name">spine</div><code><span class="field-name">getCompress</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getCompress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For one bone IK, when true and the target is too close, the bone is scaled to reach it.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setCompress"><div class="plugin-name">spine</div><code><span class="field-name">setCompress</span><span class="parenthesis">(</span><span class="arg-name">compress</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setCompress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `compress` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getStretch"><div class="plugin-name">spine</div><code><span class="field-name">getStretch</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getStretch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true and the target is out of range, the parent bone is scaled to reach it.
<p>
For two bone IK: 1) the child bone's local Y translation is set to 0, 2) stretch is not applied if {@link #getSoftness()} is
> 0, and 3) if the parent bone has local nonuniform scale, stretch is not applied.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setStretch"><div class="plugin-name">spine</div><code><span class="field-name">setStretch</span><span class="parenthesis">(</span><span class="arg-name">stretch</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setStretch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `stretch` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="isActive"><div class="plugin-name">spine</div><code><span class="field-name">isActive</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getData"><div class="plugin-name">spine</div><code><span class="field-name">getData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/IkConstraintData/" class="type-link">IkConstraintData</a></code><a class="header-anchor" href="#getData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The IK constraint's setup pose data.
| Returns |
|---------|
| [IkConstraintData](/api-docs/clay-web/spine/IkConstraintData/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">spine</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/IkConstraintData/" class="type-link">IkConstraintData</a><span class="operator">,</span> <span class="arg-name">skeleton</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Skeleton/" class="type-link">Skeleton</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `data` | [IkConstraintData](/api-docs/clay-web/spine/IkConstraintData/) |
| `skeleton` | [Skeleton](/api-docs/clay-web/spine/Skeleton/) |


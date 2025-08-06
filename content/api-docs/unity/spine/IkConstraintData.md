---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: IkConstraintData
target: Unity
permalink: api-docs/unity/spine/IkConstraintData/
---

# IkConstraintData

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/IkConstraintData.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/spine/ConstraintData/">ConstraintData</a> → <strong>spine.IkConstraintData</strong> (Class)</div>

Stores the setup pose for an {@link IkConstraint}.
<p>
See <a href="http://esotericsoftware.com/spine-ik-constraints">IK constraints</a> in the Spine User Guide.

## Instance Members

<div class="signature field-var no-description has-plugin" id="bones"><div class="plugin-name">spine</div><code><span class="field-name">bones</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/spine/BoneData/" class="type-link">BoneData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#bones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="target"><div class="plugin-name">spine</div><code><span class="field-name">target</span><span class="operator">:</span> <a href="/api-docs/unity/spine/BoneData/" class="type-link">BoneData</a></code><a class="header-anchor" href="#target"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bendDirection"><div class="plugin-name">spine</div><code><span class="field-name">bendDirection</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bendDirection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="compress"><div class="plugin-name">spine</div><code><span class="field-name">compress</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#compress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="stretch"><div class="plugin-name">spine</div><code><span class="field-name">stretch</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stretch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="uniform"><div class="plugin-name">spine</div><code><span class="field-name">uniform</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#uniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mix"><div class="plugin-name">spine</div><code><span class="field-name">mix</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="softness"><div class="plugin-name">spine</div><code><span class="field-name">softness</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#softness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getBones"><div class="plugin-name">spine</div><code><span class="field-name">getBones</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/spine/BoneData/" class="type-link">BoneData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getBones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bones that are constrained by this IK constraint.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/unity/spine/support/utils/Array/)<[BoneData](/api-docs/unity/spine/BoneData/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTarget"><div class="plugin-name">spine</div><code><span class="field-name">getTarget</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/BoneData/" class="type-link">BoneData</a></code><a class="header-anchor" href="#getTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bone that is the IK target.
| Returns |
|---------|
| [BoneData](/api-docs/unity/spine/BoneData/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTarget"><div class="plugin-name">spine</div><code><span class="field-name">setTarget</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/unity/spine/BoneData/" class="type-link">BoneData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `target` | [BoneData](/api-docs/unity/spine/BoneData/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getMix"><div class="plugin-name">spine</div><code><span class="field-name">getMix</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getMix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A percentage (0-1) that controls the mix between the constrained and unconstrained rotation.
<p>
For two bone IK: if the parent bone has local nonuniform scale, the child bone's local Y translation is set to 0.
| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMix"><div class="plugin-name">spine</div><code><span class="field-name">setMix</span><span class="parenthesis">(</span><span class="arg-name">mix</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mix` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getSoftness"><div class="plugin-name">spine</div><code><span class="field-name">getSoftness</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getSoftness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For two bone IK, the target bone's distance from the maximum reach of the bones where rotation begins to slow. The bones
will not straighten completely until the target is this far out of range.
| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setSoftness"><div class="plugin-name">spine</div><code><span class="field-name">setSoftness</span><span class="parenthesis">(</span><span class="arg-name">softness</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setSoftness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `softness` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getBendDirection"><div class="plugin-name">spine</div><code><span class="field-name">getBendDirection</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getBendDirection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For two bone IK, controls the bend direction of the IK bones, either 1 or -1.
| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setBendDirection"><div class="plugin-name">spine</div><code><span class="field-name">setBendDirection</span><span class="parenthesis">(</span><span class="arg-name">bendDirection</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBendDirection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bendDirection` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getCompress"><div class="plugin-name">spine</div><code><span class="field-name">getCompress</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getCompress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For one bone IK, when true and the target is too close, the bone is scaled to reach it.
| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setCompress"><div class="plugin-name">spine</div><code><span class="field-name">setCompress</span><span class="parenthesis">(</span><span class="arg-name">compress</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setCompress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `compress` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getStretch"><div class="plugin-name">spine</div><code><span class="field-name">getStretch</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getStretch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true and the target is out of range, the parent bone is scaled to reach it.
<p>
For two bone IK: 1) the child bone's local Y translation is set to 0, 2) stretch is not applied if {@link #getSoftness()} is
> 0, and 3) if the parent bone has local nonuniform scale, stretch is not applied.
| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setStretch"><div class="plugin-name">spine</div><code><span class="field-name">setStretch</span><span class="parenthesis">(</span><span class="arg-name">stretch</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setStretch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `stretch` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getUniform"><div class="plugin-name">spine</div><code><span class="field-name">getUniform</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getUniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true and {@link #getCompress()} or {@link #getStretch()} is used, the bone is scaled on both the X and Y axes.
| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setUniform"><div class="plugin-name">spine</div><code><span class="field-name">setUniform</span><span class="parenthesis">(</span><span class="arg-name">uniform</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `uniform` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


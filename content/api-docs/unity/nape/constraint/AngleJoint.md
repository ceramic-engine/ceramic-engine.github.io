---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: AngleJoint
target: Unity
permalink: api-docs/unity/nape/constraint/AngleJoint/
---

# AngleJoint

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/constraint/AngleJoint.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/nape/constraint/Constraint/">Constraint</a> → <strong>nape.constraint.AngleJoint</strong> (final class)</div>

AngleJoint constraining the relative angles of two Bodies.
<br/><br/>
The equation for this constraint is:
<pre>
jointMin <= ratio * body2.rotation - body1.rotation <= jointMax
</pre>

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner_zn"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner_zn</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/constraint/ZPP_AngleJoint/" class="type-link">zpp_nape.constraint.ZPP_AngleJoint</a></code><a class="header-anchor" href="#zpp_inner_zn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="body1"><div class="plugin-name">nape</div><code><span class="field-name">body1</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#body1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

First Body in constraint.
<br/><br/>
This value may be null, but trying to simulate the constraint whilst
this body is null will result in an error.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="body2"><div class="plugin-name">nape</div><code><span class="field-name">body2</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#body2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Second Body in constraint.
<br/><br/>
This value may be null, but trying to simulate the constraint whilst
this body is null will result in an error.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="jointMin"><div class="plugin-name">nape</div><code><span class="field-name">jointMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#jointMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Lower bound for constraint.
<br/><br/>
This value must be less than or equal to jointMax.

@default -infinity

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="jointMax"><div class="plugin-name">nape</div><code><span class="field-name">jointMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#jointMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Upper bound for constraint.
<br/><br/>
This value must be greater than or equal to jointMin.

@default infinity

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ratio"><div class="plugin-name">nape</div><code><span class="field-name">ratio</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#ratio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ratio property of constraint.

@default 1

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isSlack"><div class="plugin-name">nape</div><code><span class="field-name">isSlack</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSlack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine if constraint is slack.
<br/><br/>
This constraint is slack if the positional error is within
the bounds of (jointMin, jointMax).


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if positional error of constraint is between the limits indicating that the constraint is not doing any work.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="impulse"><div class="plugin-name">nape</div><code><span class="field-name">impulse</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/MatMN/" class="type-link">nape.geom.MatMN</a></code><a class="header-anchor" href="#impulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@inheritDoc
<br/><br/>
For this constraint, the MatMN will be 1x1.
| Returns |
|---------|
| [nape.geom.MatMN](/api-docs/unity/nape/geom/MatMN/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bodyImpulse"><div class="plugin-name">nape</div><code><span class="field-name">bodyImpulse</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#bodyImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@inheritDoc
<br/><br/>
For this constraint, only the z coordinate will be non-zero.

| Name | Type |
|------|------|
| `body` | [nape.phys.Body](/api-docs/unity/nape/phys/Body/) |

| Returns |
|---------|
| [nape.geom.Vec3](/api-docs/unity/nape/geom/Vec3/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="visitBodies"><div class="plugin-name">nape</div><code><span class="field-name">visitBodies</span><span class="parenthesis">(</span><span class="arg-name">lambda</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#visitBodies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@inheritDoc

| Name | Type |
|------|------|
| `lambda` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">body1</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">body2</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">jointMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">jointMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ratio</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new AngleJoint.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body1` | [Null](/api-docs/unity/Null/)<[nape.phys.Body](/api-docs/unity/nape/phys/Body/)> | | The first body in AngleJoint.  |
| `body2` | [Null](/api-docs/unity/Null/)<[nape.phys.Body](/api-docs/unity/nape/phys/Body/)> | | The second body in AngleJoint.  |
| `jointMin` | [Float](/api-docs/unity/Float/) | | The lower bound for constraint.  |
| `jointMax` | [Float](/api-docs/unity/Float/) | | The upper bound for constraint.  |
| `ratio` | [Float](/api-docs/unity/Float/) | `1.0` | The ratio of joint (default 1)  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:final` | - |


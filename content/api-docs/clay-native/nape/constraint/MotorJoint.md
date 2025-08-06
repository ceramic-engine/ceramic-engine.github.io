---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: MotorJoint
target: Clay (Native)
permalink: api-docs/clay-native/nape/constraint/MotorJoint/
---

# MotorJoint

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/constraint/MotorJoint.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/nape/constraint/Constraint/">Constraint</a> → <strong>nape.constraint.MotorJoint</strong> (final class)</div>

MotorJoint constraining the angular velocities of two bodies
<br/><br/>
The equation for this constraint is:
<pre>
(ratio * body2.angularVel) - body1.angularVel = rate
</pre>
This constraint operates only on the velocities of objects.

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner_zn"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner_zn</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/constraint/ZPP_MotorJoint/" class="type-link">zpp_nape.constraint.ZPP_MotorJoint</a></code><a class="header-anchor" href="#zpp_inner_zn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="body1"><div class="plugin-name">nape</div><code><span class="field-name">body1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#body1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

First Body in constraint.
<br/><br/>
This value may be null, but trying to simulate the constraint whilst
this body is null will result in an error.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="body2"><div class="plugin-name">nape</div><code><span class="field-name">body2</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#body2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Second Body in constraint.
<br/><br/>
This value may be null, but trying to simulate the constraint whilst
this body is null will result in an error.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ratio"><div class="plugin-name">nape</div><code><span class="field-name">ratio</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#ratio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

MotorJoint ratio.

@default 1

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="rate"><div class="plugin-name">nape</div><code><span class="field-name">rate</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

MotorJoint rate

@default 0

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="impulse"><div class="plugin-name">nape</div><code><span class="field-name">impulse</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/MatMN/" class="type-link">nape.geom.MatMN</a></code><a class="header-anchor" href="#impulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@inheritDoc
<br/><br/>
For this constraint, the MatMN will be 1x1.
| Returns |
|---------|
| [nape.geom.MatMN](/api-docs/clay-native/nape/geom/MatMN/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bodyImpulse"><div class="plugin-name">nape</div><code><span class="field-name">bodyImpulse</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#bodyImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@inheritDoc
<br/><br/>
For this constraint, only the z coordinate will be non-zero.

| Name | Type |
|------|------|
| `body` | [nape.phys.Body](/api-docs/clay-native/nape/phys/Body/) |

| Returns |
|---------|
| [nape.geom.Vec3](/api-docs/clay-native/nape/geom/Vec3/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="visitBodies"><div class="plugin-name">nape</div><code><span class="field-name">visitBodies</span><span class="parenthesis">(</span><span class="arg-name">lambda</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#visitBodies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@inheritDoc

| Name | Type |
|------|------|
| `lambda` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">body1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">body2</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">rate</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ratio</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new MotorJoint



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body1` | [Null](/api-docs/clay-native/Null/)<[nape.phys.Body](/api-docs/clay-native/nape/phys/Body/)> | | The first body in MotorJoint  |
| `body2` | [Null](/api-docs/clay-native/Null/)<[nape.phys.Body](/api-docs/clay-native/nape/phys/Body/)> | | The second body in MotorJoint  |
| `rate` | [Float](/api-docs/clay-native/Float/) | `0.0` | The rate of motor. (default 0)  |
| `ratio` | [Float](/api-docs/clay-native/Float/) | `1.0` | The ratio of the motor. (default 1)  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


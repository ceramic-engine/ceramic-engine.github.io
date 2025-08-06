---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: WeldJoint
target: Clay (Native)
permalink: api-docs/clay-native/nape/constraint/WeldJoint/
---

# WeldJoint

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/constraint/WeldJoint.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/nape/constraint/Constraint/">Constraint</a> → <strong>nape.constraint.WeldJoint</strong> (final class)</div>

WeldJoint constraining two bodies to be exactly locked together.
<br/><br/>
The equation for this constraint is:
<pre>
[ body2.localPointToWorld(anchor2) ] = [ body1.localPointToWorld(anchor1) ]
[          body2.rotation          ]   [      body1.rotation + phase      ]
</pre>
This constraint is equivalent to using a PivotJoint and AngleJoint
together except that it is solved as a single constraint and thus
will be more stable.
<br/><br/>
This constraint is 3 dimensional.
<br/><br/>
Although this constraint is very stable, if you chain bodies together
using this constraint, you should except to see a small amount of rotation
about the anchor points so you should chose them accordingly.

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner_zn"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner_zn</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/constraint/ZPP_WeldJoint/" class="type-link">zpp_nape.constraint.ZPP_WeldJoint</a></code><a class="header-anchor" href="#zpp_inner_zn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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

<div class="signature field-var has-description has-plugin" id="anchor1"><div class="plugin-name">nape</div><code><span class="field-name">anchor1</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#anchor1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Anchor point on first Body.
<br/><br/>
This anchor point is defined in the local coordinate system of body1.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="anchor2"><div class="plugin-name">nape</div><code><span class="field-name">anchor2</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#anchor2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Anchor point on second Body.
<br/><br/>
This anchor point is defined in the local coordinate system of body2.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="phase"><div class="plugin-name">nape</div><code><span class="field-name">phase</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#phase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Angular phase of bodies in WeldJoint.

@default 0

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="impulse"><div class="plugin-name">nape</div><code><span class="field-name">impulse</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/MatMN/" class="type-link">nape.geom.MatMN</a></code><a class="header-anchor" href="#impulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@inheritDoc
<br/><br/>
For this constraint, the MatMN will be 3x1.
| Returns |
|---------|
| [nape.geom.MatMN](/api-docs/clay-native/nape/geom/MatMN/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bodyImpulse"><div class="plugin-name">nape</div><code><span class="field-name">bodyImpulse</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#bodyImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@inheritDoc

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

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">body1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">body2</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">anchor1</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">,</span> <span class="arg-name">anchor2</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">phase</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new WeldJoint.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body1` | [Null](/api-docs/clay-native/Null/)<[nape.phys.Body](/api-docs/clay-native/nape/phys/Body/)> | | The first body in WeldJoint.  |
| `body2` | [Null](/api-docs/clay-native/Null/)<[nape.phys.Body](/api-docs/clay-native/nape/phys/Body/)> | | The second body in WeldJoint.  |
| `anchor1` | [nape.geom.Vec2](/api-docs/clay-native/nape/geom/Vec2/) | | The first local anchor for joint.  |
| `anchor2` | [nape.geom.Vec2](/api-docs/clay-native/nape/geom/Vec2/) | | The second local anchor for joint.  |
| `phase` | [Float](/api-docs/clay-native/Float/) | `0.0` | The angular phase of joint. (default 0)  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


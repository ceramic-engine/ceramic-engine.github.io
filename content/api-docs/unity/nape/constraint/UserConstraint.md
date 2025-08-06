---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: UserConstraint
target: Unity
permalink: api-docs/unity/nape/constraint/UserConstraint/
---

# UserConstraint

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/constraint/UserConstraint.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/nape/constraint/Constraint/">Constraint</a> → <strong>nape.constraint.UserConstraint</strong> (Class)</div>

UserConstraint providing a low-level API for user-defined Constraints.
<br/><br/>
This API is intended to be powerful enough to model any constraint that
Nape can handle, but not so low level as to be completely prohibitive.
<br/>
For instance, things like soft-constraints are automatically provided
by this API.
<br/><br/>
Working with this API will require mathematical skills. A full manual
for this API is provided at: http://napephys.com/help/Constraints.pdf
<br/><br/>
You may also be interested in the nape-symbolic module that is available
on github/haxelib/nape downloads. Which provides a run-time compiled DSL
using this API to make prototyping (or creating non-performance critical)
user-defined constraints simple without the need for great mathematical
skills as well as being much quicker to work with.

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner_zn"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner_zn</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/constraint/ZPP_UserConstraint/" class="type-link">zpp_nape.constraint.ZPP_UserConstraint</a></code><a class="header-anchor" href="#zpp_inner_zn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="impulse"><div class="plugin-name">nape</div><code><span class="field-name">impulse</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/MatMN/" class="type-link">nape.geom.MatMN</a></code><a class="header-anchor" href="#impulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@inheritDoc
<br/><br/>
For user-defined constraints, this will be a dimensions * 1 MatMN.
| Returns |
|---------|
| [nape.geom.MatMN](/api-docs/unity/nape/geom/MatMN/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bodyImpulse"><div class="plugin-name">nape</div><code><span class="field-name">bodyImpulse</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#bodyImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@inheritDoc

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

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">dimensions</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">velocityOnly</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Base constructor for user constraints.
<br/><br/>
You should never call this function directly, only though use of
super(..) in sub-typed UserConstraint.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dimensions` | [Int](/api-docs/unity/Int/) | | The number of constraint space dimensions.  |
| `velocityOnly` | [Bool](/api-docs/unity/Bool/) | `false` | If true, then this constraint will be implemented as a velocity-only constraint like the MotorJoint.  |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


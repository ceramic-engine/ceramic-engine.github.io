---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Constraint
target: Clay (Native)
permalink: api-docs/clay-native/nape/constraint/Constraint/
---

# Constraint

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/constraint/Constraint.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.constraint.Constraint</strong> (Class) → <a href="/api-docs/clay-native/nape/constraint/AngleJoint/">AngleJoint</a>, <a href="/api-docs/clay-native/nape/constraint/DistanceJoint/">DistanceJoint</a>, <a href="/api-docs/clay-native/nape/constraint/LineJoint/">LineJoint</a>, <a href="/api-docs/clay-native/nape/constraint/MotorJoint/">MotorJoint</a>, <a href="/api-docs/clay-native/nape/constraint/PivotJoint/">PivotJoint</a>, <a href="/api-docs/clay-native/nape/constraint/PulleyJoint/">PulleyJoint</a>, <a href="/api-docs/clay-native/nape/constraint/UserConstraint/">UserConstraint</a>, <a href="/api-docs/clay-native/nape/constraint/WeldJoint/">WeldJoint</a></div>

Base type for all Nape joints and constraints

## Static Members

<div class="signature field-var has-description has-plugin" id="zpp_internalAlloc"><div class="plugin-name">nape</div><code><span class="field-name">zpp_internalAlloc</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#zpp_internalAlloc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/constraint/ZPP_Constraint/" class="type-link">zpp_nape.constraint.ZPP_Constraint</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="userData"><div class="plugin-name">nape</div><code><span class="field-name">userData</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#userData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dynamic object for user to store additional data.
<br/><br/>
This object cannot be set, only its dynamically created
properties may be set. In AS3 the type of this property is &#42
<br/><br/>
This object will be lazily constructed so that until accessed
for the first time, will be null internally.

@default {}

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="debugDraw"><div class="plugin-name">nape</div><code><span class="field-name">debugDraw</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#debugDraw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set to disable debug drawing/
<br/><br/>
When true, this Constraint will not be drawn during debug draw operations
unless specifically given as argument to Debug draw() method.
@default true

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="compound"><div class="plugin-name">nape</div><code><span class="field-name">compound</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/phys/Compound/" class="type-link">nape.phys.Compound</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#compound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compound this Constraints belong to.
<br/><br/>
If this constraint is in a Space or another Compound and you change
its compound, then it will be removed from that Space or Compound.

@default null

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="space"><div class="plugin-name">nape</div><code><span class="field-name">space</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/space/Space/" class="type-link">nape.space.Space</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#space"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Space this constraint is inside of.
<br/><br/>
Whether this constraint is directly in a Space, or part of a Compound
which is inside of a space, this value will be equal to that Space.
<br/><br/>
If this constraint is inside of a Compound, then you cannot modify its
Space as the constraint belongs to that Compound.

@default null

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="isSleeping"><div class="plugin-name">nape</div><code><span class="field-name">isSleeping</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSleeping"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this constraint is sleeping or not.
<br/><br/>
This property is only defined if the constraint is inside of a Space
and is active, otherwise an error will be thrown should you access this
property.
<br/><br/>
This value is immutable, In Nape you do not ever need to manually
wake up a Constraint. It will always be done automatically without error.
<br/><br/>
To manually put a Constraint to sleep is against the very nature of Nape
API and so is excluded from the core of Nape. If you really want to do this
you should make use of the nape-hacks module.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="active"><div class="plugin-name">nape</div><code><span class="field-name">active</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#active"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this constraint is active or not.
<br/><br/>
Setting a constraint to be no longer active is a useful way of
temporarigly disabling a constraint without having to remove it
from a Space.

@default true

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ignore"><div class="plugin-name">nape</div><code><span class="field-name">ignore</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ignore"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether interactions between related Bodys will be ignored.
<br/><br/>
If true, then the Bodys related to this constraint will not
be permitted to interact in anyway, including callbacks.

@default false

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="stiff"><div class="plugin-name">nape</div><code><span class="field-name">stiff</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stiff"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether constraint is stiff, or elastic.
<br/><br/>
A stiff constraint has its positional error resolved directly
as with contact penetrations. This is generally a more stable
way of solving positional errors but has a side-effect that for example
changing the pivot point on a constraint used for mouse control will not
cause the objects to swing as the positional error is solved without
effecting the velocity of the object which may not be wanted.
<br/><br/>
If false, then the positional error of the constraint will be
resolved in an elastic way using changes in velocity.

@default true

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="frequency"><div class="plugin-name">nape</div><code><span class="field-name">frequency</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#frequency"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Frequency of elastic properties of constraint.
<br/><br/>
This property only has an effect when constraint is not stiff.
<br/><br/>
This value corresponds to in an ideal situation, the number of
spring like oscillations the constraint will make per second.
<br/><br/>
This value must be strictly positive (0 not allowed).

@default 10

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="damping"><div class="plugin-name">nape</div><code><span class="field-name">damping</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#damping"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Damping ratio of elastic properties of constraint.
<br/><br/>
This property only has an effect when constraint is not stiff.
<br/><br/>
This value corresponds to in the ideal situation, the damping
ratio of the constraints oscillations with 1 corresponding to
a total dampening, and values greater than one being over-dampening.
<br/><br/>
This value must be zero or positive.

@default 1

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxForce"><div class="plugin-name">nape</div><code><span class="field-name">maxForce</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxForce"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The maximum amount of force this constraint is allowed to use.
<br/><br/>
This value, whilst still used in a stiff constraint will not work
as you might hope for; since a stiff constraint resolves positional
error without using impulses, the maxForce will not have any effect
on how positional errors are resolved.
<br/><br/>
This value must be zero or positive.

@default infinity

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxError"><div class="plugin-name">nape</div><code><span class="field-name">maxError</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The maximum amount of error this constraint is allowed to use.
<br/><br/>
For stiff constraints, this value only serves to work in conjunction
with breakUnderError to permit breaking of the constraint.
<br/><br/>
For non-stiff constraints, this value will also effect how the constraint
behaves when breakUnderError is false by restricting the amount of error
that will be resolved; this will not work for stiff constraints.

@default infinity

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="breakUnderForce"><div class="plugin-name">nape</div><code><span class="field-name">breakUnderForce</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#breakUnderForce"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether constraint will break once maxForce is reached.
<br/><br/>
This property effects both stiff and non-stiff constraints, though
for the same reasons as those of maxForce, does not make much sense
to be used in stiff constraints.

@default false

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="breakUnderError"><div class="plugin-name">nape</div><code><span class="field-name">breakUnderError</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#breakUnderError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether constraint will break once maxError is reached.
<br/><br/>
This property effects both stiff and non-stiff constraints.

@default false

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="removeOnBreak"><div class="plugin-name">nape</div><code><span class="field-name">removeOnBreak</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#removeOnBreak"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether constraint will be removed when it breaks.
<br/><br/>
If true, then when constraint is broken it will be removed from
the Space. Otherwise it will simple be made inactive.

@default true

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="cbTypes"><div class="plugin-name">nape</div><code><span class="field-name">cbTypes</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/callbacks/CbTypeList/" class="type-link">nape.callbacks.CbTypeList</a></code><a class="header-anchor" href="#cbTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set of CbTypes for this constraints for callbacks.
<br/><br/>
This value cannot at present be set, but can be modified.

@default [CbType.ANY_CONSTRAINT]

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="impulse"><div class="plugin-name">nape</div><code><span class="field-name">impulse</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/MatMN/" class="type-link">nape.geom.MatMN</a></code><a class="header-anchor" href="#impulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return the constraint-space impulse applied in previous step.


| Returns | Description |
|---------|-------------|
| [nape.geom.MatMN](/api-docs/clay-native/nape/geom/MatMN/) | A new MatMN representing the constraint space impulse. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bodyImpulse"><div class="plugin-name">nape</div><code><span class="field-name">bodyImpulse</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#bodyImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute impulse that was applied to the given Body.
<br/><br/>
This impulse is the actual (mass weighted) change in velocity
that occured due to this constraint.



| Name | Type | Description |
|------|------|-------------|
| `body` | [nape.phys.Body](/api-docs/clay-native/nape/phys/Body/) | The Body to compute impulse for.  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/clay-native/nape/geom/Vec3/) | The impulse that was applied to the body in the previous step.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="visitBodies"><div class="plugin-name">nape</div><code><span class="field-name">visitBodies</span><span class="parenthesis">(</span><span class="arg-name">lambda</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#visitBodies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply given function to all Bodys linked to the constraint.
<br/><br/>
If a body is duplicated in a constraint then it will only
be visited once.



| Name | Type | Description |
|------|------|-------------|
| `lambda` | Function | The function to apply to each Body.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="copy"><div class="plugin-name">nape</div><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Constraint</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Produce copy of constraint.
<br/><br/>
All constraint properties except for internal impulse cache
and userData field will be copied.


| Returns | Description |
|---------|-------------|
| [Constraint](/api-docs/clay-native/nape/constraint/Constraint/) | The copied Constraint. |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Body
target: Headless
permalink: api-docs/headless/nape/phys/Body/
---

# Body

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/phys/Body.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/nape/phys/Interactor/">Interactor</a> → <strong>nape.phys.Body</strong> (final class)</div>

Class representing a physics Rigid Body.

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/phys/ZPP_Body/" class="type-link">zpp_nape.phys.ZPP_Body</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="debugDraw"><div class="plugin-name">nape</div><code><span class="field-name">debugDraw</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#debugDraw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set to disable debug drawing/
<br/><br/>
When true, this Body will not be drawn during debug draw operations
unless specifically given as argument to Debug draw() method.
@default true

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="type"><div class="plugin-name">nape</div><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/nape/phys/BodyType/" class="type-link">BodyType</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Type of body.
<br/><br/>
This value can be changed even if Body is inside of a Space.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="isBullet"><div class="plugin-name">nape</div><code><span class="field-name">isBullet</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isBullet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mark object for continuous collisions against other dynamic Bodies
<br/><br/>
If true, then this Body will undergo continuous collisions with other
dynamic Bodies. This flag has no effect for non-dynamic Bodies.
<br/><br/>
This flag should only be set for very fast, small moving dynamic bodies,
and due to the way continuous collisions are resolved it is not wise to
enable this for a large group of bodies that interact together as it
will lead to visual stalling.
<br/>
Bullets also do not play well when existing in a group with respect to
continuous collisions against kinematic objects and may cause
tunnelling against the kinematic.
@default false

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="disableCCD"><div class="plugin-name">nape</div><code><span class="field-name">disableCCD</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disableCCD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Declare object should never be collided continuously
<br/><br/>
When performing continuous collisions, Nape will check both Bodies to see
if either has opted-out of CCD. If either Body has this flag true, then
no CCD will be performed for that pair.
@default false

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="shapes"><div class="plugin-name">nape</div><code><span class="field-name">shapes</span><span class="operator">:</span> <a href="/api-docs/headless/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a></code><a class="header-anchor" href="#shapes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of shapes owned by Body.
<br/><br/>
Appending a Shape to this list is equivalent to <code>shape.body = this</code>

@default []

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="compound"><div class="plugin-name">nape</div><code><span class="field-name">compound</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/nape/phys/Compound/" class="type-link">Compound</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#compound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compound this Body belongs to.
<br/><br/>
If this Body belongs to a Compound, then the Compound 'owns' this Body and
it is the Compound which would be added/removed from a Space rather than
this Body.

@default null

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="space"><div class="plugin-name">nape</div><code><span class="field-name">space</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/nape/space/Space/" class="type-link">nape.space.Space</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#space"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Space this Body is assigned to.
<br/><br/>
When this Body is part of a Compound, this value is immutable.
<br/>
When a Body is part of a Compound it is owned by that Compound and it
is the Compound that is added/removed from a Space.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="arbiters"><div class="plugin-name">nape</div><code><span class="field-name">arbiters</span><span class="operator">:</span> <a href="/api-docs/headless/nape/dynamics/ArbiterList/" class="type-link">nape.dynamics.ArbiterList</a></code><a class="header-anchor" href="#arbiters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set of active arbiters related to this Body.
<br/><br/>
This list is immutable.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="isSleeping"><div class="plugin-name">nape</div><code><span class="field-name">isSleeping</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSleeping"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this body is sleeping.
<br/><br/>
This value is immutable, In Nape you do not ever need to manually wake up a Body.
It will always be done automatically without error.
<br/><br/>
To manually put a Body to sleep is against the very nature of Nape API
and so is excluded from the core of Nape. If you really want to do this
then you should make use of the nape-hacks module.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="constraints"><div class="plugin-name">nape</div><code><span class="field-name">constraints</span><span class="operator">:</span> <a href="/api-docs/headless/nape/constraint/ConstraintList/" class="type-link">nape.constraint.ConstraintList</a></code><a class="header-anchor" href="#constraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set of constraints using this Body.
<br/><br/>
This list contains those constraints that are inside of a Space only.
<br/><br/>
This list is immutable.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="position"><div class="plugin-name">nape</div><code><span class="field-name">position</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Position of Body's origin in px.
<br/><br/>
This value can be set and is equivalent to: <code>this.position.set(value)</code>
<br/><br/>
Attempting to set this value on a static Body that is in a Space will result
in a debug build error.
<br/><br/>
Please note that for kinematic objects, setting this value is equiavalent
to 'teleporting' the object, and for normal movement you should be using
the kinematic body's velocity.

@default (0,0)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="velocity"><div class="plugin-name">nape</div><code><span class="field-name">velocity</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#velocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Linear velocity of Body's origin in px/s.
<br/><br/>
This value can be set and is equivalent to: <code>this.velocity.set(value)</code>
<br/><br/>
A static body cannot have its velocity set.

@default (0,0)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="kinematicVel"><div class="plugin-name">nape</div><code><span class="field-name">kinematicVel</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#kinematicVel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Additional kinematic velocity of Body in px/s.
<br/><br/>
A bodies 'kinematic' velocity is an added velocity bias used in all physics
computations but that will not effect how the Body moves directly.
<br/><br/>
Even a static body can be given a kinematic velocity, and can be used for
such things as giving a body of water a fluid-velocity for fluid drag
computations.

@default (0,0)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="surfaceVel"><div class="plugin-name">nape</div><code><span class="field-name">surfaceVel</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#surfaceVel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Additional surface velocity for Body in px/s.
<br/><br/>
A bodies 'surface' velocity is an added velocity bias that is rotated to match
the angle of the contact surface used in contact physics and will not
effect how the Body moves directly.
<br/><br/>
Even a static body can be given a surface velocity, and can be used for
such things as conveyor belts (By setting the x-component of surfaceVel).

@default (0,0)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="force"><div class="plugin-name">nape</div><code><span class="field-name">force</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#force"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Accumulated force acting on body in px.kg/s/s
<br/><br/>
This value is not used internally for any physics computations.
<br/><br/>
You may set this property only on dynamic bodies.

@default (0,0)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="constraintVelocity"><div class="plugin-name">nape</div><code><span class="field-name">constraintVelocity</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#constraintVelocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This property represents the velocity seen by constraint physics.
<br/><br/>
You should not need to use this property unless writing your own
constraints using the UserConstraint API.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="rotation"><div class="plugin-name">nape</div><code><span class="field-name">rotation</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rotation of Body in clockwise rad.
<br/><br/>
Attempting to set this value on a static Body that is in a Space will result
in a debug build error.
<br/><br/>
Please note that for kinematic objects, setting this value is equiavalent
to 'teleporting' the object, and for normal movement you should be using
the kinematic body's angularVel.

@default 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="angularVel"><div class="plugin-name">nape</div><code><span class="field-name">angularVel</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularVel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Angular velocity of Body in clockwise rad/s
<br/><br/>
A static body cannot have its angular velocity set.

@default 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="kinAngVel"><div class="plugin-name">nape</div><code><span class="field-name">kinAngVel</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#kinAngVel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Additional kinematic angular velocity of Body in rad/s.
<br/><br/>
A bodies 'kinematic' velocity is an added velocity bias used in all physics
computations but that will not effect how the Body moves directly.
<br/><br/>
Even a static body can be given a kinematic velocity, and can be used for
such things as giving a body of water a fluid-velocity for fluid drag
computations.

@default 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="torque"><div class="plugin-name">nape</div><code><span class="field-name">torque</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#torque"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Accumulated torque acting on body in px.px.kg/s/s
<br/><br/>
This value is not used internally for any physics computations.
<br/><br/>
You may set this property only on dynamic bodies.

@default 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bounds"><div class="plugin-name">nape</div><code><span class="field-name">bounds</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/AABB/" class="type-link">nape.geom.AABB</a></code><a class="header-anchor" href="#bounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bounding box of Body in world space.
<br/><br/>
This value can be accessed even if there are no Shapes in the Body, but
attempting to query its values whilst there are no Shapes will result
in a debug build error.
<br/><br/>
This AABB is immutable.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="allowMovement"><div class="plugin-name">nape</div><code><span class="field-name">allowMovement</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allowMovement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether dynamic Body is permitted to be moved by physics linearly.
<br/><br/>
When this field is false, no physics will be able to cause a change in the
bodies linear velocity (It can still move, but only if you tell it to like
a kinematic body).

@default true

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="allowRotation"><div class="plugin-name">nape</div><code><span class="field-name">allowRotation</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allowRotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether dynamic Body is permitted to be rotated by physics.
<br/><br/>
When this field is false, no physics will be able to cause a change in the
bodies angular velocity (It can still rotate, but only if you tell it to like
a kinematic body).

@default true

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="massMode"><div class="plugin-name">nape</div><code><span class="field-name">massMode</span><span class="operator">:</span> <a href="/api-docs/headless/nape/phys/MassMode/" class="type-link">MassMode</a></code><a class="header-anchor" href="#massMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Method of mass computation for Body.
<br/><br/>
This value will be set implicitly to FIXED when mass property is set.
<br/>Setting back to DEFAULT will then set mass implicitly back to the default
computed mass.

@default MassMode.DEFAULT

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="constraintMass"><div class="plugin-name">nape</div><code><span class="field-name">constraintMass</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#constraintMass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mass to be used for a Body in User built constraints.
<br/><br/>
This value is given as the inverse mass of the Body taking into account
Body type (Static and Kinematic Bodies will have constraintMass of 0)
as well as properties like allowMovement.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="mass"><div class="plugin-name">nape</div><code><span class="field-name">mass</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mass of the Body.
<br/><br/>
This value is computed by default based on the Body's Shape's areas and
Material densities.
<br/>
When massMode is DEFAULT, accessing this value for an empty Body will thus
give an error as the value is undefined.
<br/><br/>
Setting this value will permit you to give a fixed mass to the Body
implicitly changing the massMode to MassMode.FIXED

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gravMassMode"><div class="plugin-name">nape</div><code><span class="field-name">gravMassMode</span><span class="operator">:</span> <a href="/api-docs/headless/nape/phys/GravMassMode/" class="type-link">GravMassMode</a></code><a class="header-anchor" href="#gravMassMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Method of computing mass as seen by gravity.
<br/><br/>
This value will be implicitly set by modifying gravMass or gravMassScale properties.

@default GravMassMode.DEFAULT

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gravMass"><div class="plugin-name">nape</div><code><span class="field-name">gravMass</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gravMass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mass used in gravity computations in a Space.
<br/><br/>
Setting this value will implicitly change the gravMassMode to FIXED.
<br/>
Set to 0 to disable gravity for this Body.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gravMassScale"><div class="plugin-name">nape</div><code><span class="field-name">gravMassScale</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gravMassScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mass scale used in computation of gravity for Body in Space.
<br/><br/>
Setting this value will implicitly change the gravMassMode to SCALED.
<br/>
When set, the gravMass of Body will be computed as this scaling factor
multiplied with the Body's mass.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="inertiaMode"><div class="plugin-name">nape</div><code><span class="field-name">inertiaMode</span><span class="operator">:</span> <a href="/api-docs/headless/nape/phys/InertiaMode/" class="type-link">InertiaMode</a></code><a class="header-anchor" href="#inertiaMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Method of computing Body moment of inertia.
<br/><br/>
This value will be set implicitly by modifying Body inertia property.

@default InertiaMode.DEFAULT

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="constraintInertia"><div class="plugin-name">nape</div><code><span class="field-name">constraintInertia</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#constraintInertia"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Moment of inertia to be used in user defined Constraints.
<br/><br/>
This value is equal to the inverse inertia of the Body taking into account
Body type (Static and Kinematic bodies will have constraintInertia of 0).
As well as properties like allowRotation.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="inertia"><div class="plugin-name">nape</div><code><span class="field-name">inertia</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#inertia"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Moment of inertia of this Body.
<br/><br/>
Setting this value will implicitly change the inertiaMode to FIXED.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="localCOM"><div class="plugin-name">nape</div><code><span class="field-name">localCOM</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#localCOM"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Local centre of mass of Body.
<br/><br/>
This value can be accessed even if Body has no shapes, but attempting
to query its values will result in a debug build error.
<br/><br/>
This Vec2 is immutable.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worldCOM"><div class="plugin-name">nape</div><code><span class="field-name">worldCOM</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#worldCOM"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

World centre of mass of Body.
<br/><br/>
This value can be accessed even if Body has no shapes, but attempting
to query its values will result in a debug build error.
<br/><br/>
This Vec2 is immutable.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="integrate"><div class="plugin-name">nape</div><code><span class="field-name">integrate</span><span class="parenthesis">(</span><span class="arg-name">deltaTime</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Body</a></code><a class="header-anchor" href="#integrate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Integrate body forward in time, taking only velocities into account.



| Name | Type | Description |
|------|------|-------------|
| `deltaTime` | [Float](/api-docs/headless/Float/) | The time to integrate body by. This value may be negative to integrate back in time.  |

| Returns | Description |
|---------|-------------|
| [Body](/api-docs/headless/nape/phys/Body/) | A refernce to 'this' Body |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isStatic"><div class="plugin-name">nape</div><code><span class="field-name">isStatic</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isStatic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fast equivalent to <code>body.type == BodyType.STATIC</code>

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if body is Static. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isDynamic"><div class="plugin-name">nape</div><code><span class="field-name">isDynamic</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isDynamic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fast equivalent to <code>body.type == BodyType.DYNAMIC</code>

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if body is Dynamic. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isKinematic"><div class="plugin-name">nape</div><code><span class="field-name">isKinematic</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isKinematic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fast equivalent to <code>body.type == BodyType.KINEMATIC</code>

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if body is Kinematic. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="copy"><div class="plugin-name">nape</div><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Body</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct an exact copy of this Body.
<br/><br/>
All properties will be exactly copied, with Shapes also
being copied with the copied Body's and Shape's userData
objects being assigned the same fields as the existing ones with
values copied over by reference for object types.


| Returns | Description |
|---------|-------------|
| [Body](/api-docs/headless/nape/phys/Body/) | A copy of this Body. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setVelocityFromTarget"><div class="plugin-name">nape</div><code><span class="field-name">setVelocityFromTarget</span><span class="parenthesis">(</span><span class="arg-name">targetPosition</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">,</span> <span class="arg-name">targetRotation</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">deltaTime</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Body</a></code><a class="header-anchor" href="#setVelocityFromTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set velocities to achieve desired position at end of time step.
<br/><br/>
This function is a utility to help with animating kinematic bodies.
Kinematic bodies should be moved through velocity, but it is often
easier to think in terms of position.
<br/><br/>
This method will set linear and angular velocities so that the target
position/rotation is achieved at end of time step.



| Name | Type | Description |
|------|------|-------------|
| `targetPosition` | [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) | The target position for Body.  |
| `targetRotation` | [Float](/api-docs/headless/Float/) | The target rotation for Body.  |
| `deltaTime` | [Float](/api-docs/headless/Float/) | The time step for next call to space.step().  |

| Returns |
|---------|
| [Body](/api-docs/headless/nape/phys/Body/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="connectedBodies"><div class="plugin-name">nape</div><code><span class="field-name">connectedBodies</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">depth</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/headless/nape/phys/BodyList/" class="type-link">BodyList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/phys/BodyList/" class="type-link">BodyList</a></code><a class="header-anchor" href="#connectedBodies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute set of bodies connected via constraints.
<br/><br/>
Only constraints that are inside of a Space will be considered the
same way that the body's constraints list only tracks constraints
that are part of a simulation.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `depth` | [Int](/api-docs/headless/Int/) | `-1` | Control the depth limit of the graph search. Negative values indicate an unlimited search. A depth value of 0 would cause only the current Body to be returned. (default -1)  |
| `output` | [BodyList](/api-docs/headless/nape/phys/BodyList/) | `null` | An optional list to append results to, if left as null then a new list is created.  |

| Returns | Description |
|---------|-------------|
| [BodyList](/api-docs/headless/nape/phys/BodyList/) | A list of the connected bodies up to the given graph depth. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="interactingBodies"><div class="plugin-name">nape</div><code><span class="field-name">interactingBodies</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/nape/callbacks/InteractionType/" class="type-link">nape.callbacks.InteractionType</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">depth</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/headless/nape/phys/BodyList/" class="type-link">BodyList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/phys/BodyList/" class="type-link">BodyList</a></code><a class="header-anchor" href="#interactingBodies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute set of bodies interacting with this body.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `type` | [nape.callbacks.InteractionType](/api-docs/headless/nape/callbacks/InteractionType/) | `null` | When not equal to null, this parameter controls what sort of interaction we permit in the search.  |
| `depth` | [Int](/api-docs/headless/Int/) | `-1` | Control the depth limit of the graph search. Negative values indicate an unlimited search. A depth value of 0 would cause only the current Body to be returned. (default -1)  |
| `output` | [BodyList](/api-docs/headless/nape/phys/BodyList/) | `null` | An optional list to append results to, if left as null then a new list is created.  |

| Returns | Description |
|---------|-------------|
| [BodyList](/api-docs/headless/nape/phys/BodyList/) | A list of the interacting bodies up to the given graph depth. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="crushFactor"><div class="plugin-name">nape</div><code><span class="field-name">crushFactor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#crushFactor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine how much this body is being crushed.
<br/><br/>
This is an approximate value, computed as:
<code>crushFactor = (sum(magnitude(impulse)) - magnitude(sum(impulse))) / mass</code>
<br/><br/>
In this way, it is a mass and time step invariant value which is 0 when all impulses
are acting on body in the same direction, and has maximum value when impulses
act in opposing directions 'crushing' the Body.


| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | A positive value representing an approximation to how much the body is being crushed.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="localPointToWorld"><div class="plugin-name">nape</div><code><span class="field-name">localPointToWorld</span><span class="parenthesis">(</span><span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#localPointToWorld"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transform a point from Body's local coordinates to world coordinates.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `point` | [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) | | The point to transform.  |
| `weak` | [Bool](/api-docs/headless/Bool/) | `false` | If true the returned Vec2 will be automatically released back to object pool when used as an argument to a Nape function. (default false)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) | The result of the transformation.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="worldPointToLocal"><div class="plugin-name">nape</div><code><span class="field-name">worldPointToLocal</span><span class="parenthesis">(</span><span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#worldPointToLocal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transform a point from world coordinates to Body's local coordinates.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `point` | [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) | | The point to transform.  |
| `weak` | [Bool](/api-docs/headless/Bool/) | `false` | If true the returned Vec2 will be automatically released back to object pool when used as an argument to a Nape function. (default false)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) | The result of the transformation.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="localVectorToWorld"><div class="plugin-name">nape</div><code><span class="field-name">localVectorToWorld</span><span class="parenthesis">(</span><span class="arg-name">vector</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#localVectorToWorld"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transform vector from Body's local coordinates into world coordinates.
<br/><br/>



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `vector` | [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) | | The vector to transform.  |
| `weak` | [Bool](/api-docs/headless/Bool/) | `false` | If true the returned Vec2 will be automatically released back to object pool when used as an argument to a Nape function. (default false)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) | The result of the transformation.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="worldVectorToLocal"><div class="plugin-name">nape</div><code><span class="field-name">worldVectorToLocal</span><span class="parenthesis">(</span><span class="arg-name">vector</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#worldVectorToLocal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transform vector from world coordinates to Body's local coordinates
<br/><br/>



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `vector` | [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) | | The vector to transform.  |
| `weak` | [Bool](/api-docs/headless/Bool/) | `false` | If true the returned Vec2 will be automatically released back to object pool when used as an argument to a Nape function. (default false)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) | The result of the transformation.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="applyImpulse"><div class="plugin-name">nape</div><code><span class="field-name">applyImpulse</span><span class="parenthesis">(</span><span class="arg-name">impulse</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sleepable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Body</a></code><a class="header-anchor" href="#applyImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply impulse to a point on Body.
<br/><br/>
If position argument is not given, then body.position is assumed so that impulse
is applied at centre of Body.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `impulse` | [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) | | The impulse to apply given in world coordinates.  |
| `pos` | [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) | `null` | The position to apply impulse given in world coordinates. (default body.position)  |
| `sleepable` | [Bool](/api-docs/headless/Bool/) | `false` | This parameter can be set to true, in the case that you are constantly applying an impulse which is dependent only on the position/velocity of the body meaning that application of this impulse does not need to prevent the object from sleeping. When true, and the body is sleeping, this method call will not apply any impulse. (default false).  |

| Returns |
|---------|
| [Body](/api-docs/headless/nape/phys/Body/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="applyAngularImpulse"><div class="plugin-name">nape</div><code><span class="field-name">applyAngularImpulse</span><span class="parenthesis">(</span><span class="arg-name">impulse</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sleepable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Body</a></code><a class="header-anchor" href="#applyAngularImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply a pure angular impulse to Body.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `impulse` | [Float](/api-docs/headless/Float/) | | The angular impulse to apply.  |
| `sleepable` | [Bool](/api-docs/headless/Bool/) | `false` | This parameter can be set to true, in the case that you are constantly applying an impulse which is dependent only on the position/velocity of the body meaning that application of this impulse does not need to prevent the object from sleeping. When true, and the body is sleeping, this method call will not apply any impulse. (default false).  |

| Returns |
|---------|
| [Body](/api-docs/headless/nape/phys/Body/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="translateShapes"><div class="plugin-name">nape</div><code><span class="field-name">translateShapes</span><span class="parenthesis">(</span><span class="arg-name">translation</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Body</a></code><a class="header-anchor" href="#translateShapes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Translate each shape in local coordinates.
<br/><br/>
This operation does not effect the Body's position, but the position
of the shapes 'inside' of the Body.



| Name | Type | Description |
|------|------|-------------|
| `translation` | [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) | The local translation to apply to Shapes.  |

| Returns | Description |
|---------|-------------|
| [Body](/api-docs/headless/nape/phys/Body/) | A reference to this Body.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rotateShapes"><div class="plugin-name">nape</div><code><span class="field-name">rotateShapes</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Body</a></code><a class="header-anchor" href="#rotateShapes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rotate each shape in local coordinates.
<br/><br/>
This operation does not effect the Body's rotation, but rotates
each of the shapes 'inside' of the Body.



| Name | Type | Description |
|------|------|-------------|
| `angle` | [Float](/api-docs/headless/Float/) | The angle to rotate shapes by in clockwise radians.  |

| Returns | Description |
|---------|-------------|
| [Body](/api-docs/headless/nape/phys/Body/) | A reference to this Body.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="scaleShapes"><div class="plugin-name">nape</div><code><span class="field-name">scaleShapes</span><span class="parenthesis">(</span><span class="arg-name">scaleX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scaleY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Body</a></code><a class="header-anchor" href="#scaleShapes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scale each shape in local coordinates.
<br/><br/>
This operation does not affect the Body itself, but affects each
Shape 'inside' of the Body instead.



| Name | Type | Description |
|------|------|-------------|
| `scaleX` | [Float](/api-docs/headless/Float/) | The x-coordinate factor of scaling.  |
| `scaleY` | [Float](/api-docs/headless/Float/) | The y-coordinate factor of scaling.  |

| Returns | Description |
|---------|-------------|
| [Body](/api-docs/headless/nape/phys/Body/) | A reference to this Body.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="transformShapes"><div class="plugin-name">nape</div><code><span class="field-name">transformShapes</span><span class="parenthesis">(</span><span class="arg-name">matrix</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Mat23/" class="type-link">nape.geom.Mat23</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Body</a></code><a class="header-anchor" href="#transformShapes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transform each shape in local coordiantes.
<br/><br/>
This operation does not affect the Body itself, but affects each
Shape 'inside' of the Body instead.



| Name | Type | Description |
|------|------|-------------|
| `matrix` | [nape.geom.Mat23](/api-docs/headless/nape/geom/Mat23/) | The transformation matrix to apply to each Shape.  |

| Returns | Description |
|---------|-------------|
| [Body](/api-docs/headless/nape/phys/Body/) | A reference to this Body.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="align"><div class="plugin-name">nape</div><code><span class="field-name">align</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Body</a></code><a class="header-anchor" href="#align"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Align rigid body so that its origin is also its centre of mass.
<br/><br/>
This operation will both translate the Shapes inside of the Body,
as well as translating the Body itself so that its 'apparent' position
has not been modified.
<br/><br/>
Alignment of Rigid bodies is necessary for dynamic bodies so that
they will interact and rotate as expected.
<br/><br/>
Simple Body's created with a single Polygon.box() or basic Circle
will already be aligned.


| Returns | Description |
|---------|-------------|
| [Body](/api-docs/headless/nape/phys/Body/) | A reference to this Body. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rotate"><div class="plugin-name">nape</div><code><span class="field-name">rotate</span><span class="parenthesis">(</span><span class="arg-name">centre</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">,</span> <span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Body</a></code><a class="header-anchor" href="#rotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rotate body about about given point.
<br/><br/>
Please note that this method is equivalent to teleporting the body,
the same way direct manipulation of position and rotation is.



| Name | Type | Description |
|------|------|-------------|
| `centre` | [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) | The centre of rotation in world coordinates.  |
| `angle` | [Float](/api-docs/headless/Float/) | The angle to rotate body by in clockwise radians.  |

| Returns | Description |
|---------|-------------|
| [Body](/api-docs/headless/nape/phys/Body/) | A reference to this Body.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setShapeMaterials"><div class="plugin-name">nape</div><code><span class="field-name">setShapeMaterials</span><span class="parenthesis">(</span><span class="arg-name">material</span><span class="operator">:</span> <a href="/api-docs/headless/nape/phys/Material/" class="type-link">Material</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Body</a></code><a class="header-anchor" href="#setShapeMaterials"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set material of all shapes.
<br/><br/>
Equivalent to: <code>body.shapes.foreach(function (shape) shape.material = material)</code>



| Name | Type | Description |
|------|------|-------------|
| `material` | [Material](/api-docs/headless/nape/phys/Material/) | The material to set Shape's material to.  |

| Returns | Description |
|---------|-------------|
| [Body](/api-docs/headless/nape/phys/Body/) | A reference to this Body. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setShapeFilters"><div class="plugin-name">nape</div><code><span class="field-name">setShapeFilters</span><span class="parenthesis">(</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/headless/nape/dynamics/InteractionFilter/" class="type-link">nape.dynamics.InteractionFilter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Body</a></code><a class="header-anchor" href="#setShapeFilters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set interaction filter of all shapes.
<br/><br/>
Equivalent to: <code>body.shapes.foreach(function (shape) shape.filter = filter)</code>



| Name | Type | Description |
|------|------|-------------|
| `filter` | [nape.dynamics.InteractionFilter](/api-docs/headless/nape/dynamics/InteractionFilter/) | The filter to set Shape's filter to.  |

| Returns | Description |
|---------|-------------|
| [Body](/api-docs/headless/nape/phys/Body/) | A reference to this Body. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setShapeFluidProperties"><div class="plugin-name">nape</div><code><span class="field-name">setShapeFluidProperties</span><span class="parenthesis">(</span><span class="arg-name">fluidProperties</span><span class="operator">:</span> <a href="/api-docs/headless/nape/phys/FluidProperties/" class="type-link">FluidProperties</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Body</a></code><a class="header-anchor" href="#setShapeFluidProperties"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set fluidProperties of all shapes.
<br/><br/>
Equivalent to: <code>body.shapes.foreach(function (shape) shape.fluidProperties = fluidProperties)</code>



| Name | Type | Description |
|------|------|-------------|
| `fluidProperties` | [FluidProperties](/api-docs/headless/nape/phys/FluidProperties/) | The fluidProperties to set Shape's fluidProperties to.  |

| Returns | Description |
|---------|-------------|
| [Body](/api-docs/headless/nape/phys/Body/) | A reference to this Body. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="normalImpulse"><div class="plugin-name">nape</div><code><span class="field-name">normalImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="#" class="type-link">Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">freshOnly</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#normalImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate sum effect of all normal contact impulses on Body.
<br/><br/>
If the body argument is non-null, then only impulses between 'this' and
the given Body will be considered.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [Body](/api-docs/headless/nape/phys/Body/) | `null` | The Body to restrict consideration of impulses with. (default null)  |
| `freshOnly` | [Bool](/api-docs/headless/Bool/) | `false` | If true, then only 'new' contact points will be considered. (default false)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/headless/nape/geom/Vec3/) | The summed effect of impulses acting on Body. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tangentImpulse"><div class="plugin-name">nape</div><code><span class="field-name">tangentImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="#" class="type-link">Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">freshOnly</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#tangentImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate sum effect of all tangent contact impulses on Body.
<br/><br/>
If the body argument is non-null, then only impulses between 'this' and
the given Body will be considered.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [Body](/api-docs/headless/nape/phys/Body/) | `null` | The Body to restrict consideration of impulses with. (default null)  |
| `freshOnly` | [Bool](/api-docs/headless/Bool/) | `false` | If true, then only 'new' contact points will be considered. (default false)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/headless/nape/geom/Vec3/) | The summed effect of impulses acting on Body. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="totalContactsImpulse"><div class="plugin-name">nape</div><code><span class="field-name">totalContactsImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="#" class="type-link">Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">freshOnly</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#totalContactsImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate sum effect of all contact impulses on Body.
<br/><br/>
If the body argument is non-null, then only impulses between 'this' and
the given Body will be considered.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [Body](/api-docs/headless/nape/phys/Body/) | `null` | The Body to restrict consideration of impulses with. (default null)  |
| `freshOnly` | [Bool](/api-docs/headless/Bool/) | `false` | If true, then only 'new' contact points will be considered. (default false)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/headless/nape/geom/Vec3/) | The summed effect of impulses acting on Body. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rollingImpulse"><div class="plugin-name">nape</div><code><span class="field-name">rollingImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="#" class="type-link">Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">freshOnly</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rollingImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate sum effect of all rolling friction contact impulses on Body.
<br/><br/
If the body argument is non-null, then only impulses between 'this' and
the given Body will be considered.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [Body](/api-docs/headless/nape/phys/Body/) | `null` | The Body to restrict consideration of impulses with. (default null)  |
| `freshOnly` | [Bool](/api-docs/headless/Bool/) | `false` | If true, then only 'new' contact points will be considered. (default false)  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The summed effect of impulses acting on Body. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="buoyancyImpulse"><div class="plugin-name">nape</div><code><span class="field-name">buoyancyImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="#" class="type-link">Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#buoyancyImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate sum effect of all buoyancy impulses acting on Body.
<br/><br/
If the body argument is non-null, then only impulses between 'this' and
the given Body will be considered.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [Body](/api-docs/headless/nape/phys/Body/) | `null` | The Body to restrict consideration of impulses with. (default null)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/headless/nape/geom/Vec3/) | The summed effect of impulses acting on Body. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="dragImpulse"><div class="plugin-name">nape</div><code><span class="field-name">dragImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="#" class="type-link">Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#dragImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate sum effect of all fluid drag impulses acting on Body.
<br/><br/
If the body argument is non-null, then only impulses between 'this' and
the given Body will be considered.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [Body](/api-docs/headless/nape/phys/Body/) | `null` | The Body to restrict consideration of impulses with. (default null)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/headless/nape/geom/Vec3/) | The summed effect of impulses acting on Body. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="totalFluidImpulse"><div class="plugin-name">nape</div><code><span class="field-name">totalFluidImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="#" class="type-link">Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#totalFluidImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate sum effect of all fluid impulses acting on Body.
<br/><br/
If the body argument is non-null, then only impulses between 'this' and
the given Body will be considered.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [Body](/api-docs/headless/nape/phys/Body/) | `null` | The Body to restrict consideration of impulses with. (default null)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/headless/nape/geom/Vec3/) | The summed effect of impulses acting on Body. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="constraintsImpulse"><div class="plugin-name">nape</div><code><span class="field-name">constraintsImpulse</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#constraintsImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate sum effect of all constraint impulses on this Body.


| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/headless/nape/geom/Vec3/) | The summed effect of constraint impulses acting on Body. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="totalImpulse"><div class="plugin-name">nape</div><code><span class="field-name">totalImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="#" class="type-link">Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">freshOnly</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#totalImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate sum effect of all impulses on Body.
<br/><br/
If the body argument is non-null, then only impulses between 'this' and
the given Body will be considered when evaluating interaction impulses.
<br/>
Constraint impulses are not effected by the body argument.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [Body](/api-docs/headless/nape/phys/Body/) | `null` | The Body to restrict consideration of impulses with. (default null)  |
| `freshOnly` | [Bool](/api-docs/headless/Bool/) | `false` | If true, then only 'new' contact points will be considered when evaluating contact impulses. (default false)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/headless/nape/geom/Vec3/) | The summed effect of impulses acting on Body. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="contains"><div class="plugin-name">nape</div><code><span class="field-name">contains</span><span class="parenthesis">(</span><span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#contains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine if point is contained in Body.



| Name | Type | Description |
|------|------|-------------|
| `point` | [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) | The point to test containment for in world coordinates.  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if point is contained.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/nape/phys/BodyType/" class="type-link">BodyType</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new Body.
<br/><br/>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `type` | [BodyType](/api-docs/headless/nape/phys/BodyType/) | `null` | The type of Body to create. (default DYNAMIC)  |
| `position` | [nape.geom.Vec2](/api-docs/headless/nape/geom/Vec2/) | `null` | The initial position for object. (default &#40;0,0&#41;)  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


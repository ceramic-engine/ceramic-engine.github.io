---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Space
target: Clay (Native)
permalink: api-docs/clay-native/nape/space/Space/
---

# Space

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/space/Space.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.space.Space</strong> (final class)</div>

The heart of all Nape simulations.

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/space/ZPP_Space/" class="type-link">zpp_nape.space.ZPP_Space</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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

<div class="signature field-var has-description has-plugin" id="gravity"><div class="plugin-name">nape</div><code><span class="field-name">gravity</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#gravity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Space gravity.
<br/><br/>
Units are of pixels/second/second
@default (0,0)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="broadphase"><div class="plugin-name">nape</div><code><span class="field-name">broadphase</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/space/Broadphase/" class="type-link">Broadphase</a></code><a class="header-anchor" href="#broadphase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Broadphase type in use.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="sortContacts"><div class="plugin-name">nape</div><code><span class="field-name">sortContacts</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sortContacts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag controlling sorting of contact points.
<br/><br/>
If true, then collisions will be resolved in an order defined by their
penetration depths. This can be shown to improve stability of the physics
as well as making simulations more consistent regardless of which broadphase
is used.
<br/><br/>
Having sorting enabled obviously incurs a cost, and you may consider
disabling it if you are having issues with performance (Though things
such as number of physics iterations will have much greater bearing on
performance than this, especcialy since enabling this may permit you
to use less iterations).

@default true

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worldAngularDrag"><div class="plugin-name">nape</div><code><span class="field-name">worldAngularDrag</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#worldAngularDrag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Angular drag applied to all bodies in Space.
<br/><br/>
This represents the fraction of a body's angular velocity which will be
removed per second. This value has no unit attached.

@default 0.015

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worldLinearDrag"><div class="plugin-name">nape</div><code><span class="field-name">worldLinearDrag</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#worldLinearDrag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Linear drag applied to all bodies in Space.
<br/><br/>
This represents the fraction of a body's linear velocity which will be
removed per second. This value has no unit attached.

@default 0.015

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="compounds"><div class="plugin-name">nape</div><code><span class="field-name">compounds</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/CompoundList/" class="type-link">nape.phys.CompoundList</a></code><a class="header-anchor" href="#compounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of all Compounds directly placed in space.
<br/><br/>
This list is mutable, and adding an element to this list is one way of
adding a Compound to this Space equivalent to: <code>compound.space = space</code>
<br/><br/>
This list is only those compounds directly placed in the space, any
compound that is a child of another compound will not be in this list.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bodies"><div class="plugin-name">nape</div><code><span class="field-name">bodies</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a></code><a class="header-anchor" href="#bodies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of all Bodys directly placed in space.
<br/><br/>
This list is mutable, and adding an element to this list is one way of
adding a Body to this Space equivalent to: <code>body.space = space</code>
<br/><br/>
This list is only those bodies directly placed in the space, any
body that is a child of a Compound will not be in this list.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="liveBodies"><div class="plugin-name">nape</div><code><span class="field-name">liveBodies</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a></code><a class="header-anchor" href="#liveBodies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of all active dynamic Bodies in space.
<br/><br/>
This list contains all dynamic bodies that are awake regardless of their containment in a Compound.
<br/><br/>
This list is immutable.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="constraints"><div class="plugin-name">nape</div><code><span class="field-name">constraints</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/constraint/ConstraintList/" class="type-link">nape.constraint.ConstraintList</a></code><a class="header-anchor" href="#constraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of all Constraints directly placed in space.
<br/><br/>
This list is mutable, and adding an element to this list is one way of
adding a Constraint to this Space equivalent to: <code>constraint.space = space</code>
<br/><br/>
This list is only those bodies directly placed in the space, any
constraint that is a child of a Compound will not be in this list.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="liveConstraints"><div class="plugin-name">nape</div><code><span class="field-name">liveConstraints</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/constraint/ConstraintList/" class="type-link">nape.constraint.ConstraintList</a></code><a class="header-anchor" href="#liveConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of all active Constraints in space.
<br/><br/>
This list contains all constraints regardless of their containment in a Compound.
<br/><br/>
This list is immutable.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="world"><div class="plugin-name">nape</div><code><span class="field-name">world</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/Body/" class="type-link">nape.phys.Body</a></code><a class="header-anchor" href="#world"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Static, immutable Body for constraint purposes.
<br/><br/>
This is a completely static, uncollidable, uninteractable Body
with no Shapes, that cannot be modified in any way.
<br/><br/>
Its purpose is to provide a means for attaching Constraints
from one Body to the Space itself, for instance pinning a body
against a static point in space.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="arbiters"><div class="plugin-name">nape</div><code><span class="field-name">arbiters</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/dynamics/ArbiterList/" class="type-link">nape.dynamics.ArbiterList</a></code><a class="header-anchor" href="#arbiters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of all active arbiters in Space.
<br/><br/>
This list is immutable.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="listeners"><div class="plugin-name">nape</div><code><span class="field-name">listeners</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/callbacks/ListenerList/" class="type-link">nape.callbacks.ListenerList</a></code><a class="header-anchor" href="#listeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of all Listeners in space.
<br/><br/>
This list is mutable, and adding an element to this list is one way of
adding a Listener to this Space equivalent to: <code>listener.space = space</code>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="timeStamp"><div class="plugin-name">nape</div><code><span class="field-name">timeStamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#timeStamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The time stamp of this Space object.
<br/><br/>
This is equal to the number of times that space.step(..) has been invoked.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="elapsedTime"><div class="plugin-name">nape</div><code><span class="field-name">elapsedTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#elapsedTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The elapsed simulation time.
<br/><br/>
This is the total amount of 'time' that has elapsed in the Space simulation.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="visitBodies"><div class="plugin-name">nape</div><code><span class="field-name">visitBodies</span><span class="parenthesis">(</span><span class="arg-name">lambda</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#visitBodies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply given function to all bodies in space.
<br/><br/>
This method is a way to iterate over 'every' Body in the Space
regardless of containment in a Compound.



| Name | Type | Description |
|------|------|-------------|
| `lambda` | Function | The function to apply to each Body.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="visitConstraints"><div class="plugin-name">nape</div><code><span class="field-name">visitConstraints</span><span class="parenthesis">(</span><span class="arg-name">lambda</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#visitConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply given function to all constraints in space.
<br/><br/>
This method is a way to iterate over 'every' Constraint in the Space
regardless of containment in a Compound.



| Name | Type | Description |
|------|------|-------------|
| `lambda` | Function | The function to apply to each Constraint.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="visitCompounds"><div class="plugin-name">nape</div><code><span class="field-name">visitCompounds</span><span class="parenthesis">(</span><span class="arg-name">lambda</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#visitCompounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply given function to all compounds in space.
<br/><br/>
This method is a way to iterate over 'every' Compound in the Space
regardless of containment in another Compound.



| Name | Type | Description |
|------|------|-------------|
| `lambda` | Function | The function to apply to each Compound.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clear"><div class="plugin-name">nape</div><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clear the Space of all objects.
<br/><br/>
Things such as the elapsed simulation time, and time step will too be
reset to 0.
<br/><br/>
Parameters such as gravity, and worldLinearDrag will be untouched by
this operation.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="step"><div class="plugin-name">nape</div><code><span class="field-name">step</span><span class="parenthesis">(</span><span class="arg-name">deltaTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">velocityIterations</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">10</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">positionIterations</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">10</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#step"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Step simulation forward in time.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `deltaTime` | [Float](/api-docs/clay-native/Float/) | | The number of seconds to simulate. For 60fps physics you would use a value of 1/60.  |
| `velocityIterations` | [Int](/api-docs/clay-native/Int/) | `10` | The number of iterations to use in resolving errors in the velocities of objects. This is together with collision detection the most expensive phase of a simulation update, as well as the most important for stable results. (default 10)  |
| `positionIterations` | [Int](/api-docs/clay-native/Int/) | `10` | The number of iterations to use in resolving errors in the positions of objects. This is far more lightweight than velocity iterations, as well as being less important for the stability of results. (default 10)  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="interactionType"><div class="plugin-name">nape</div><code><span class="field-name">interactionType</span><span class="parenthesis">(</span><span class="arg-name">shape1</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="operator">,</span> <span class="arg-name">shape2</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/callbacks/InteractionType/" class="type-link">nape.callbacks.InteractionType</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#interactionType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine the interaction type that would occur between a pair of Shapes.
<br/><br/>
This function takes into account everything possible, and ignoring the
callback system will tell you precisely the type of interaction (if any
at all) which will occur between these Shapes.
<br/><br/>
This function can only work if the Shapes belong to a Body.
<br/><br/>
This function can only make use of any constraints 'ignore' property
to determine if 'null' should be returned if the constraints being used
are inside of a Space.



| Name | Type | Description |
|------|------|-------------|
| `shape1` | [nape.shape.Shape](/api-docs/clay-native/nape/shape/Shape/) | The first Shape to test.  |
| `shape2` | [nape.shape.Shape](/api-docs/clay-native/nape/shape/Shape/) | The second Shape to test.  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-native/Null/)<[nape.callbacks.InteractionType](/api-docs/clay-native/nape/callbacks/InteractionType/)> | The interaction type that will occur between these shapes, or null if no interaction will occur.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="shapesUnderPoint"><div class="plugin-name">nape</div><code><span class="field-name">shapesUnderPoint</span><span class="parenthesis">(</span><span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/dynamics/InteractionFilter/" class="type-link">nape.dynamics.InteractionFilter</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a></code><a class="header-anchor" href="#shapesUnderPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate all Shapes under a given Point.
<br/><br/>
If the filter argument is non-null, then only shapes who's filter
agrees to 'collide' will be considered.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `point` | [nape.geom.Vec2](/api-docs/clay-native/nape/geom/Vec2/) | | The point to evaluate shapes.  |
| `filter` | [nape.dynamics.InteractionFilter](/api-docs/clay-native/nape/dynamics/InteractionFilter/) | `null` | Optional filter to pick and choose shapes, based on whether the filters agree to collide. (default null)  |
| `output` | [nape.shape.ShapeList](/api-docs/clay-native/nape/shape/ShapeList/) | `null` | Optional list to append results to instead of creating a new list (default null).  |

| Returns | Description |
|---------|-------------|
| [nape.shape.ShapeList](/api-docs/clay-native/nape/shape/ShapeList/) | A list of all the Shapes containing the given point.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bodiesUnderPoint"><div class="plugin-name">nape</div><code><span class="field-name">bodiesUnderPoint</span><span class="parenthesis">(</span><span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/dynamics/InteractionFilter/" class="type-link">nape.dynamics.InteractionFilter</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a></code><a class="header-anchor" href="#bodiesUnderPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate all Bodies under a given Point.
<br/><br/>
If the filter argument is non-null, then only bodies with a shape containing
the given point whose filter agrees to 'collide' will be considered.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `point` | [nape.geom.Vec2](/api-docs/clay-native/nape/geom/Vec2/) | | The point to evaluate bodies.  |
| `filter` | [nape.dynamics.InteractionFilter](/api-docs/clay-native/nape/dynamics/InteractionFilter/) | `null` | Optional filter to pick and choose shapes, based on whether the filters agree to collide. (default null)  |
| `output` | [nape.phys.BodyList](/api-docs/clay-native/nape/phys/BodyList/) | `null` | Optional list to append results to instead of creating a new list (default null).  |

| Returns | Description |
|---------|-------------|
| [nape.phys.BodyList](/api-docs/clay-native/nape/phys/BodyList/) | A list of all the Bodies containing the given point.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="shapesInAABB"><div class="plugin-name">nape</div><code><span class="field-name">shapesInAABB</span><span class="parenthesis">(</span><span class="arg-name">aabb</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/AABB/" class="type-link">nape.geom.AABB</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">containment</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">strict</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/dynamics/InteractionFilter/" class="type-link">nape.dynamics.InteractionFilter</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a></code><a class="header-anchor" href="#shapesInAABB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate all Shapes given an AABB.
<br/><br/>
If the filter argument is non-null, then only shapes who's filter
agrees to 'collide' will be considered.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `aabb` | [nape.geom.AABB](/api-docs/clay-native/nape/geom/AABB/) | | The bounding box to query shapes by,  |
| `containment` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, then only Shapes entirely contained (Rather than simply intersected) will be considered. (default false)  |
| `strict` | [Bool](/api-docs/clay-native/Bool/) | `true` | If false, then the Shape's bounding box will be used to classify the Shape, instead of the Shape itself. (default true)  |
| `filter` | [nape.dynamics.InteractionFilter](/api-docs/clay-native/nape/dynamics/InteractionFilter/) | `null` | Optional filter to pick and choose shapes, based on whether the filters agree to collide. (default null)  |
| `output` | [nape.shape.ShapeList](/api-docs/clay-native/nape/shape/ShapeList/) | `null` | Optional list to append results to instead of creating a new list (default null).  |

| Returns | Description |
|---------|-------------|
| [nape.shape.ShapeList](/api-docs/clay-native/nape/shape/ShapeList/) | A list of all the shapes for given AABB.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bodiesInAABB"><div class="plugin-name">nape</div><code><span class="field-name">bodiesInAABB</span><span class="parenthesis">(</span><span class="arg-name">aabb</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/AABB/" class="type-link">nape.geom.AABB</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">containment</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">strict</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/dynamics/InteractionFilter/" class="type-link">nape.dynamics.InteractionFilter</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a></code><a class="header-anchor" href="#bodiesInAABB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate all Bodies given an AABB.
<br/><br/>
If the filter argument is non-null, then only bodies with a shape
classified as being part of the AABB, whose filter agrees to collide
will be considered.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `aabb` | [nape.geom.AABB](/api-docs/clay-native/nape/geom/AABB/) | | The bounding box to query bodies by,  |
| `containment` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, then only Bodies entirely contained (Rather than simply intersecting) will be considered. (default false)  |
| `strict` | [Bool](/api-docs/clay-native/Bool/) | `true` | If false, then the body's shape's bounding box will be used to classify the shapes of the body, instead of the Shape itself. (default true)  |
| `filter` | [nape.dynamics.InteractionFilter](/api-docs/clay-native/nape/dynamics/InteractionFilter/) | `null` | Optional filter to pick and choose shapes, based on whether the filters agree to collide. (default null)  |
| `output` | [nape.phys.BodyList](/api-docs/clay-native/nape/phys/BodyList/) | `null` | Optional list to append results to instead of creating a new list (default null).  |

| Returns | Description |
|---------|-------------|
| [nape.phys.BodyList](/api-docs/clay-native/nape/phys/BodyList/) | A list of all the shapes for given AABB.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="shapesInCircle"><div class="plugin-name">nape</div><code><span class="field-name">shapesInCircle</span><span class="parenthesis">(</span><span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">containment</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/dynamics/InteractionFilter/" class="type-link">nape.dynamics.InteractionFilter</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a></code><a class="header-anchor" href="#shapesInCircle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate all Shapes given a circle.
<br/><br/>
If the filter argument is non-null, then only shapes who's filter
agrees to 'collide' will be considered.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `position` | [nape.geom.Vec2](/api-docs/clay-native/nape/geom/Vec2/) | | The position of the centre of the circle.  |
| `radius` | [Float](/api-docs/clay-native/Float/) | | The radius of the circle.  |
| `containment` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, then only Shapes entirely contained (Rather than simply intersected) will be considered. (default false)  |
| `filter` | [nape.dynamics.InteractionFilter](/api-docs/clay-native/nape/dynamics/InteractionFilter/) | `null` | Optional filter to pick and choose shapes, based on whether the filters agree to collide. (default null)  |
| `output` | [nape.shape.ShapeList](/api-docs/clay-native/nape/shape/ShapeList/) | `null` | Optional list to append results to instead of creating a new list (default null).  |

| Returns | Description |
|---------|-------------|
| [nape.shape.ShapeList](/api-docs/clay-native/nape/shape/ShapeList/) | A list of all the shapes for given circle.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bodiesInCircle"><div class="plugin-name">nape</div><code><span class="field-name">bodiesInCircle</span><span class="parenthesis">(</span><span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">containment</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/dynamics/InteractionFilter/" class="type-link">nape.dynamics.InteractionFilter</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a></code><a class="header-anchor" href="#bodiesInCircle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate all Bodies given a circle.
<br/><br/>
If the filter argument is non-null, then only bodies with a shape
classified as being part of the circle, whose filter agrees to collide
will be considered.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `position` | [nape.geom.Vec2](/api-docs/clay-native/nape/geom/Vec2/) | | The position of the centre of the circle.  |
| `radius` | [Float](/api-docs/clay-native/Float/) | | The radius of the circle.  |
| `containment` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, then only Bodies entirely contained (Rather than simply intersecting) will be considered. If a filter is supplied, only shapes that agree to collide will be used in this containment check. (default false)  |
| `filter` | [nape.dynamics.InteractionFilter](/api-docs/clay-native/nape/dynamics/InteractionFilter/) | `null` | Optional filter to pick and choose shapes, based on whether the filters agree to collide. (default null)  |
| `output` | [nape.phys.BodyList](/api-docs/clay-native/nape/phys/BodyList/) | `null` | Optional list to append results to instead of creating a new list (default null).  |

| Returns | Description |
|---------|-------------|
| [nape.phys.BodyList](/api-docs/clay-native/nape/phys/BodyList/) | A list of all the shapes for given circle.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="shapesInShape"><div class="plugin-name">nape</div><code><span class="field-name">shapesInShape</span><span class="parenthesis">(</span><span class="arg-name">shape</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">containment</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/dynamics/InteractionFilter/" class="type-link">nape.dynamics.InteractionFilter</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a></code><a class="header-anchor" href="#shapesInShape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate all Shapes given another shape.
<br/><br/>
If the filter argument is non-null, then only shapes who's filter
agrees to 'collide' will be considered. The input shape's own filter
is never used in this method. The input shape is considered a purely
geometric object.
<br/><br/>
The input shape must be part of a Body so as to be well defined.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `shape` | [nape.shape.Shape](/api-docs/clay-native/nape/shape/Shape/) | | The shape to use in classifying other shapes.  |
| `containment` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, then only Shapes entirely contained (Rather than simply intersected) will be considered. (default false)  |
| `filter` | [nape.dynamics.InteractionFilter](/api-docs/clay-native/nape/dynamics/InteractionFilter/) | `null` | Optional filter to pick and choose shapes, based on whether the filters agree to collide. (default null)  |
| `output` | [nape.shape.ShapeList](/api-docs/clay-native/nape/shape/ShapeList/) | `null` | Optional list to append results to instead of creating a new list (default null).  |

| Returns | Description |
|---------|-------------|
| [nape.shape.ShapeList](/api-docs/clay-native/nape/shape/ShapeList/) | A list of all the shapes for given shape.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bodiesInShape"><div class="plugin-name">nape</div><code><span class="field-name">bodiesInShape</span><span class="parenthesis">(</span><span class="arg-name">shape</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">containment</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/dynamics/InteractionFilter/" class="type-link">nape.dynamics.InteractionFilter</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a></code><a class="header-anchor" href="#bodiesInShape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate all Bodies given a shape.
<br/><br/>
If the filter argument is non-null, then only bodies with a shape
classified as being part of the input shape, whose filter agrees to collide
will be considered. The input shape is considered a purely geometric
<br/><br/>
The input shape must be part of a Body so as to be well defined.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `shape` | [nape.shape.Shape](/api-docs/clay-native/nape/shape/Shape/) | | The shape to use in classifying other shapes.  |
| `containment` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, then only Bodies entirely contained (Rather than simply intersecting) will be considered. (default false)  |
| `filter` | [nape.dynamics.InteractionFilter](/api-docs/clay-native/nape/dynamics/InteractionFilter/) | `null` | Optional filter to pick and choose shapes, based on whether the filters agree to collide. (default null)  |
| `output` | [nape.phys.BodyList](/api-docs/clay-native/nape/phys/BodyList/) | `null` | Optional list to append results to instead of creating a new list (default null).  |

| Returns | Description |
|---------|-------------|
| [nape.phys.BodyList](/api-docs/clay-native/nape/phys/BodyList/) | A list of all the bodies for given shape.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="shapesInBody"><div class="plugin-name">nape</div><code><span class="field-name">shapesInBody</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/dynamics/InteractionFilter/" class="type-link">nape.dynamics.InteractionFilter</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#shapesInBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate all Shapes given a Body.
<br/><br/>
If the filter argument is non-null, then only shapes who's filter
agrees to 'collide' will be considered. The input body's shape's own filters
are never used in this method. The input body is considered a purely
geometric object.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [nape.phys.Body](/api-docs/clay-native/nape/phys/Body/) | | The body to use in classifying other shapes.  |
| `filter` | [nape.dynamics.InteractionFilter](/api-docs/clay-native/nape/dynamics/InteractionFilter/) | `null` | Optional filter to pick and choose shapes, based on whether the filters agree to collide. (default null)  |
| `output` | [nape.shape.ShapeList](/api-docs/clay-native/nape/shape/ShapeList/) | `null` | Optional list to append results to instead of creating a new list (default null).  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-native/Null/)<[nape.shape.ShapeList](/api-docs/clay-native/nape/shape/ShapeList/)> | A list of all the shapes for given body.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bodiesInBody"><div class="plugin-name">nape</div><code><span class="field-name">bodiesInBody</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/dynamics/InteractionFilter/" class="type-link">nape.dynamics.InteractionFilter</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/phys/BodyList/" class="type-link">nape.phys.BodyList</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#bodiesInBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate all Bodies given a Body.
<br/><br/>
If the filter argument is non-null, then only bodies with a shape
classified as being part of the input body, whose filter agrees to collide
will be considered. The input body is considered a purely geometric



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [nape.phys.Body](/api-docs/clay-native/nape/phys/Body/) | | The body to use in classifying other bodies.  |
| `filter` | [nape.dynamics.InteractionFilter](/api-docs/clay-native/nape/dynamics/InteractionFilter/) | `null` | Optional filter to pick and choose shapes, based on whether the filters agree to collide. (default null)  |
| `output` | [nape.phys.BodyList](/api-docs/clay-native/nape/phys/BodyList/) | `null` | Optional list to append results to instead of creating a new list (default null).  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-native/Null/)<[nape.phys.BodyList](/api-docs/clay-native/nape/phys/BodyList/)> | A list of all the bodies for given body.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="convexCast"><div class="plugin-name">nape</div><code><span class="field-name">convexCast</span><span class="parenthesis">(</span><span class="arg-name">shape</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="operator">,</span> <span class="arg-name">deltaTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">liveSweep</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/dynamics/InteractionFilter/" class="type-link">nape.dynamics.InteractionFilter</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/geom/ConvexResult/" class="type-link">nape.geom.ConvexResult</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#convexCast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Perform a convex cast for soonest collision.
<br/><br/>
This method will return only the soonest collision result (if any), to find
more than this, use the convexMultiCast method. The shape will not be
swept further than the time delta provided.
Shapes already intersecting
the sweep shape at t = 0 are ignored.
<br/><br/>
If the filter argument is null, then all shapes will be collidable
otherwise only those for whose filter agrees to 'collide'.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `shape` | [nape.shape.Shape](/api-docs/clay-native/nape/shape/Shape/) | | The Shape to be cast through space. This shape must belong to a body whose velocity is used to define the sweep.  |
| `deltaTime` | [Float](/api-docs/clay-native/Float/) | | The amount of time to sweep the shape forward.  |
| `liveSweep` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, then moving objects in the space will have their motion considered during the sweep. Otherwise; like with normal rayCast, objects in the space are considered un-moving for the cast. (default false)  |
| `filter` | [nape.dynamics.InteractionFilter](/api-docs/clay-native/nape/dynamics/InteractionFilter/) | `null` | Optional filter to pick and choose shapes, based on whether the filters agree to collide. (default null)  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-native/Null/)<[nape.geom.ConvexResult](/api-docs/clay-native/nape/geom/ConvexResult/)> | The soonest result (if any) of convex intersection.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="convexMultiCast"><div class="plugin-name">nape</div><code><span class="field-name">convexMultiCast</span><span class="parenthesis">(</span><span class="arg-name">shape</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="operator">,</span> <span class="arg-name">deltaTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">liveSweep</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/dynamics/InteractionFilter/" class="type-link">nape.dynamics.InteractionFilter</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/ConvexResultList/" class="type-link">nape.geom.ConvexResultList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/ConvexResultList/" class="type-link">nape.geom.ConvexResultList</a></code><a class="header-anchor" href="#convexMultiCast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Perform a convex cast for all collisions in time order.
<br/><br/>
This method will return all collisions, or an empty list if there are none.
The shape will not be
swept further than the time delta provided. Shapes already intersecting
the sweep shape at t = 0 are ignored.
<br/><br/>
If the filter argument is null, then all shapes will be collidable
otherwise only those for whose filter agrees to 'collide'.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `shape` | [nape.shape.Shape](/api-docs/clay-native/nape/shape/Shape/) | | The Shape to be cast through space. This shape must belong to a body whose velocity is used to define the sweep.  |
| `deltaTime` | [Float](/api-docs/clay-native/Float/) | | The amount of time to sweep the shape forward.  |
| `liveSweep` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, then moving objects in the space will have their motion considered during the sweep. Otherwise; like with normal rayCast, objects in the space are considered un-moving for the cast. (default false)  |
| `filter` | [nape.dynamics.InteractionFilter](/api-docs/clay-native/nape/dynamics/InteractionFilter/) | `null` | Optional filter to pick and choose shapes, based on whether the filters agree to collide. (default null)  |
| `output` | [nape.geom.ConvexResultList](/api-docs/clay-native/nape/geom/ConvexResultList/) | | A list to append results to instead of allocating a new one (default null)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.ConvexResultList](/api-docs/clay-native/nape/geom/ConvexResultList/) | The collision results in time order.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rayCast"><div class="plugin-name">nape</div><code><span class="field-name">rayCast</span><span class="parenthesis">(</span><span class="arg-name">ray</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Ray/" class="type-link">nape.geom.Ray</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">inner</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/dynamics/InteractionFilter/" class="type-link">nape.dynamics.InteractionFilter</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/geom/RayResult/" class="type-link">nape.geom.RayResult</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#rayCast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Perform a ray cast for closest result.
<br/><br/>
This method will return only the closest result (if any), to find more
the first result, use the rayMultiCast method. The ray will not be
cast beyond its maxDistance.
<br/><br/>
If the filter argument is null, then all shapes will be intersectable
otherwise only those for whose filter agrees to 'collide'.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `ray` | [nape.geom.Ray](/api-docs/clay-native/nape/geom/Ray/) | | The ray to cast through space.  |
| `inner` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true then inner surfaces of shapes will also be intersected. otherwise only the outer surfaces. (default false)  |
| `filter` | [nape.dynamics.InteractionFilter](/api-docs/clay-native/nape/dynamics/InteractionFilter/) | `null` | Optional filter to pick and choose shapes, based on whether the filters agree to collide. (default null)  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-native/Null/)<[nape.geom.RayResult](/api-docs/clay-native/nape/geom/RayResult/)> | The closest result (if any) of ray intersection.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rayMultiCast"><div class="plugin-name">nape</div><code><span class="field-name">rayMultiCast</span><span class="parenthesis">(</span><span class="arg-name">ray</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Ray/" class="type-link">nape.geom.Ray</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">inner</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/dynamics/InteractionFilter/" class="type-link">nape.dynamics.InteractionFilter</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/RayResultList/" class="type-link">nape.geom.RayResultList</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/RayResultList/" class="type-link">nape.geom.RayResultList</a></code><a class="header-anchor" href="#rayMultiCast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Perform a ray cast for all valid results.
<br/><br/>
This method will return all intersections (in distance order) of ray
with shapes in the space up to the ray's maxDistance.
<br/><br/>
If the filter argument is null, then all shapes will be intersectable
otherwise only those for whose filter agrees to 'collide'.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `ray` | [nape.geom.Ray](/api-docs/clay-native/nape/geom/Ray/) | | The ray to cast through space.  |
| `inner` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true then inner surfaces of shapes will also be intersected. otherwise only the outer surfaces. (default false)  |
| `filter` | [nape.dynamics.InteractionFilter](/api-docs/clay-native/nape/dynamics/InteractionFilter/) | `null` | Optional filter to pick and choose shapes, based on whether the filters agree to collide. (default null)  |
| `output` | [nape.geom.RayResultList](/api-docs/clay-native/nape/geom/RayResultList/) | `null` | A list to append results to instead of allocating a new one (default null)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.RayResultList](/api-docs/clay-native/nape/geom/RayResultList/) | All valid results of ray cast in distance order from closest to furthest.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">gravity</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">broadphase</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/space/Broadphase/" class="type-link">Broadphase</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new Space object.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `gravity` | [nape.geom.Vec2](/api-docs/clay-native/nape/geom/Vec2/) | `null` | The gravity of this space. (default &#40;0,0&#41;)  |
| `broadphase` | [Broadphase](/api-docs/clay-native/nape/space/Broadphase/) | `null` | The broadphase type to use. (default DYNAMIC_AABB_TREE)  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


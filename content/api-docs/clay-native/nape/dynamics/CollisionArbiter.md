---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: CollisionArbiter
target: Clay (Native)
permalink: api-docs/clay-native/nape/dynamics/CollisionArbiter/
---

# CollisionArbiter

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/dynamics/CollisionArbiter.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/nape/dynamics/Arbiter/">Arbiter</a> → <strong>nape.dynamics.CollisionArbiter</strong> (final class)</div>

Arbiter sub type for collision interactions.

## Instance Members

<div class="signature field-var has-description has-plugin" id="contacts"><div class="plugin-name">nape</div><code><span class="field-name">contacts</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/dynamics/ContactList/" class="type-link">ContactList</a></code><a class="header-anchor" href="#contacts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set of contact points for the related pairs of shapes.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="normal"><div class="plugin-name">nape</div><code><span class="field-name">normal</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#normal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Normal of contact for collision interaction.
<br/><br/>
This normal will always point from arbiter's shape1, towards shape2 and
corresponds to the direction of the normal before positional integration
and erorr resolvement took place (Correct at time of pre-listener).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="radius"><div class="plugin-name">nape</div><code><span class="field-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#radius"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This radius property describes the sum of the circle's radii for the pair of shapes, with
a Polygon having 0 radius. This value is used in positional iterations to resolve penetrations
between the Shapes.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="referenceEdge1"><div class="plugin-name">nape</div><code><span class="field-name">referenceEdge1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/shape/Edge/" class="type-link">nape.shape.Edge</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#referenceEdge1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The reference edge for the collision on the first Polygon
If the first shape in Arbiter is a Circle this value is null.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="referenceEdge2"><div class="plugin-name">nape</div><code><span class="field-name">referenceEdge2</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/shape/Edge/" class="type-link">nape.shape.Edge</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#referenceEdge2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The reference edge for the collision on the second Polygon
If the second shape in Arbiter is a Circle this value is null.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="elasticity"><div class="plugin-name">nape</div><code><span class="field-name">elasticity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#elasticity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Coeffecient of combined elasticity for collision interaction.
<br/><br/>
The value is computed as the average of the Shape Material's elasticities
clamped to be in the range [0,1]
<br/><br/>
This value may be modified only during a PreListener, and once modified
will no longer be under Nape's control. Values must be in the range 0
to 1.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="dynamicFriction"><div class="plugin-name">nape</div><code><span class="field-name">dynamicFriction</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dynamicFriction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Coeffecient of combined dynamic friction for collision interaction.
<br/><br/>
The value is computed as the square root of the product of the Shape
Material's dynamicFriction coeffecients.
<br/><br/>
This value may be modified only during a PreListener, and once modified
will no longer be under Nape's control. Values must not be negative.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="staticFriction"><div class="plugin-name">nape</div><code><span class="field-name">staticFriction</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#staticFriction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Coeffecient of combined static friction for collision interaction.
<br/><br/>
The value is computed as the square root of the product of the Shape
Material's staticFriction coeffecients.
<br/><br/>
This value may be modified only during a PreListener, and once modified
will no longer be under Nape's control. Values must not be negative.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="rollingFriction"><div class="plugin-name">nape</div><code><span class="field-name">rollingFriction</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rollingFriction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Coeffecient of combined rolling friction for collision interaction.
<br/><br/>
The value is computed as the square root of the product of the Shape
Material's rollingFriction coeffecients.
<br/><br/>
This value may be modified only during a PreListener, and once modified
will no longer be under Nape's control. Values must not be negative.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="firstVertex"><div class="plugin-name">nape</div><code><span class="field-name">firstVertex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#firstVertex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

In the case that we have a Circle-Polygon collision, then this
function will return true, if the circle collided with the first
vertex of edge.
<br/><br/>
If both firstVertex() and secondVertex() are false, it indicates
the Circle collided with the edge.


| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="secondVertex"><div class="plugin-name">nape</div><code><span class="field-name">secondVertex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#secondVertex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if colliding Circle hit second vertex of reference edge.
<br/><br/>
In the case that we have a Circle-Polygon collision, then this
function will return true, if the circle collided with the second
vertex of edge.
<br/><br/>
If both firstVertex() and secondVertex() are false, it indicates
the Circle collided with the edge.


| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="normalImpulse"><div class="plugin-name">nape</div><code><span class="field-name">normalImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/Body/" class="type-link">nape.phys.Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">freshOnly</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#normalImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate normal reactive impulses for collision interaction for a given body.
<br/><br/>
If body argument is null, then the sum of the contact normal impulses will be returned instead
with no angular impulse derivable, the direction of this impulse will be the direction of the normal.
<br/>
If body argument is not null, then this will return the actual impulse applied to that specific body
rather than simply the sum of contact normal impulses, this will include angular impulses due to
positions of contact points and normal.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [nape.phys.Body](/api-docs/clay-native/nape/phys/Body/) | `null` | The Body to query normal impulse for. (default null)  |
| `freshOnly` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, then only 'new' contact points will be considered in computation. (default false)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/clay-native/nape/geom/Vec3/) | The impulse applied to the given body, considering normal reactive forces.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tangentImpulse"><div class="plugin-name">nape</div><code><span class="field-name">tangentImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/Body/" class="type-link">nape.phys.Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">freshOnly</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#tangentImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate tangent impulses for collision interaction.
<br/><br/>
If body argument is null, then the sum of the contact friction impulses is returned with
no angular impulse derivable, the direction of this impulse will be against the relative
velocity of the first body against the second.
<br/>
If the body argument is non-null, then the actual impulse applied to that body due to tangent
frictino impulses will be returned, including angular effects due to contact positions and normal.
<br/><br/>
These tangent impulses correspond to the forces of static and dynamic friction.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [nape.phys.Body](/api-docs/clay-native/nape/phys/Body/) | `null` | The Body to query tangent impulse for. (default null)  |
| `freshOnly` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, then only 'new' contact points will be considered in computation. (default false)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/clay-native/nape/geom/Vec3/) | The impulse applied to the given body, considering standard frictional forces.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="totalImpulse"><div class="plugin-name">nape</div><code><span class="field-name">totalImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/Body/" class="type-link">nape.phys.Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">freshOnly</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#totalImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate total contact impulses for collision interaction.
<br/><br/>
If body argument is null, then this will return the sum of linear contact impulses, and the sum
of contact rolling impulses.
<br/>
When body argument is non-null, this impulse will be the actual change in (mass weighted)
velocity that this collision caused to the Body in the previous time step.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [nape.phys.Body](/api-docs/clay-native/nape/phys/Body/) | `null` | The Body to query total impulse for. (default null)  |
| `freshOnly` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, then only 'new' contact points will be considered in computation. (default false)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/clay-native/nape/geom/Vec3/) | The impulse applied to the given body  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rollingImpulse"><div class="plugin-name">nape</div><code><span class="field-name">rollingImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/Body/" class="type-link">nape.phys.Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">freshOnly</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rollingImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate rolling friction impulses for collision interaction.
<br/><br/>
If body argument is null, then the sum of the rolling impulses of each contact will be returned
instead of the angular impulse applied to the specific body as a result of the rolling impulses.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [nape.phys.Body](/api-docs/clay-native/nape/phys/Body/) | `null` | The Body to query rolling impulse for. (default null)  |
| `freshOnly` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, then only 'new' contact points will be considered in computation. (default false)  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The angular impulse applied to the given body.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


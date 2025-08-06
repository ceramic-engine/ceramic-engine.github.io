---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Arbiter
target: Clay (Web)
permalink: api-docs/clay-web/nape/dynamics/Arbiter/
---

# Arbiter

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/dynamics/Arbiter.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.dynamics.Arbiter</strong> (Class) → <a href="/api-docs/clay-web/nape/dynamics/CollisionArbiter/">CollisionArbiter</a>, <a href="/api-docs/clay-web/nape/dynamics/FluidArbiter/">FluidArbiter</a></div>

Arbiter representing the state of an interaction between two Bodys.
<br/><br/>
These objects are automatically reused, and you should not keep your own
references to them.

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/dynamics/ZPP_Arbiter/" class="type-link">zpp_nape.dynamics.ZPP_Arbiter</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="isSleeping"><div class="plugin-name">nape</div><code><span class="field-name">isSleeping</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSleeping"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag representing arbiter sleep state.
<br/><br/>
When true, this arbiter is sleeping.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="type"><div class="plugin-name">nape</div><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/dynamics/ArbiterType/" class="type-link">ArbiterType</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The type of this Arbiter.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="collisionArbiter"><div class="plugin-name">nape</div><code><span class="field-name">collisionArbiter</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/nape/dynamics/CollisionArbiter/" class="type-link">CollisionArbiter</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#collisionArbiter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fast equivalent to casting this object to a CollisionArbiter.
<br/><br/>
This value is null when this arbiter is not a collision type.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="fluidArbiter"><div class="plugin-name">nape</div><code><span class="field-name">fluidArbiter</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/nape/dynamics/FluidArbiter/" class="type-link">FluidArbiter</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fluidArbiter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fast equivalent to casting this object to a FluidArbiter.
<br/><br/>
This value is null when this arbiter is not a fluid type.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="shape1"><div class="plugin-name">nape</div><code><span class="field-name">shape1</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/shape/Shape/" class="type-link">nape.shape.Shape</a></code><a class="header-anchor" href="#shape1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The first shape in Arbiter interaction.
<br/><br/>
It will always be the case that <code>arb.shape1.id < arb.shape2.id</code>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="shape2"><div class="plugin-name">nape</div><code><span class="field-name">shape2</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/shape/Shape/" class="type-link">nape.shape.Shape</a></code><a class="header-anchor" href="#shape2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The second shape in Arbiter interaction.
<br/><br/>
It will always be the case that <code>arb.shape1.id < arb.shape2.id</code>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="body1"><div class="plugin-name">nape</div><code><span class="field-name">body1</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/Body/" class="type-link">nape.phys.Body</a></code><a class="header-anchor" href="#body1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The first body in Arbiter interaction.
<br/><br/>
It will always be the case that <code>arb.shape1.body == arb.body1</code>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="body2"><div class="plugin-name">nape</div><code><span class="field-name">body2</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/Body/" class="type-link">nape.phys.Body</a></code><a class="header-anchor" href="#body2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The second body in Arbiter interaction.
<br/><br/>
It will always be the case that <code>arb.shape2.body == arb.body2</code>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="state"><div class="plugin-name">nape</div><code><span class="field-name">state</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/callbacks/PreFlag/" class="type-link">nape.callbacks.PreFlag</a></code><a class="header-anchor" href="#state"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The interaction state of this Arbiter.
<br/><br/>
This flag will, except for in a PreListener handler, always be either
<code>ImmState.ACCEPT</code> or <code>ImmState.IGNORE</code>
<br/>
During a PreListener handler, you can query this property to see what
the current state of the arbiter has been set to, and returning null from
the handler will keep the state unchanged.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isCollisionArbiter"><div class="plugin-name">nape</div><code><span class="field-name">isCollisionArbiter</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isCollisionArbiter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Equivalent to: <code>arb.type == ArbiterType.COLLISION</code>
</br><br/>


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if this Arbiter is a Collision type arbiter. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isFluidArbiter"><div class="plugin-name">nape</div><code><span class="field-name">isFluidArbiter</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isFluidArbiter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Equivalent to: <code>arb.type == ArbiterType.FLUID</code>
</br><br/>


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if this Arbiter is a Fluid type arbiter. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isSensorArbiter"><div class="plugin-name">nape</div><code><span class="field-name">isSensorArbiter</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSensorArbiter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Equivalent to: <code>arb.type == ArbiterType.SENSOR</code>
</br><br/>


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if this Arbiter is a Sensor type arbiter. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="totalImpulse"><div class="plugin-name">nape</div><code><span class="field-name">totalImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/Body/" class="type-link">nape.phys.Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">freshOnly</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#totalImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate the total impulse this arbiter applied to the given body for
the previous space step including angular impulse based on things like
contact position, or centre of buoyancy etc.
<br/><br/>
If body is null, then the constraint space impulse will be returned instead



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [nape.phys.Body](/api-docs/clay-web/nape/phys/Body/) | `null` | The body to query impulse for. (default null)  |
| `freshOnly` | [Bool](/api-docs/clay-web/Bool/) | `false` | If true, then only 'new' contact points will be queried for collision type arbiters. This field has no use on fluid type arbiters. (default false)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/clay-web/nape/geom/Vec3/) | The total impulse applied to the given body, or the constraint space impule if the body is null.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Private Members


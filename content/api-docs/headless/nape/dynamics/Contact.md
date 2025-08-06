---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Contact
target: Headless
permalink: api-docs/headless/nape/dynamics/Contact/
---

# Contact

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/dynamics/Contact.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.dynamics.Contact</strong> (final class)</div>

Contact point for collision interactions
<br/><br/>
These objects are automatically reused and you should not keep references to them.

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/dynamics/ZPP_Contact/" class="type-link">zpp_nape.dynamics.ZPP_Contact</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="arbiter"><div class="plugin-name">nape</div><code><span class="field-name">arbiter</span><span class="operator">:</span> <a href="/api-docs/headless/nape/dynamics/CollisionArbiter/" class="type-link">CollisionArbiter</a></code><a class="header-anchor" href="#arbiter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the CollisionArbiter this contact belongs to

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="penetration"><div class="plugin-name">nape</div><code><span class="field-name">penetration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#penetration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Penetration of bodies along normal for this contact.
<br/><br/>
This value may be negative and corresponds to the penetration (if at all)
of the contact point before positional integration and error resolvement
took place (correct at time of pre-listeners).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="position"><div class="plugin-name">nape</div><code><span class="field-name">position</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The world-space position of contact.
<br/><br/>
This value corresponds to the position
of the contact point before positional integration and error resolvement
took place (correct at time of pre-listeners).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="fresh"><div class="plugin-name">nape</div><code><span class="field-name">fresh</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#fresh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this contact is newly generated, or persistant from previous step.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="friction"><div class="plugin-name">nape</div><code><span class="field-name">friction</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#friction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The specific coeffecient of friction for this contact.
<br/><br/>
This value is equal either to the static or dynamic friction coeffecient of the arbiter
based on the relative velocity at contact point.
<br/><br/>
This value cannot be set, though you may implicitly set it exactly by modifying
the arbiter to have the same static and dynamic friction in the PreListener.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="normalImpulse"><div class="plugin-name">nape</div><code><span class="field-name">normalImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/headless/nape/phys/Body/" class="type-link">nape.phys.Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#normalImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate normal reactive impulses for this contact for a given body.
<br/><br/>
If body argument is null, then the contact normal impulses will be returned instead
with no angular impulse derivable, the direction of this impulse will be the direction of the normal.
<br/>
If body argument is not null, then this will return the actual impulse applied to that specific body
for this contact this will include angular impulses due to position of contact point and normal.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [nape.phys.Body](/api-docs/headless/nape/phys/Body/) | `null` | The Body to query normal impulse for. (default null)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/headless/nape/geom/Vec3/) | The impulse applied to the given body, considering normal reactive forces.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tangentImpulse"><div class="plugin-name">nape</div><code><span class="field-name">tangentImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/headless/nape/phys/Body/" class="type-link">nape.phys.Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#tangentImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate tangent impulses for this contact for a given body.
<br/><br/>
If body argument is null, then the contact friction impulses is returned with
no angular impulse derivable, the direction of this impulse will be against the relative
velocity of the first body against the second.
<br/>
If the body argument is non-null, then the actual impulse applied to that body due to tangent
frictino impulses will be returned, including angular effects due to contact position and normal.
<br/><br/>
These tangent impulses correspond to the forces of static and dynamic friction for this contact.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [nape.phys.Body](/api-docs/headless/nape/phys/Body/) | `null` | The Body to query tangent impulse for. (default null)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/headless/nape/geom/Vec3/) | The impulse applied to the given body, considering standard frictional forces.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rollingImpulse"><div class="plugin-name">nape</div><code><span class="field-name">rollingImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/headless/nape/phys/Body/" class="type-link">nape.phys.Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rollingImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate rolling friction impulses for this contact for a given body.
<br/><br/>
If body argument is null, then the rolling impulse of this contact will be returned
instead of the angular impulse applied to the specific body as a result of the rolling impulse.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [nape.phys.Body](/api-docs/headless/nape/phys/Body/) | `null` | The Body to query rolling impulse for. (default null)  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The angular impulse applied to the given body.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="totalImpulse"><div class="plugin-name">nape</div><code><span class="field-name">totalImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/headless/nape/phys/Body/" class="type-link">nape.phys.Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#totalImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluate total contact impulse for a given body.
<br/><br/>
If body argument is null, then this will return the sum of normal and tangent contact impulse, and the contact
rolling impulse.
<br/>
When body argument is non-null, this impulse will be the actual change in (mass weighted)
velocity that this contact caused to the Body in the previous time step.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [nape.phys.Body](/api-docs/headless/nape/phys/Body/) | `null` | The Body to query total impulse for. (default null)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/headless/nape/geom/Vec3/) | The impulse applied to the given body  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


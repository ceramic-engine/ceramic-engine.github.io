---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: InteractionFilter
target: Unity
permalink: api-docs/unity/nape/dynamics/InteractionFilter/
---

# InteractionFilter

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/dynamics/InteractionFilter.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.dynamics.InteractionFilter</strong> (final class)</div>

InteractionFilter provides bit flags for low-level filtering of interactions.
<br/><br/>
For a given interaction type, two Shapes will be permitted to interact only if
<code>(shape1.group & shape2.mask) != 0 && (shape2.group & shape1.mask) != 0</code>
<br/><br/>
There are 32 real groups corresponding to a set bit in the group/mask fields. For instance
a group value of 0x120 corresponds to the 'real' groups 5 and 8 as <code>0x120 = (1<<5) | (1<<8)</code>
<br/><br/>
Nape provides group/mask for each interaction type. The actual precedence of interactions
is further defined simply as: Sensor > Fluid > Collision.
<br/>
Two static bodies can never interact, and with the exception of sensor interaction, at least one
of the two bodies must be dynamic.
<br/>
Sensor interactions have the highest precedence, followed by fluid and then collisions.
Sensor interaction is permitted only if one of the shapes is sensorEnabled, whilst fluid
is permitted only if one of the shapes is fluidEnabled.
<pre>
if ((shapeA.sensorEnabled || shapeB.sensorEnabled) && shapeA.filter.shouldSense(shapeB.filter)) {
SENSOR INTERACTION!!
}
else if (bodyA.isDynamic() || bodyB.isDynamic()) {
if ((shapeA.fluidEnabled || shapeB.fluidEnabled) && shapeA.filter.shouldFlow(shapeB.filter)) {
FLUID INTERACTION!!
}
else if (shapeA.filter.shouldCollide(shapeB.filter)) {
COLLISION INTERACTION!!
}
}
</pre>

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/" class="type-link">zpp_nape.dynamics.ZPP_InteractionFilter</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="userData"><div class="plugin-name">nape</div><code><span class="field-name">userData</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#userData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dynamic object for user to store additional data.
<br/><br/>
This object cannot be set, only its dynamically created
properties may be set. In AS3 the type of this property is &#42
<br/><br/>
This object will be lazily constructed so that until accessed
for the first time, will be null internally.

@default {}

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="shapes"><div class="plugin-name">nape</div><code><span class="field-name">shapes</span><span class="operator">:</span> <a href="/api-docs/unity/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a></code><a class="header-anchor" href="#shapes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set of all active shapes using this object.
<br/><br/>
Activeness of a shape in the sense that the Shape's Body is inside of a Space.
<br/><br/>
This list is immutable.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="collisionGroup"><div class="plugin-name">nape</div><code><span class="field-name">collisionGroup</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#collisionGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Group bitfield for Collision type interactions.
@default 1

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="collisionMask"><div class="plugin-name">nape</div><code><span class="field-name">collisionMask</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#collisionMask"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mask bitfield for Collision type interactions.
@default -1 (all bits set)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="sensorGroup"><div class="plugin-name">nape</div><code><span class="field-name">sensorGroup</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#sensorGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Group bitfield for Sensor type interactions.
@default 1

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="sensorMask"><div class="plugin-name">nape</div><code><span class="field-name">sensorMask</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#sensorMask"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mask bitfield for Sensor type interactions.
@default -1 (all bits set)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="fluidGroup"><div class="plugin-name">nape</div><code><span class="field-name">fluidGroup</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#fluidGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Group bitfield for Fluid type interactions.
@default 1

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="fluidMask"><div class="plugin-name">nape</div><code><span class="field-name">fluidMask</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#fluidMask"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mask bitfield for Fluid type interactions.
@default -1 (all bits set)

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="shouldCollide"><div class="plugin-name">nape</div><code><span class="field-name">shouldCollide</span><span class="parenthesis">(</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="#" class="type-link">InteractionFilter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#shouldCollide"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine if objects are permitted to collide based on InteractionFilters
<br/><br/>
A collision type interaction can occur only if this returns True.



| Name | Type | Description |
|------|------|-------------|
| `filter` | [InteractionFilter](/api-docs/unity/nape/dynamics/InteractionFilter/) | The filter to evaluate possibility of collision with.  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True, if based on interaction filters only the two objects would be able to collide.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="shouldSense"><div class="plugin-name">nape</div><code><span class="field-name">shouldSense</span><span class="parenthesis">(</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="#" class="type-link">InteractionFilter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#shouldSense"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine if objects are permitted to sense based on InteractionFilters
<br/><br/>
A sensor type interaction can occur only if this returns True.



| Name | Type | Description |
|------|------|-------------|
| `filter` | [InteractionFilter](/api-docs/unity/nape/dynamics/InteractionFilter/) | The filter to evaluate possibility of sensor with.  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True, if based on interaction filters only the two objects would be able to sense.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="shouldFlow"><div class="plugin-name">nape</div><code><span class="field-name">shouldFlow</span><span class="parenthesis">(</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="#" class="type-link">InteractionFilter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#shouldFlow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine if objects are permitted to interact as fluids based on InteractionFilters
<br/><br/>
A fluid type interaction can occur only if this returns True.



| Name | Type | Description |
|------|------|-------------|
| `filter` | [InteractionFilter](/api-docs/unity/nape/dynamics/InteractionFilter/) | The filter to evaluate possibility of fluid with.  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True, if based on interaction filters only the two objects would be able to interact as fluids.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="copy"><div class="plugin-name">nape</div><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">InteractionFilter</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Produce a copy of this InteractionFilter


| Returns | Description |
|---------|-------------|
| [InteractionFilter](/api-docs/unity/nape/dynamics/InteractionFilter/) | The copy of this filter. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">collisionGroup</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collisionMask</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sensorGroup</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sensorMask</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fluidGroup</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fluidMask</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new InteractionFilter.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `collisionGroup` | [Int](/api-docs/unity/Int/) | `1` | The Group bitfield for Collision interactions. (default 1)  |
| `collisionMask` | [Int](/api-docs/unity/Int/) | `-1` | The Mask bitfield for Collision interactions. (default -1)  |
| `sensorGroup` | [Int](/api-docs/unity/Int/) | `1` | The Group bitfield for Sensor interactions. (default 1)  |
| `sensorMask` | [Int](/api-docs/unity/Int/) | `-1` | The Mask bitfield for Sensor interactions. (default -1)  |
| `fluidGroup` | [Int](/api-docs/unity/Int/) | `1` | The Group bitfield for Fluid interactions. (default 1)  |
| `fluidMask` | [Int](/api-docs/unity/Int/) | `-1` | The Mask bitfield for Fluid interactions. (default -1)  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:final` | - |


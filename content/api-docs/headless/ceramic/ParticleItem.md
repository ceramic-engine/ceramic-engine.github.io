---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ParticleItem
target: Headless
permalink: api-docs/headless/ceramic/ParticleItem/
---

# ParticleItem

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ParticleItem.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ParticleItem</strong> (Class)</div>

Represents a single particle in a particle system.

ParticleItem holds all the data for an individual particle including
its physical properties, visual appearance, and animation state.
Particles are managed by ParticleEmitter and should not be instantiated
directly by user code.

The particle's properties can change over its lifetime through:
- Linear interpolation between start and end values
- Physics simulation (velocity, acceleration, drag)
- Direct property manipulation

Visual synchronization:
When visual*Active flags are true, the particle automatically
updates the corresponding properties on its visual. This allows
the particle system to control the visual appearance efficiently.

<div class="see"><strong>See:</strong> ParticleEmitter The system that manages particle lifecycles, Visual The visual representation of the particle</div>


## Instance Members

<div class="signature field-var has-description" id="visual"><code><span class="field-name">visual</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#visual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The visual representation of this particle.
Can be any Visual subclass (Quad, Mesh, etc.).
Managed by the ParticleEmitter's pooling system.

<hr class="field-separator" />

<div class="signature field-var has-description" id="visualScaleActive"><code><span class="field-name">visualScaleActive</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visualScaleActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether particle scale should be applied to the visual.
When true, changes to scaleX/scaleY update visual.scaleX/scaleY.

<hr class="field-separator" />

<div class="signature field-var has-description" id="visualColorActive"><code><span class="field-name">visualColorActive</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visualColorActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether particle color should be applied to the visual.
When true, changes to color update visual's color (for Quad/Mesh).

<hr class="field-separator" />

<div class="signature field-var has-description" id="visualPositionActive"><code><span class="field-name">visualPositionActive</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visualPositionActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether particle position should be applied to the visual.
When true, changes to x/y update visual.x/y.

<hr class="field-separator" />

<div class="signature field-var has-description" id="visualRotationActive"><code><span class="field-name">visualRotationActive</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visualRotationActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether particle angle should be applied to the visual.
When true, changes to angle update visual.rotation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="visualAlphaActive"><code><span class="field-name">visualAlphaActive</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visualAlphaActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether particle alpha should be applied to the visual.
When true, changes to alpha update visual.alpha.

<hr class="field-separator" />

<div class="signature field-var has-description" id="active"><code><span class="field-name">active</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#active"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this particle is currently active in the simulation.
Inactive particles are in the recycling pool.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lifespan"><code><span class="field-name">lifespan</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lifespan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Total lifetime of the particle in seconds.
When age >= lifespan, the particle is recycled.
Set to 0 for infinite lifetime.

<hr class="field-separator" />

<div class="signature field-var has-description" id="age"><code><span class="field-name">age</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#age"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current age of the particle in seconds.
Increases each update by delta time.
Used to calculate interpolation progress.

<hr class="field-separator" />

<div class="signature field-var has-description" id="time"><code><span class="field-name">time</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#time"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The timestamp when this particle was emitted.
Uses Timer.now for absolute time reference.
Useful for time-based effects or debugging.

<hr class="field-separator" />

<div class="signature field-var has-description" id="random"><code><span class="field-name">random</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#random"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A random value between 0 and 1 unique to this particle.
Generated when emitted, remains constant during lifetime.
Useful for randomizing behavior without additional RNG calls.

<hr class="field-separator" />

<div class="signature field-var has-description" id="status"><code><span class="field-name">status</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#status"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom status field for user-defined particle states.
Can be used to track special conditions, animation states,
or any integer-based status specific to your implementation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="colorRangeActive"><code><span class="field-name">colorRangeActive</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#colorRangeActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether color interpolation over lifetime is active.
When true, color interpolates from colorRangeStart to colorRangeEnd.

<hr class="field-separator" />

<div class="signature field-var has-description" id="colorRangeStart"><code><span class="field-name">colorRangeStart</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#colorRangeStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starting color for interpolation.
The particle begins with this color at age 0.

<hr class="field-separator" />

<div class="signature field-var has-description" id="colorRangeEnd"><code><span class="field-name">colorRangeEnd</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#colorRangeEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ending color for interpolation.
The particle reaches this color at the end of its lifespan.

<hr class="field-separator" />

<div class="signature field-var has-description" id="color"><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current color of the particle.
When visualColorActive is true, automatically syncs with visual's color.
Supports Quad and Mesh visuals.

<hr class="field-separator" />

<div class="signature field-var has-description" id="accelerationRangeActive"><code><span class="field-name">accelerationRangeActive</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#accelerationRangeActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether acceleration interpolation over lifetime is active.

<hr class="field-separator" />

<div class="signature field-var has-description" id="accelerationRangeStartX"><code><span class="field-name">accelerationRangeStartX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#accelerationRangeStartX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starting X acceleration for interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="accelerationRangeStartY"><code><span class="field-name">accelerationRangeStartY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#accelerationRangeStartY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starting Y acceleration for interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="accelerationRangeEndX"><code><span class="field-name">accelerationRangeEndX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#accelerationRangeEndX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ending X acceleration for interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="accelerationRangeEndY"><code><span class="field-name">accelerationRangeEndY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#accelerationRangeEndY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ending Y acceleration for interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="accelerationX"><code><span class="field-name">accelerationX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#accelerationX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current X acceleration in pixels per second squared.
Positive values accelerate right, negative left.

<hr class="field-separator" />

<div class="signature field-var has-description" id="accelerationY"><code><span class="field-name">accelerationY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#accelerationY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current Y acceleration in pixels per second squared.
Positive values accelerate down, negative up.
Common use: positive value for gravity effect.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragRangeActive"><code><span class="field-name">dragRangeActive</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragRangeActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether drag interpolation over lifetime is active.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragRangeStartX"><code><span class="field-name">dragRangeStartX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragRangeStartX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starting X drag coefficient for interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragRangeStartY"><code><span class="field-name">dragRangeStartY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragRangeStartY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starting Y drag coefficient for interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragRangeEndX"><code><span class="field-name">dragRangeEndX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragRangeEndX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ending X drag coefficient for interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragRangeEndY"><code><span class="field-name">dragRangeEndY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragRangeEndY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ending Y drag coefficient for interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragX"><code><span class="field-name">dragX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current X drag coefficient.
Reduces velocity over time, simulating air resistance.
Higher values = more resistance.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragY"><code><span class="field-name">dragY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current Y drag coefficient.
Reduces velocity over time, simulating air resistance.
Higher values = more resistance.

<hr class="field-separator" />

<div class="signature field-var has-description" id="velocityRangeActive"><code><span class="field-name">velocityRangeActive</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#velocityRangeActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether velocity interpolation over lifetime is active.

<hr class="field-separator" />

<div class="signature field-var has-description" id="velocityRangeStartX"><code><span class="field-name">velocityRangeStartX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#velocityRangeStartX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starting X velocity for interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="velocityRangeStartY"><code><span class="field-name">velocityRangeStartY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#velocityRangeStartY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starting Y velocity for interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="velocityRangeEndX"><code><span class="field-name">velocityRangeEndX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#velocityRangeEndX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ending X velocity for interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="velocityRangeEndY"><code><span class="field-name">velocityRangeEndY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#velocityRangeEndY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ending Y velocity for interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="velocityX"><code><span class="field-name">velocityX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#velocityX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current X velocity in pixels per second.
Positive = right, negative = left.

<hr class="field-separator" />

<div class="signature field-var has-description" id="velocityY"><code><span class="field-name">velocityY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#velocityY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current Y velocity in pixels per second.
Positive = down, negative = up.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularVelocityRangeActive"><code><span class="field-name">angularVelocityRangeActive</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#angularVelocityRangeActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether angular velocity interpolation over lifetime is active.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularVelocityRangeStart"><code><span class="field-name">angularVelocityRangeStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularVelocityRangeStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starting angular velocity for interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularVelocityRangeEnd"><code><span class="field-name">angularVelocityRangeEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularVelocityRangeEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ending angular velocity for interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularVelocity"><code><span class="field-name">angularVelocity</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularVelocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current angular velocity in degrees per second.
Positive = clockwise, negative = counter-clockwise.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularAccelerationRangeActive"><code><span class="field-name">angularAccelerationRangeActive</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#angularAccelerationRangeActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether angular acceleration is active.
Note: Currently doesn't support interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularAccelerationRangeStart"><code><span class="field-name">angularAccelerationRangeStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularAccelerationRangeStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starting angular acceleration (unused currently).

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularAccelerationRangeEnd"><code><span class="field-name">angularAccelerationRangeEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularAccelerationRangeEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ending angular acceleration (unused currently).

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularAcceleration"><code><span class="field-name">angularAcceleration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularAcceleration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Angular acceleration in degrees per second squared.
Changes angular velocity over time.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularDrag"><code><span class="field-name">angularDrag</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularDrag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Angular drag coefficient.
Reduces angular velocity over time.
Higher values = more rotational resistance.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleRangeActive"><code><span class="field-name">scaleRangeActive</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#scaleRangeActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether scale interpolation over lifetime is active.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleRangeStartX"><code><span class="field-name">scaleRangeStartX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleRangeStartX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starting X scale for interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleRangeStartY"><code><span class="field-name">scaleRangeStartY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleRangeStartY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starting Y scale for interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleRangeEndX"><code><span class="field-name">scaleRangeEndX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleRangeEndX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ending X scale for interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleRangeEndY"><code><span class="field-name">scaleRangeEndY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleRangeEndY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ending Y scale for interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleX"><code><span class="field-name">scaleX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current X scale factor.
When visualScaleActive is true, automatically syncs with visual.scaleX.
1.0 = normal size, 2.0 = double width, 0.5 = half width.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleY"><code><span class="field-name">scaleY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current Y scale factor.
When visualScaleActive is true, automatically syncs with visual.scaleY.
1.0 = normal size, 2.0 = double height, 0.5 = half height.

<hr class="field-separator" />

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current X position in pixels.
When visualPositionActive is true, automatically syncs with visual.x.
Relative to the particle's parent visual.

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current Y position in pixels.
When visualPositionActive is true, automatically syncs with visual.y.
Relative to the particle's parent visual.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angle"><code><span class="field-name">angle</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current rotation angle in degrees.
When visualRotationActive is true, automatically syncs with visual.rotation.
0 = no rotation, 90 = quarter turn clockwise.

<hr class="field-separator" />

<div class="signature field-var has-description" id="alphaRangeActive"><code><span class="field-name">alphaRangeActive</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#alphaRangeActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether alpha interpolation over lifetime is active.

<hr class="field-separator" />

<div class="signature field-var has-description" id="alphaRangeStart"><code><span class="field-name">alphaRangeStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#alphaRangeStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starting alpha for interpolation.
1.0 = fully opaque.

<hr class="field-separator" />

<div class="signature field-var has-description" id="alphaRangeEnd"><code><span class="field-name">alphaRangeEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#alphaRangeEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ending alpha for interpolation.
0.0 = fully transparent.

<hr class="field-separator" />

<div class="signature field-var has-description" id="alpha"><code><span class="field-name">alpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#alpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current alpha transparency.
When visualAlphaActive is true, automatically syncs with visual.alpha.
Range: 0.0 (invisible) to 1.0 (opaque).

<hr class="field-separator" />

<div class="signature field-method has-description" id="scale"><code><span class="field-name">scale</span><span class="parenthesis">(</span><span class="arg-name">scaleX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scaleY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets both X and Y scale factors at once.



| Name | Type | Description |
|------|------|-------------|
| `scaleX` | [Float](/api-docs/headless/Float/) | Horizontal scale factor  |
| `scaleY` | [Float](/api-docs/headless/Float/) | Vertical scale factor |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pos"><code><span class="field-name">pos</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets both X and Y position at once.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/headless/Float/) | Horizontal position in pixels  |
| `y` | [Float](/api-docs/headless/Float/) | Vertical position in pixels |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reset"><code><span class="field-name">reset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets all particle properties to default values.

Called by ParticleEmitter when recycling a particle.
Ensures clean state for reused particles.

## Private Members

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Private constructor - ParticleItems are created and managed by ParticleEmitter.
User code should not instantiate particles directly.

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | ceramic.ParticleEmitter |


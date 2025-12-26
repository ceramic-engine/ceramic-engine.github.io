---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Particles
target: Unity
permalink: api-docs/unity/ceramic/Particles/
---

# Particles

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Particles.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">Visual</a> → <strong>ceramic.Particles</strong> (Class)</div>

A visual container that manages a particle emitter with convenient automatic emission modes.

Particles extends Visual to provide a high-level wrapper around ParticleEmitter,
adding features like automatic continuous emission and timed burst intervals.
This makes it easier to create self-contained particle effects that can be
added to the scene and configured with minimal code.

The class is generic, allowing use of custom ParticleEmitter subclasses for
specialized particle behaviors.

Key features:
- Automatic continuous emission with `autoEmit`
- Automatic burst intervals with `autoExplodeInterval`
- Forwards all emitter properties with `emitter*` prefix
- Lifecycle management - destroying particles destroys the emitter

```haxe
// Create auto-emitting smoke
var smoke = new Particles();
smoke.autoEmit = true;
smoke.emitterInterval = 0.05;
smoke.emitterLifespan(0.5, 1.0);
smoke.emitterSpeedStart(50, 100);
smoke.emitterAlphaEnd(0);
scene.add(smoke);

// Create periodic explosions
var explosions = new Particles();
explosions.autoExplodeInterval = 2.0; // Every 2 seconds
explosions.autoExplodeQuantity = 50;
explosions.emitterSpeedStart(100, 300);
scene.add(explosions);

// Use custom emitter
var custom = new Particles(new MyCustomEmitter());
```

<div class="see"><strong>See:</strong> ParticleEmitter The underlying emitter being managed, ParticleItem Individual particle data</div>


## Instance Members

<div class="signature field-var has-description" id="emitter"><code><span class="field-name">emitter</span><span class="operator">:</span> <span class="type-name">ceramic.Particles.T</span></code><a class="header-anchor" href="#emitter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The particle emitter managed by this visual.

Can be accessed directly for advanced configuration or
to call methods like `explode()` and `emitParticle()`.
Most common properties are also exposed with `emitter*` prefix.

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoEmit"><code><span class="field-name">autoEmit</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoEmit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to automatically emit particles continuously.

When set to true, starts continuous emission using `emitterInterval`.
When set to false, stops emission (existing particles continue).

Default: false

```haxe
particles.emitterInterval = 0.1; // Configure interval first
particles.autoEmit = true; // Start emitting
```

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoExplodeInterval"><code><span class="field-name">autoExplodeInterval</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#autoExplodeInterval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Interval in seconds between automatic burst emissions.

When set to a positive value, triggers burst emissions of
`autoExplodeQuantity` particles at regular intervals.
Set to -1 to disable automatic bursts.

Default: -1 (disabled)

```haxe
// Burst 30 particles every 1.5 seconds
particles.autoExplodeQuantity = 30;
particles.autoExplodeInterval = 1.5;
```

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoExplodeQuantity"><code><span class="field-name">autoExplodeQuantity</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#autoExplodeQuantity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of particles to emit in each automatic burst.

Used with `autoExplodeInterval` to create periodic bursts.
Only takes effect when `autoExplodeInterval` is positive.

Default: 64

<div class="see"><strong>See:</strong> autoExplodeInterval</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterPaused"><code><span class="field-name">emitterPaused</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterPaused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines whether the emitter is currently paused. It is totally safe to directly toggle this.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterInterval"><code><span class="field-name">emitterInterval</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterInterval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

How often a particle is emitted, if currently emitting.
Can be modified at the middle of an emission safely;

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterLaunchMode"><code><span class="field-name">emitterLaunchMode</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#emitterLaunchMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

How particles should be launched. If `CIRCLE` (default), particles will use `launchAngle` and `speed`.
Otherwise, particles will just use `velocityX` and `velocityY`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterKeepScaleRatio"><code><span class="field-name">emitterKeepScaleRatio</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterKeepScaleRatio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Keep the scale ratio of the particle. Uses the `scaleX` value for reference.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterVisualScaleActive"><code><span class="field-name">emitterVisualScaleActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterVisualScaleActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply particle scale to underlying visual or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterVisualColorActive"><code><span class="field-name">emitterVisualColorActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterVisualColorActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply particle color to underlying visual or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterVisualAlphaActive"><code><span class="field-name">emitterVisualAlphaActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterVisualAlphaActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply particle alpha to underlying visual or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterVisualPositionActive"><code><span class="field-name">emitterVisualPositionActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterVisualPositionActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply particle position (x & y) to underlying visual or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterVisualRotationActive"><code><span class="field-name">emitterVisualRotationActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterVisualRotationActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply particle angle to underlying visual rotation or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterWidth"><code><span class="field-name">emitterWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the emission area.
If not defined (`-1`), will use visual's width bound to this `ParticleEmitter` object, if any

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterHeight"><code><span class="field-name">emitterHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the emission area.
If not defined (`-1`), will use visual's height bound to this `ParticleEmitter` object, if any

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterX"><code><span class="field-name">emitterX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x position of the emission, relative to particles parent (if any)

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterY"><code><span class="field-name">emitterY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y position of the emission, relative to particles parent (if any)

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterVelocityActive"><code><span class="field-name">emitterVelocityActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterVelocityActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable the velocity range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end. Only used with `SQUARE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterMaxVelocityX"><code><span class="field-name">emitterMaxVelocityX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterMaxVelocityX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If you are using `acceleration`, you can use `maxVelocity` with it
to cap the speed automatically (very useful!).

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterMaxVelocityY"><code><span class="field-name">emitterMaxVelocityY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterMaxVelocityY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If you are using `acceleration`, you can use `maxVelocity` with it
to cap the speed automatically (very useful!).

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterVelocityStartMinX"><code><span class="field-name">emitterVelocityStartMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterVelocityStartMinX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end. Only used with `SQUARE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterVelocityStartMinY"><code><span class="field-name">emitterVelocityStartMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterVelocityStartMinY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end. Only used with `SQUARE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterVelocityStartMaxX"><code><span class="field-name">emitterVelocityStartMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterVelocityStartMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end. Only used with `SQUARE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterVelocityStartMaxY"><code><span class="field-name">emitterVelocityStartMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterVelocityStartMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end. Only used with `SQUARE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterVelocityEndMinX"><code><span class="field-name">emitterVelocityEndMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterVelocityEndMinX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end. Only used with `SQUARE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterVelocityEndMinY"><code><span class="field-name">emitterVelocityEndMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterVelocityEndMinY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end. Only used with `SQUARE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterVelocityEndMaxX"><code><span class="field-name">emitterVelocityEndMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterVelocityEndMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end. Only used with `SQUARE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterVelocityEndMaxY"><code><span class="field-name">emitterVelocityEndMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterVelocityEndMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end. Only used with `SQUARE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterSpeedStartMin"><code><span class="field-name">emitterSpeedStartMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterSpeedStartMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the speed range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end. Only used with `CIRCLE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterSpeedStartMax"><code><span class="field-name">emitterSpeedStartMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterSpeedStartMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the speed range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end. Only used with `CIRCLE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterSpeedEndMin"><code><span class="field-name">emitterSpeedEndMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterSpeedEndMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the speed range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end. Only used with `CIRCLE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterSpeedEndMax"><code><span class="field-name">emitterSpeedEndMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterSpeedEndMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the speed range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end. Only used with `CIRCLE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterMaxAngularVelocity"><code><span class="field-name">emitterMaxAngularVelocity</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterMaxAngularVelocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Use in conjunction with angularAcceleration for fluid spin speed control.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAngularAccelerationActive"><code><span class="field-name">emitterAngularAccelerationActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterAngularAccelerationActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable the angular acceleration range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAngularAccelerationStartMin"><code><span class="field-name">emitterAngularAccelerationStartMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAngularAccelerationStartMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the angular acceleration range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAngularAccelerationStartMax"><code><span class="field-name">emitterAngularAccelerationStartMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAngularAccelerationStartMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the angular acceleration range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAngularDragActive"><code><span class="field-name">emitterAngularDragActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterAngularDragActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable the angular drag range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAngularDragStartMin"><code><span class="field-name">emitterAngularDragStartMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAngularDragStartMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the angular drag range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAngularDragStartMax"><code><span class="field-name">emitterAngularDragStartMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAngularDragStartMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the angular drag range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAngularVelocityActive"><code><span class="field-name">emitterAngularVelocityActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterAngularVelocityActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable the angular velocity range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAngularVelocityStartMin"><code><span class="field-name">emitterAngularVelocityStartMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAngularVelocityStartMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angular velocity range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAngularVelocityStartMax"><code><span class="field-name">emitterAngularVelocityStartMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAngularVelocityStartMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angular velocity range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAngularVelocityEndMin"><code><span class="field-name">emitterAngularVelocityEndMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAngularVelocityEndMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angular velocity range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAngularVelocityEndMax"><code><span class="field-name">emitterAngularVelocityEndMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAngularVelocityEndMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angular velocity range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAngleActive"><code><span class="field-name">emitterAngleActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterAngleActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable the angle range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
`angleEndMin` and `angleEndMax` are ignored unless `ignoreAngularVelocity` is set to `true`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAngleStartMin"><code><span class="field-name">emitterAngleStartMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAngleStartMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angle range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
`angleEndMin` and `angleEndMax` are ignored unless `ignoreAngularVelocity` is set to `true`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAngleStartMax"><code><span class="field-name">emitterAngleStartMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAngleStartMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angle range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
`angleEndMin` and `angleEndMax` are ignored unless `ignoreAngularVelocity` is set to `true`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAngleEndMin"><code><span class="field-name">emitterAngleEndMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAngleEndMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angle range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
`angleEndMin` and `angleEndMax` are ignored unless `ignoreAngularVelocity` is set to `true`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAngleEndMax"><code><span class="field-name">emitterAngleEndMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAngleEndMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angle range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
`angleEndMin` and `angleEndMax` are ignored unless `ignoreAngularVelocity` is set to `true`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterIgnoreAngularVelocity"><code><span class="field-name">emitterIgnoreAngularVelocity</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterIgnoreAngularVelocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set this if you want to specify the beginning and ending value of angle,
instead of using `angularVelocity` (or `angularAcceleration`).

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterLaunchAngleActive"><code><span class="field-name">emitterLaunchAngleActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterLaunchAngleActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable the angle range at which particles will be launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
Ignored unless `launchMode` is set to `CIRCLE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterLaunchAngleMin"><code><span class="field-name">emitterLaunchAngleMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterLaunchAngleMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angle range at which particles will be launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
Ignored unless `launchMode` is set to `CIRCLE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterLaunchAngleMax"><code><span class="field-name">emitterLaunchAngleMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterLaunchAngleMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angle range at which particles will be launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
Ignored unless `launchMode` is set to `CIRCLE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterLifespanActive"><code><span class="field-name">emitterLifespanActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterLifespanActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable the life, or duration, range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterLifespanMin"><code><span class="field-name">emitterLifespanMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterLifespanMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The life, or duration, range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterLifespanMax"><code><span class="field-name">emitterLifespanMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterLifespanMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The life, or duration, range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterScaleActive"><code><span class="field-name">emitterScaleActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterScaleActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable `scale` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterScaleStartMinX"><code><span class="field-name">emitterScaleStartMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterScaleStartMinX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterScaleStartMinY"><code><span class="field-name">emitterScaleStartMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterScaleStartMinY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterScaleStartMaxX"><code><span class="field-name">emitterScaleStartMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterScaleStartMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterScaleStartMaxY"><code><span class="field-name">emitterScaleStartMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterScaleStartMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterScaleEndMinX"><code><span class="field-name">emitterScaleEndMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterScaleEndMinX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterScaleEndMinY"><code><span class="field-name">emitterScaleEndMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterScaleEndMinY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterScaleEndMaxX"><code><span class="field-name">emitterScaleEndMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterScaleEndMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterScaleEndMaxY"><code><span class="field-name">emitterScaleEndMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterScaleEndMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAlphaActive"><code><span class="field-name">emitterAlphaActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterAlphaActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable `alpha` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAlphaStartMin"><code><span class="field-name">emitterAlphaStartMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAlphaStartMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `alpha` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAlphaStartMax"><code><span class="field-name">emitterAlphaStartMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAlphaStartMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `alpha` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAlphaEndMin"><code><span class="field-name">emitterAlphaEndMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAlphaEndMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `alpha` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAlphaEndMax"><code><span class="field-name">emitterAlphaEndMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAlphaEndMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `alpha` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterColorActive"><code><span class="field-name">emitterColorActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterColorActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable `color` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterColorStartMin"><code><span class="field-name">emitterColorStartMin</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#emitterColorStartMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `color` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterColorStartMax"><code><span class="field-name">emitterColorStartMax</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#emitterColorStartMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `color` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterColorEndMin"><code><span class="field-name">emitterColorEndMin</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#emitterColorEndMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `color` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterColorEndMax"><code><span class="field-name">emitterColorEndMax</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#emitterColorEndMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `color` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterDragActive"><code><span class="field-name">emitterDragActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterDragActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable X and Y drag component of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterDragStartMinX"><code><span class="field-name">emitterDragStartMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterDragStartMinX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets X and Y drag component of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterDragStartMinY"><code><span class="field-name">emitterDragStartMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterDragStartMinY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets X and Y drag component of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterDragStartMaxX"><code><span class="field-name">emitterDragStartMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterDragStartMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets X and Y drag component of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterDragStartMaxY"><code><span class="field-name">emitterDragStartMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterDragStartMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets X and Y drag component of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterDragEndMinX"><code><span class="field-name">emitterDragEndMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterDragEndMinX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets X and Y drag component of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterDragEndMinY"><code><span class="field-name">emitterDragEndMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterDragEndMinY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets X and Y drag component of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterDragEndMaxX"><code><span class="field-name">emitterDragEndMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterDragEndMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets X and Y drag component of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterDragEndMaxY"><code><span class="field-name">emitterDragEndMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterDragEndMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets X and Y drag component of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAccelerationActive"><code><span class="field-name">emitterAccelerationActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emitterAccelerationActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable the `acceleration` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
Set acceleration y-values to give particles gravity.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAccelerationStartMinX"><code><span class="field-name">emitterAccelerationStartMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAccelerationStartMinX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `acceleration` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
Set acceleration y-values to give particles gravity.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAccelerationStartMinY"><code><span class="field-name">emitterAccelerationStartMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAccelerationStartMinY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `acceleration` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
Set acceleration y-values to give particles gravity.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAccelerationStartMaxX"><code><span class="field-name">emitterAccelerationStartMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAccelerationStartMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `acceleration` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
Set acceleration y-values to give particles gravity.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAccelerationStartMaxY"><code><span class="field-name">emitterAccelerationStartMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAccelerationStartMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `acceleration` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
Set acceleration y-values to give particles gravity.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAccelerationEndMinX"><code><span class="field-name">emitterAccelerationEndMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAccelerationEndMinX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `acceleration` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
Set acceleration y-values to give particles gravity.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAccelerationEndMinY"><code><span class="field-name">emitterAccelerationEndMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAccelerationEndMinY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `acceleration` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
Set acceleration y-values to give particles gravity.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAccelerationEndMaxX"><code><span class="field-name">emitterAccelerationEndMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAccelerationEndMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `acceleration` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
Set acceleration y-values to give particles gravity.

<hr class="field-separator" />

<div class="signature field-var has-description" id="emitterAccelerationEndMaxY"><code><span class="field-name">emitterAccelerationEndMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#emitterAccelerationEndMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `acceleration` range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
Set acceleration y-values to give particles gravity.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterSize"><code><span class="field-name">emitterSize</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width and height of the emission area.
If not defined (`-1`), will use visual's width and height bound to this `ParticleEmitter` object, if any

| Name | Type |
|------|------|
| `width` | [Float](/api-docs/unity/Float/) |
| `height` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterPos"><code><span class="field-name">emitterPos</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x and y position of the emission, relative to particles parent (if any)

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterMaxVelocity"><code><span class="field-name">emitterMaxVelocity</span><span class="parenthesis">(</span><span class="arg-name">maxVelocityX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">maxVelocityY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterMaxVelocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If you are using `acceleration`, you can use `maxVelocity` with it
to cap the speed automatically (very useful!).

| Name | Type |
|------|------|
| `maxVelocityX` | [Float](/api-docs/unity/Float/) |
| `maxVelocityY` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterVelocityStart"><code><span class="field-name">emitterVelocityStart</span><span class="parenthesis">(</span><span class="arg-name">startMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">startMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterVelocityStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity starting range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end. Only used with `SQUARE`.

| Name | Type | Default |
|------|------|---------|
| `startMinX` | [Float](/api-docs/unity/Float/) | |
| `startMinY` | [Float](/api-docs/unity/Float/) | |
| `startMaxX` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `startMaxY` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterVelocityEnd"><code><span class="field-name">emitterVelocityEnd</span><span class="parenthesis">(</span><span class="arg-name">endMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">endMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterVelocityEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity ending range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end. Only used with `SQUARE`.

| Name | Type | Default |
|------|------|---------|
| `endMinX` | [Float](/api-docs/unity/Float/) | |
| `endMinY` | [Float](/api-docs/unity/Float/) | |
| `endMaxX` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `endMaxY` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterSpeedStart"><code><span class="field-name">emitterSpeedStart</span><span class="parenthesis">(</span><span class="arg-name">startMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterSpeedStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the speed starting range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end. Only used with `CIRCLE`.

| Name | Type | Default |
|------|------|---------|
| `startMin` | [Float](/api-docs/unity/Float/) | |
| `startMax` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterSpeedEnd"><code><span class="field-name">emitterSpeedEnd</span><span class="parenthesis">(</span><span class="arg-name">endMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterSpeedEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the speed ending range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end. Only used with `CIRCLE`.

| Name | Type | Default |
|------|------|---------|
| `endMin` | [Float](/api-docs/unity/Float/) | |
| `endMax` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterAngularAcceleration"><code><span class="field-name">emitterAngularAcceleration</span><span class="parenthesis">(</span><span class="arg-name">startMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">startMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterAngularAcceleration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the angular acceleration range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

| Name | Type |
|------|------|
| `startMin` | [Float](/api-docs/unity/Float/) |
| `startMax` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterAngularDrag"><code><span class="field-name">emitterAngularDrag</span><span class="parenthesis">(</span><span class="arg-name">startMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">startMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterAngularDrag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the angular drag range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

| Name | Type |
|------|------|
| `startMin` | [Float](/api-docs/unity/Float/) |
| `startMax` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterAngularVelocityStart"><code><span class="field-name">emitterAngularVelocityStart</span><span class="parenthesis">(</span><span class="arg-name">startMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterAngularVelocityStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angular velocity starting range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

| Name | Type | Default |
|------|------|---------|
| `startMin` | [Float](/api-docs/unity/Float/) | |
| `startMax` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterAngularVelocityEnd"><code><span class="field-name">emitterAngularVelocityEnd</span><span class="parenthesis">(</span><span class="arg-name">endMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterAngularVelocityEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angular velocity ending range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

| Name | Type | Default |
|------|------|---------|
| `endMin` | [Float](/api-docs/unity/Float/) | |
| `endMax` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterAngleStart"><code><span class="field-name">emitterAngleStart</span><span class="parenthesis">(</span><span class="arg-name">startMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterAngleStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angle starting range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
`angleEndMin` and `angleEndMax` are ignored unless `ignoreAngularVelocity` is set to `true`.

| Name | Type | Default |
|------|------|---------|
| `startMin` | [Float](/api-docs/unity/Float/) | |
| `startMax` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterAngleEnd"><code><span class="field-name">emitterAngleEnd</span><span class="parenthesis">(</span><span class="arg-name">endMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterAngleEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angle ending range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
`angleEndMin` and `angleEndMax` are ignored unless `ignoreAngularVelocity` is set to `true`.

| Name | Type | Default |
|------|------|---------|
| `endMin` | [Float](/api-docs/unity/Float/) | |
| `endMax` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterLaunchAngle"><code><span class="field-name">emitterLaunchAngle</span><span class="parenthesis">(</span><span class="arg-name">min</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">max</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterLaunchAngle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angle range at which particles will be launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.
Ignored unless `launchMode` is set to `CIRCLE`.

| Name | Type |
|------|------|
| `min` | [Float](/api-docs/unity/Float/) |
| `max` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterLifespan"><code><span class="field-name">emitterLifespan</span><span class="parenthesis">(</span><span class="arg-name">min</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">max</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterLifespan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The life, or duration, range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

| Name | Type |
|------|------|
| `min` | [Float](/api-docs/unity/Float/) |
| `max` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterScaleStart"><code><span class="field-name">emitterScaleStart</span><span class="parenthesis">(</span><span class="arg-name">startMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">startMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterScaleStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` starting range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

| Name | Type | Default |
|------|------|---------|
| `startMinX` | [Float](/api-docs/unity/Float/) | |
| `startMinY` | [Float](/api-docs/unity/Float/) | |
| `startMaxX` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `startMaxY` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterScaleEnd"><code><span class="field-name">emitterScaleEnd</span><span class="parenthesis">(</span><span class="arg-name">endMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">endMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterScaleEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` ending range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

| Name | Type | Default |
|------|------|---------|
| `endMinX` | [Float](/api-docs/unity/Float/) | |
| `endMinY` | [Float](/api-docs/unity/Float/) | |
| `endMaxX` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `endMaxY` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterAccelerationStart"><code><span class="field-name">emitterAccelerationStart</span><span class="parenthesis">(</span><span class="arg-name">startMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">startMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterAccelerationStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `acceleration` starting range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

| Name | Type | Default |
|------|------|---------|
| `startMinX` | [Float](/api-docs/unity/Float/) | |
| `startMinY` | [Float](/api-docs/unity/Float/) | |
| `startMaxX` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `startMaxY` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterAccelerationEnd"><code><span class="field-name">emitterAccelerationEnd</span><span class="parenthesis">(</span><span class="arg-name">endMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">endMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterAccelerationEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `acceleration` ending range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

| Name | Type | Default |
|------|------|---------|
| `endMinX` | [Float](/api-docs/unity/Float/) | |
| `endMinY` | [Float](/api-docs/unity/Float/) | |
| `endMaxX` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `endMaxY` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterDragStart"><code><span class="field-name">emitterDragStart</span><span class="parenthesis">(</span><span class="arg-name">startMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">startMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterDragStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `drag` starting range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

| Name | Type | Default |
|------|------|---------|
| `startMinX` | [Float](/api-docs/unity/Float/) | |
| `startMinY` | [Float](/api-docs/unity/Float/) | |
| `startMaxX` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `startMaxY` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterdragEnd"><code><span class="field-name">emitterdragEnd</span><span class="parenthesis">(</span><span class="arg-name">endMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">endMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterdragEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `drag` ending range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

| Name | Type | Default |
|------|------|---------|
| `endMinX` | [Float](/api-docs/unity/Float/) | |
| `endMinY` | [Float](/api-docs/unity/Float/) | |
| `endMaxX` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `endMaxY` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterColorStart"><code><span class="field-name">emitterColorStart</span><span class="parenthesis">(</span><span class="arg-name">startMin</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMax</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterColorStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `color` starting range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

| Name | Type | Default |
|------|------|---------|
| `startMin` | [Color](/api-docs/unity/ceramic/Color/) | |
| `startMax` | [Color](/api-docs/unity/ceramic/Color/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterColorEnd"><code><span class="field-name">emitterColorEnd</span><span class="parenthesis">(</span><span class="arg-name">endMin</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMax</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterColorEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `color` ending range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

| Name | Type | Default |
|------|------|---------|
| `endMin` | [Color](/api-docs/unity/ceramic/Color/) | |
| `endMax` | [Color](/api-docs/unity/ceramic/Color/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterAlphaStart"><code><span class="field-name">emitterAlphaStart</span><span class="parenthesis">(</span><span class="arg-name">startMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterAlphaStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `alpha` starting range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

| Name | Type | Default |
|------|------|---------|
| `startMin` | [Float](/api-docs/unity/Float/) | |
| `startMax` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitterAlphaEnd"><code><span class="field-name">emitterAlphaEnd</span><span class="parenthesis">(</span><span class="arg-name">endMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitterAlphaEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `alpha` ending range of particles launched from this #if cs (cast emitter:ParticleEmitter) #else emitter #end.

| Name | Type | Default |
|------|------|---------|
| `endMin` | [Float](/api-docs/unity/Float/) | |
| `endMax` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">emitter</span><span class="operator">:</span> <span class="type-name">ceramic.Particles.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Particles visual with an optional custom emitter.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `emitter` | ceramic.Particles.T | *(optional)* | Optional custom ParticleEmitter instance or subclass. If not provided, creates a standard ParticleEmitter. |

## Private Members

<div class="signature field-method has-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes the particles system.

Sets up lifecycle binding so that destroying the emitter
also destroys this visual container.

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearExplodeInterval"><code><span class="field-name">clearExplodeInterval</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearExplodeInterval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Timer cleanup function for auto-explode intervals.

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeAutoExplode"><code><span class="field-name">computeAutoExplode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeAutoExplode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the automatic explosion timer based on current settings.

Clears any existing timer and creates a new one if both
interval and quantity are positive.

<hr class="field-separator" />

<div class="signature field-method has-description" id="doAutoExplode"><code><span class="field-name">doAutoExplode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doAutoExplode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Executes an automatic burst emission.

Called by the interval timer to emit the configured
quantity of particles.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


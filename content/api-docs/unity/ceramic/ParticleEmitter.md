---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ParticleEmitter
target: Unity
permalink: api-docs/unity/ceramic/ParticleEmitter/
---

# ParticleEmitter

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ParticleEmitter.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <strong>ceramic.ParticleEmitter</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/tracker/Observable/">tracker.Observable</a>, <a href="/api-docs/unity/ceramic/Component/">Component</a></div>

A powerful and flexible particle emitter system for creating visual effects.

ParticleEmitter manages the creation, animation, and recycling of particles
to create effects like fire, smoke, explosions, rain, snow, and more.
The emitter can be attached as a component to any Visual entity.

Features:
- Continuous or burst emission modes
- Full control over particle properties and their evolution over time
- Efficient particle pooling and recycling
- Support for custom particle visuals
- Deterministic random generation with seeding
- Launch modes: circular (angle-based) or square (velocity-based)

Particle properties that can be animated over lifetime:
- Position, velocity, acceleration, and drag
- Scale, rotation, and angular velocity
- Color and alpha transparency
- Custom ranges for randomization

```haxe
// Create a fire effect
var fire = new ParticleEmitter();
fire.launchMode = CIRCLE;
fire.launchAngle(-90, -90);
fire.speedStart(100, 150);
fire.lifespan(0.5, 1.0);
fire.scaleStart(0.5, 1.0);
fire.scaleEnd(0.1, 0.2);
fire.colorStart(Color.YELLOW, Color.ORANGE);
fire.colorEnd(Color.RED);
fire.alphaEnd(0);
fire.emitContinuously(0.05);
myVisual.component('particles', fire);

// Create an explosion
var explosion = new ParticleEmitter();
explosion.speedStart(200, 400);
explosion.lifespan(0.3, 0.6);
explosion.scaleEnd(2.0);
explosion.alphaEnd(0);
explosion.explode(50); // Emit 50 particles at once
```

<div class="see"><strong>See:</strong> ParticleItem The individual particle data structure, Particles For managing multiple emitters, ParticlesLaunchMode For launch mode options</div>


## Instance Members

<div class="signature field-var has-description" id="observedDirty"><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="entity"><code><span class="field-name">entity</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The visual entity this emitter is attached to when used as a component.
Particles will be added as children of this visual.

<hr class="field-separator" />

<div class="signature field-var has-description" id="visual"><code><span class="field-name">visual</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#visual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The visual that particles are added to as children.
Can be set directly or automatically assigned when used as a component.
If null, particles won't be displayed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="status"><code><span class="field-name">status</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#status"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines whether the emitter is currently emitting particles or not

<hr class="field-separator" />

<div class="signature field-var has-description" id="paused"><code><span class="field-name">paused</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#paused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines whether the emitter is currently paused. It is totally safe to directly toggle this.

<hr class="field-separator" />

<div class="signature field-var has-description" id="interval"><code><span class="field-name">interval</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#interval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

How often a particle is emitted, if currently emitting.
Can be modified at the middle of an emission safely;

<hr class="field-separator" />

<div class="signature field-var has-description" id="launchMode"><code><span class="field-name">launchMode</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#launchMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

How particles should be launched. If `CIRCLE` (default), particles will use `launchAngle` and `speed`.
Otherwise, particles will just use `velocityX` and `velocityY`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="keepScaleRatio"><code><span class="field-name">keepScaleRatio</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#keepScaleRatio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Keep the scale ratio of the particle. Uses the `scaleX` value for reference.

<hr class="field-separator" />

<div class="signature field-var has-description" id="visualScaleActive"><code><span class="field-name">visualScaleActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visualScaleActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply particle scale to underlying visual or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="visualColorActive"><code><span class="field-name">visualColorActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visualColorActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply particle color to underlying visual or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="visualPositionActive"><code><span class="field-name">visualPositionActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visualPositionActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply particle position (x & y) to underlying visual or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="visualRotationActive"><code><span class="field-name">visualRotationActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visualRotationActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply particle angle to underlying visual rotation or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="visualAlphaActive"><code><span class="field-name">visualAlphaActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visualAlphaActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply particle alpha to underlying visual or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the emission area.
If not defined (`-1`), will use visual's width bound to this `ParticleEmitter` object, if any

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the emission area.
If not defined (`-1`), will use visual's height bound to this `ParticleEmitter` object, if any

<hr class="field-separator" />

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x position of the emission, relative to particles parent (if any)

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y position of the emission, relative to particles parent (if any)

<hr class="field-separator" />

<div class="signature field-var has-description" id="maxVelocityX"><code><span class="field-name">maxVelocityX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxVelocityX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If you are using `acceleration`, you can use `maxVelocity` with it
to cap the speed automatically (very useful!).

<hr class="field-separator" />

<div class="signature field-var has-description" id="maxVelocityY"><code><span class="field-name">maxVelocityY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxVelocityY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If you are using `acceleration`, you can use `maxVelocity` with it
to cap the speed automatically (very useful!).

<hr class="field-separator" />

<div class="signature field-var has-description" id="velocityActive"><code><span class="field-name">velocityActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#velocityActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable the velocity range of particles launched from this emitter. Only used with `SQUARE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="velocityStartMinX"><code><span class="field-name">velocityStartMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#velocityStartMinX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity range of particles launched from this emitter. Only used with `SQUARE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="velocityStartMinY"><code><span class="field-name">velocityStartMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#velocityStartMinY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity range of particles launched from this emitter. Only used with `SQUARE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="velocityStartMaxX"><code><span class="field-name">velocityStartMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#velocityStartMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity range of particles launched from this emitter. Only used with `SQUARE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="velocityStartMaxY"><code><span class="field-name">velocityStartMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#velocityStartMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity range of particles launched from this emitter. Only used with `SQUARE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="velocityEndMinX"><code><span class="field-name">velocityEndMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#velocityEndMinX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity range of particles launched from this emitter. Only used with `SQUARE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="velocityEndMinY"><code><span class="field-name">velocityEndMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#velocityEndMinY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity range of particles launched from this emitter. Only used with `SQUARE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="velocityEndMaxX"><code><span class="field-name">velocityEndMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#velocityEndMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity range of particles launched from this emitter. Only used with `SQUARE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="velocityEndMaxY"><code><span class="field-name">velocityEndMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#velocityEndMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity range of particles launched from this emitter. Only used with `SQUARE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="speedStartMin"><code><span class="field-name">speedStartMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#speedStartMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the speed range of particles launched from this emitter. Only used with `CIRCLE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="speedStartMax"><code><span class="field-name">speedStartMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#speedStartMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the speed range of particles launched from this emitter. Only used with `CIRCLE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="speedEndMin"><code><span class="field-name">speedEndMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#speedEndMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the speed range of particles launched from this emitter. Only used with `CIRCLE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="speedEndMax"><code><span class="field-name">speedEndMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#speedEndMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the speed range of particles launched from this emitter. Only used with `CIRCLE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="maxAngularVelocity"><code><span class="field-name">maxAngularVelocity</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxAngularVelocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Use in conjunction with angularAcceleration for fluid spin speed control.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularAccelerationActive"><code><span class="field-name">angularAccelerationActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#angularAccelerationActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable the angular acceleration range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularAccelerationStartMin"><code><span class="field-name">angularAccelerationStartMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularAccelerationStartMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the angular acceleration range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularAccelerationStartMax"><code><span class="field-name">angularAccelerationStartMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularAccelerationStartMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the angular acceleration range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularDragActive"><code><span class="field-name">angularDragActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#angularDragActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable the angular drag range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularDragStartMin"><code><span class="field-name">angularDragStartMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularDragStartMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the angular drag range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularDragStartMax"><code><span class="field-name">angularDragStartMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularDragStartMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the angular drag range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularVelocityActive"><code><span class="field-name">angularVelocityActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#angularVelocityActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable the angular velocity range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularVelocityStartMin"><code><span class="field-name">angularVelocityStartMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularVelocityStartMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angular velocity range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularVelocityStartMax"><code><span class="field-name">angularVelocityStartMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularVelocityStartMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angular velocity range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularVelocityEndMin"><code><span class="field-name">angularVelocityEndMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularVelocityEndMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angular velocity range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angularVelocityEndMax"><code><span class="field-name">angularVelocityEndMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularVelocityEndMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angular velocity range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angleActive"><code><span class="field-name">angleActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#angleActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable the angle range of particles launched from this emitter.
`angleEndMin` and `angleEndMax` are ignored unless `ignoreAngularVelocity` is set to `true`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angleStartMin"><code><span class="field-name">angleStartMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angleStartMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angle range of particles launched from this emitter.
`angleEndMin` and `angleEndMax` are ignored unless `ignoreAngularVelocity` is set to `true`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angleStartMax"><code><span class="field-name">angleStartMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angleStartMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angle range of particles launched from this emitter.
`angleEndMin` and `angleEndMax` are ignored unless `ignoreAngularVelocity` is set to `true`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angleEndMin"><code><span class="field-name">angleEndMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angleEndMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angle range of particles launched from this emitter.
`angleEndMin` and `angleEndMax` are ignored unless `ignoreAngularVelocity` is set to `true`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="angleEndMax"><code><span class="field-name">angleEndMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angleEndMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angle range of particles launched from this emitter.
`angleEndMin` and `angleEndMax` are ignored unless `ignoreAngularVelocity` is set to `true`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ignoreAngularVelocity"><code><span class="field-name">ignoreAngularVelocity</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ignoreAngularVelocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set this if you want to specify the beginning and ending value of angle,
instead of using `angularVelocity` (or `angularAcceleration`).

<hr class="field-separator" />

<div class="signature field-var has-description" id="launchAngleActive"><code><span class="field-name">launchAngleActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#launchAngleActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable the angle range at which particles will be launched from this emitter.
Ignored unless `launchMode` is set to `CIRCLE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="launchAngleMin"><code><span class="field-name">launchAngleMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#launchAngleMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angle range at which particles will be launched from this emitter.
Ignored unless `launchMode` is set to `CIRCLE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="launchAngleMax"><code><span class="field-name">launchAngleMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#launchAngleMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angle range at which particles will be launched from this emitter.
Ignored unless `launchMode` is set to `CIRCLE`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lifespanActive"><code><span class="field-name">lifespanActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#lifespanActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable the life, or duration, range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lifespanMin"><code><span class="field-name">lifespanMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lifespanMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The life, or duration, range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lifespanMax"><code><span class="field-name">lifespanMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lifespanMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The life, or duration, range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleActive"><code><span class="field-name">scaleActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#scaleActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable `scale` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleStartMinX"><code><span class="field-name">scaleStartMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleStartMinX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleStartMinY"><code><span class="field-name">scaleStartMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleStartMinY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleStartMaxX"><code><span class="field-name">scaleStartMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleStartMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleStartMaxY"><code><span class="field-name">scaleStartMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleStartMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleEndMinX"><code><span class="field-name">scaleEndMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleEndMinX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleEndMinY"><code><span class="field-name">scaleEndMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleEndMinY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleEndMaxX"><code><span class="field-name">scaleEndMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleEndMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleEndMaxY"><code><span class="field-name">scaleEndMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleEndMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="alphaActive"><code><span class="field-name">alphaActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#alphaActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable `alpha` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="alphaStartMin"><code><span class="field-name">alphaStartMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#alphaStartMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `alpha` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="alphaStartMax"><code><span class="field-name">alphaStartMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#alphaStartMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `alpha` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="alphaEndMin"><code><span class="field-name">alphaEndMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#alphaEndMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `alpha` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="alphaEndMax"><code><span class="field-name">alphaEndMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#alphaEndMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `alpha` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="colorActive"><code><span class="field-name">colorActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#colorActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable `color` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="colorStartMin"><code><span class="field-name">colorStartMin</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#colorStartMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `color` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="colorStartMax"><code><span class="field-name">colorStartMax</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#colorStartMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `color` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="colorEndMin"><code><span class="field-name">colorEndMin</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#colorEndMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `color` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="colorEndMax"><code><span class="field-name">colorEndMax</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#colorEndMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `color` range of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragActive"><code><span class="field-name">dragActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable X and Y drag component of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragStartMinX"><code><span class="field-name">dragStartMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragStartMinX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets X and Y drag component of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragStartMinY"><code><span class="field-name">dragStartMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragStartMinY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets X and Y drag component of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragStartMaxX"><code><span class="field-name">dragStartMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragStartMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets X and Y drag component of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragStartMaxY"><code><span class="field-name">dragStartMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragStartMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets X and Y drag component of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragEndMinX"><code><span class="field-name">dragEndMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragEndMinX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets X and Y drag component of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragEndMinY"><code><span class="field-name">dragEndMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragEndMinY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets X and Y drag component of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragEndMaxX"><code><span class="field-name">dragEndMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragEndMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets X and Y drag component of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragEndMaxY"><code><span class="field-name">dragEndMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragEndMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets X and Y drag component of particles launched from this emitter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="accelerationActive"><code><span class="field-name">accelerationActive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#accelerationActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable the `acceleration` range of particles launched from this emitter.
Set acceleration y-values to give particles gravity.

<hr class="field-separator" />

<div class="signature field-var has-description" id="accelerationStartMinX"><code><span class="field-name">accelerationStartMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#accelerationStartMinX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `acceleration` range of particles launched from this emitter.
Set acceleration y-values to give particles gravity.

<hr class="field-separator" />

<div class="signature field-var has-description" id="accelerationStartMinY"><code><span class="field-name">accelerationStartMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#accelerationStartMinY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `acceleration` range of particles launched from this emitter.
Set acceleration y-values to give particles gravity.

<hr class="field-separator" />

<div class="signature field-var has-description" id="accelerationStartMaxX"><code><span class="field-name">accelerationStartMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#accelerationStartMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `acceleration` range of particles launched from this emitter.
Set acceleration y-values to give particles gravity.

<hr class="field-separator" />

<div class="signature field-var has-description" id="accelerationStartMaxY"><code><span class="field-name">accelerationStartMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#accelerationStartMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `acceleration` range of particles launched from this emitter.
Set acceleration y-values to give particles gravity.

<hr class="field-separator" />

<div class="signature field-var has-description" id="accelerationEndMinX"><code><span class="field-name">accelerationEndMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#accelerationEndMinX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `acceleration` range of particles launched from this emitter.
Set acceleration y-values to give particles gravity.

<hr class="field-separator" />

<div class="signature field-var has-description" id="accelerationEndMinY"><code><span class="field-name">accelerationEndMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#accelerationEndMinY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `acceleration` range of particles launched from this emitter.
Set acceleration y-values to give particles gravity.

<hr class="field-separator" />

<div class="signature field-var has-description" id="accelerationEndMaxX"><code><span class="field-name">accelerationEndMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#accelerationEndMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `acceleration` range of particles launched from this emitter.
Set acceleration y-values to give particles gravity.

<hr class="field-separator" />

<div class="signature field-var has-description" id="accelerationEndMaxY"><code><span class="field-name">accelerationEndMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#accelerationEndMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the `acceleration` range of particles launched from this emitter.
Set acceleration y-values to give particles gravity.

<hr class="field-separator" />

<div class="signature field-var has-description" id="seed"><code><span class="field-name">seed</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#seed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A random seed used to generated particles.
Provide a custom seed to reproduce same chain of particles.

<hr class="field-separator" />

<div class="signature field-var no-description" id="initializerName"><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="size"><code><span class="field-name">size</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width and height of the emission area.
If not defined (`-1`), will use visual's width and height bound to this `ParticleEmitter` object, if any

| Name | Type |
|------|------|
| `width` | [Float](/api-docs/unity/Float/) |
| `height` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pos"><code><span class="field-name">pos</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x and y position of the emission, relative to particles parent (if any)

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="maxVelocity"><code><span class="field-name">maxVelocity</span><span class="parenthesis">(</span><span class="arg-name">maxVelocityX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">maxVelocityY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#maxVelocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If you are using `acceleration`, you can use `maxVelocity` with it
to cap the speed automatically (very useful!).

| Name | Type |
|------|------|
| `maxVelocityX` | [Float](/api-docs/unity/Float/) |
| `maxVelocityY` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="velocityStart"><code><span class="field-name">velocityStart</span><span class="parenthesis">(</span><span class="arg-name">startMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">startMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#velocityStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity starting range of particles launched from this emitter. Only used with `SQUARE`.

| Name | Type | Default |
|------|------|---------|
| `startMinX` | [Float](/api-docs/unity/Float/) | |
| `startMinY` | [Float](/api-docs/unity/Float/) | |
| `startMaxX` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `startMaxY` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="velocityEnd"><code><span class="field-name">velocityEnd</span><span class="parenthesis">(</span><span class="arg-name">endMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">endMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#velocityEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the velocity ending range of particles launched from this emitter. Only used with `SQUARE`.

| Name | Type | Default |
|------|------|---------|
| `endMinX` | [Float](/api-docs/unity/Float/) | |
| `endMinY` | [Float](/api-docs/unity/Float/) | |
| `endMaxX` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `endMaxY` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="speedStart"><code><span class="field-name">speedStart</span><span class="parenthesis">(</span><span class="arg-name">startMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#speedStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the speed starting range of particles launched from this emitter. Only used with `CIRCLE`.

| Name | Type | Default |
|------|------|---------|
| `startMin` | [Float](/api-docs/unity/Float/) | |
| `startMax` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="speedEnd"><code><span class="field-name">speedEnd</span><span class="parenthesis">(</span><span class="arg-name">endMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#speedEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the speed ending range of particles launched from this emitter. Only used with `CIRCLE`.

| Name | Type | Default |
|------|------|---------|
| `endMin` | [Float](/api-docs/unity/Float/) | |
| `endMax` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="angularAcceleration"><code><span class="field-name">angularAcceleration</span><span class="parenthesis">(</span><span class="arg-name">startMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">startMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#angularAcceleration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the angular acceleration range of particles launched from this emitter.

| Name | Type |
|------|------|
| `startMin` | [Float](/api-docs/unity/Float/) |
| `startMax` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="angularDrag"><code><span class="field-name">angularDrag</span><span class="parenthesis">(</span><span class="arg-name">startMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">startMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#angularDrag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the angular drag range of particles launched from this emitter.

| Name | Type |
|------|------|
| `startMin` | [Float](/api-docs/unity/Float/) |
| `startMax` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="angularVelocityStart"><code><span class="field-name">angularVelocityStart</span><span class="parenthesis">(</span><span class="arg-name">startMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#angularVelocityStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angular velocity starting range of particles launched from this emitter.

| Name | Type | Default |
|------|------|---------|
| `startMin` | [Float](/api-docs/unity/Float/) | |
| `startMax` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="angularVelocityEnd"><code><span class="field-name">angularVelocityEnd</span><span class="parenthesis">(</span><span class="arg-name">endMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#angularVelocityEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angular velocity ending range of particles launched from this emitter.

| Name | Type | Default |
|------|------|---------|
| `endMin` | [Float](/api-docs/unity/Float/) | |
| `endMax` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="angleStart"><code><span class="field-name">angleStart</span><span class="parenthesis">(</span><span class="arg-name">startMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#angleStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angle starting range of particles launched from this emitter.
`angleEndMin` and `angleEndMax` are ignored unless `ignoreAngularVelocity` is set to `true`.

| Name | Type | Default |
|------|------|---------|
| `startMin` | [Float](/api-docs/unity/Float/) | |
| `startMax` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="angleEnd"><code><span class="field-name">angleEnd</span><span class="parenthesis">(</span><span class="arg-name">endMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#angleEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angle ending range of particles launched from this emitter.
`angleEndMin` and `angleEndMax` are ignored unless `ignoreAngularVelocity` is set to `true`.

| Name | Type | Default |
|------|------|---------|
| `endMin` | [Float](/api-docs/unity/Float/) | |
| `endMax` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="launchAngle"><code><span class="field-name">launchAngle</span><span class="parenthesis">(</span><span class="arg-name">min</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">max</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#launchAngle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angle range at which particles will be launched from this emitter.
Ignored unless `launchMode` is set to `CIRCLE`.

| Name | Type |
|------|------|
| `min` | [Float](/api-docs/unity/Float/) |
| `max` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lifespan"><code><span class="field-name">lifespan</span><span class="parenthesis">(</span><span class="arg-name">min</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">max</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lifespan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The life, or duration, range of particles launched from this emitter.

| Name | Type |
|------|------|
| `min` | [Float](/api-docs/unity/Float/) |
| `max` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scaleStart"><code><span class="field-name">scaleStart</span><span class="parenthesis">(</span><span class="arg-name">startMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">startMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scaleStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` starting range of particles launched from this emitter.

| Name | Type | Default |
|------|------|---------|
| `startMinX` | [Float](/api-docs/unity/Float/) | |
| `startMinY` | [Float](/api-docs/unity/Float/) | |
| `startMaxX` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `startMaxY` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scaleEnd"><code><span class="field-name">scaleEnd</span><span class="parenthesis">(</span><span class="arg-name">endMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">endMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scaleEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `scale` ending range of particles launched from this emitter.

| Name | Type | Default |
|------|------|---------|
| `endMinX` | [Float](/api-docs/unity/Float/) | |
| `endMinY` | [Float](/api-docs/unity/Float/) | |
| `endMaxX` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `endMaxY` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="accelerationStart"><code><span class="field-name">accelerationStart</span><span class="parenthesis">(</span><span class="arg-name">startMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">startMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#accelerationStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `acceleration` starting range of particles launched from this emitter.

| Name | Type | Default |
|------|------|---------|
| `startMinX` | [Float](/api-docs/unity/Float/) | |
| `startMinY` | [Float](/api-docs/unity/Float/) | |
| `startMaxX` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `startMaxY` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="accelerationEnd"><code><span class="field-name">accelerationEnd</span><span class="parenthesis">(</span><span class="arg-name">endMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">endMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#accelerationEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `acceleration` ending range of particles launched from this emitter.

| Name | Type | Default |
|------|------|---------|
| `endMinX` | [Float](/api-docs/unity/Float/) | |
| `endMinY` | [Float](/api-docs/unity/Float/) | |
| `endMaxX` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `endMaxY` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dragStart"><code><span class="field-name">dragStart</span><span class="parenthesis">(</span><span class="arg-name">startMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">startMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dragStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `drag` starting range of particles launched from this emitter.

| Name | Type | Default |
|------|------|---------|
| `startMinX` | [Float](/api-docs/unity/Float/) | |
| `startMinY` | [Float](/api-docs/unity/Float/) | |
| `startMaxX` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `startMaxY` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dragEnd"><code><span class="field-name">dragEnd</span><span class="parenthesis">(</span><span class="arg-name">endMinX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">endMinY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMaxX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMaxY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dragEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `drag` ending range of particles launched from this emitter.

| Name | Type | Default |
|------|------|---------|
| `endMinX` | [Float](/api-docs/unity/Float/) | |
| `endMinY` | [Float](/api-docs/unity/Float/) | |
| `endMaxX` | [Float](/api-docs/unity/Float/) | *(optional)* |
| `endMaxY` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="colorStart"><code><span class="field-name">colorStart</span><span class="parenthesis">(</span><span class="arg-name">startMin</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMax</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#colorStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `color` starting range of particles launched from this emitter.

| Name | Type | Default |
|------|------|---------|
| `startMin` | [Color](/api-docs/unity/ceramic/Color/) | |
| `startMax` | [Color](/api-docs/unity/ceramic/Color/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="colorEnd"><code><span class="field-name">colorEnd</span><span class="parenthesis">(</span><span class="arg-name">endMin</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMax</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#colorEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `color` ending range of particles launched from this emitter.

| Name | Type | Default |
|------|------|---------|
| `endMin` | [Color](/api-docs/unity/ceramic/Color/) | |
| `endMax` | [Color](/api-docs/unity/ceramic/Color/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="alphaStart"><code><span class="field-name">alphaStart</span><span class="parenthesis">(</span><span class="arg-name">startMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#alphaStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `alpha` starting range of particles launched from this emitter.

| Name | Type | Default |
|------|------|---------|
| `startMin` | [Float](/api-docs/unity/Float/) | |
| `startMax` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="alphaEnd"><code><span class="field-name">alphaEnd</span><span class="parenthesis">(</span><span class="arg-name">endMin</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMax</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#alphaEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets `alpha` ending range of particles launched from this emitter.

| Name | Type | Default |
|------|------|---------|
| `endMin` | [Float](/api-docs/unity/Float/) | |
| `endMax` | [Float](/api-docs/unity/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateStatus"><code><span class="field-name">invalidateStatus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateStatus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="getCustomParticleVisual"><code><span class="field-name">getCustomParticleVisual</span><span class="parenthesis">(</span><span class="arg-name">existingVisual</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#getCustomParticleVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom particle visual creation callback.

Use this to emit custom visuals as particles. The callback receives
an existing visual (if being recycled) and should return a visual
to use for the particle.

Alternative approach: Create a subclass and override `getParticleVisual()`.



| Name | Type | Description |
|------|------|-------------|
| `existingVisual` | [Visual](/api-docs/unity/ceramic/Visual/) | A recycled visual if available, null otherwise  |

| Returns | Description |
|---------|-------------|
| [Visual](/api-docs/unity/ceramic/Visual/) | The visual to use for the particle * ```haxe emitter.getCustomParticleVisual = (existing) -> { if (existing != null) return existing; var sprite = new Quad(); sprite.texture = sparkTexture; sprite.anchor(0.5, 0.5); return sprite; }; ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys the emitter and cleans up resources.

If the emitter has no associated visual (not attached as component),
all active particle visuals without parents are also destroyed.
This prevents memory leaks from orphaned particles.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitContinuously"><code><span class="field-name">emitContinuously</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">interval</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">quantity</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitContinuously"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts emitting particles continuously at regular intervals.

Creates a stream of particles over time. Useful for effects like:
- Fire, smoke, steam
- Rain, snow, falling leaves
- Fountains, waterfalls
- Magic sparkles, energy beams



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `interval` | [Float](/api-docs/unity/Float/) | `0.1` | Time between particle emissions in seconds. Examples: 0.1 = 10 particles/second, 0.01 = 100 particles/second. Set to 0 or less to stop emission.  |
| `quantity` | [Int](/api-docs/unity/Int/) | `-1` | Total particles to emit before stopping. -1 = infinite (default), 0 = stop immediately, positive = emit that many then stop. * ```haxe // Continuous smoke emitter.emitContinuously(0.05); // 20 particles per second, forever * // Limited burst emitter.emitContinuously(0.1, 50); // 10/second, stop after 50 ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="explode"><code><span class="field-name">explode</span><span class="parenthesis">(</span><span class="arg-name">quantity</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#explode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emits a burst of particles all at once.

Creates an instant explosion of particles. Useful for effects like:
- Explosions, impacts, hits
- Confetti, fireworks
- Debris, shrapnel
- Death/spawn effects

All particles are created at the same moment but with randomized
properties according to the configured ranges.



| Name | Type | Description |
|------|------|-------------|
| `quantity` | [Int](/api-docs/unity/Int/) | Number of particles to emit instantly. Must be 1 or greater, does nothing if less. * ```haxe // Explosion effect emitter.explode(100); * // Small puff of smoke emitter.explode(10); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stop"><code><span class="field-name">stop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stops particle emission immediately.

Existing particles continue to animate until their lifespan ends.
The emitter status changes from EMITTING to SPREADING (if particles
remain) or IDLE (if no particles are active).

Safe to call even if not currently emitting.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitParticle"><code><span class="field-name">emitParticle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitParticle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emits a single particle with randomized properties.

This method:
1. Gets a particle from the pool
2. Randomizes properties within configured ranges
3. Initializes position, velocity, and other attributes
4. Triggers the emitParticle event

Can be called directly for custom emission patterns beyond
the built-in continuous and burst modes.

```haxe
// Emit particles in a custom pattern
for (i in 0...5) {
    emitter.x = i * 50;
    emitter.emitParticle();
}
```

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new ParticleEmitter instance.

The emitter starts in IDLE status and must be activated using
either `emitContinuously()` for streams or `explode()` for bursts.
Default settings create white 5x5 pixel particles.

## Private Members

<div class="signature field-var no-description" id="unobservedStatus"><code><span class="field-name">unobservedStatus</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedStatus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="degToRad"><code><span class="field-name">degToRad</span><span class="parenthesis">(</span><span class="arg-name">deg</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#degToRad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `deg` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="interpolateColor"><code><span class="field-name">interpolateColor</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="operator">,</span> <span class="arg-name">percent</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#interpolateColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Color](/api-docs/unity/ceramic/Color/) |
| `b` | [Color](/api-docs/unity/ceramic/Color/) |
| `percent` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Color](/api-docs/unity/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="velocityFromAngle"><code><span class="field-name">velocityFromAngle</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">speed</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Point/" class="type-link">Point</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#velocityFromAngle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `angle` | [Float](/api-docs/unity/Float/) |
| `speed` | [Float](/api-docs/unity/Float/) |
| `result` | [Point](/api-docs/unity/ceramic/Point/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeVelocity"><code><span class="field-name">computeVelocity</span><span class="parenthesis">(</span><span class="arg-name">velocity</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">acceleration</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">drag</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">max</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">elapsed</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#computeVelocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A tween-like function that takes a starting velocity and some other factors and returns an altered velocity.



| Name | Type | Description |
|------|------|-------------|
| `velocity` | [Float](/api-docs/unity/Float/) | Any component of velocity (e.g. 20).  |
| `acceleration` | [Float](/api-docs/unity/Float/) | Rate at which the velocity is changing.  |
| `drag` | [Float](/api-docs/unity/Float/) | This is how much the velocity changes if acceleration is not set.  |
| `max` | [Float](/api-docs/unity/Float/) | An absolute value cap for the velocity (0 for no cap).  |
| `elapsed` | [Float](/api-docs/unity/Float/) | The amount of time passed in to the latest update cycle  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | The altered velocity value. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitObservedDirty"><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">ParticleEmitter</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [ParticleEmitter](/api-docs/unity/ceramic/ParticleEmitter/) |
| `fromSerializedField` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitEmitParticle"><code><span class="field-name">emitEmitParticle</span><span class="parenthesis">(</span><span class="arg-name">particle</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ParticleItem/" class="type-link">ParticleItem</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitEmitParticle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when a new particle is launched.
Useful for applying custom initialization or effects to particles.



| Name | Type | Description |
|------|------|-------------|
| `particle` | [ParticleItem](/api-docs/unity/ceramic/ParticleItem/) | The particle that was just emitted |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitStatusChange"><code><span class="field-name">emitStatusChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitStatusChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when status field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindAsComponent"><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when this emitter is bound as a component to a visual.
Currently empty but can be overridden for custom initialization.

<hr class="field-separator" />

<div class="signature field-method has-description" id="update"><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the emitter and all active particles.

Called automatically by the game loop. Handles:
- Continuous particle emission timing
- Particle position, velocity, and property updates
- Particle lifecycle and recycling
- Status updates (IDLE, EMITTING, SPREADING)



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/unity/Float/) | Time elapsed since last update in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitContinuousParticlesIfNeeded"><code><span class="field-name">emitContinuousParticlesIfNeeded</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitContinuousParticlesIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emits particles based on continuous emission settings.

Accumulates time and emits particles when the interval threshold
is reached. Handles quantity countdown and automatic stopping.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/unity/Float/) | Time elapsed since last update in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description" id="updateParticle"><code><span class="field-name">updateParticle</span><span class="parenthesis">(</span><span class="arg-name">particle</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ParticleItem/" class="type-link">ParticleItem</a><span class="operator">,</span> <span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateParticle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates a single particle's properties and visual.

Handles:
- Age progression and lifespan checking
- Property interpolation (velocity, scale, color, etc.)
- Physics simulation (acceleration, drag, max velocity)
- Visual synchronization if enabled

Properties are interpolated linearly over the particle's lifetime
when start and end values differ.



| Name | Type | Description |
|------|------|-------------|
| `particle` | [ParticleItem](/api-docs/unity/ceramic/ParticleItem/) | The particle to update  |
| `delta` | [Float](/api-docs/unity/Float/) | Time elapsed since last update in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createParticleItem"><code><span class="field-name">createParticleItem</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ParticleItem/" class="type-link">ParticleItem</a></code><a class="header-anchor" href="#createParticleItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new ParticleItem instance.

Override this method in a subclass to use custom ParticleItem
implementations with additional properties or behavior.


| Returns | Description |
|---------|-------------|
| [ParticleItem](/api-docs/unity/ceramic/ParticleItem/) | A new ParticleItem instance * ```haxe override function createParticleItem():ParticleItem { return new CustomParticleItem(); } ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getParticle"><code><span class="field-name">getParticle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ParticleItem/" class="type-link">ParticleItem</a></code><a class="header-anchor" href="#getParticle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a particle from the pool or creates a new one.

Implements object pooling for performance:
1. Tries to reuse a recycled particle
2. Creates new particle if pool is empty
3. Assigns or recycles visual
4. Adds to active particles list


| Returns | Description |
|---------|-------------|
| [ParticleItem](/api-docs/unity/ceramic/ParticleItem/) | An active particle ready for initialization |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getParticleVisual"><code><span class="field-name">getParticleVisual</span><span class="parenthesis">(</span><span class="arg-name">existingVisual</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#getParticleVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets or creates a visual for a particle.

Default implementation creates a 5x5 white quad centered at anchor point.
Override this method or use `getCustomParticleVisual` callback to
provide custom visuals like sprites, shapes, or complex graphics.



| Name | Type | Description |
|------|------|-------------|
| `existingVisual` | [Visual](/api-docs/unity/ceramic/Visual/) | A recycled visual if available, null for new particles  |

| Returns | Description |
|---------|-------------|
| [Visual](/api-docs/unity/ceramic/Visual/) | Visual to use for the particle * ```haxe override function getParticleVisual(existingVisual:Visual):Visual { if (existingVisual != null) { existingVisual.active = true; return existingVisual; } var sprite = new Quad(); sprite.texture = particleTexture; sprite.anchor(0.5, 0.5); return sprite; } ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="recycleParticle"><code><span class="field-name">recycleParticle</span><span class="parenthesis">(</span><span class="arg-name">particle</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ParticleItem/" class="type-link">ParticleItem</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#recycleParticle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recycles a particle back to the pool.

Removes particle from active list, recycles its visual,
and adds to recycled pool for later reuse. If the visual
was destroyed, nullifies the reference.



| Name | Type | Description |
|------|------|-------------|
| `particle` | [ParticleItem](/api-docs/unity/ceramic/ParticleItem/) | The particle to recycle |

<hr class="field-separator" />

<div class="signature field-method has-description" id="recycleParticleVisual"><code><span class="field-name">recycleParticleVisual</span><span class="parenthesis">(</span><span class="arg-name">visualToRecycle</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#recycleParticleVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recycles a particle's visual for later reuse.

Default implementation simply deactivates the visual.
Override to perform custom cleanup like resetting animations,
clearing filters, or releasing resources.



| Name | Type | Description |
|------|------|-------------|
| `visualToRecycle` | [Visual](/api-docs/unity/ceramic/Visual/) | The visual to recycle |

<hr class="field-separator" />

<div class="signature field-method no-description" id="randomBetweenFloats"><code><span class="field-name">randomBetweenFloats</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#randomBetweenFloats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Float](/api-docs/unity/Float/) |
| `b` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="randomBetweenColors"><code><span class="field-name">randomBetweenColors</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#randomBetweenColors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Color](/api-docs/unity/ceramic/Color/) |
| `b` | [Color](/api-docs/unity/ceramic/Color/) |

| Returns |
|---------|
| [Color](/api-docs/unity/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setEntity"><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [Entity](/api-docs/unity/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getEntity"><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Entity](/api-docs/unity/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


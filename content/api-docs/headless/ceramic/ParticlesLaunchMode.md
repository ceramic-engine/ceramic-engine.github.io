---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ParticlesLaunchMode
target: Headless
permalink: api-docs/headless/ceramic/ParticlesLaunchMode/
---

# ParticlesLaunchMode

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ParticlesLaunchMode.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ParticlesLaunchMode</strong> (Enum)</div>

Defines how particle velocities are calculated when launched from an emitter.

ParticlesLaunchMode determines which properties are used to set initial
particle velocities and the pattern of particle distribution.

The choice between modes affects:
- Which emitter properties are active
- The initial velocity calculation method
- The overall particle distribution pattern

```haxe
// Radial burst effect (CIRCLE mode)
emitter.launchMode = CIRCLE;
emitter.launchAngle(-180, 180); // Full circle
emitter.speedStart(100, 200);

// Directional spray (SQUARE mode)
emitter.launchMode = SQUARE;
emitter.velocityStart(-50, -200, 50, -150); // Upward spray
```

<div class="see"><strong>See:</strong> ParticleEmitter.launchMode Where this enum is used, ParticleEmitter.launchAngle Used with CIRCLE mode, ParticleEmitter.speedStart Used with CIRCLE mode, ParticleEmitter.velocityStart Used with SQUARE mode</div>


## Constructors

### CIRCLE

```haxe
CIRCLE
```

Angle-based circular launch pattern.

Particles are launched at angles within the `launchAngle` range,
with initial speed determined by `speedStart` and `speedEnd`.
This creates radial emission patterns perfect for:
- Explosions and impacts
- Fireworks and sparkles
- Omnidirectional effects
- Circular spray patterns

Active properties in this mode:
- launchAngleMin/Max: Direction range in degrees
- speedStartMin/Max: Initial speed range
- speedEndMin/Max: Final speed range (interpolated over lifetime)

Ignored properties:
- velocityStartMinX/Y, velocityStartMaxX/Y
- velocityEndMinX/Y, velocityEndMaxX/Y

### SQUARE

```haxe
SQUARE
```

Direct velocity-based launch pattern.

Particles are launched with explicit X and Y velocity components,
allowing precise control over direction and speed separately.
This creates rectangular emission patterns perfect for:
- Rain, snow, and weather effects
- Directional jets and streams
- Wind-affected particles
- Asymmetric spray patterns

Active properties in this mode:
- velocityStartMinX/Y, velocityStartMaxX/Y: Initial velocity range
- velocityEndMinX/Y, velocityEndMaxX/Y: Final velocity range (interpolated)

Ignored properties:
- launchAngleMin/Max
- speedStartMin/Max, speedEndMin/Max

## Metadata

| Name | Parameters |
|------|------------|
| `:flatEnum` | - |


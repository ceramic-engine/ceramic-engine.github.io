---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ParticlesStatus
target: Headless
permalink: api-docs/headless/ceramic/ParticlesStatus/
---

# ParticlesStatus

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ParticlesStatus.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ParticlesStatus</strong> (Enum)</div>

Represents the current operational state of a particle emitter.

ParticlesStatus tracks whether an emitter is actively creating new particles
and whether any existing particles are still visible. This is useful for:
- Determining when a particle effect has completely finished
- Optimizing update loops (skip idle emitters)
- Triggering cleanup or follow-up effects
- UI feedback about effect state

The status transitions automatically based on emission state and active particles:
- IDLE → EMITTING: When emission starts
- EMITTING → SPREADING: When emission stops but particles remain
- EMITTING → IDLE: When emission stops and no particles exist
- SPREADING → IDLE: When all particles have expired

```haxe
// Wait for explosion to finish before removing
emitter.explode(50);
emitter.onStatusChange(null, (status) -> {
    if (status == IDLE) {
        emitter.destroy();
    }
});

// Check if effect is active
if (emitter.status != IDLE) {
    // Effect is still visible
}
```

<div class="see"><strong>See:</strong> ParticleEmitter.status The observable property using this enum</div>


## Constructors

### IDLE

```haxe
IDLE
```

No activity - not emitting and no particles visible.

This is the default state and indicates the emitter is completely
inactive. No particles are being created or updated.

Common scenarios:
- Initial state before first emission
- After all particles have expired
- After calling stop() with no remaining particles

### EMITTING

```haxe
EMITTING
```

Actively creating new particles.

The emitter is currently generating particles, either through:
- Continuous emission via emitContinuously()
- In progress burst via explode()
- Manual emission via emitParticle()

There are usually visible particles in this state, though it's
possible to be EMITTING with no visible particles if they have
very short or zero lifespans.

### SPREADING

```haxe
SPREADING
```

Not emitting new particles, but existing particles are still animating.

The emitter has stopped creating new particles but previously
emitted particles are still visible and updating. This state
continues until all particles have expired or been removed.

Common scenarios:
- After calling stop() with particles still alive
- After a burst completes with long-lived particles
- After continuous emission ends

## Metadata

| Name | Parameters |
|------|------------|
| `:flatEnum` | - |


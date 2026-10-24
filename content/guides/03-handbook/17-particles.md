---
layout: guides
category: guides
menu: Handbook
title: Particles
permalink: guides/particles/
---
# Particles

Explosions, smoke, sparkles, rain... Particle systems emit many small visuals and animate them over their lifetime. **Ceramic** provides a `Particles` visual driven by a highly configurable `ParticleEmitter`.

<iframe class="ceramic-sample-iframe" onload="setTimeout(focusSampleIframe, 100);" src="{{ samples.baseUrl }}/particles/" width="640" height="480" loading="lazy" frameborder="0" style="height: 457.5px;"></iframe>
<div class="caption">The <a href="/examples/particles/">particles</a> example, emitting little ceramic cups.</div>

## Quick start

The simplest particle system is a `Particles` visual with a default emitter:

<div class="codename">Continuous particle emission</div>

```haxe
var particles = new Particles();
particles.pos(width * 0.5, height * 0.5);
particles.autoEmit = true;
add(particles);
```

With `autoEmit` enabled, the emitter continuously emits particles at its `interval`. You can also trigger one-shot bursts instead:

<div class="codename">One-shot explosion</div>

```haxe
// Emit 50 particles at once
particles.emitter.explode(50);
```

## Configuring the emitter

`ParticleEmitter` exposes many properties, and most of them come in `Start`/`End` pairs: the value is interpolated over each particle's lifetime. They also usually accept a min/max range, randomized per particle:

<div class="codename">Configuring an emitter</div>

```haxe
var emitter = particles.emitter;

// Scale particles from tiny to full size over their life
emitter.scaleStart(0.0001, 0.0001);
emitter.scaleEnd(1, 1);

// Launch upward, in a cone between -25 and 25 degrees
emitter.launchAngle(-25, 25);
emitter.speedStart(200, 160);

// Rotate particles randomly
emitter.angularVelocityStart(-100, 100);

// Add some downward acceleration (gravity)
emitter.accelerationStart(0, 300, 0, 200);
emitter.accelerationEnd(0, 700, 0, 600);

// Lifespan and emission rate
emitter.lifespan(1.0, 2.0);
emitter.interval = 0.05;
```

<p class="extra-info">The full list of properties (color, alpha, drag, bounds...) is available in the <a href="/api-docs/clay-native/ceramic/ParticleEmitter/">ParticleEmitter API docs</a>.</p>

## Custom particle visuals

By default, particles are small squares. To emit your own visuals, subclass `ParticleEmitter` and override `getParticleVisual()`:

<div class="codename">Emitting textured particles</div>

```haxe
class MyEmitter extends ParticleEmitter {

    override function getParticleVisual(existingVisual:Visual):Visual {

        // Reuse the pooled visual if provided
        if (existingVisual != null) {
            existingVisual.active = true;
            return existingVisual;
        }

        // Or create a new one
        var quad = new Quad();
        quad.anchor(0.5, 0.5);
        quad.texture = assets.texture(Images.SPARK);
        return quad;

    }

}

// Then use it with a Particles visual:
var particles = new Particles(new MyEmitter());
add(particles);
```

<p class="extra-info">Particle visuals are pooled and recycled: <code>getParticleVisual()</code> receives an <code>existingVisual</code> when one is available, so no new object needs to be allocated. Keep that path fast!</p>

## Related examples

* [Particles](/examples/particles/): a custom emitter with textured particles

---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: FluidArbiter
target: Unity
permalink: api-docs/unity/nape/dynamics/FluidArbiter/
---

# FluidArbiter

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/dynamics/FluidArbiter.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/nape/dynamics/Arbiter/">Arbiter</a> → <strong>nape.dynamics.FluidArbiter</strong> (final class)</div>

Fluid interaction subtype for Arbiter.

## Instance Members

<div class="signature field-var has-description has-plugin" id="position"><div class="plugin-name">nape</div><code><span class="field-name">position</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Centre of buoyancy for fluid interaction.
<br/><br/>
This value can be modified during a related PreListener handler.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="overlap"><div class="plugin-name">nape</div><code><span class="field-name">overlap</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#overlap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Overlap area of Shapes in fluid interaction.
<br/><br/>
This value is strictly positive, and represents the amount of overlap between the Shapes
used in buoyancy computations.
<br/><br/>
This value can be modified during a related PreListener handler.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="buoyancyImpulse"><div class="plugin-name">nape</div><code><span class="field-name">buoyancyImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/Body/" class="type-link">nape.phys.Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#buoyancyImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine impulse on a given body due to buoyancy.
<br/><br/>
If the body is null, then the buoyancy impulse will be returned without consideration to any specific
body involved, and no angular impulses can be derived.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [nape.phys.Body](/api-docs/unity/nape/phys/Body/) | `null` | The body to query impulse for. (default null)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/unity/nape/geom/Vec3/) | The buoyancy impulse for given body.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="dragImpulse"><div class="plugin-name">nape</div><code><span class="field-name">dragImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/Body/" class="type-link">nape.phys.Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#dragImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine impulse on a given body due to fluid drag.
<br/><br/>
If the body is null, then the drag impulse will be returned without consideration to any specific
body involved.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [nape.phys.Body](/api-docs/unity/nape/phys/Body/) | `null` | The body to query impulse for. (default null)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/unity/nape/geom/Vec3/) | The drag impulse for given body.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="totalImpulse"><div class="plugin-name">nape</div><code><span class="field-name">totalImpulse</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/Body/" class="type-link">nape.phys.Body</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">freshOnly</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/Vec3/" class="type-link">nape.geom.Vec3</a></code><a class="header-anchor" href="#totalImpulse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine total impulse on a given body due to fluid interaction.
<br/><br/>
If the body is null, then the total impulse will be computed without consideration to any specific
body involved, and no angular impulses can be derived for the linear portion of the impulses.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [nape.phys.Body](/api-docs/unity/nape/phys/Body/) | `null` | The body to query impulse for. (default null)  |
| `freshOnly` | [Bool](/api-docs/unity/Bool/) | `false` | This parameter is unused for FluidArbiters. (default false)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec3](/api-docs/unity/nape/geom/Vec3/) | The total impulse for given body.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:final` | - |


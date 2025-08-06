---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: NapeSystem
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/NapeSystem/
---

# NapeSystem

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/nape/runtime/src/ceramic/NapeSystem.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/System/">System</a> → <strong>ceramic.NapeSystem</strong> (Class)</div>

Central system managing Nape physics simulation in Ceramic.

Handles:
- Multiple physics spaces (worlds)
- Automatic synchronization between Nape bodies and Ceramic visuals
- Physics stepping and timing
- Body lifecycle management

The system automatically updates visual positions and rotations based on
their associated physics bodies after each physics step.

```haxe
// Access the default physics space
var space = app.nape.space;
space.gravity.setxy(0, 600); // Set gravity

// Create additional spaces
var customSpace = app.nape.createSpace();
customSpace.gravity.setxy(0, 300);

// Pause all physics
app.nape.paused = true;
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="items"><div class="plugin-name">nape</div><code><span class="field-name">items</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/VisualNapePhysics/" class="type-link">VisualNapePhysics</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#items"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All active physics body items being managed.
Each item links a Nape body to a Ceramic visual.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="spaces"><div class="plugin-name">nape</div><code><span class="field-name">spaces</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/space/Space/" class="type-link">nape.space.Space</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#spaces"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All physics spaces (worlds) used with Nape physics.
Multiple spaces allow for separate physics simulations.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="space"><div class="plugin-name">nape</div><code><span class="field-name">space</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/space/Space/" class="type-link">nape.space.Space</a></code><a class="header-anchor" href="#space"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default space for Nape physics.
Bodies are added to this space unless specified otherwise.
Has zero gravity by default.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="paused"><div class="plugin-name">nape</div><code><span class="field-name">paused</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#paused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If set to `true`, physics simulation is paused.
Bodies maintain their state but don't move or collide.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="createSpace"><div class="plugin-name">nape</div><code><span class="field-name">createSpace</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">autoAdd</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/space/Space/" class="type-link">nape.space.Space</a></code><a class="header-anchor" href="#createSpace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new physics space (world).

Each space is an independent physics simulation with its own
gravity, bodies, and constraints.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `autoAdd` | [Bool](/api-docs/clay-native/Bool/) | `true` | If true, automatically adds the space to be updated  |

| Returns | Description |
|---------|-------------|
| [nape.space.Space](/api-docs/clay-native/nape/space/Space/) | New physics space with zero gravity |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="addSpace"><div class="plugin-name">nape</div><code><span class="field-name">addSpace</span><span class="parenthesis">(</span><span class="arg-name">space</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/space/Space/" class="type-link">nape.space.Space</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addSpace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a physics space to be updated by the system.



| Name | Type | Description |
|------|------|-------------|
| `space` | [nape.space.Space](/api-docs/clay-native/nape/space/Space/) | Space to add for automatic stepping |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="removeSpace"><div class="plugin-name">nape</div><code><span class="field-name">removeSpace</span><span class="parenthesis">(</span><span class="arg-name">space</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/space/Space/" class="type-link">nape.space.Space</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeSpace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a physics space from automatic updates.

The space itself is not destroyed, just removed from the update list.



| Name | Type | Description |
|------|------|-------------|
| `space` | [nape.space.Space](/api-docs/clay-native/nape/space/Space/) | Space to stop updating |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates the Nape physics system.
Initializes the default space with zero gravity.

## Private Members

<div class="signature field-method has-description has-plugin" id="emitUpdateSpaces"><div class="plugin-name">nape</div><code><span class="field-name">emitUpdateSpaces</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitUpdateSpaces"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered right before updating/stepping nape spaces.
Use this to apply forces or modify physics state before simulation.


| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-native/Float/) | Time step in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitBeginUpdateVisuals"><div class="plugin-name">nape</div><code><span class="field-name">emitBeginUpdateVisuals</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBeginUpdateVisuals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered right before applying nape bodies to visuals.
Visual positions are about to be updated from physics.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitEndUpdateVisuals"><div class="plugin-name">nape</div><code><span class="field-name">emitEndUpdateVisuals</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitEndUpdateVisuals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered right after applying nape bodies to visuals.
Visual positions have been synchronized with physics.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateSpaces"><div class="plugin-name">nape</div><code><span class="field-name">updateSpaces</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateSpaces"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates all physics spaces by stepping their simulations.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-native/Float/) | Time step in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateSpace"><div class="plugin-name">nape</div><code><span class="field-name">updateSpace</span><span class="parenthesis">(</span><span class="arg-name">space</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/space/Space/" class="type-link">nape.space.Space</a><span class="operator">,</span> <span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateSpace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Steps a single physics space forward in time.



| Name | Type | Description |
|------|------|-------------|
| `space` | [nape.space.Space](/api-docs/clay-native/nape/space/Space/) | Space to update  |
| `delta` | [Float](/api-docs/clay-native/Float/) | Time step in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="earlyUpdate"><div class="plugin-name">nape</div><code><span class="field-name">earlyUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#earlyUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Main update cycle for physics simulation.

Order of operations:
1. Validate all physics items (remove orphaned bodies)
2. Process creation/destruction queues
3. Step physics simulation
4. Synchronize visual positions with physics



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-native/Float/) | Time elapsed since last update |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateVisuals"><div class="plugin-name">nape</div><code><span class="field-name">updateVisuals</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateVisuals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronizes visual positions with physics body positions.

Takes into account:
- Visual anchor points
- Scale transformations
- Rotation (if allowed by body)

Physics bodies are positioned at their center, while visuals
can have arbitrary anchor points, requiring transformation.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-native/Float/) | Time step (unused but passed for consistency) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="flushDestroyedItems"><div class="plugin-name">nape</div><code><span class="field-name">flushDestroyedItems</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flushDestroyedItems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Processes the queue of destroyed physics items.
Removes them from the active items list.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="flushCreatedItems"><div class="plugin-name">nape</div><code><span class="field-name">flushCreatedItems</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flushCreatedItems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Processes the queue of newly created physics items.
Adds them to the active items list.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:allow` | ceramic.App |


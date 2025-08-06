---
layout: api-docs
category: api-docs
subCategory: doc
menu: Arcade
title: ArcadeSystem
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/ArcadeSystem/
---

# ArcadeSystem

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/arcade/runtime/src/ceramic/ArcadeSystem.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/System/">System</a> → <strong>ceramic.ArcadeSystem</strong> (Class)</div>

Main system managing Arcade physics simulation in Ceramic.

This system integrates the Arcade physics engine with Ceramic's visual system,
automatically synchronizing physics bodies with their visual representations.
It manages physics worlds, groups, and handles the update cycle for all physics objects.

The system operates in two phases:
- Early update: Updates physics simulation and processes collisions
- Late update: Applies physics results back to visual positions

Usage example:
```haxe
// Access the arcade system
var arcade = app.systems.arcade;

// Use the default world
arcade.world.gravity.y = 800;

// Create custom worlds
var customWorld = arcade.createWorld();
```

<div class="see"><strong>See:</strong> ArcadeWorld for physics world configuration, VisualArcadePhysics for adding physics to visuals</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="items"><div class="plugin-name">arcade</div><code><span class="field-name">items</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/VisualArcadePhysics/" class="type-link">VisualArcadePhysics</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#items"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All active physics items in the system.
Each item represents a visual with attached physics body.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worlds"><div class="plugin-name">arcade</div><code><span class="field-name">worlds</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/ArcadeWorld/" class="type-link">ArcadeWorld</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#worlds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All physics worlds managed by this system.
Multiple worlds can be used to create separate physics simulations
(e.g., foreground and background layers with different gravity).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="world"><div class="plugin-name">arcade</div><code><span class="field-name">world</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ArcadeWorld/" class="type-link">ArcadeWorld</a></code><a class="header-anchor" href="#world"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The default physics world used when creating physics bodies.
This world is automatically created and its bounds updated to match screen size
when `autoUpdateWorldBounds` is true.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="groups"><div class="plugin-name">arcade</div><code><span class="field-name">groups</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#groups"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Named collision groups for organizing physics bodies.
Groups allow efficient collision detection between specific sets of objects.

Example:
```haxe
arcade.groups.set("enemies", new arcade.Group());
arcade.groups.set("bullets", new arcade.Group());
// Later: arcade.world.collide(groups.get("enemies"), groups.get("bullets"));
```

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="autoUpdateWorldBounds"><div class="plugin-name">arcade</div><code><span class="field-name">autoUpdateWorldBounds</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoUpdateWorldBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true, the default world's bounds are automatically updated
to match the screen size on each frame. This ensures physics
boundaries adjust when the window is resized.

Set to false if you want to manually control world bounds.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="createWorld"><div class="plugin-name">arcade</div><code><span class="field-name">createWorld</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">autoAdd</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ArcadeWorld/" class="type-link">ArcadeWorld</a></code><a class="header-anchor" href="#createWorld"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new physics world with screen dimensions.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `autoAdd` | [Bool](/api-docs/clay-native/Bool/) | `true` | If true, automatically adds the world to the system's world list  |

| Returns | Description |
|---------|-------------|
| [ArcadeWorld](/api-docs/clay-native/ceramic/ArcadeWorld/) | The newly created ArcadeWorld |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="addWorld"><div class="plugin-name">arcade</div><code><span class="field-name">addWorld</span><span class="parenthesis">(</span><span class="arg-name">world</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ArcadeWorld/" class="type-link">ArcadeWorld</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addWorld"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a physics world to the system.
The world will be updated each frame along with other active worlds.



| Name | Type | Description |
|------|------|-------------|
| `world` | [ArcadeWorld](/api-docs/clay-native/ceramic/ArcadeWorld/) | The ArcadeWorld to add |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="removeWorld"><div class="plugin-name">arcade</div><code><span class="field-name">removeWorld</span><span class="parenthesis">(</span><span class="arg-name">world</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ArcadeWorld/" class="type-link">ArcadeWorld</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeWorld"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a physics world from the system.
The world will no longer be updated by the system.



| Name | Type | Description |
|------|------|-------------|
| `world` | [ArcadeWorld](/api-docs/clay-native/ceramic/ArcadeWorld/) | The ArcadeWorld to remove |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">arcade</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new ArcadeSystem instance.
Automatically creates the default physics world with screen dimensions.

## Private Members

<div class="signature field-method has-description has-plugin" id="emitUpdate"><div class="plugin-name">arcade</div><code><span class="field-name">emitUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired after physics simulation but before results are applied.
This is the ideal time to check for collisions and overlaps between bodies.


| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-native/Float/) | Time elapsed since last frame in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateWorlds"><div class="plugin-name">arcade</div><code><span class="field-name">updateWorlds</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateWorlds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates all physics worlds with the given time delta.


| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-native/Float/) | Time elapsed since last frame in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateWorld"><div class="plugin-name">arcade</div><code><span class="field-name">updateWorld</span><span class="parenthesis">(</span><span class="arg-name">world</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ArcadeWorld/" class="type-link">ArcadeWorld</a><span class="operator">,</span> <span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateWorld"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates a single physics world.


| Name | Type | Description |
|------|------|-------------|
| `world` | [ArcadeWorld](/api-docs/clay-native/ceramic/ArcadeWorld/) | The world to update  |
| `delta` | [Float](/api-docs/clay-native/Float/) | Time elapsed since last frame in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="earlyUpdate"><div class="plugin-name">arcade</div><code><span class="field-name">earlyUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#earlyUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Early update phase: synchronizes visual properties to physics bodies
and runs physics simulation.


| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-native/Float/) | Time elapsed since last frame in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="lateUpdate"><div class="plugin-name">arcade</div><code><span class="field-name">lateUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lateUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Late update phase: applies physics simulation results back to visuals.
This includes position updates and rotation if enabled.


| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-native/Float/) | Time elapsed since last frame in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="flushDestroyedItems"><div class="plugin-name">arcade</div><code><span class="field-name">flushDestroyedItems</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flushDestroyedItems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes all items queued for destruction from the active items list.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="flushCreatedItems"><div class="plugin-name">arcade</div><code><span class="field-name">flushCreatedItems</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flushCreatedItems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds all newly created items to the active items list.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:allow` | ceramic.App |


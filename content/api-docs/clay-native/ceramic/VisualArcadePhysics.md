---
layout: api-docs
category: api-docs
subCategory: doc
menu: Arcade
title: VisualArcadePhysics
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/VisualArcadePhysics/
---

# VisualArcadePhysics

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/arcade/runtime/src/ceramic/VisualArcadePhysics.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <strong>ceramic.VisualArcadePhysics</strong> (Class)</div>

Component that adds Arcade physics functionality to a Visual.

This class bridges Ceramic's visual system with the Arcade physics engine,
allowing any Visual to have physics properties like velocity, gravity, and
collision detection. It's automatically created when accessing a visual's
`arcade` property.

The component manages:
- Physics body creation and synchronization
- Collision and overlap event dispatching
- World bounds detection
- Automatic cleanup on destruction

Usage example:
```haxe
// Enable physics on a visual
var player = new Quad();
player.arcade.initBody(0, 0, 32, 32, 0);
player.arcade.body.velocity.y = -300; // Jump!

// Listen for collisions
player.arcade.onCollide(this, (v1, v2) -> {
    trace("Collision detected!");
});
```

<div class="see"><strong>See:</strong> Visual.arcade for accessing this component, arcade.Body for physics properties</div>


## Static Members

<div class="signature field-method has-description has-plugin" id="fromBody"><div class="plugin-name">arcade</div><code><span class="field-name">fromBody</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">arcade.Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">VisualArcadePhysics</a></code><a class="header-anchor" href="#fromBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves the VisualArcadePhysics component associated with a physics body.

Useful when you have a body reference from a collision callback and need
to access the visual or arcade component.



| Name | Type | Description |
|------|------|-------------|
| `body` | [arcade.Body](/api-docs/clay-native/arcade/Body/) | The physics body to look up  |

| Returns | Description |
|---------|-------------|
| [VisualArcadePhysics](/api-docs/clay-native/ceramic/VisualArcadePhysics/) | The VisualArcadePhysics component, or null if the body doesn't belong to a visual |

## Instance Members

<div class="signature field-var has-description has-plugin" id="visual"><div class="plugin-name">arcade</div><code><span class="field-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#visual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Visual that owns this physics component.
Set automatically when the component is created.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="body"><div class="plugin-name">arcade</div><code><span class="field-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">arcade.Body</a></code><a class="header-anchor" href="#body"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Arcade physics body attached to the visual.

This provides access to all physics properties:
- velocity, acceleration, drag
- immovable, mass, bounce
- collision flags (checkCollisionUp/Down/Left/Right)

Created by calling initBody().

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="world"><div class="plugin-name">arcade</div><code><span class="field-name">world</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ArcadeWorld/" class="type-link">ArcadeWorld</a></code><a class="header-anchor" href="#world"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The physics world this body belongs to.

If not set explicitly, uses the default world from ArcadeSystem.
Different worlds can have different gravity, bounds, and collision groups.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="offsetX"><div class="plugin-name">arcade</div><code><span class="field-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal offset of the physics body from the visual's position.
Useful when the collision box should be smaller or shifted from the visual.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="offsetY"><div class="plugin-name">arcade</div><code><span class="field-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical offset of the physics body from the visual's position.
Useful when the collision box should be smaller or shifted from the visual.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="initBody"><div class="plugin-name">arcade</div><code><span class="field-name">initBody</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">rotation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes the physics body with the specified dimensions.

Must be called before the body can be used in physics simulation.
The body's position will be synchronized with the visual each frame.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | Initial X position of the body  |
| `y` | [Float](/api-docs/clay-native/Float/) | Initial Y position of the body  |
| `width` | [Float](/api-docs/clay-native/Float/) | Width of the collision box  |
| `height` | [Float](/api-docs/clay-native/Float/) | Height of the collision box  |
| `rotation` | [Float](/api-docs/clay-native/Float/) | Initial rotation in degrees |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="destroy"><div class="plugin-name">arcade</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys this physics component and its body.

Automatically called when the visual is destroyed.
Removes the component from the physics system and cleans up references.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">arcade</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new VisualArcadePhysics component.

Automatically registers with the ArcadeSystem for updates.
Usually created automatically when accessing visual.arcade.

## Private Members

<div class="signature field-method has-description has-plugin" id="emitCollideBody"><div class="plugin-name">arcade</div><code><span class="field-name">emitCollideBody</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">arcade.Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitCollideBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dispatched when this visual's body collides with another body.

This event fires for any collision, regardless of whether the other
body belongs to a Visual or is a standalone physics body.



| Name | Type | Description |
|------|------|-------------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) | The Visual that owns this physics component  |
| `body` | [arcade.Body](/api-docs/clay-native/arcade/Body/) | The other body involved in the collision |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitOverlapBody"><div class="plugin-name">arcade</div><code><span class="field-name">emitOverlapBody</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">arcade.Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitOverlapBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dispatched when this visual's body overlaps with another body.

Overlaps occur when bodies intersect but don't push each other apart.
Useful for triggers, collectibles, and detection zones.



| Name | Type | Description |
|------|------|-------------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) | The Visual that owns this physics component  |
| `body` | [arcade.Body](/api-docs/clay-native/arcade/Body/) | The other body involved in the overlap |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitCollide"><div class="plugin-name">arcade</div><code><span class="field-name">emitCollide</span><span class="parenthesis">(</span><span class="arg-name">visual1</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">visual2</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitCollide"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dispatched when this visual collides with another visual.

This is a convenience event that only fires when both bodies belong
to Visual objects, making it easier to work with visual-to-visual collisions.



| Name | Type | Description |
|------|------|-------------|
| `visual1` | [Visual](/api-docs/clay-native/ceramic/Visual/) | This visual  |
| `visual2` | [Visual](/api-docs/clay-native/ceramic/Visual/) | The other visual involved in the collision |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitOverlap"><div class="plugin-name">arcade</div><code><span class="field-name">emitOverlap</span><span class="parenthesis">(</span><span class="arg-name">visual1</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">visual2</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitOverlap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dispatched when this visual overlaps with another visual.

This is a convenience event that only fires when both bodies belong
to Visual objects, making it easier to work with visual-to-visual overlaps.



| Name | Type | Description |
|------|------|-------------|
| `visual1` | [Visual](/api-docs/clay-native/ceramic/Visual/) | This visual  |
| `visual2` | [Visual](/api-docs/clay-native/ceramic/Visual/) | The other visual involved in the overlap |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitWorldBounds"><div class="plugin-name">arcade</div><code><span class="field-name">emitWorldBounds</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">up</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">down</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">left</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">right</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitWorldBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dispatched when this visual's body collides with the world boundaries.

World bounds define the edges of the physics simulation area.
Bodies can be configured to collide with these bounds using
body.collideWorldBounds = true.



| Name | Type | Description |
|------|------|-------------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) | The Visual that hit the world bounds  |
| `up` | [Bool](/api-docs/clay-native/Bool/) | True if hit the top boundary  |
| `down` | [Bool](/api-docs/clay-native/Bool/) | True if hit the bottom boundary  |
| `left` | [Bool](/api-docs/clay-native/Bool/) | True if hit the left boundary  |
| `right` | [Bool](/api-docs/clay-native/Bool/) | True if hit the right boundary |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="willListenCollideBody"><div class="plugin-name">arcade</div><code><span class="field-name">willListenCollideBody</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willListenCollideBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal: Sets up collision event handler when listeners are added.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="willListenCollide"><div class="plugin-name">arcade</div><code><span class="field-name">willListenCollide</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willListenCollide"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="willListenOverlapBody"><div class="plugin-name">arcade</div><code><span class="field-name">willListenOverlapBody</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willListenOverlapBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="willListenOverlap"><div class="plugin-name">arcade</div><code><span class="field-name">willListenOverlap</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willListenOverlap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="willListenWorldBounds"><div class="plugin-name">arcade</div><code><span class="field-name">willListenWorldBounds</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willListenWorldBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleCollide"><div class="plugin-name">arcade</div><code><span class="field-name">handleCollide</span><span class="parenthesis">(</span><span class="arg-name">body1</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">arcade.Body</a><span class="operator">,</span> <span class="arg-name">body2</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">arcade.Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleCollide"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal collision event handler that dispatches appropriate events.

| Name | Type |
|------|------|
| `body1` | [arcade.Body](/api-docs/clay-native/arcade/Body/) |
| `body2` | [arcade.Body](/api-docs/clay-native/arcade/Body/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleOverlap"><div class="plugin-name">arcade</div><code><span class="field-name">handleOverlap</span><span class="parenthesis">(</span><span class="arg-name">body1</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">arcade.Body</a><span class="operator">,</span> <span class="arg-name">body2</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">arcade.Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleOverlap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal overlap event handler that dispatches appropriate events.

| Name | Type |
|------|------|
| `body1` | [arcade.Body](/api-docs/clay-native/arcade/Body/) |
| `body2` | [arcade.Body](/api-docs/clay-native/arcade/Body/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleWorldBounds"><div class="plugin-name">arcade</div><code><span class="field-name">handleWorldBounds</span><span class="parenthesis">(</span><span class="arg-name">body1</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">arcade.Body</a><span class="operator">,</span> <span class="arg-name">up</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">down</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">left</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">right</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleWorldBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal world bounds collision handler that dispatches the worldBounds event.

| Name | Type |
|------|------|
| `body1` | [arcade.Body](/api-docs/clay-native/arcade/Body/) |
| `up` | [Bool](/api-docs/clay-native/Bool/) |
| `down` | [Bool](/api-docs/clay-native/Bool/) |
| `left` | [Bool](/api-docs/clay-native/Bool/) |
| `right` | [Bool](/api-docs/clay-native/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


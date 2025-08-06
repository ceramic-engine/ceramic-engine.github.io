---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: SceneSystem
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/SceneSystem/
---

# SceneSystem

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/SceneSystem.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/System/">System</a> → <strong>ceramic.SceneSystem</strong> (Class)</div>

Core system responsible for managing scene lifecycle, transitions, and display hierarchy.

SceneSystem provides centralized management of scenes in a Ceramic application,
handling their loading, transitions, and display. It supports multiple simultaneous
scenes through named slots, with special handling for the main scene.

Key features:
- **Main scene management**: Primary scene with automatic screen binding
- **Named scene slots**: Support for multiple concurrent scenes (overlays, HUD, etc.)
- **Automatic lifecycle**: Handles preload → load → create → fade transitions
- **Asset preservation**: Option to keep assets when switching scenes
- **Filter support**: Post-processing effects for all root scenes
- **Transition control**: Configurable fade in/out behaviors

The system automatically updates active scenes and manages their transitions,
ensuring smooth scene changes and proper resource management.

Example usage:
```haxe
// Set main scene
app.scenes.main = new GameScene();

// Add overlay scene
app.scenes.set('hud', new HudScene());

// Configure transitions
app.scenes.keepAssetsForNextMain = true;
app.scenes.fadeOutWhenNextMainCanFadeIn = true;
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/Scene/">Scene</a>, App#scenes, <a href="/api-docs/clay-web/ceramic/SceneStatus/">SceneStatus</a></div>


## Static Members

<div class="signature field-var has-description" id="shared"><code><span class="field-name">shared</span><span class="operator">:</span> <a href="#" class="type-link">SceneSystem</a></code><a class="header-anchor" href="#shared"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Singleton instance of the scene system.
Automatically created on first access.

## Instance Members

<div class="signature field-var has-description" id="all"><code><span class="field-name">all</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Scene/" class="type-link">Scene</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#all"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read-only array containing all active scenes in the system.
Includes both root scenes and child scenes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="keepAssetsForNextMain"><code><span class="field-name">keepAssetsForNextMain</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#keepAssetsForNextMain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls asset preservation when switching main scenes.

When `true`, assets from the previous main scene are transferred to the new
main scene instead of being destroyed. This allows seamless transitions
without reloading shared assets like textures, sounds, or fonts.

Useful for:
- Level transitions that share common assets
- Menu → gameplay transitions
- Reducing loading times between related scenes

Default: `false`

<hr class="field-separator" />

<div class="signature field-var has-description" id="bindMainToScreenSize"><code><span class="field-name">bindMainToScreenSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bindMainToScreenSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls automatic screen size binding for the main scene.

When `true`, the main scene's size will automatically match the screen
dimensions and update when the screen is resized. This ensures the main
scene always fills the entire display area.

Set to `false` if you need custom scene sizing or positioning.

Default: `true`

<hr class="field-separator" />

<div class="signature field-var has-description" id="fadeOutWhenNextMainCanFadeIn"><code><span class="field-name">fadeOutWhenNextMainCanFadeIn</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#fadeOutWhenNextMainCanFadeIn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls the timing of scene transitions.

When `true`, the previous scene's fade-out animation is delayed until
the new scene is fully loaded and ready to fade in. This creates smoother
transitions by ensuring the new content is ready before removing the old.

When `false`, the previous scene fades out immediately, potentially
showing a loading state or blank screen.

Default: `true`

<hr class="field-separator" />

<div class="signature field-var has-description" id="main"><code><span class="field-name">main</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Scene/" class="type-link">Scene</a></code><a class="header-anchor" href="#main"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The primary scene of the application.

Setting this property automatically handles scene transitions, including:
- Fading out the previous main scene
- Loading and initializing the new scene
- Managing asset preservation (if enabled)
- Binding to screen size (if enabled)

The main scene typically represents the core content of your application
(game level, menu screen, etc.).

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoDestroyFilter"><code><span class="field-name">autoDestroyFilter</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoDestroyFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls automatic cleanup of replaced filters.

When `true`, filters are automatically destroyed when:
- Replaced by a new filter
- Set to null
- The scene system is destroyed

Set to `false` if you want to manage filter lifecycle manually or
reuse filters across different contexts.

Default: `true`

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoScaleFilter"><code><span class="field-name">autoScaleFilter</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoScaleFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls automatic scaling of scene filters.

When `true`, filters are automatically scaled to match screen dimensions,
ensuring post-processing effects cover the entire display area. The filter
and its content are scaled inversely to maintain proper rendering.

Set to `false` for custom filter sizing or when using filters that
shouldn't match screen size.

Default: `true`

<hr class="field-separator" />

<div class="signature field-var has-description" id="filter"><code><span class="field-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Filter/" class="type-link">Filter</a></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Post-processing filter applied to all root scenes.

When set, all root scenes are rendered through this filter, enabling
global visual effects like:
- Color grading
- Blur or pixelation
- Shader-based effects

The filter automatically includes all root scenes and handles their
proper rendering order.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rootScenes"><code><span class="field-name">rootScenes</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/ceramic/Scene/" class="type-link">Scene</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#rootScenes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of all root scenes indexed by their slot names.

Root scenes are directly managed by the scene system and rendered
to screen. The 'main' slot contains the primary scene, while other
slots can hold overlays, HUD elements, or secondary scenes.

<hr class="field-separator" />

<div class="signature field-method has-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">scene</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Scene/" class="type-link">Scene</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bindToScreenSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">keepAssets</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Assigns a scene to a named slot in the scene system.

This method handles the complete lifecycle of scene assignment, including:
- Removing and cleaning up previous scenes in the slot
- Initializing and displaying the new scene
- Managing scene transitions and asset preservation
- Setting up proper parent-child relationships

Special handling for 'main' slot updates the main property.

Example:
```haxe
// Add a HUD overlay
app.scenes.set('hud', new HudScene());

// Add a pause menu with asset sharing
app.scenes.set('pause', new PauseMenu(), true, true);
```



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | | The slot name for the scene (e.g., 'main', 'hud', 'overlay')  |
| `scene` | [Scene](/api-docs/clay-web/ceramic/Scene/) | | The scene to assign, or null to remove the current scene  |
| `bindToScreenSize` | [Bool](/api-docs/clay-web/Bool/) | `true` | Whether the scene should automatically match screen size (default: true)  |
| `keepAssets` | [Bool](/api-docs/clay-web/Bool/) | `false` | Whether to preserve assets from the previous scene in this slot (default: false) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Scene/" class="type-link">Scene</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves a scene from the specified slot.

Useful for accessing secondary scenes like HUD, overlays, or other
named scenes managed by the system.

Example:
```haxe
var hudScene = app.scenes.get('hud');
if (hudScene != null) {
    hudScene.updateScore(100);
}
```



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | The slot name of the scene to retrieve  |

| Returns | Description |
|---------|-------------|
| [Scene](/api-docs/clay-web/ceramic/Scene/) | The scene in the specified slot, or null if empty |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setCurrentScene"><code><span class="field-name">setCurrentScene</span><span class="parenthesis">(</span><span class="arg-name">scene</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Scene/" class="type-link">Scene</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">keepAssets</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setCurrentScene"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `scene` | [Scene](/api-docs/clay-web/ceramic/Scene/) | |
| `keepAssets` | [Bool](/api-docs/clay-web/Bool/) | `false` |

## Private Members

<div class="signature field-method has-description" id="scaleFilter"><code><span class="field-name">scaleFilter</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scaleFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates filter scaling to match current screen dimensions.

Scales the filter to cover the screen while inversely scaling its content
to maintain proper aspect ratio and sizing of contained scenes.

<hr class="field-separator" />

<div class="signature field-method has-description" id="lateUpdate"><code><span class="field-name">lateUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lateUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates all active scenes and handles auto-booting.

Called automatically each frame after regular updates. This method:
- Auto-boots scenes that have been added to the display hierarchy
- Updates active, non-paused scenes that have autoUpdate enabled
- Maintains filter scaling if autoScaleFilter is enabled



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-web/Float/) | Time elapsed since last frame in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new SceneSystem instance.

Typically not called directly - use the shared singleton instance
via `SceneSystem.shared` or through `app.scenes`.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:allow` | ceramic.Scene |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Filter
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Filter/
---

# Filter

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Filter.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">Visual</a> → <a href="/api-docs/clay-web/ceramic/Quad/">Quad</a> → <a href="/api-docs/clay-web/ceramic/Layer/">Layer</a> → <strong>ceramic.Filter</strong> (Class) → <a href="/api-docs/clay-web/ceramic/PixelArt/">PixelArt</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/tracker/Observable/">tracker.Observable</a></div>

A visual container that renders its children to a texture for post-processing effects.

Filter renders its children to a RenderTexture, allowing you to:
- Apply shader effects to groups of visuals
- Add blur, glow, or other post-processing effects
- Blend or transform rendered results as a single texture
- Create complex visual effects like reflections or distortions
- Improve performance by caching complex visuals

The filter process:
1. Children are rendered to an internal RenderTexture
2. The texture can be processed with shaders or effects
3. The result is displayed as a single quad/mesh

Features:
- Automatic render texture management
- Optional custom mesh for advanced effects
- Toggle effects without changing hierarchy
- Explicit render control for performance
- Support for texture atlases via TextureTilePacker

```haxe
// Create a blur filter
var blurFilter = new Filter();
blurFilter.size(400, 300);
blurFilter.shader = assets.shader('blur');

// Add content to be blurred
var text = new Text();
text.content = 'Blurred Text';
blurFilter.content.add(text);

// Toggle effect
blurFilter.enabled = false; // Disable blur
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/RenderTexture/">RenderTexture</a>, <a href="/api-docs/clay-web/ceramic/Shader/">Shader</a>, <a href="/api-docs/clay-web/ceramic/Layer/">Layer</a></div>


## Instance Members

<div class="signature field-var has-description" id="observedDirty"><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="textureId"><code><span class="field-name">textureId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#textureId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional ID assigned to the internal render texture.
Useful for debugging or identifying textures in tools.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mesh"><code><span class="field-name">mesh</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Mesh/" class="type-link">Mesh</a></code><a class="header-anchor" href="#mesh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional mesh for advanced rendering effects.

By default, the filter renders as a simple quad. Providing a custom mesh
allows for advanced effects like:
- Distortion effects with deformed vertices
- Multi-pass rendering with custom UVs
- Complex shader effects requiring custom attributes

The mesh will be added as a child and the render texture assigned to it.

<hr class="field-separator" />

<div class="signature field-var has-description" id="destroyMeshOnRemove"><code><span class="field-name">destroyMeshOnRemove</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#destroyMeshOnRemove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If set to `true`, when assigning `null` or
a new mesh intance to the `mesh` field will destroy
any existing mesh previously assigned.

<hr class="field-separator" />

<div class="signature field-var has-description" id="content"><code><span class="field-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#content"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The container for visuals to be rendered through this filter.
Add your visuals as children of this content quad.
Everything added here will be rendered to the filter's texture
and processed according to the filter's settings.

<hr class="field-separator" />

<div class="signature field-var has-description" id="hitVisual"><code><span class="field-name">hitVisual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#hitVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If provided, visuals in content will react to hit tests
and touch events as if they were inside this hit visual.
By default, `hitVisual` is the `Filter` instance itself.

<hr class="field-separator" />

<div class="signature field-var has-description" id="enabled"><code><span class="field-name">enabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#enabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Toggle the filter effect on/off.

When false:
- No render texture is used
- Children render directly to screen
- No performance overhead from filtering
- Useful for toggling effects without changing hierarchy

Default is true (filter enabled).

<hr class="field-separator" />

<div class="signature field-var has-description" id="textureFilter"><code><span class="field-name">textureFilter</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#textureFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The filtering mode for the render texture.
- LINEAR: Smooth filtering (default, good for most effects)
- NEAREST: No filtering (good for pixel art)

<hr class="field-separator" />

<div class="signature field-var has-description" id="depthBuffer"><code><span class="field-name">depthBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#depthBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to use a depth buffer for the render texture.
Enable when rendering 3D content or when precise depth testing is needed.
Default is true.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stencil"><code><span class="field-name">stencil</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stencil"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to use a stencil buffer for the render texture.
Enable for masking effects or when using stencil-based rendering techniques.
Default is true.

<hr class="field-separator" />

<div class="signature field-var has-description" id="antialiasing"><code><span class="field-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#antialiasing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Antialiasing level for the render texture.
0 = no antialiasing (default)
2, 4, 8, etc. = multisampling levels
Higher values provide smoother edges but use more GPU resources.

<hr class="field-separator" />

<div class="signature field-var has-description" id="autoRender"><code><span class="field-name">autoRender</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the render texture updates automatically.
Set to false for manual control over when rendering happens.
Useful for static content that doesn't need continuous updates.
Default is true.

<hr class="field-separator" />

<div class="signature field-var has-description" id="explicitRender"><code><span class="field-name">explicitRender</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#explicitRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable manual control over when the filter renders.

When true:
- Children don't render automatically
- Use render() method to trigger rendering
- Filter manages children's active state
- Useful for performance optimization

Default is false (automatic rendering).

<hr class="field-separator" />

<div class="signature field-var has-description" id="textureTilePacker"><code><span class="field-name">textureTilePacker</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureTilePacker/" class="type-link">TextureTilePacker</a></code><a class="header-anchor" href="#textureTilePacker"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional texture tile packer for efficient texture atlas usage.
When set, the filter will allocate tiles from the packer's texture atlas
instead of creating dedicated render textures.
Useful for optimizing many small filters.

<hr class="field-separator" />

<div class="signature field-var has-description" id="textureTile"><code><span class="field-name">textureTile</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureTile/" class="type-link">TextureTile</a></code><a class="header-anchor" href="#textureTile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The allocated texture tile when using a TextureTilePacker.
Read-only. Automatically managed when textureTilePacker is set.

<hr class="field-separator" />

<div class="signature field-var has-description" id="renderTexture"><code><span class="field-name">renderTexture</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/RenderTexture/" class="type-link">RenderTexture</a></code><a class="header-anchor" href="#renderTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The render texture used for this filter.
Read-only. Automatically created based on filter size and settings.
Can be observed for changes using the @observe attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="density"><code><span class="field-name">density</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#density"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Texture density/resolution multiplier.
-1 = use screen density (default)
1.0 = normal density
2.0 = double density (retina)
Affects the internal resolution of the render texture.

<hr class="field-separator" />

<div class="signature field-var has-description" id="neverEmpty"><code><span class="field-name">neverEmpty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#neverEmpty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Force the filter to render even when content is empty.

By default, empty filters don't render (optimization).
Set to true when you need the filter to process even without content,
such as for time-based shader effects or render passes that don't
depend on input visuals.

Adds a hidden 1x1 quad to ensure rendering occurs.

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateRenderTexture"><code><span class="field-name">invalidateRenderTexture</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateRenderTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="render"><code><span class="field-name">render</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#render"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Manually trigger rendering when explicitRender is true.

This method:
1. Activates content for rendering
2. Waits for the render pass
3. Updates the render texture
4. Deactivates content
5. Calls the done callback

Handles concurrent render calls gracefully by queuing callbacks.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `done` | Function | *(optional)* | Optional callback invoked when rendering completes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="visualInContentHits"><code><span class="field-name">visualInContentHits</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visualInContentHits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Test if a visual inside the filter's content is hit at the given coordinates.

This method handles the coordinate transformation from screen space
through the filter's render texture to the visual's local space.
Used internally for touch/mouse hit testing on filtered content.



| Name | Type | Description |
|------|------|-------------|
| `visual` | [Visual](/api-docs/clay-web/ceramic/Visual/) | The visual to test  |
| `x` | [Float](/api-docs/clay-web/Float/) | Screen x coordinate  |
| `y` | [Float](/api-docs/clay-web/Float/) | Screen y coordinate  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if the visual is hit at the given coordinates |

<hr class="field-separator" />

<div class="signature field-method no-description" id="computeContent"><code><span class="field-name">computeContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="meshDirty"><code><span class="field-name">meshDirty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#meshDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="neverEmptyQuad"><code><span class="field-name">neverEmptyQuad</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#neverEmptyQuad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedRenderTexture"><code><span class="field-name">unobservedRenderTexture</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/RenderTexture/" class="type-link">RenderTexture</a></code><a class="header-anchor" href="#unobservedRenderTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="explicitRenderState"><code><span class="field-name">explicitRenderState</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#explicitRenderState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal flag used to keep track of current explicit render state

<hr class="field-separator" />

<div class="signature field-var has-description" id="explicitRenderPendingResultCallbacks"><code><span class="field-name">explicitRenderPendingResultCallbacks</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#explicitRenderPendingResultCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Used internally when concurrent renders are trigerred

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitObservedDirty"><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">Filter</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [Filter](/api-docs/clay-web/ceramic/Filter/) |
| `fromSerializedField` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitRenderTextureChange"><code><span class="field-name">emitRenderTextureChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/RenderTexture/" class="type-link">RenderTexture</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/RenderTexture/" class="type-link">RenderTexture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitRenderTextureChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when renderTexture field changes.

| Name | Type |
|------|------|
| `current` | [RenderTexture](/api-docs/clay-web/ceramic/RenderTexture/) |
| `previous` | [RenderTexture](/api-docs/clay-web/ceramic/RenderTexture/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleTexturesDensityChange"><code><span class="field-name">handleTexturesDensityChange</span><span class="parenthesis">(</span><span class="arg-name">density</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">prevDensity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleTexturesDensityChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `density` | [Float](/api-docs/clay-web/Float/) |
| `prevDensity` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateRenderTextureAndContent"><code><span class="field-name">updateRenderTextureAndContent</span><span class="parenthesis">(</span><span class="arg-name">filterWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">filterHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">density</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">depthBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">stencil</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateRenderTextureAndContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `filterWidth` | [Int](/api-docs/clay-web/Int/) |
| `filterHeight` | [Int](/api-docs/clay-web/Int/) |
| `density` | [Float](/api-docs/clay-web/Float/) |
| `depthBuffer` | [Bool](/api-docs/clay-web/Bool/) |
| `stencil` | [Bool](/api-docs/clay-web/Bool/) |
| `antialiasing` | [Int](/api-docs/clay-web/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


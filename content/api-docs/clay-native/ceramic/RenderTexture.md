---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: RenderTexture
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/RenderTexture/
---

# RenderTexture

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/RenderTexture.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/Texture/">Texture</a> → <strong>ceramic.RenderTexture</strong> (Class)</div>

A texture that can be rendered to, allowing off-screen rendering.

RenderTexture enables rendering visuals to a texture instead of the screen.
This is essential for many advanced graphics techniques and effects.

Key features:
- Off-screen rendering for post-processing effects
- Render-to-texture for reflections, shadows, minimaps
- Texture composition and layering
- Dynamic texture generation
- Render dependency management

Common uses:
- Post-processing filters (blur, glow, distortion)
- Dynamic texture generation (procedural textures)
- Render passes for complex effects
- UI rendering to texture
- Reflection/refraction effects
- Shadow mapping

RenderTextures are automatically managed by Ceramic's rendering system,
which handles render order based on texture dependencies.

```haxe
// Create a render texture
var rt = new RenderTexture(512, 512);

// Render visuals to it
myVisual.renderTarget = rt;

// Use as a regular texture
var quad = new Quad();
quad.texture = rt;

// Manual rendering with stamp
rt.autoRender = false;
rt.stamp(myVisual, () -> {
    trace('Rendering complete');
});

// Clear with color
rt.clear(Color.BLUE, 0.5, 0, 0, 100, 100, () -> {
    trace('Clear complete');
});
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/Texture/">Texture</a>, Visual.renderTarget, <a href="/api-docs/clay-native/ceramic/Filter/">Filter</a></div>


## Instance Members

<div class="signature field-var has-description" id="autoRender"><code><span class="field-name">autoRender</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this texture automatically renders when visuals target it.
- true: Renders automatically when needed (default)
- false: Manual control via stamp() or renderDirty flag

<hr class="field-separator" />

<div class="signature field-var has-description" id="clearOnRender"><code><span class="field-name">clearOnRender</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#clearOnRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to clear the texture before each render.
- true: Clears to transparent before rendering (default)
- false: Preserves previous contents (for accumulation effects)

<hr class="field-separator" />

<div class="signature field-var has-description" id="renderDirty"><code><span class="field-name">renderDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#renderDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Marks the texture as needing to be rendered.
Set to true to trigger a render in the next frame.
Automatically set when visuals targeting this texture change.

<hr class="field-separator" />

<div class="signature field-var has-description" id="depth"><code><span class="field-name">depth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#depth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this render texture has a depth buffer.
Required for proper depth testing and 3D rendering.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stencil"><code><span class="field-name">stencil</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stencil"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this render texture has a stencil buffer.
Required for stencil-based masking effects.

<hr class="field-separator" />

<div class="signature field-var has-description" id="antialiasing"><code><span class="field-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#antialiasing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Antialiasing level (multisampling).
- 0 = No antialiasing (default)
- 2, 4, 8, etc. = Number of samples
Higher values provide smoother edges but use more GPU resources.

<hr class="field-separator" />

<div class="signature field-var has-description" id="priority"><code><span class="field-name">priority</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#priority"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Render priority for dependency sorting.
Used internally to determine render order when textures depend on each other.
Higher priority textures render first.

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="stamp"><code><span class="field-name">stamp</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Draws the given visual onto the render texture.

The drawing operation is asynchronous - it happens during the next
render frame. The visual is temporarily assigned to this render texture,
rendered, then restored to its original state.

This is typically used with autoRender set to false for manual control.



| Name | Type | Description |
|------|------|-------------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) | The visual to render onto this texture  |
| `done` | Function | Callback invoked after rendering completes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Color/" class="type-link">Color</a> <span class="operator">=</span> <span class="default-value">0xFFFFFF</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">clipX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">clipY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">clipWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">clipHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clears the texture or a specific area with a color.

The clear operation is asynchronous - it happens during the next
render frame. Use -1 for clip parameters to clear the entire texture.

This is typically used with autoRender set to false for manual control.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `color` | [Color](/api-docs/clay-native/ceramic/Color/) | `0xFFFFFF` | Fill color (default: white)  |
| `alpha` | [Float](/api-docs/clay-native/Float/) | `0` | Fill alpha (default: 0 = transparent)  |
| `clipX` | [Float](/api-docs/clay-native/Float/) | `-1` | X position of area to clear (-1 = full texture)  |
| `clipY` | [Float](/api-docs/clay-native/Float/) | `-1` | Y position of area to clear (-1 = full texture)  |
| `clipWidth` | [Float](/api-docs/clay-native/Float/) | `-1` | Width of area to clear (-1 = full texture)  |
| `clipHeight` | [Float](/api-docs/clay-native/Float/) | `-1` | Height of area to clear (-1 = full texture)  |
| `done` | Function | | Callback invoked after clearing completes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">density</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">depth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">stencil</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new render texture.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `width` | [Float](/api-docs/clay-native/Float/) | | Width in logical pixels  |
| `height` | [Float](/api-docs/clay-native/Float/) | | Height in logical pixels  |
| `density` | [Float](/api-docs/clay-native/Float/) | `-1` | Pixel density multiplier (-1 = use screen density)  |
| `depth` | [Bool](/api-docs/clay-native/Bool/) | `true` | Enable depth buffer (default: true)  |
| `stencil` | [Bool](/api-docs/clay-native/Bool/) | `true` | Enable stencil buffer (default: true)  |
| `antialiasing` | [Int](/api-docs/clay-native/Int/) | `0` | Multisampling level (default: 0) |

## Private Members

<div class="signature field-method no-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:allow` | ceramic.App |


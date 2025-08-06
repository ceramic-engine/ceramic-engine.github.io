---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: LowRes
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/LowRes/
---

# LowRes

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/LowRes.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">Visual</a> → <a href="/api-docs/clay-web/ceramic/Quad/">Quad</a> → <a href="/api-docs/clay-web/ceramic/Layer/">Layer</a> → <strong>ceramic.LowRes</strong> (Class)</div>

A container that displays visuals at low resolution with optional antialiasing through supersampling.

LowRes combines PixelArt and Filter components to create a low-resolution rendering effect
with customizable antialiasing. This is useful for creating retro-style graphics or
performance-optimized rendering while maintaining visual quality through supersampling.

Key features:
- Renders content at a lower resolution than display resolution
- Optional antialiasing through supersampling (density > 1)
- Sharp pixel rendering with adjustable sharpness
- Automatic or manual render control

```haxe
// Create a low-res container for retro graphics
var lowRes = new LowRes();
lowRes.size(320, 240); // Low internal resolution
lowRes.density = 2; // 2x supersampling for antialiasing
lowRes.sharpness = 2.0; // Sharp pixels

// Add content to the low-res container
var sprite = new Quad();
sprite.texture = assets.texture('pixel-art');
lowRes.content.add(sprite);

// Scale up the container to fill screen
lowRes.scale(3); // 3x scale for 960x720 display
```

<div class="see"><strong>See:</strong> PixelArt For the pixel-perfect rendering component, Filter For the supersampling filter component</div>


## Instance Members

<div class="signature field-var has-description" id="sharpness"><code><span class="field-name">sharpness</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sharpness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls the sharpness of the pixels.
Higher values create sharper, more defined pixel edges.

Common values:
- 1.0: Soft pixels (some blur)
- 2.0: Sharp pixels (recommended for pixel art)
- 4.0: Very sharp pixels

<div class="see"><strong>See:</strong> PixelArt.sharpness</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="explicitRender"><code><span class="field-name">explicitRender</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#explicitRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true, the content must be manually rendered by calling render().
When false, rendering happens automatically.
Useful for controlling when expensive render operations occur.

<div class="see"><strong>See:</strong> PixelArt.explicitRender</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="autoRender"><code><span class="field-name">autoRender</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true, content is automatically rendered when changes occur.
When false, you must manually trigger rendering.
This is the inverse of explicitRender.

<div class="see"><strong>See:</strong> PixelArt.autoRender</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="density"><code><span class="field-name">density</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#density"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Density value used for supersampling antialiasing.
Controls the internal render resolution multiplier.

- 1.0: No supersampling (fastest, no antialiasing)
- 2.0: 2x supersampling (4x pixels, good quality/performance balance)
- 4.0: 4x supersampling (16x pixels, high quality, slower)

Higher values produce smoother edges but require more GPU memory and processing.
Use power of 2 values for best results (1, 2, 4).

```haxe
lowRes.density = 2; // Recommended for most cases
```

<hr class="field-separator" />

<div class="signature field-var has-description" id="content"><code><span class="field-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#content"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The container where you add your low-resolution content.
All visuals added to this container will be rendered at low resolution.

```haxe
var sprite = new Quad();
lowRes.content.add(sprite); // Add to low-res rendering
```

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new low-resolution container.
Sets up the internal PixelArt and Filter components with default settings.
The container automatically resizes its internal components when resized.

## Private Members

<div class="signature field-var has-description" id="pixelArt"><code><span class="field-name">pixelArt</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/PixelArt/" class="type-link">PixelArt</a></code><a class="header-anchor" href="#pixelArt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal pixel art container that handles pixel-perfect rendering.
Ensures pixels remain sharp and crisp regardless of scaling.

<hr class="field-separator" />

<div class="signature field-var has-description" id="filter"><code><span class="field-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Filter/" class="type-link">Filter</a></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal filter used to create supersampled content.
Applies antialiasing when density is greater than 1.

<hr class="field-separator" />

<div class="signature field-method has-description" id="handleResize"><code><span class="field-name">handleResize</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleResize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal handler that resizes the pixel art and filter components
when the container size changes.



| Name | Type | Description |
|------|------|-------------|
| `width` | [Float](/api-docs/clay-web/Float/) | New width in pixels  |
| `height` | [Float](/api-docs/clay-web/Float/) | New height in pixels |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TextureAtlas
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/TextureAtlas/
---

# TextureAtlas

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TextureAtlas.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <strong>ceramic.TextureAtlas</strong> (Class)</div>

A texture atlas that combines multiple images into larger textures for efficient rendering.

TextureAtlas is a fundamental optimization technique in game development that packs
multiple smaller images (sprites, UI elements, etc.) into larger texture pages.
This reduces texture switches during rendering, improving performance significantly.

Benefits of texture atlases:
- Reduced draw calls by batching sprites from the same atlas
- Better texture memory usage and cache efficiency
- Simplified asset management for related images
- Support for texture bleeding prevention with padding

The atlas consists of:
- Pages: One or more large textures containing packed images
- Regions: Individual images within the pages with position data
- Metadata: Names, coordinates, and optional rotation info

```haxe
// Load a texture atlas
var atlas = app.assets.atlas('characters');

// Get a specific region
var heroRegion = atlas.region('hero_idle');

// Apply to a quad
var quad = new Quad();
quad.tile = heroRegion;

// Apply to a sprite: needs sprite plugin,
// but supports region offsets which are not
// supported on plain quad tiles
var sprite = new Sprite();
sprite.region = heroRegion;
```

<div class="see"><strong>See:</strong> TextureAtlasPage Individual texture pages in the atlas, TextureAtlasRegion Individual image regions within pages, AtlasAsset For loading atlas files, TextureAtlasPacker For creating atlases at runtime</div>


## Instance Members

<div class="signature field-var has-description" id="pages"><code><span class="field-name">pages</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/TextureAtlasPage/" class="type-link">TextureAtlasPage</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pages"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The texture pages of this atlas.

Large atlases may span multiple texture pages to accommodate
all images while respecting maximum texture size limits.
Each page is a separate GPU texture containing packed images.

<hr class="field-separator" />

<div class="signature field-var has-description" id="regions"><code><span class="field-name">regions</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/TextureAtlasRegion/" class="type-link">TextureAtlasRegion</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#regions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All texture regions contained in this atlas.

Each region represents a single image within the atlas,
with its location, size, and optional metadata. Regions
reference their containing page by index.

<hr class="field-separator" />

<div class="signature field-var has-description" id="asset"><code><span class="field-name">asset</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AtlasAsset/" class="type-link">AtlasAsset</a></code><a class="header-anchor" href="#asset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The asset that loaded this atlas.

Reference to the AtlasAsset for resource management.
Will be destroyed when the atlas is destroyed to ensure
proper cleanup of loaded resources.

<hr class="field-separator" />

<div class="signature field-method has-description" id="region"><code><span class="field-name">region</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureAtlasRegion/" class="type-link">TextureAtlasRegion</a></code><a class="header-anchor" href="#region"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds a texture region by name.

Searches through all regions in the atlas for one matching
the specified name. Names should be unique within an atlas.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | The name of the region to find  |

| Returns | Description |
|---------|-------------|
| [TextureAtlasRegion](/api-docs/clay-web/ceramic/TextureAtlasRegion/) | The matching TextureAtlasRegion, or null if not found * ```haxe // Get specific sprite from atlas var enemyRegion = atlas.region('enemy_walk_01'); if (enemyRegion != null) { enemySprite.region = enemyRegion; } * // Check if region exists if (atlas.region('powerup_star') != null) { showPowerup(); } ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeFrames"><code><span class="field-name">computeFrames</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeFrames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes texture coordinates for all regions after pages are loaded.

This method must be called after all page textures are loaded to
calculate the actual UV coordinates for each region. It converts
pixel positions to normalized texture coordinates based on the
actual texture dimensions.

This is typically called automatically by the asset loader,
but may need manual invocation when building atlases at runtime.

```haxe
// Manual atlas creation
var atlas = new TextureAtlas();
// ... add pages and regions ...
atlas.computeFrames(); // Calculate UVs
```

<hr class="field-separator" />

<div class="signature field-method has-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys the atlas and all associated resources.

Cleans up:
- All page textures (GPU memory)
- The associated asset (if any)
- Region data and metadata

After destruction, this atlas should not be used.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new empty texture atlas.

Typically, atlases are loaded via Assets.atlas() rather than
created directly, but this can be used for runtime atlas generation.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


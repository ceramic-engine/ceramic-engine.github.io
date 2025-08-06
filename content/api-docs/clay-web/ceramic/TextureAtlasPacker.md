---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TextureAtlasPacker
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/TextureAtlasPacker/
---

# TextureAtlasPacker

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TextureAtlasPacker.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <strong>ceramic.TextureAtlasPacker</strong> (Class)</div>

Dynamic texture atlas builder that packs multiple images into optimized texture pages at runtime.

TextureAtlasPacker uses bin packing algorithms to efficiently arrange images into
larger textures, minimizing wasted space and texture switches. This is useful for:
- Dynamically generated content (procedural graphics, text rendering)
- User-generated content that needs atlasing
- Optimizing texture usage for varying screen resolutions
- Creating atlases from individual loaded images

The packer features:
- Automatic page size growth (32x32 to 2048x2048)
- Multi-page support when content exceeds maximum size
- Configurable spacing between packed images
- Support for trimmed sprites with offset data
- Variant regions that share texture data

```haxe
// Create a packer
var packer = new TextureAtlasPacker();
packer.spacing = 2; // 2 pixel margin
packer.filter = LINEAR;

// Add regions from pixel data
packer.add("player_idle", idlePixels, 64, 64, 60, 60, 2, 2);
packer.add("player_walk", walkPixels, 64, 64, 62, 62, 1, 1);

// Pack and get resulting atlas
packer.pack((atlas) -> {
    var playerRegion = atlas.region("player_idle");
    playerSprite.region = playerRegion;
});
```

<div class="see"><strong>See:</strong> TextureAtlas The resulting atlas after packing, TextureAtlasRegion Individual regions in the atlas, binpacking.MaxRectsPacker The underlying bin packing algorithm</div>


## Instance Members

<div class="signature field-var has-description" id="atlas"><code><span class="field-name">atlas</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a></code><a class="header-anchor" href="#atlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The resulting texture atlas after packing.

Created on first pack() call and reused for subsequent packing.
Contains all pages and regions that have been packed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="spacing"><code><span class="field-name">spacing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#spacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Spacing between packed regions in pixels.

Adds a margin around each packed image to prevent texture bleeding
during filtering. Recommended values: 1-2 pixels for linear filtering,
0 for nearest neighbor filtering.

Default: 1

<hr class="field-separator" />

<div class="signature field-var has-description" id="filter"><code><span class="field-name">filter</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Texture filtering mode for atlas pages.

Applied to all texture pages created by this packer.
- LINEAR: Smooth filtering (best for scaled graphics)
- NEAREST: Pixel-perfect filtering (best for pixel art)

Default: LINEAR

<hr class="field-separator" />

<div class="signature field-method has-description" id="hasPendingRegions"><code><span class="field-name">hasPendingRegions</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasPendingRegions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if there are regions waiting to be packed.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if add() has been called but pack() hasn't processed the regions yet |

<hr class="field-separator" />

<div class="signature field-method has-description" id="region"><code><span class="field-name">region</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/_TextureAtlasPacker/TextureAtlasPackerRegion/" class="type-link">ceramic._TextureAtlasPacker.TextureAtlasPackerRegion</a></code><a class="header-anchor" href="#region"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds a region by name in pending or packed regions.

Searches both regions waiting to be packed and regions
already packed into pages. Useful for creating variant regions
or checking if a region exists.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | The region name to search for  |

| Returns | Description |
|---------|-------------|
| [ceramic._TextureAtlasPacker.TextureAtlasPackerRegion](/api-docs/clay-web/ceramic/_TextureAtlasPacker/TextureAtlasPackerRegion/) | The packer region data, or null if not found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeRegionsWithMatcher"><code><span class="field-name">removeRegionsWithMatcher</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">removeAtlasRegions</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="arg-name">matcher</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeRegionsWithMatcher"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes regions from the packer using a custom matching function.

This method allows selective removal of regions based on any criteria.
It handles cleanup of both pending regions and already-packed regions,
reorganizing the atlas as needed.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `removeAtlasRegions` | [Bool](/api-docs/clay-web/Bool/) | `true` | If true, also removes matching regions from the final atlas  |
| `matcher` | Function | | Function that returns true for regions to remove * ```haxe // Remove all enemy sprites packer.removeRegionsWithMatcher(true, name -> name.indexOf("enemy_") == 0); * // Remove temporary regions packer.removeRegionsWithMatcher(true, name -> tempRegions.exists(name)); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeRegionsWithPrefix"><code><span class="field-name">removeRegionsWithPrefix</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">removeAtlasRegions</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="arg-name">prefix</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeRegionsWithPrefix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes all regions whose names start with the specified prefix.

Convenience method for removing groups of related regions.
Commonly used for cleaning up temporary or category-specific regions.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `removeAtlasRegions` | [Bool](/api-docs/clay-web/Bool/) | `true` | If true, also removes matching regions from the final atlas  |
| `prefix` | [String](/api-docs/clay-web/String/) | | The string prefix to match region names against * ```haxe // Remove all UI elements packer.removeRegionsWithPrefix(true, "ui_"); * // Remove temporary regions packer.removeRegionsWithPrefix(true, "temp_"); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys the packer and all associated resources.

Cleans up:
- The generated atlas and all its textures
- Pending region data
- Internal packing structures

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">originalWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">originalHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">packedWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">packedHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add a region to this atlas packer from the given pixels.
Example usage:

```haxe
atlas.add(region1, pixels1);
atlas.add(region2, pixels2);
atlas.pack(() -> {
    // Done packing new regions
});
```

| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `pixels` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) | |
| `originalWidth` | [Int](/api-docs/clay-web/Int/) | |
| `originalHeight` | [Int](/api-docs/clay-web/Int/) | |
| `packedWidth` | [Int](/api-docs/clay-web/Int/) | |
| `packedHeight` | [Int](/api-docs/clay-web/Int/) | `-1` |
| `offsetX` | [Int](/api-docs/clay-web/Int/) | `0` |
| `offsetY` | [Int](/api-docs/clay-web/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pack"><code><span class="field-name">pack</span><span class="parenthesis">(</span><span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Packs all pending regions into texture atlas pages.

This method executes the bin packing algorithm to arrange all regions
added via add() into optimal texture layouts. It handles:
- Automatic page size growth when regions don't fit
- Creation of new pages when maximum size is exceeded
- Texture generation from pixel data
- Variant region resolution

The packing process:
1. Attempts to fit regions into existing pages
2. Grows page size (up to MAX_TEXTURE_SIZE) if needed
3. Creates new pages when current pages are full
4. Generates GPU textures from packed pixel data
5. Creates TextureAtlasRegion instances for use



| Name | Type | Description |
|------|------|-------------|
| `done` | Function | Callback invoked when packing is complete, receives the atlas * ```haxe // Add multiple regions packer.add("sprite1", pixels1, 32, 32, 32, 32); packer.add("sprite2", pixels2, 64, 64, 64, 64); * // Pack and use atlas packer.pack((atlas) -> { var region1 = atlas.region("sprite1"); quad.region = region1; }); ``` * |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new texture atlas packer.

The packer starts empty - use add() to queue regions
and pack() to build the atlas.

## Private Members

<div class="signature field-var has-description" id="MIN_TEXTURE_SIZE"><code><span class="field-name">MIN_TEXTURE_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MIN_TEXTURE_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Minimum texture page size in pixels.
Pages start at this size and grow as needed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="MAX_TEXTURE_SIZE"><code><span class="field-name">MAX_TEXTURE_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_TEXTURE_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum texture page size in pixels.
When exceeded, additional pages are created.
This limit ensures compatibility with most GPUs.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pendingRegions"><code><span class="field-name">pendingRegions</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/_TextureAtlasPacker/TextureAtlasPackerRegion/" class="type-link">ceramic._TextureAtlasPacker.TextureAtlasPackerRegion</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pendingRegions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Regions waiting to be packed.
Populated by add() calls, cleared after pack().

<hr class="field-separator" />

<div class="signature field-var has-description" id="pages"><code><span class="field-name">pages</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/_TextureAtlasPacker/TextureAtlasPackerPage/" class="type-link">ceramic._TextureAtlasPacker.TextureAtlasPackerPage</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pages"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal page data for bin packing.
Each page tracks its packer, regions, and texture state.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitFinishPack"><code><span class="field-name">emitFinishPack</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFinishPack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event emitted when packing is complete.

Fired after all regions have been successfully packed
and textures have been created. The atlas is ready for use.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


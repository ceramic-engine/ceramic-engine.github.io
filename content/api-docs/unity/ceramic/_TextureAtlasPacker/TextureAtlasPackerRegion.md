---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TextureAtlasPackerRegion
target: Unity
permalink: api-docs/unity/ceramic/_TextureAtlasPacker/TextureAtlasPackerRegion/
---

# TextureAtlasPackerRegion

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TextureAtlasPacker.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic._TextureAtlasPacker.TextureAtlasPackerRegion</strong> (private class)</div>

Internal data structure for regions during the packing process.

TextureAtlasPackerRegion holds temporary information about images
to be packed, including pixel data, dimensions, and packing results.
This is distinct from TextureAtlasRegion which represents the final
packed regions in the atlas.

Features:
- Support for trimmed sprites (packed vs original dimensions)
- Offset data for proper sprite alignment
- Variant regions that share texture data with a source
- Bin packing rectangle assignment

<div class="see"><strong>See:</strong> TextureAtlasRegion The final region type after packing</div>


## Instance Members

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique identifier for this region.
Used to reference the region in the final atlas.

<hr class="field-separator" />

<div class="signature field-var has-description" id="originalWidth"><code><span class="field-name">originalWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#originalWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Original sprite width including transparent margins.
This is the full size before any trimming optimization.

<hr class="field-separator" />

<div class="signature field-var has-description" id="originalHeight"><code><span class="field-name">originalHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#originalHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Original sprite height including transparent margins.
This is the full size before any trimming optimization.

<hr class="field-separator" />

<div class="signature field-var has-description" id="packedWidth"><code><span class="field-name">packedWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#packedWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Actual width of non-transparent pixels to be packed.
Usually smaller than originalWidth due to trimming.

<hr class="field-separator" />

<div class="signature field-var has-description" id="packedHeight"><code><span class="field-name">packedHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#packedHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Actual height of non-transparent pixels to be packed.
Usually smaller than originalHeight due to trimming.

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetX"><code><span class="field-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal offset from original sprite origin to packed pixels.
Used to maintain proper sprite alignment after trimming.

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetY"><code><span class="field-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical offset from original sprite origin to packed pixels.
Used to maintain proper sprite alignment after trimming.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pixels"><code><span class="field-name">pixels</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">ceramic.UInt8Array</a></code><a class="header-anchor" href="#pixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Raw pixel data for this region in RGBA format.
Null for variant regions that reference another region.

<hr class="field-separator" />

<div class="signature field-var has-description" id="sourceRegion"><code><span class="field-name">sourceRegion</span><span class="operator">:</span> <a href="#" class="type-link">TextureAtlasPackerRegion</a></code><a class="header-anchor" href="#sourceRegion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to source region for variants.
Variant regions share the same texture coordinates as their source
but can have different original dimensions and offsets.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rect"><code><span class="field-name">rect</span><span class="operator">:</span> <a href="/api-docs/unity/binpacking/Rect/" class="type-link">binpacking.Rect</a></code><a class="header-anchor" href="#rect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Assigned position in the texture page after bin packing.
Null until the region has been successfully packed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rendered"><code><span class="field-name">rendered</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#rendered"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracks whether pixels have been copied to the page texture.
Prevents duplicate rendering during repacking operations.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">originalWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">originalHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">packedWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">packedHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">ceramic.UInt8Array</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">sourceRegion</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="#" class="type-link">TextureAtlasPackerRegion</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">rect</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/binpacking/Rect/" class="type-link">binpacking.Rect</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">rendered</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/unity/String/) | * Unique identifier for this region. Used to reference the region in the final atlas. |
| `originalWidth` | [Null](/api-docs/unity/Null/)<[Int](/api-docs/unity/Int/)> | * Original sprite width including transparent margins. This is the full size before any trimming optimization. |
| `originalHeight` | [Null](/api-docs/unity/Null/)<[Int](/api-docs/unity/Int/)> | * Original sprite height including transparent margins. This is the full size before any trimming optimization. |
| `packedWidth` | [Int](/api-docs/unity/Int/) | * Actual width of non-transparent pixels to be packed. Usually smaller than originalWidth due to trimming. |
| `packedHeight` | [Int](/api-docs/unity/Int/) | * Actual height of non-transparent pixels to be packed. Usually smaller than originalHeight due to trimming. |
| `offsetX` | [Null](/api-docs/unity/Null/)<[Int](/api-docs/unity/Int/)> | * Horizontal offset from original sprite origin to packed pixels. Used to maintain proper sprite alignment after trimming. |
| `offsetY` | [Null](/api-docs/unity/Null/)<[Int](/api-docs/unity/Int/)> | * Vertical offset from original sprite origin to packed pixels. Used to maintain proper sprite alignment after trimming. |
| `pixels` | [Null](/api-docs/unity/Null/)<[ceramic.UInt8Array](/api-docs/unity/ceramic/UInt8Array/)> | * Raw pixel data for this region in RGBA format. Null for variant regions that reference another region. |
| `sourceRegion` | [Null](/api-docs/unity/Null/)<[TextureAtlasPackerRegion](/api-docs/unity/ceramic/_TextureAtlasPacker/TextureAtlasPackerRegion/)> | * Reference to source region for variants. Variant regions share the same texture coordinates as their source but can have different original dimensions and offsets. |
| `rect` | [Null](/api-docs/unity/Null/)<[binpacking.Rect](/api-docs/unity/binpacking/Rect/)> | * Assigned position in the texture page after bin packing. Null until the region has been successfully packed. |
| `rendered` | [Null](/api-docs/unity/Null/)<[Bool](/api-docs/unity/Bool/)> | * Tracks whether pixels have been copied to the page texture. Prevents duplicate rendering during repacking operations. |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:structInit` | - |
| `:allow` | ceramic.TextureAtlasPacker |
| `:allow` | ceramic.TextureAtlasPackerPage |


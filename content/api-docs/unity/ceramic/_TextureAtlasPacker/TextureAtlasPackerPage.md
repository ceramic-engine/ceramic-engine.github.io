---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TextureAtlasPackerPage
target: Unity
permalink: api-docs/unity/ceramic/_TextureAtlasPacker/TextureAtlasPackerPage/
---

# TextureAtlasPackerPage

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TextureAtlasPacker.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic._TextureAtlasPacker.TextureAtlasPackerPage</strong> (private class)</div>

Internal representation of a texture page during packing.

Each page manages its own bin packer instance and tracks
which regions have been assigned to it. Pages grow dynamically
and can be reset when repacking is needed.

## Instance Members

<div class="signature field-var has-description" id="spacing"><code><span class="field-name">spacing</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#spacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pixel spacing between regions on this page.
Matches the packer's spacing setting.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Identifier for this page (e.g., "page0", "page1").
Used for debugging and texture naming.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current width of this page in pixels.
Grows from MIN_TEXTURE_SIZE to MAX_TEXTURE_SIZE as needed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current height of this page in pixels.
Grows from MIN_TEXTURE_SIZE to MAX_TEXTURE_SIZE as needed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="regions"><code><span class="field-name">regions</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/_TextureAtlasPacker/TextureAtlasPackerRegion/" class="type-link">TextureAtlasPackerRegion</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#regions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All regions assigned to this page.
Includes both regular regions and variants.

<hr class="field-separator" />

<div class="signature field-var has-description" id="binPacker"><code><span class="field-name">binPacker</span><span class="operator">:</span> <a href="/api-docs/unity/binpacking/MaxRectsPacker/" class="type-link">binpacking.MaxRectsPacker</a></code><a class="header-anchor" href="#binPacker"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bin packing algorithm instance for this page.
Handles optimal placement of regions within the page bounds.

<hr class="field-separator" />

<div class="signature field-var has-description" id="shouldResetTexture"><code><span class="field-name">shouldResetTexture</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#shouldResetTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating the page texture needs regeneration.
Set when page size changes or regions are modified.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">spacing</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">regions</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/_TextureAtlasPacker/TextureAtlasPackerRegion/" class="type-link">TextureAtlasPackerRegion</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">binPacker</span><span class="operator">:</span> <a href="/api-docs/unity/binpacking/MaxRectsPacker/" class="type-link">binpacking.MaxRectsPacker</a><span class="operator">,</span> <span class="arg-name">shouldResetTexture</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `spacing` | [Int](/api-docs/unity/Int/) | * Pixel spacing between regions on this page. Matches the packer's spacing setting. |
| `name` | [String](/api-docs/unity/String/) | * Identifier for this page (e.g., "page0", "page1"). Used for debugging and texture naming. |
| `width` | [Int](/api-docs/unity/Int/) | * Current width of this page in pixels. Grows from MIN_TEXTURE_SIZE to MAX_TEXTURE_SIZE as needed. |
| `height` | [Int](/api-docs/unity/Int/) | * Current height of this page in pixels. Grows from MIN_TEXTURE_SIZE to MAX_TEXTURE_SIZE as needed. |
| `regions` | [Array](/api-docs/unity/Array/)<[TextureAtlasPackerRegion](/api-docs/unity/ceramic/_TextureAtlasPacker/TextureAtlasPackerRegion/)> | * All regions assigned to this page. Includes both regular regions and variants. |
| `binPacker` | [binpacking.MaxRectsPacker](/api-docs/unity/binpacking/MaxRectsPacker/) | * Bin packing algorithm instance for this page. Handles optimal placement of regions within the page bounds. |
| `shouldResetTexture` | [Bool](/api-docs/unity/Bool/) | * Flag indicating the page texture needs regeneration. Set when page size changes or regions are modified. |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:structInit` | - |
| `:allow` | ceramic.TextureAtlasPacker |
| `:allow` | ceramic.TextureAtlasPackerRegion |

